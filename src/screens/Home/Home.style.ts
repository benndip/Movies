import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    },
    input: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        alignSelf: 'center',
        paddingHorizontal: 15,
        borderColor: '#ccc'
    },
    inputAndIconContainer: {
        width: width * 0.90,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    closeIcon: {
        position: 'absolute',
        top: 12,
        right: 15,
        zIndex: 99999
    },
    allMovies: {
        marginTop: 20,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    scroll: {
        alignSelf: 'center'
    }
});

export default styles;