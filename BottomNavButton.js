import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const BottomNavButton = ({ icon, text, navigation, screen, params }) => (
  <TouchableOpacity
    style={styles.bottomBarButton}
    onPress={() => navigation.navigate(screen, params)}
  >
    <Image source={icon} style={styles.bottomBarIcon} />
    <Text style={styles.bottomBarText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bottomBarButton: {
    alignItems: 'center',
  },
  bottomBarIcon: {
    width: 24,
    height: 24,
  },
  bottomBarText: {
    fontSize: 12,
    color: '#333333',
    marginTop: 4,
  },
});

export default BottomNavButton;
