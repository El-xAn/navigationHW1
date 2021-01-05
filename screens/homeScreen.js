import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {styles} from '../styles/filmStyles';
import {mainScreen} from '../redux/action';
import {connect} from 'react-redux';



class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  url = 'http://api.tvmaze.com/search/shows?q=';
  searchText = 'Who';

  componentDidMount = () => {
   this.props.searching(this.url, this.searchText);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>THE BEST MOVIES</Text>
        </View>

        <View style={styles.searchBar}>
          <TextInput 
            style={styles.input} 
            onChangeText={(text) => (this.searchText = text) } 
          />

          <TouchableOpacity style={styles.searchButton} onPress={()=>this.props.searching(this.url, this.searchText)} >
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        <ScrollView >
          <View style={styles.catalog} >
            {this.props.data.map((movies, index) => {
              let image = {image} ? {uri: movies.show.image?.medium} : require('../components/placeholder.png')
              return (
                <View key={index}>
                  <Image style={styles.image} source = { image } />
                  <TouchableOpacity style={styles.searchButton} onPress={()=> this.props.add(movies)} >
                    <Text style={styles.buttonText}>FAVOURITE</Text>
                  </TouchableOpacity>
                  <Text style={styles.filmName}>{movies.show.name}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searching: (url, text) => dispatch(mainScreen(dispatch, url, text)),
    add: (movies) => dispatch(addFavourite(movies))
  };
};

const mapStateToProps = state => {
  return {
    data: state.reducerForSearch.data,
    favList: state.reducerForFav.favList
  };
};

const myConnection = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default myConnection;
