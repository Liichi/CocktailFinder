import {TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import React,{useState, useCallback,Component} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';
import SearchBar from './searchBar';

interface State {
    searchText : string
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class Header extends React.Component<Props> {
    constructor(props){
        super(props);

        this.state = {
            searchText: ''
        };
    }

    onCancel = () => {
        this.setState({searchText: 'test'});
        console.log(this.state.searchText);
    }

    onBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={sbStyle.header}>
                <TouchableOpacity onPress={this.onBack}>
                    <Icon style={sbStyle.sicon} name="md-arrow-back" color="#000" size={25} />
                </TouchableOpacity>
                <SearchBar/>
                <Button onPress={this.onCancel} style={sbStyle.cc} title='Cancel'>Cancel</Button>
            </View>
        );
    }
}

const sbStyle = StyleSheet.create({
    header: {
        flex:1,
        marginTop: 15,
        minWidth: '90%',
        marginLeft: 10,
        marginRight: 30,
        height: 10,
        maxHeight: 40,
        flexDirection: 'row',
        //backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cc: {
        color: 'red',
        marginLeft: 10
    }
});

export default Header;