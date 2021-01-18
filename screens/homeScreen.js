import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Modal,
} from 'react-native';
import {styles} from '../styles/filmStyles';
import {filmSearch, addFavourite} from '../redux/action';
import FirstSplash from './loadScreen'
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  searchText = 'Who';

  netInfo = () => { NetInfo.addEventListener(state => {
    if(!state.isConnected) {
        alert('No internet connection !');        
    }
  })
  }

  componentDidMount() {
    this.netInfo(),
    this.props.searching(this.searchText)
  }

  componentWillUnmount() {
    this.netInfo()
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
        {this.props.state &&
        <Modal>
          <FirstSplash /> 
        </Modal>
        }
      </View>
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searching: (text) => dispatch(filmSearch(text)),
    add: (movies) => dispatch(addFavourite(movies)),
  };
};

const mapStateToProps = state => {
  return {
    data: state.reducerForSearch.data,
    state: state.reducerForLoading.state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);