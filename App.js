import React from "react";
import {  
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import TripsScreen from "./SearchScreen";
import FavoriteScreen from "./FavoriteScreen";
import OffersScreen from "./ProfileScreen";
import infoScreen from "./infoScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // تعيين الأيقونات حسب الصفحة
          if (route.name === "Home") {
            iconSource = require("./assets/homeIcon.png");
          } else if (route.name === "Trips") {
            iconSource = require("./assets/Trips.png");
          } else if (route.name === "Favorite") {
            iconSource = require("./assets/favoriteIcon.png");
          } else if (route.name === "Offers") {
            iconSource = require("./assets/Offers.png");
          } else if (route.name === "About") {
            iconSource = require("./assets/infoIcon.png");
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#6B8E66" : "#888",
              }}
            />
          );
        },
        tabBarActiveTintColor: "6B8E66",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          paddingBottom: 10,
          
        },
       // headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: "" }} />
      <Tab.Screen name="Trips" component={TripsScreen} options={{ headerTitle: "" }} />
      <Tab.Screen name="About" component={infoScreen} options={{ headerTitle: "" }} />
<Tab.Screen name="Favorite" component={FavoriteScreen} options={{ headerTitle: "" }} />
<Tab.Screen name="Offers" component={OffersScreen} options={{ headerTitle: "" }} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* الشاشات الترحيبية */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Tab Navigator */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }} // إزالة الهيدر العلوي
        />

        {/* شاشات إضافية خارج التاب */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
