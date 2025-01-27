import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const OffersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exclusive Travel Offers</Text>

      {/* Travel Offer 1 */}
      <View style={styles.offerCard}>
        <Image
          source={require("./assets/flightOffer.jpg")}
          style={styles.offerImage}
        />
        <Text style={styles.offerTitle}>50% Off on International Flights</Text>
        <Text style={styles.offerDescription}>
          Book your international flights now and get up to 50% off on selected routes. Limited time offer!
        </Text>
        <Text style={styles.offerDetails}>Valid till: March 2025</Text>
      </View>

      {/* Travel Offer 2 */}
      <View style={styles.offerCard}>
        <Image
          source={require("./assets/hotelOffer.jpg")}
          style={styles.offerImage}
        />
        <Text style={styles.offerTitle}>Up to 40% Off on Hotels</Text>
        <Text style={styles.offerDescription}>
          Enjoy up to 40% off on hotel bookings at select locations. Book your stay today and save big!
        </Text>
        <Text style={styles.offerDetails}>Valid till: June 2025</Text>
      </View>

      {/* Travel Offer 3 */}
      <View style={styles.offerCard}>
        <Image
          source={require("./assets/activityOffer.jpg")}
          style={styles.offerImage}
        />
        <Text style={styles.offerTitle}>Buy 1 Get 1 Free on Tourist Activities</Text>
        <Text style={styles.offerDescription}>
          Book a tourist activity now and get one free! Take advantage of this amazing deal to explore the best attractions.
        </Text>
        <Text style={styles.offerDetails}>Valid till: December 2025</Text>
      </View>

      {/* Travel Offer 4 */}
      <View style={styles.offerCard}>
        <Image
          source={require("./assets/adventureOffer.jpg")}
          style={styles.offerImage}
        />
        <Text style={styles.offerTitle}>Adventure Tours - 30% Off</Text>
        <Text style={styles.offerDescription}>
          Explore the best adventure tours at a discounted price. Book your next adventure with 30% off.
        </Text>
        <Text style={styles.offerDetails}>Valid till: November 2025</Text>
      </View>

      {/* Travel Offer 5 */}
      <View style={styles.offerCard}>
        <Image
          source={require("./assets/resortOffer.jpg")}
          style={styles.offerImage}
        />
        <Text style={styles.offerTitle}>Exclusive Resort Deals - Save 25%</Text>
        <Text style={styles.offerDescription}>
          Stay at luxury resorts with an exclusive 25% discount. Perfect for family getaways or romantic escapes.
        </Text>
        <Text style={styles.offerDetails}>Valid till: September 2025</Text>
      </View>

      {/* Travel Offer 6 */}
      <View style={styles.offerCard}>
        <Image
          source={require("./assets/cruiseOffer.jpg")}
          style={styles.offerImage}
        />
        <Text style={styles.offerTitle}>Cruise Deals - 40% Off</Text>
        <Text style={styles.offerDescription}>
          Book your next cruise and get up to 40% off. Limited spots available, don't miss out!
        </Text>
        <Text style={styles.offerDetails}>Valid till: October 2025</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f6",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  offerCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  offerImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  offerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2D4A40",
    marginBottom: 10,
  },
  offerDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  offerDetails: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic",
    textAlign: "right",
  },
});

export default OffersScreen;
