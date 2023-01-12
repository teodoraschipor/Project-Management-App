import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../theme";
import { spacing } from "../theme/spacing";
import { Context as AuthContext } from "../context/AuthContext";
import { commonStyles } from "../utils/commonStyles";

const Sprint = ({ item }) => {

    const navigation = useNavigation();
    const { state } = useContext(AuthContext);

    return(
        <TouchableOpacity style={[styles.sprint, commonStyles.shadow]} onPress={() => navigation.navigate("SprintDetailScreen", { id: item.id })}>
            <Text style={styles.title}>{item.title}</Text>
            { state.permission && 
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("SprintEditScreen", { id: item.id })}>
                    <Image style={styles.adminButton} source={require("../assets/draw.png")} />
                </TouchableOpacity>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    sprint: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing[5]/2,
        paddingHorizontal: spacing[5]/3,
        borderWidth: 0.2,
        borderColor: colors.borderColor,
        paddingVertical: spacing[4],
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
    title: {
        color: colors.textColor
    },
    adminButton: {
        height: 20,
        width: 20,
        marginHorizontal: spacing[1]
    },
});

export default Sprint;