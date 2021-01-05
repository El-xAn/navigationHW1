import React, { Component } from 'react';
import {ScrollView, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/filmStyles';

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
      <ScrollView>
        <View style={styles.catalog} >
          {this.props.favList.map((movies, index) => {
            let image = {image} ? {uri: movies.show.image?.medium} : require('../components/placeholder.png')
            return (
              <View key={index}>
                <Image style={styles.image} source = { image } />
                {/* <TouchableOpacity style={styles.searchButton} onPress={()=> this.props.favList(movies)} >
                  <Text style={styles.buttonText}>FAVOURITE</Text>
                </TouchableOpacity> */}
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

const mapStateToProps = (state) => {
  return{
    favList: state.reducerForFav.favList,
  };
}

const myConnection = connect(mapStateToProps, null)(FavouritesScreen)
export default FavouritesScreen;