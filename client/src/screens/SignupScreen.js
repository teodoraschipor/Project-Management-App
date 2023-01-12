import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const SignupScreen = () => {

    const { state, signup } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <AuthForm
          headerText="Sign Up"
          submitButtonText="Sign Up"
          onSubmit={signup}
          callback={() => navigation.navigate("HomeScreen")}
        />
        <NavLink text="Already have an account? Sign in instead!" link="SigninScreen" />
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

export default SignupScreen;
