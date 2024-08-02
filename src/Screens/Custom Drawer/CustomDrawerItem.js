import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CustomDrawerItem = ({ label, onPress, icon, theme }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(theme)}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label(theme)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  }),
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  label: (theme) => ({
    fontSize: 16,
    color: theme === 'dark' ? 'white' : 'black',
  }),
});

export default CustomDrawerItem;
