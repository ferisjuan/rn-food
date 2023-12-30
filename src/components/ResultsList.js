import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultList = ({ results, title }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <ResultsDetail result={item} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  }
});

export default ResultList;
