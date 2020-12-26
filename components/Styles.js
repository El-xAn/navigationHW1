import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "yellow",
    fontSize: 30,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    borderStartColor: "blue",
    fontSize: 20,
    margin: 2
  },
  searchBar: {
    height: 60,
    flexDirection: "row",
    margin: 2,

  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 2
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  catalog: {
    flex: 5,
  }
});