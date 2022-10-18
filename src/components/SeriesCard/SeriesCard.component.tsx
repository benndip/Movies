import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './Series.style';
import { SeriesType } from '../../types/types';

interface IProps {
    series: SeriesType
}

const SeriesCard: React.FC<IProps> = ({series}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
              <Image source={series.image ? { uri: series.image.original }: require('../../../assets/movie.jpg')} resizeMode='center' style={styles.image} />
        </View>
        <Text>{series.name}</Text>
    </TouchableOpacity>
  )
}

export default SeriesCard