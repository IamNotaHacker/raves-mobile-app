"use client"

import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Provider as PaperProvider } from "react-native-paper"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StatusBar, Platform } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import firebase from "@react-native-firebase/app"
import auth from "@react-native-firebase/auth"

// Screens
import HomeScreen from "./screens/HomeScreen"
import ExpensesScreen from "./screens/ExpensesScreen"
import NotesScreen from "./screens/NotesScreen"
import ProfileScreen from "./screens/ProfileScreen"

// Theme
import { theme } from "./theme"

const Tab = createBottomTabNavigator()

export default function App() {
  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp()
      console.log(`Firebase initialized successfully on ${Platform.OS}`)

      // Test Firebase Authentication
      auth()
        .signInAnonymously()
        .then(() => {
          console.log("User signed in anonymously")
        })
        .catch((error) => {
          console.error("Anonymous sign-in error:", error)
        })
    }
  }, [])

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.muted,
            tabBarStyle: {
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
            },
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="clock-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Expenses"
            component={ExpensesScreen}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="currency-usd" size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="Notes"
            component={NotesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="note-text-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

