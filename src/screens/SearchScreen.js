import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const { results, errorMessage, searchApi } = useResults()

  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        searchTerm={term}
      />

      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
