import { View, StyleSheet, ScrollView } from "react-native"
import { Text, Card, FAB, Avatar } from "react-native-paper"
import { theme } from "../theme"

export default function NotesScreen() {
  const notes = [
    {
      id: 1,
      subject: "Carpet was not good",
      content: "When I went into the store the carpet was not the right color...",
      author: "Ramiz Velasquez",
      date: "Feb 1, 2025",
      time: "11:30 AM",
    },
    {
      id: 2,
      subject: "Installation completed",
      content: "Successfully installed new equipment at client site...",
      author: "John Smith",
      date: "Feb 1, 2025",
      time: "10:15 AM",
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notes</Text>
        <Text style={styles.subtitle}>Recent Updates</Text>
      </View>

      <ScrollView style={styles.notesList}>
        {notes.map((note) => (
          <Card key={note.id} style={styles.noteCard}>
            <Card.Content>
              <View style={styles.noteHeader}>
                <Avatar.Text size={40} label={note.author[0]} />
                <View style={styles.noteHeaderText}>
                  <Text style={styles.authorName}>{note.author}</Text>
                  <Text style={styles.noteTime}>{note.time}</Text>
                </View>
              </View>
              <Text style={styles.noteSubject}>{note.subject}</Text>
              <Text style={styles.noteContent} numberOfLines={2}>
                {note.content}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <FAB icon="plus" style={styles.fab} onPress={() => {}} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.muted,
    marginTop: 4,
  },
  notesList: {
    flex: 1,
    padding: 20,
  },
  noteCard: {
    marginBottom: 12,
    elevation: 2,
  },
  noteHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  noteHeaderText: {
    marginLeft: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.text,
  },
  noteTime: {
    fontSize: 14,
    color: theme.colors.muted,
  },
  noteSubject: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.text,
    marginBottom: 8,
  },
  noteContent: {
    fontSize: 14,
    color: theme.colors.muted,
    lineHeight: 20,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
  },
})

