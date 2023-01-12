import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TasksList from "../components/TasksList";
import { Context } from "../context/SprintContext";
import { colors } from "../theme";
import { spacing } from "../theme/spacing";

const SprintCreateScreen = () => {

    const navigation = useNavigation();
    const [results, setResults] = useState([]);
    const { state } = useContext(Context);
    const currentSprintId = state.sprints[state.sprints.length - 1].id;

    useEffect(() => {
        setResults(state.tasks.filter((item) => item.sprintId === currentSprintId));
    }, [state.tasks])

    return(
        <View style={styles.view}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TaskCreateScreen", { sprintId: currentSprintId })}>
                <Text style={styles.buttonText}>Add task to sprint</Text>
            </TouchableOpacity>
            {results.length > 0 && <TasksList items={results} showButtons={true} />}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.background
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
})

export default SprintCreateScreen;