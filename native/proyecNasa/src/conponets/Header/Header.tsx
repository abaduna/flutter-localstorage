import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require('./../../../assets/img/nasa.png')}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    
    paddingHorizontal: 16, // Add padding for better spacing
  },
  leftContainer: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  rightContainer: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  title: {
    flex:1,
    alignItems: 'flex-start',
    fontSize: 20,
    borderWidth: 2,
    // borderColor: 'red',
    // color: 'black',
    width:100
  },
  img: {
    width: 60,
    height: 60,
  },
});

export default Header;
