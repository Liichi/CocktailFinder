import React,{} from 'react';
import {View,Text,StyleSheet,Image, Dimensions} from 'react-native';
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
                <Text style={styles.title}>{this.props.data.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cocktail: {
        flex:1,
        marginTop: 10,
        marginBottom: 10,
        minWidth: '90%',
        maxWidth: '90%',
        marginLeft: 15,
        marginRight: 15,
        height: '30%',
        borderRadius:8,
        backgroundColor: 'white',
        margin: 90,
        maxHeight: Dimensions.get('window').height / 4.5,
        minHeight: Dimensions.get('window').height / 4.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 20,
        paddingLeft: 30,
        paddingRight: 30,
        maxWidth: '60%'
    },
    thumb: {
        marginLeft: 15,
        width: 120,
        height: 120,
        borderRadius:500
    }
});

export default Cocktail;