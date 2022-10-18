import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './Series.style';
import { SeriesType } from '../../types/types';

interface IProps {
    series: SeriesType
    onPress: () => void
}

const SeriesCard: React.FC<IProps> = ({series, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.imageContainer}>
              <Image source={series.image ? { uri: series.image.original }: require('../../../assets/movie.jpg')} resizeMode='center' style={styles.image} />
        </View>
        <Text style={styles.seriesName}>{series.name}</Text>
    </TouchableOpacity>
  )
}

export default SeriesCard