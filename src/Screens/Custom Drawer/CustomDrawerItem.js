import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CustomDrawerItem = ({ label, onPress, icon }) => {
  // Define the label color based on the label value
  const labelColor = label === 'Request Account Deletion' ? 'red' : 'black';

  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight:'bold'

  },
});

export default CustomDrawerItem;
