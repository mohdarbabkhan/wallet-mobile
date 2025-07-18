import { View, Text } from 'react-native'
import { styles } from '@/assests/styles/home.styles'
import React from 'react'
import { COLORS } from '@/constants/colors'

interface SummaryType {
    balance: string,
    income: string,
    expense: string,
}

interface CardPropType {
    summary: SummaryType
}

const BalanceCard = ({ summary }: CardPropType) => {
    return (
        <View style={styles.balanceCard}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceAmount}>₹{parseFloat(summary.balance).toFixed(2)}</Text>
            <View style={styles.balanceStats}>
                <View style={styles.balanceStatItem}>
                    <Text style={styles.balanceStatLabel}>Income</Text>
                    <Text style={[styles.balanceStatAmount,{color:COLORS.income}]}>
                        +₹{parseFloat(summary.income).toFixed(2)}
                    </Text>
                </View>

                <View style={[styles.balanceStatItem, styles.statDivider]} />

                <View style={styles.balanceStatItem}>
                    <Text style={styles.balanceStatLabel}>Expenses</Text>
                    <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
                        -₹{Math.abs(parseFloat(summary.expense)).toFixed(2)}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default BalanceCard