import { FlatList, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { spacing } from "../theme/spacing";
import Task from "./Task";

const TasksList = ({ items, showButtons }) => {
    return(
        <View style={styles.view}>
            <Text style={styles.noTasks}>{items?.length} tasks</Text>
            <FlatList 
            data={items} 
            renderItem={({ item }) => { return( 
            <TouchableOpacity >
                <Task item={item} showButtons={showButtons} /> 
            </TouchableOpacity>
            )}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginHorizontal: spacing[5]/3, 
        marginVertical: spacing[5]/3,
    },
    noTasks: {
        marginBottom: spacing[5]/3,
    }
});

export default TasksList;