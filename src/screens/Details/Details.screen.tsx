import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './Details.style'

const Details = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent   backgroundColor={'transparent'} />
            <View style={styles.header}>
                <View style={styles.backArrowView}>
                    <AntDesign name='left' size={20} color='#ffffff' />
                </View>
                <View style={styles.backArrowView}>
                    <AntDesign name='left' size={20} color='#ffffff' />
                </View>
            </View>
            <Image source={require('../../../assets/movie.jpg')} style={styles.headerImage} />
            <Text style={styles.movieName}>Arcane</Text>
        </View>
    )
}

export default Details