import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './EpisodeDetails.style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RenderHTML from 'react-native-render-html'

const {width, height} = Dimensions.get('window');

const EpisodeDetails = ({ navigation, route }: any) => {

    const {id, image, name, season, summary, number} = route.params.item;

  return (
    <View style={styles.container}>
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
            <Text style={styles.episodeText}>Episode {number}</Text>
            <Text style={styles.seasonOneText}>Season {season}</Text>
            <RenderHTML contentWidth={width * 0.7} source={{html: summary}} />
    </View>
  )
}

export default EpisodeDetails