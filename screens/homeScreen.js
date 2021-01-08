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
import {filmSearch, addFavourite} from '../redux/action';
import {connect} from 'react-redux';



class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  searchText = 'Who';

  componentDidMount() {
    this.props.searching(this.searchText)
  }

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

          <TouchableOpacity style={styles.searchButton} onPress={()=>this.props.searching(this.searchText)} >
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        <ScrollView >
          <View style={styles.catalog} >
            {this.props.data.map((movies, index) => {
              let image = movies.show.image?{uri: movies.show.image?.medium} : require('../components/placeholder.png')
              return (
                <View key={index}>
                  <Image style={styles.image} source = {image} />
                  <TouchableOpacity style={styles.searchButton} onPress={()=> this.props.add(movies.show)} >
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
    searching: (text) => dispatch(filmSearch(text)),
    add: (movies) => dispatch(addFavourite(movies))
  };
};

const mapStateToProps = state => {
  return {
    data: state.reducerForSearch.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);