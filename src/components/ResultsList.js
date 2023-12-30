import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ResultList = ({ results, title }) => {

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ResultList;
