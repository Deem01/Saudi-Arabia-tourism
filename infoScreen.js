import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const infoScreen = () => {
  return (
    <ScrollView style={styles.addcontainer}>
      <Text style={styles.mainTitle}>Tourism in Saudi Arabia: A Journey through Culture and Heritage</Text>
      
      <Text style={styles.contentText}>
        Saudi Arabia, a country with a rich cultural history, is a must-visit destination for those seeking an extraordinary travel experience. 
        From the ancient Nabatean ruins of Al-Ula to the modern marvels of Riyadh, Saudi Arabia offers a diverse range of attractions that 
        combine the past and the future in one spectacular journey.
      </Text>

      <Text style={styles.subTitle}>Cultural Heritage</Text>
      <Text style={styles.contentText}>
        Saudi Arabia is home to some of the world’s most remarkable cultural landmarks. 
        The city of Riyadh, the capital, is a vibrant hub that blends modernity with tradition. 
        Sites like the National Museum and Masmak Fortress offer glimpses into the country’s rich history. 
        Additionally, the World Heritage sites of Diriyah and Al-Ula are key highlights that bring Saudi Arabia’s fascinating past to life.
      </Text>

      <Text style={styles.subTitle}>Natural Wonders</Text>
      <Text style={styles.contentText}>
        Beyond its cultural landmarks, Saudi Arabia is also known for its breathtaking natural landscapes. 
        The vast Arabian desert, with its golden dunes and serene beauty, is perfect for adventure seekers. 
        Meanwhile, the Red Sea coast offers pristine beaches, coral reefs, and spectacular diving opportunities.
      </Text>

      <Text style={styles.subTitle}>Modern Attractions</Text>
      <Text style={styles.contentText}>
        Saudi Arabia is also becoming known for its modern architectural wonders. 
        Riyadh, Jeddah, and other cities are home to futuristic skyscrapers, luxury shopping malls, and world-class dining experiences. 
        The Kingdom Tower in Riyadh and the King Abdulaziz Center for World Culture in Dhahran are just some of the many modern landmarks that add to the charm of the country.
      </Text>

      <Text style={styles.subTitle}>Hospitality and Welcoming Spirit</Text>
      <Text style={styles.contentText}>
        Saudi Arabia is renowned for its hospitality. Visitors can expect a warm welcome from the Saudi people, 
        known for their kindness and generosity. Whether you’re visiting for business, leisure, or spiritual purposes, 
        the country’s rich traditions of hospitality ensure that every guest feels at home.
      </Text>

      <Text style={styles.footerText}>
        Whether you're seeking history, adventure, or modern attractions, Saudi Arabia offers an unforgettable journey filled with wonder.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D4A40',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  addcontainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
    textAlign: 'justify',
    fontFamily: 'Arial',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D4A40',
    marginTop: 15,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
    marginTop: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default infoScreen;
