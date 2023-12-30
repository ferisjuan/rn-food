import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      setErrorMessage('');

      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });

      setResults(response.data.businesses);
    }
    catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong');
    }
  }

  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={searchApi}
        searchTerm={term}
      />

      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
