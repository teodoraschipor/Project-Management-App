import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const SigninScreen = () => {

    const { state, signin } = useContext(Context);
    const navigation = useNavigation();
    
    return (
      <View style={styles.container}>
        <AuthForm
          headerText="Sign In"
          onSubmit={signin}
          submitButtonText="Sign In"
          callback={() => navigation.navigate("HomeScreen")}
        />
        <NavLink text="Don't have an account? Sign up instead" link="SignupScreen" />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
      paddingBottom: spacing[10] * 2,
      paddingHorizontal: spacing[4],
    },
});

export default SigninScreen;