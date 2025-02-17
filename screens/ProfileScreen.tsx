import { View, StyleSheet, ScrollView } from "react-native"
import { Text, Avatar, List, Button } from "react-native-paper"
import { theme } from "../theme"

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text size={80} label="RV" style={styles.avatar} />
        <Text style={styles.name}>Ramiz Velasquez</Text>
        <Text style={styles.role}>Field Technician</Text>
      </View>

      <ScrollView style={styles.content}>
        <List.Section>
          <List.Subheader>Personal Information</List.Subheader>
          <List.Item
            title="Email"
            description="ramiz.v@example.com"
            left={(props) => <List.Icon {...props} icon="email" />}
          />
          <List.Item
            title="Phone"
            description="(555) 123-4567"
            left={(props) => <List.Icon {...props} icon="phone" />}
          />
          <List.Item
            title="Location"
            description="Las Vegas, NV"
            left={(props) => <List.Icon {...props} icon="map-marker" />}
          />
        </List.Section>

        <List.Section>
          <List.Subheader>Work Information</List.Subheader>
          <List.Item
            title="Employee ID"
            description="#EMP12345"
            left={(props) => <List.Icon {...props} icon="card-account-details" />}
          />
          <List.Item
            title="Department"
            description="Field Services"
            left={(props) => <List.Icon {...props} icon="domain" />}
          />
          <List.Item
            title="Join Date"
            description="Jan 15, 2023"
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
        </List.Section>

        <View style={styles.buttonContainer}>
          <Button mode="outlined" onPress={() => {}} style={styles.button} textColor={theme.colors.error}>
            Sign Out
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  avatar: {
    backgroundColor: theme.colors.primary,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  role: {
    fontSize: 16,
    color: theme.colors.muted,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    borderColor: theme.colors.error,
  },
})

