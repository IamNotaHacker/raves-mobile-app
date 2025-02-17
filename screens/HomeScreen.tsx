"use client"

import { useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import { Text, Button, Surface } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { theme } from "../theme"
import CircularTimer from "../components/CircularTimer"

export default function HomeScreen() {
  const [isClockedIn, setIsClockedIn] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [startTime, setStartTime] = useState<Date | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isClockedIn && startTime) {
      interval = setInterval(() => {
        const now = new Date()
        const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000)
        setElapsedTime(elapsed)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isClockedIn, startTime])

  const handleClockInOut = () => {
    if (!isClockedIn) {
      setStartTime(new Date())
      setIsClockedIn(true)
    } else {
      setStartTime(null)
      setElapsedTime(0)
      setIsClockedIn(false)
    }
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{isClockedIn ? "You're checked in" : "Ready to check in?"}</Text>

      <View style={styles.timerContainer}>
        <CircularTimer
          progress={isClockedIn ? (elapsedTime % 3600) / 3600 : 0}
          size={300}
          strokeWidth={15}
          time={formatTime(elapsedTime)}
        />
      </View>

      <Surface style={styles.buttonContainer} elevation={0}>
        {isClockedIn ? (
          <Button
            mode="contained"
            onPress={handleClockInOut}
            buttonColor={theme.colors.secondary}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Check out
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={handleClockInOut}
            style={[styles.button, styles.clockInButton]}
            contentStyle={styles.buttonContent}
          >
            <MaterialCommunityIcons name="hand-back-left" size={24} color="white" />
            <Text style={styles.buttonText}>Check in</Text>
          </Button>
        )}
      </Surface>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  status: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
    color: theme.colors.text,
  },
  timerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    borderRadius: 30,
    marginHorizontal: 20,
  },
  clockInButton: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: "center",
  },
  buttonContent: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
})

