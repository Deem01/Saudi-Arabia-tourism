import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Picker } from '@react-native-picker/picker'; // Updated here

// Trip data with additional details
const tripsData = {
  cultural: [
    { 
      id: "1", 
      title: "Cultural Trip in Riyadh", 
      description: "Visit the cultural and historical sites in Riyadh.",
      details: [
        { time: "9:00 AM", activity: "Visit the National Museum of Riyadh" },
        { time: "12:00 PM", activity: "Tour the historical Diriyah district" },
        { time: "3:00 PM", activity: "Visit Masmak Fortress" },
      ],
      additionalInfo: "The trip includes a tour guide to help discover the sites."
    },
    { 
      id: "2", 
      title: "Visit the Museums in Riyadh", 
      description: "Tour Riyadh's famous museums such as the National Museum.",
      details: [
        { time: "10:00 AM", activity: "Visit the National Museum" },
        { time: "1:00 PM", activity: "Visit King Abdulaziz Museum" },
        { time: "4:00 PM", activity: "Shopping in Souq Al-Zal" },
      ],
      additionalInfo: "Tickets can be booked online to save time."
    },
  ],
  historical: [
    { 
      id: "5", 
      title: "Historical Trip in Riyadh", 
      description: "Visit the historical landmarks in Riyadh.",
      details: [
        { time: "8:00 AM", activity: "Visit Masmak Fortress" },
        { time: "11:00 AM", activity: "Visit the TV Tower" },
        { time: "2:00 PM", activity: "Visit the Old Souq" },
      ],
      additionalInfo: "Comfortable shoes are recommended."
    },
    { 
      id: "6", 
      title: "Tour in Masmak Fortress", 
      description: "Explore Riyadh's history at Masmak Fortress.",
      details: [
        { time: "9:00 AM", activity: "Explore Masmak Fortress" },
        { time: "12:00 PM", activity: "Visit Riyadh Museum" },
      ],
      additionalInfo: "It's recommended to get a tour guide to explain the fortress's history."
    },
  ],
  adventure: [  // Adventure category
    { 
      id: "7", 
      title: "Desert Safari Trip", 
      description: "An exciting adventure in the heart of Riyadh's desert.",
      details: [
        { time: "6:00 AM", activity: "Start the safari trip" },
        { time: "9:00 AM", activity: "Stop to enjoy desert views" },
        { time: "12:00 PM", activity: "Take pictures with camels" },
        { time: "2:00 PM", activity: "Return to the city" },
      ],
      additionalInfo: "Wear comfortable clothes and avoid light colors."
    },
    { 
      id: "8", 
      title: "Mountain Climbing Trip", 
      description: "An exhilarating mountain climbing adventure in Riyadh's mountains.",
      details: [
        { time: "7:00 AM", activity: "Begin mountain climbing" },
        { time: "10:00 AM", activity: "Rest at the top of the mountain" },
        { time: "12:00 PM", activity: "Descend to the base" },
      ],
      additionalInfo: "Good physical fitness is required for this trip."
    },
  ],
  nature: [  // Nature category
    { 
      id: "9", 
      title: "Wadi Hanifa Trip", 
      description: "Explore the beauty of Wadi Hanifa and enjoy the natural scenery.",
      details: [
        { time: "8:00 AM", activity: "Walk through Wadi Hanifa" },
        { time: "11:00 AM", activity: "Hike near the water springs" },
        { time: "2:00 PM", activity: "Visit the nature parks" },
      ],
      additionalInfo: "Bring hiking gear."
    },
    { 
      id: "10", 
      title: "Wildlife Sanctuary Trip", 
      description: "Visit the wildlife sanctuary and see wild animals.",
      details: [
        { time: "6:00 AM", activity: "Visit the sanctuary" },
        { time: "9:00 AM", activity: "Observe wild animals" },
        { time: "12:00 PM", activity: "Hike along the sanctuary trails" },
      ],
      additionalInfo: "Please bring a camera for photo opportunities."
    },
  ],
};

const TripsScreen = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("cultural");

  const handleTripSelect = (trip) => {
    setSelectedTrip(trip);
  };

  // Function to go back to the trip list
  const handleBackToList = () => {
    setSelectedTrip(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested Tourist Trips</Text>

      {/* Picker for filtering trips by type */}
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Cultural Trips" value="cultural" />
        <Picker.Item label="Historical Trips" value="historical" />
        <Picker.Item label="Adventure" value="adventure" />
        <Picker.Item label="Nature" value="nature" />
      </Picker>

      {/* If a specific trip is selected */}
      {selectedTrip ? (
        <View style={styles.tripDetails}>
          <TouchableOpacity onPress={handleBackToList} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back to Lists</Text>
          </TouchableOpacity>

          <Text style={styles.tripTitle}>{selectedTrip.title}</Text>
          <Text style={styles.tripDescription}>{selectedTrip.description}</Text>
          
          <Text style={styles.detailsTitle}>Trip Schedule:</Text>
          <FlatList
            data={selectedTrip.details}
            renderItem={({ item }) => (
              <View style={styles.tripSchedule}>
                <Text style={styles.scheduleTime}>{item.time}</Text>
                <Text style={styles.scheduleActivity}>{item.activity}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.additionalInfo}>{selectedTrip.additionalInfo}</Text>
        </View>
      ) : (
        <FlatList
          data={tripsData[selectedCategory]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tripItem}
              onPress={() => handleTripSelect(item)}
            >
              <Text style={styles.tripTitle}>{item.title}</Text>
              <Text style={styles.tripDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
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
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20,
  },
  tripItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  tripDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  tripDetails: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  tripSchedule: {
    marginTop: 10,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  scheduleActivity: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  additionalInfo: {
    fontSize: 14,
    color: "#333",
    marginTop: 20,
    fontStyle: "italic",
  },
  backButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: "#007bff",
    textAlign: "center",
  },
});

export default TripsScreen;
