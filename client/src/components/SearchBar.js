import { useEffect } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { search } from "../methods";
import { colors } from "../theme";
import { spacing } from "../theme/spacing";

const SearchBar = ({ value, onChangeText, onEndEditing, setTasks }) => {

    
    return(
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={require('../assets/magnifying-glass.png')} />
            <TextInput
            style={styles.textInputStyle}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search"
            value={value}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: spacing[5]/2,
        flexDirection: 'row',
        marginHorizontal: spacing[5]/2,
        backgroundColor: colors.background2,
        borderRadius: 5,
        borderWidth: 0.2,
        borderColor: colors.borderColor,
        height: 40,
    },
    imageStyle: {
        height: 18,
        width: 18,
        alignSelf: 'center',
        marginHorizontal: spacing[5]/2,
    },
    textInputStyle: {
        flex: 1,
        fontSize: 18,
        color: colors.textColor
    }
});

export default SearchBar;