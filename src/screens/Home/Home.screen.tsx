import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { FlashList } from "@shopify/flash-list";

import styles from './Home.style';

import { SeriesType } from '../../types/types';
import SeriesCard from '../../components/SeriesCard/SeriesCard.component';
import axios from '../../axios/axios';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { setMovies, setSearchedSeries, incrementPage } from '../../redux/slices';

import debounce from "lodash/debounce";

const Home = ({ navigation }: any) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState('');

    // redux
    const { series, page, searchedSeries } = useAppSelector(state => state.series);
    const dispatch = useAppDispatch();

    const gotoDetailScreen = (item: SeriesType) => {
        navigation.navigate('Details', { item })
    }

    const renderItem = ({ item }: any) => {
        return <SeriesCard onPress={()=>gotoDetailScreen(item)} series={item} />
    }

    const fetchSeries = () => {
        setLoading(true);
        axios.get(`shows?page=${page + 1}`)
            .then(function (response) {
                // handle success
                const status = response.status
                const data = response.data
                if (status === 200) {
                    dispatch(setMovies(data))
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                setLoading(false)
            });

    }

    const onChangeHandler = (text: string) => {
        setSearchTerm(text);
        delayedSearch()
    }

    const clearSearchTerm = () => {
        setSearchTerm('')
    }

    const onEndReached = () => {
        dispatch(incrementPage(page));
        fetchSeries()
    }

    const hitSearchEndpoint = () => {
        axios.get(`search/shows?q=${searchTerm}`)
            .then(function (response) {
                // handle success
                const status = response.status
                const data = response.data
                let series: SeriesType[] = []
                if (status === 200) {
                    data.forEach((result:{score: number, show:SeriesType}) => {
                        series = [ ...series, result.show ]
                    });
                    dispatch(setSearchedSeries(series))
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                setLoading(false)
            });
    }

    const delayedSearch = debounce(hitSearchEndpoint, 1500)

    useEffect(() => {
        fetchSeries()
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputAndIconContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search here..."
                    onChangeText={onChangeHandler}
                    value={searchTerm}
                />
                {
                    searchTerm.length > 0
                    &&
                    <AntDesign name='closecircle' color='#cccccc' onPress={clearSearchTerm} size={20} style={styles.closeIcon} />
                }
            </View>
            <Text style={styles.allMovies}>All movies</Text>
            <FlashList
                style={styles.scroll}
                data={searchTerm.length > 0 ? searchedSeries : series}
                renderItem={renderItem}
                estimatedItemSize={200}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                onEndReached={onEndReached}
            />

        </SafeAreaView>
    )
}

export default Home