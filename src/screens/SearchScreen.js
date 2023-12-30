import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';

import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const { results, errorMessage, searchApi } = useResults()

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        searchTerm={term}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />

        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
