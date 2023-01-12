import { StyleSheet, TextInput, View, Text } from 'react-native';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const CustomInput = ({ label, value, onChangeText, secureTextEntry }) => {
    return(
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
            style={styles.input}
            value={value} 
            onChangeText={onChangeText}   
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={secureTextEntry}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      fontSize: 16,
      borderWidth: 0.2,
      borderRadius: 5,
      borderColor: colors.borderColor,
      backgroundColor: colors.background2,
      color: colors.textColor,
      marginBottom: spacing[5]/2,
      padding: spacing[2],
      margin: spacing[2]/2,
    },
    label: {
      fontSize: 16,
      color: colors.textColor,
      marginBottom: spacing[2]/2,
      marginLeft: spacing[2]/2,
    }
});

export default CustomInput;