import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import TasksList from '../components/TasksList';
import { Context as SprintContext } from '../context/SprintContext';
import { search } from '../methods';
import { colors } from '../theme';

const SprintDetailScreen = ({ route }) => {

    const [searchItem, setSearchItem] = useState("");
    const [initialTasks , setInitialTasks] = useState([]);
    const [tasks, setTasks] = useState([]);
    const { id } = route.params;
    const { state } = useContext(SprintContext);
 
    useEffect(() => {
        setInitialTasks(state.tasks.filter(item => item.sprintId === id))
        setTasks(state.tasks.filter(item => item.sprintId === id));
    }, [])

    return(
        <View style={styles.view}>
            <SearchBar value={searchItem} onChangeText={setSearchItem} onEndEditing={() => setTasks(search(searchItem, initialTasks))} />
            <View>
                {tasks && <TasksList title="Sprint tasks" items={tasks} showButtons={false} />}
            </View>
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
});

export default SprintDetailScreen;