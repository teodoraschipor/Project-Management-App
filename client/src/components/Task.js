import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { colors } from "../theme";
import { spacing } from "../theme/spacing";
import { useContext } from "react";
import { Context as SprintContext } from "../context/SprintContext";
import { commonStyles } from "../utils/commonStyles";

const Task = ({ item, showButtons }) => {

    const navigation = useNavigation();
    const { deleteTask } = useContext(SprintContext);

    return(
        <TouchableOpacity style={[styles.task, commonStyles.shadow]} onPress={() => navigation.navigate("TaskDetailScreen", { item })}>
            <View style={styles.text}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>Assignee: {item.assignee}</Text>
            </View>
            { showButtons && 
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.container} onPress={() => deleteTask(item.id)}>
                        <Image style={styles.adminButton} source={require("../assets/trash.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("TaskEditScreen", { item })}>
                        <Image style={styles.adminButton} source={require("../assets/draw.png")} />
                    </TouchableOpacity>
                </View> }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing[5]/2,
        paddingHorizontal: spacing[5]/3,
        borderWidth: 0.2,
        borderColor: colors.borderColor,
        paddingVertical: spacing[3],
        paddingHorizontal: spacing[2],
        marginBottom: spacing[2],
        borderRadius: 6,
        backgroundColor: colors.background,
    },
    container: {
        marginRight: spacing[3],
        padding: spacing[1],
        borderRadius: 5,
        backgroundColor: colors.orange,
    },
    text: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.textColor,
    },
    details: {
        fontSize: 13,
        color: 'grey',
        color: colors.textColor,
        fontWeight: '300',
    },
    buttonsView: {
        flexDirection: 'row',
    },
    adminButton: {
        height: 20,
        width: 20,
        marginHorizontal: spacing[1]
    },
});

export default Task;