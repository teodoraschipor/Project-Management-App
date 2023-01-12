import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import TasksList from '../components/TasksList';
import { Context as SprintContext } from '../context/SprintContext';
import { search } from '../methods';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const SprintEditScreen = ({ route }) => {

    const navigation = useNavigation();
    const [tasks, setTasks] = useState([]);
    const { id } = route.params;
    const { state } = useContext(SprintContext);
 
    useEffect(() => {
        setTasks(state.tasks.filter(item => item.sprintId === id));
    }, [state.tasks])

    return(
        <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TaskCreateScreen", { sprintId: id })}>
                <Text style={styles.buttonText}>Add task to sprint</Text>
            </TouchableOpacity>
            {tasks && <TasksList title="Sprint tasks" items={tasks} showButtons={true} />}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.background
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultsDetails: {
        color: 'grey',
    },
    list: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: colors.orange,
        padding: spacing[2],
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: spacing[1],
        marginVertical: spacing[4]
      },
      buttonText: {
        color: colors.background,
        fontSize: 16
      }
});

export default SprintEditScreen;