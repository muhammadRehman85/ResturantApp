import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../Redux/Slice';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.cart.theme);
  const isDarkMode = theme === 'dark';
// Verify this value changes on toggle
console.log(theme)
  const toggleSwitch = () => {
    dispatch(toggleTheme());
  };

  return (
    <View style={[styles.container,backgroundColor=theme==='dark'?'#333':'white']}>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SettingsScreen;
