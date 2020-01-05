import {TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import React,{useState, useCallback,Component} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native';
import { CocktailData } from './cocktailData';

interface Props {
    data : CocktailData
}

class Cocktail extends React.Component<Props>{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.cocktail}>
                <Image style={styles.thumb} source={{uri: this.props.data.thumbURL}}/>
                <Text>{this.props.data.name}</Text>
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
        margin: 90,
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