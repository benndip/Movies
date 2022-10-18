import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        position: 'absolute',
        top: StatusBar.currentHeight,
        zIndex: 999999,
    },
    backArrowView: {
        width: 35,
        height: 35,
        borderRadius: 8,
        backgroundColor: 'rgb(144,130,107)',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImage: {
        width,
        height: height * 0.5
    },
    movieName: {
        position: 'absolute',
        top: height * 0.4,
        zIndex: 999,
        fontSize: 60,
        alignSelf: 'center',
        color: '#ffffff',
        fontWeight: '400'
    }
});

export default styles