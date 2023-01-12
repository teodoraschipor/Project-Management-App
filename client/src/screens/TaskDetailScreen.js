import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const TaskDetailScreen = ({ route }) => {

    const { item } = route.params;

    return(
        <View style={styles.view}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>Assignee: {item.assignee}</Text>
            <Text style={styles.text}>Details: {item.details}</Text>
            <Text style={styles.text}>Status: {item.status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: spacing[7],
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textColor
    },
    text: {
        color: colors.textColor,
        marginTop: spacing[4]
    }
})

export default TaskDetailScreen;