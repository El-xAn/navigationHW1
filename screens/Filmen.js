import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../styles/filmStyles';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome',
      data: [],
      filmName: "who",
      searchingFilm: "who",
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.filmName}`);
      const data = await response.json();
      this.setState({data});
    } catch (e) {
      throw e;
    }
  };

  filmSearch = async () => {
    try {
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.searchingFilm}`);
      const data = await response.json();
      this.setState({data});
    } catch (e) {
      throw e;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{this.state.title}</Text>
        </View>

        <View style={styles.searchBar}>
          <TextInput 
            style={styles.input} 
            onChangeText={text => this.setState((prevState) => ({searchingFilm: prevState.searchingFilm = text}))} 
          />

          <TouchableOpacity style={styles.searchButton} onPress={this.filmSearch} >
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        <ScrollView >
          <View style={styles.catalog} >
            {this.state.data.map((movies, index) => {
              return (
                <View key={index}>
                  <Image 
                    style={styles.image} 
                    source={{uri: movies?.show?.image?.medium} ?? require('../components/placeholder.png') } 
                  />
                  <Text style={styles.filmName} >{movies.show.name}</Text>
                </View>
              )
            })}
          </View>
          
        </ScrollView>
      </View>
    );
  }
}
