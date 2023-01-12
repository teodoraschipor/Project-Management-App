import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../theme";
import { spacing } from "../theme/spacing";
import CustomInput from "./CustomInput";
import { Picker } from "@react-native-picker/picker";
import { DEFINED, DONE, IN_PROGRESS } from "../constants";

const TaskForm = ({ initialValues, sprintId, id, onSubmit, callback }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [assignee, setAssignee] = useState(initialValues.assignee);
    const [details, setDetails] = useState(initialValues.details);
    const [status, setStatus] = useState(initialValues.status);

    return(
        <>
            <CustomInput label="Title:" value={title} onChangeText={setTitle} />
            <CustomInput label="Assignee:" value={assignee} onChangeText={setAssignee} />
            <CustomInput label="Details:" value={details} onChangeText={setDetails} />
            {initialValues.title && 
            <Picker itemStyle={styles.picker} selectedValue={status} onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}>
                <Picker.Item color={colors.textColor} label="Defined" value={DEFINED} />
                <Picker.Item color={colors.textColor} label="In progress" value={IN_PROGRESS} />
                <Picker.Item color={colors.textColor} label="Done" value={DONE} />
            </Picker>}
            <TouchableOpacity style={styles.button} onPress={() => onSubmit(sprintId, id, title, assignee, details, status, callback)}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </>
    );
}

TaskForm.defaultProps = {
    initialValues: {
      title: '',
      assignee: '',
      details: '',
      status: ''
    }
};

const styles = StyleSheet.create({
    picker: {
        height: 100,
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

export default TaskForm;