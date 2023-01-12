import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, FlatList, Image, View, StyleSheet} from 'react-native';
import Sprint from '../components/Sprint';
import { spacing } from '../theme/spacing';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as SprintContext } from '../context/SprintContext';
import { colors } from '../theme';

const HomeScreen = () => {

    const { state } = useContext(SprintContext);
    const { signout } = useContext(AuthContext);
    const navigation = useNavigation();

    return(
            <View style={styles.view}>
                <FlatList 
                data={state.sprints}
                renderItem={({ item }) => <Sprint item={item} />}
                keyExtractor={sprint => sprint.title} 
                />
            <Button title="Sign out" onPress={() => {
                signout(() => navigation.navigate("SignupScreen"))
            }}/>
            </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, // any time when we have some content that's being cut off or it's expanding off the screen, add a style of flex: 1 to the most parent view
        paddingVertical: spacing[4],
        backgroundColor: colors.background
    }, 

});

export default HomeScreen;