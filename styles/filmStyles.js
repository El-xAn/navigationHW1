import {StyleSheet, Dimensions,} from 'react-native';

const win = Dimensions.get('window')
export const h = win.height
export const w = win.width

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  headerContainer: {
    height: 80,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "gold",
    fontStyle: "italic",
    fontSize: 30,
  },
  searchBar: {
    height: 60,
    flexDirection: "row",
    margin: 2,

  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    borderStartColor: "blue",
    fontSize: 20,
    margin: 2
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 2
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",    
  },
  catalog: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  
  image: {
    margin: 10,
    alignSelf: "center",
    width: w / 2.4,
    height: w * 0.63,
  },
  filmName: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    flexWrap: "wrap",
    width: w / 2.4,
    marginBottom: 30,
  }
  
});