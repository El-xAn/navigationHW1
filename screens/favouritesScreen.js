import React, { Component } from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/filmStyles';
import {cleanFavourite, removeFromFav} from '../redux/action'

class FavouritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'FAVOURITES',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{this.state.title}</Text>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={this.props.cleanList}>
          <Text style={styles.buttonText}>CLEAR FAVORITE LIST</Text>
        </TouchableOpacity>
      <ScrollView>
        <View style={styles.catalog} >
          {this.props.favList.map((movies, index) => {
            let image = movies.image?{uri: movies.image?.medium} : require('../components/placeholder.png')
            return (
              <View key={index}>
                <Image style={styles.image} source = {image} />
                <Button title="DEL" color="red" onPress={()=>{this.props.remove(movies)}} />
                <Text style={styles.filmName}>{movies.name}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    favList: state.reducerForFav.favList,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    cleanList: () => dispatch(cleanFavourite()),
    remove: (movie) => dispatch(removeFromFav(movie))
  };
}

const myConnect = connect(mapStateToProps, mapDispatchToProps)(FavouritesScreen);
export default myConnect;