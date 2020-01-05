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

class Header extends React.Component<Props,State> {
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
            <View style={styles.header}>
                <TouchableOpacity onPress={this.onBack}>
                    <Icon style={styles.backButton} name="md-arrow-back" color="#000" size={25} />
                </TouchableOpacity>
                <SearchBar/>
                <TouchableOpacity onPress={this.onCancel}>
                    <Text style={styles.cancelButton} >Cancel</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        marginTop: 30,
        minWidth: '90%',
        marginLeft: 15,
        marginRight: 15,
        height: 10,
        maxHeight: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelButton: {
        color: 'red',
        marginLeft: 5,
        fontSize: 17
    },
    backButton: {
        marginLeft: 0,
        marginRight: 10
    }
});

export default Header;