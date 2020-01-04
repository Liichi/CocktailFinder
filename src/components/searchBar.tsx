import {TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import React,{useState, useCallback,Component} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';

interface State {
    searchText : string
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SearchBar extends React.Component<Props> {
    constructor(props){
        super();

        this.state = {
            searchText: ''
        };
        //const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(false);
    }
    
    onChangeText = (text) => {
        console.log(text.text);
        this.setState({searchText: text.text});
    }

    render() {
        return (
            <View style={sbStyle.sbar}>
                <Icon style={sbStyle.sicon} name="ios-search" color="#ccc" size={25} />
                <TextInput onChangeText={text => this.onChangeText({ text })} style={sbStyle.sbar} placeholder='Search'></TextInput>
            </View>
        );
    }
}

const sbStyle = StyleSheet.create({
    sbar: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    },
    sicon: {
        marginLeft: 10,
        marginRight: 10
    }
});

export default SearchBar;