import React,{useState, useCallback,Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SearchScreen extends React.Component<Props>{
    render(){
        return (
            <View style={styles.home}>
                <Button onPress={() => {}} title='Go TO Index'></Button>
            </View>
        );
    }
    
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchScreen;