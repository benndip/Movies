import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: 'center',
  },
  headerImage: {
    width,
    height: height * 0.5,
  },
  movieName: {
    fontSize: 30,
    marginVertical: 10,
    alignSelf: 'center',
    color: '#2c2c54',
    fontWeight: '400',
    textAlign: 'center'
  },
  sectionList: {
    alignSelf: 'center',
    width,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  noItemsFoundText: {
    alignSelf: 'center',
    fontSize: 22,
  },
  loadingMore: {
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  seasonHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5f27cd",
    textAlign: 'center'
  },
  episodesText: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: 10
  },
  summary:{
    textAlign: 'center',
    alignSelf: 'center'
  },
  daysView: {
    width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  dayView: {
    backgroundColor: '#ffb142',
    opacity: 0.7,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 30
  },
  seasonOneText:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#5f27cd",
    textAlign: 'center',
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  episodeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#227093",
    textAlign: 'center',
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginBottom: 10
  }
});

export default styles;
