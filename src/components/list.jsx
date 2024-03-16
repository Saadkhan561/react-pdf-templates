import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 1,
   
  },
  bulletPoint: {
    width: 10,
    fontSize: 15,
  },
  itemContent: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Lato',
    marginLeft:'10px'
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;