import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { styles } from '@/assests/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/colors'
import CreateScreen from '@/app/(root)/CreateScreen'
const NoTransactionsFound = () => {
    const router = useRouter();
  return (
    <View style={styles.emptyState}>
      <Ionicons
        name='receipt-outline'
        size={60}
        color={COLORS.textLight}
        style={styles.emptyStateIcon}
      />
      <Text style={styles.emptyStateTitle}>No transactions yet</Text>
      <Text style={styles.emptyStateText}>
        Start tracking your finances by adding your first transaction
      </Text>
      <TouchableOpacity style={styles.emptyStateButton} onPress={() => router.push("/CreateScreen")}>
        <Ionicons name="add-circle" size={18} color={COLORS.white}/>
        <Text style={styles.emptyStateButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoTransactionsFound