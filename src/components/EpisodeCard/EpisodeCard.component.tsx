import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './EpisodeCard.style';
import { EpisodeType, SeriesType } from '../../types/types';

interface IProps {
    episode: EpisodeType
    onPress: () => void
}

const EpisodeCard: React.FC<IProps> = ({episode, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.imageContainer}>
              <Image source={episode.image ? { uri: episode.image.original }: require('../../../assets/movie.jpg')} resizeMode='cover' style={styles.image} />
        </View>
        <Text>{episode.name}</Text>
    </TouchableOpacity>
  )
}

export default EpisodeCard