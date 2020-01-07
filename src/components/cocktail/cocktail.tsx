import React,{} from 'react';
import {View,Text,StyleSheet,Image, Dimensions} from 'react-native';
import { CocktailData } from './cocktailData';
import styles from './styles';

interface Props {
    data : CocktailData
}

class Cocktail extends React.Component<Props>{
    render() {
        const {name,thumbURL,id} = this.props.data;
        return (
            <View style={styles.cocktail}>
                <View style={styles.column}>
                    <Image style={styles.thumb} source={{uri: thumbURL}}/>
                </View>
                <View style={styles.column}>
                    <Text style={styles.title}>{name}</Text>
                </View>
                
            </View>
        );
    }
}

export default Cocktail;