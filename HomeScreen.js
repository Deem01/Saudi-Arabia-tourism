import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  Animated,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  // const showLogo = useRef(new Animated.Value(0)).current; // إظهار/إخفاء اللوجو
  const scaleAnim = useRef(new Animated.Value(1)).current; // حجم اللوجو

  const startAnimation = () => {
    // تشغيل الأنميشن في حلقة مستمرة
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5, // تكبير الحجم
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // تصغير الحجم
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const onRefresh = () => {
    setRefreshing(true);
    startAnimation(); // تشغيل الأنميشن

    // محاكاة تحميل البيانات
    setTimeout(() => {
      setRefreshing(false); // إنهاء التحديث
    }, 4000); // مدة التحديث (5 ثوانٍ)
  };

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
    navigation.navigate('Favorite', { favorites: [...favorites, item] });
  };

  const recommendations = [
    {
      id: 1,
      imageUri:
        'https://images.ctfassets.net/vy53kjqs34an/14DUIlTcHUbI5BXufzpwWy/36e1e391f3b2ea884fc58223c737c616/KV-Webook-Sizes_1280x1280.jpg',
      title: 'BULVARD',
      subtitle: '123 Anywhere Street, Any City',
    },
    {
      id: 2,
      imageUri:
        'https://cdn.platinumlist.net/upload/event/ontr_ondr_land_2020_jan_21_winter_wonderland_78740-full1580196407.jpg',
      title: 'WINTER LAND',
      subtitle: '123 Anywhere Street, Any City',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
                   />
        }
      >
        {/* عرض اللوجو فقط أثناء التحديث */}
        {refreshing && (
          <View style={styles.logoContainer}>
            <Animated.Image
              source={require('./assets/Login.png')} // صورة اللوجو
              style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
            />
          </View>
        )}
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Image source={require('./assets/userIcon.png')} style={styles.logo} />
            <View>
              <Text style={styles.welcomeText}>Welcome!</Text>
           
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Image source={require('./assets/bellIcon.png')} style={styles.bellIcon} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search your destination here..." style={styles.searchBar} />
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesContainer}>
          {['Homestay', 'Resort', 'Hotel', 'Apartment', 'Lodge', 'Hostel', 'Villa'].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryButton}
              onPress={() => navigation.navigate('Details', { category: item })}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>See More</Text>
          </TouchableOpacity>
        </View>

        {/* Recommendation Section */}
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recommendation</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendations.map((item) => (
              <RecommendationCard
                key={item.id}
                item={item}
                onAddToFavorites={addToFavorites}
              />
            ))}
          </ScrollView>
        </View>

        {/* Categories Grid */}
        <View style={styles.sectionContainer}>
          <View style={styles.categoriesHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridContainer}>
            {[
              { title: 'King Salman Park', imageUrl: 'https://www.vision2030.gov.sa/media/g5imweam/general-overall-landscape-2-min-1.jpg' },
              { title: 'Mountain Retreat', imageUrl: 'https://destinationdeluxe.com/wp-content/uploads/2024/04/Wellness-Retreats-in-Saudi-Arabia-Destination-Deluxe.jpg' },
              { title: 'Riyadh Zoo', imageUrl: 'https://welcomesaudi.com/uploads/0000/64/2024/09/10/1-riyadh-zoo-to-offer-free-entry-during-riyadh-season-2024.jpg' },
              { title: 'Adventure', imageUrl: 'https://www.timeoutriyadh.com/cloud/timeoutriyadh/2021/12/20/ebda-adventure-park.jpg.png' },
              { title: 'Desert Camping', imageUrl: 'https://img.rezdy.com/PRODUCT_IMAGE/13699/emptyquarter_gallery_11_lg.jpg' },
              { title: 'Camel Riding', imageUrl: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/03/0a/4e.jpg' },
              { title: 'Hiking', imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/63daced5c78568001cb6c16d.jpg' },
              { title: 'Light Viewing', imageUrl: 'https://www.timeoutjeddah.com/cloud/timeoutjeddah/2022/12/22/winter-at-tantora-2022.jpg' },
            ].map((item, index) => (
              <View key={index} style={styles.gridItem}>
                <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
                <Text style={styles.gridText}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

const RecommendationCard = ({ item, onAddToFavorites }) => (
  <View style={styles.recommendationCard}>
    <Image source={{ uri: item.imageUri }} style={styles.recommendationImage} />
    <Text style={styles.recommendationTitle}>{item.title}</Text>
    <Text style={styles.recommendationSubtitle}>{item.subtitle}</Text>
    <TouchableOpacity
      style={styles.favoriteButton}
      onPress={() => onAddToFavorites(item)}
    >
      <Text style={styles.favoriteButtonText}>Favorite</Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E9EFE5',
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3A2E',
  },
  userName: {
    fontSize: 16,
    color: '#2D3A2E',
  },
  notificationButton: {
    backgroundColor: '#DDE4DB',
    padding: 10,
    borderRadius: 20,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  searchBarContainer: {
    padding: 16,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  categoryButton: {
    backgroundColor: '#6B8E66',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    margin: 5,
    minWidth: '45%',
    alignItems: 'center',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recommendationCard: {
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: 300,
  },
  recommendationImage: {
    width: '100%',
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
  favoriteButton: {
    backgroundColor: '#6b8e66',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 8,
  },
  favoriteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#6B8E66',
    fontWeight: 'bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  gridItem: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gridText: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 14,
    color: '#333333',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
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
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20, // المسافة من الأعلى والأسفل
  },
});

export default HomeScreen;