import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, TextInput } from 'react-native';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';
import CustomInput from './CustomInput';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, callback }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return (
    <>
      <Spacer>
        <Text style={styles.title}>{headerText}</Text>
      </Spacer>
      <CustomInput
        label="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <CustomInput
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
        <TouchableOpacity style={styles.button} onPress={() => {
          if(email.length === 0 || password.length === 0) {
            setError('Missing email or password')
          } else if(!emailRegex.test(email)) {
            setError('Enter a valid email')
          } else {
            onSubmit({ email, password, callback })
          }
          }}>
          <Text style={styles.buttonText}>{submitButtonText}</Text>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: colors.textColor,
    textAlign: 'center'
  },
  error: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center'
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
});

export default AuthForm;