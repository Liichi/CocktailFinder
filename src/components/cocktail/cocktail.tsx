import {TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import React,{useState, useCallback,Component} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';

interface State {
    searchText : string
}

class Cocktail extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            searchText: ''
        };
    }

    render() {
        return (
            <View style={styles.cocktail}>
                <Image
                    style={styles.thumb}
                    source={{uri: 'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg'}}
                    />
                <Text>Long Vodka</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cocktail: {
        flex:1,
        marginTop: 30,
        minWidth: '90%',
        marginLeft: 15,
        marginRight: 15,
        height: 50,
        borderRadius:8,
        backgroundColor: 'white',
        maxHeight: 50,
        minHeight: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumb: {
        marginLeft: 0,
        width: 120,
        height: 120,
        borderRadius:500
    }
});

export default Cocktail;