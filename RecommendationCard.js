import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const RecommendationCard = ({ imageUri, title, subtitle, onFavoritePress }) => (
  <View style={styles.recommendationCard}>
    <Image source={{ uri: imageUri }} style={styles.recommendationImage} />
    <Text style={styles.recommendationTitle}>{title}</Text>
    <Text style={styles.recommendationSubtitle}>{subtitle}</Text>
    <View style={styles.cardButtonsContainer}>
      <TouchableOpacity style={styles.cardButton} onPress={onFavoritePress}>
        <Image source={require('../assets/favoriteIcon.png')} style={styles.cardButtonIcon} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  recommendationCard: {
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  recommendationImage: {
    width: 300,
    height: 150,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  recommendationSubtitle: {
    fontSize: 14,
    color: '#555555',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  cardButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#E9EFE5',
    borderRadius: 8,
  },
  cardButtonIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default RecommendationCard;
