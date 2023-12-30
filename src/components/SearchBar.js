
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ onTermChange, onTermSubmit, searchTerm }) => {
  return (
    <View style={styles.containerStyle}>
      <Feather name="search" style={styles.iconStyle} />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="Search"
        style={styles.inputStyle}
        value={searchTerm} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 15
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 5
  },
  inputStyle: {
    flex: 1,
    fontSize: 20
  }
});

export default SearchBar;
