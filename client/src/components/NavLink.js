import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../theme";
import { spacing } from "../theme/spacing";

const NavLink = ({ text, link }) => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate(link)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    link: {
      color: colors.blue,
      textAlign: 'center'
    }
});

export default NavLink;