import React, { useContext, useState } from 'react';
import { Context as SprintContext } from '../context/SprintContext';
import TaskForm from '../components/TaskForm';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const TaskEditScreen = ({ route }) => {

    const navigation = useNavigation();
    const { state, editTask } = useContext(SprintContext);
    const { item } = route.params;

    const task = state.tasks.find((task) => task.id === item.id)
    console.log('task.status: ', task.status)

    return(
        <View style={styles.view}>
            <TaskForm initialValues={{title: task.title, assignee: task.assignee, details: task.details, status: task.status}} sprintId={item.sprintId} id={item.id} onSubmit={editTask} callback={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: spacing[10] * 2,
        paddingHorizontal: spacing[4],
        backgroundColor: colors.background
    }
})

export default TaskEditScreen;