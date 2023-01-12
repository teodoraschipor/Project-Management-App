import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import TaskForm from '../components/TaskForm';
import { Context } from '../context/SprintContext';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const TaskCreateScreen = ({ route }) => {

    const { state, addTask } = useContext(Context);
    const { sprintId } = route.params;
    const nrTasks = state.tasks.length + 1;
    const id = "0" + nrTasks;
    const navigation = useNavigation();

    return(
        <View style={styles.view}>
            <TaskForm sprintId={sprintId} id={id} onSubmit={addTask} callback={() => navigation.goBack()} />
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
    },
})

export default TaskCreateScreen;