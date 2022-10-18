import {
  View,
  Text,
  Image,
  StatusBar,
  SectionList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './Details.style';
import {EpisodeType} from '../../types/types';
import axios from '../../axios/axios';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard.component';
import RenderHtml from 'react-native-render-html';

const {width, height} = Dimensions.get('window');

const Details = ({route, navigation}: any) => {
  const {id, image, name, schedule, summary} = route.params.item;

  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  //  This function organizes the data in a format that suites the UI we want
  const organizer = (items: EpisodeType[]) => {
    const object = items.reduce((prev, curr) => {
      prev[curr.season] = prev[curr.season] || [];
      prev[curr.season].push(curr);
      return prev;
    }, Object.create(null));

    const finalArray = Object.keys(object).map((key, index) => {
      return {title: key, data: object[key]};
    });

    return finalArray;
  };

  const fetchSeriesEpisodes = () => {
    setLoading(true);
    axios
      .get(`shows/${id}?embed=episodes`)
      .then(function (response) {
        // handle success
        const status = response.status;
        const data = response.data;
        if (status === 200) {
          setEpisodes(data._embedded.episodes);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  };

  const gotoEpisodeDetails = (item: EpisodeType) => {
    navigation.navigate('EpisodeDetails', { item })
}

  useEffect(() => {
    fetchSeriesEpisodes();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <SectionList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backArrowView}>
                <AntDesign name="left" size={20} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.backArrowView}>
                <AntDesign name="left" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <Image
              source={
                image
                  ? {uri: image.original}
                  : require('../../../assets/movie.jpg')
              }
              style={styles.headerImage}
            />
            <Text style={styles.movieName}>{name}</Text>
            <View style={styles.daysView}>
                {
                    schedule.days.map((day:string)=>(
                        <View style={styles.dayView}>
                            <Text style={{ fontSize: 12 }}>{day}</Text>
                        </View>
                    ))
                }
                
            </View>
            <RenderHtml contentWidth={width * 0.7} source={{html: summary}} />
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: '#ee5253' }}>Airs at {schedule.time}</Text>
            <Text style={styles.episodesText}>Episodes</Text>
            <Text style={styles.seasonOneText}>Season 1</Text>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionList}
        sections={organizer(episodes)}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <EpisodeCard onPress={()=>gotoEpisodeDetails(item)} episode={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style={{position: 'absolute', left: -(width) + 32, top: -20}}>
            <Text style={styles.seasonHeader}>Season {title}</Text>
          </View>
        )}
        ListEmptyComponent={
          <>
            {!loading && (
              <Text style={styles.noItemsFoundText}>
                oops, no items found...
              </Text>
            )}
          </>
        }
        refreshing={loading}
      />
    </View>
  );
};

export default Details;
