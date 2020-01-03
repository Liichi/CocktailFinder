import React,{useState, useCallback,Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';

//Searchbar
import {TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SearchBar extends React.Component {
    render() {
        return (
            <View style={sbStyle.sbar}>
                <Icon
                    name="ios-search"
                    color="#ccc"
                    size={25}
                />
                <TextInput>text input</TextInput>
            </View>
            
        );
    }
}

const sbStyle = StyleSheet.create({
    sbar: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#edeff2',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class SearchScreen extends React.Component<Props>{
    static navigationOptions = {
        headerTitle: () => <SearchBar/>
    };

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