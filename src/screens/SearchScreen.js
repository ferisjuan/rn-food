import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <SearchBar
        onTermSubmit={() => console.log('term was submitted')}
        onTermChange={setSearchTerm} searchTerm={searchTerm} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
