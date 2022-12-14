import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width * 0.42,
        height: height * 0.3,
        marginVertical: 10,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: '80%'
    },
    seriesName:{
        marginLeft: 18,
        marginTop: 5
    }
});

export default styles;