import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width * 0.42,
        height: height * 0.3,
        borderWidth: 1,
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: '80%'
    }
});

export default styles;