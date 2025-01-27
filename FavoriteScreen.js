import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const FavoriteScreen = ({ route }) => {
  const { favorites } = route.params || { favorites: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite</Text>
      {favorites.length === 0 ? (
        <Text style={styles.subtitle}>Your favorite items will appear here.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.favoriteItem}>
              <Image source={{ uri: item.imageUri }} style={styles.favoriteImage} />
              <View>
                <Text style={styles.favoriteTitle}>{item.title}</Text>
                <Text style={styles.favoriteSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6b8e66",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
  favoriteItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
  },
  favoriteImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  favoriteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  favoriteSubtitle: {
    fontSize: 14,
    color: "#555",
  },
});

export default FavoriteScreen;
