import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../theme";
import { spacing } from "../theme/spacing";

const CustomButton = ({ onPress, text }) => {
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
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

export default CustomButton;