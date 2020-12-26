import React, {Component} from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../components/Styles';

// const url = 'http://api.tvmaze.com/search/shows?q= who';

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        title: "Welcome",
        data: [],
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{this.state.title}</Text>
        </View>

        <View style={styles.searchBar}>
          <TextInput style={styles.input}></TextInput>
            
          <TouchableOpacity style={styles.searchButton}>
            
            <Text style={styles.text}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.catalog}>

        </View> 
        
      </View>
    );
  }
}