import { View, StyleSheet, ScrollView } from "react-native"
import { Text, Card, FAB } from "react-native-paper"
import { theme } from "../theme"

export default function ExpensesScreen() {
  const expenses = [
    { id: 1, title: "Parking Fee", amount: 25.0, date: "Feb 1, 2025" },
    { id: 2, title: "Gas", amount: 45.5, date: "Feb 1, 2025" },
    { id: 3, title: "Tools", amount: 150.0, date: "Jan 31, 2025" },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expenses</Text>
        <Text style={styles.subtitle}>Total Expenses Today: $220.50</Text>
      </View>

      <ScrollView style={styles.expensesList}>
        {expenses.map((expense) => (
          <Card key={expense.id} style={styles.expenseCard}>
            <Card.Content style={styles.cardContent}>
              <View>
                <Text style={styles.expenseTitle}>{expense.title}</Text>
                <Text style={styles.expenseDate}>{expense.date}</Text>
              </View>
              <Text style={styles.expenseAmount}>-${expense.amount.toFixed(2)}</Text>
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
  expensesList: {
    flex: 1,
    padding: 20,
  },
  expenseCard: {
    marginBottom: 12,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  expenseTitle: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: "500",
  },
  expenseDate: {
    fontSize: 14,
    color: theme.colors.muted,
    marginTop: 4,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.error,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
  },
})

