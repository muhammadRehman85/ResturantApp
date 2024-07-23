import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{padding: 10, backgroundColor: 'white'}}>
        <View
          style={{
            width: '98%',
            height: 40,
            marginHorizontal: 5,
            backgroundColor: '#ecf0f1',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderRadius:10
          }}>
          <Image
            source={require('../../../assets/search.png')}
            style={{width: 20, height: 20, marginRight: 10}}
          />
          <TextInput
            style={{
              backgroundColor: '#ecf0f1',
              flex: 1,
              paddingHorizontal: 10,
             
            }}
            placeholder="Search by product name"
            placeholderTextColor="gray"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;
