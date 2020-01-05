import React,{useState, useCallback,Component} from 'react';
import {View,SafeAreaView,Text,StyleSheet,Button,ScrollView} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient';
import Cocktail from '../components/cocktail/cocktail'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class SearchScreen extends React.Component<Props>{
    static navigationOptions = {
        headerShown: false
    };

    render(){
        return (
            <View style={styles.searchScreen}>
                <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#c81693','#e03c39']} style={styles.linearGradient} >  
                    <SafeAreaView style={{flex:1}}>
                        <View style={styles.headerView}>
                            <Header navigation={this.props.navigation}/>
                        </View>
                        <View style={styles.body}>
                            <ScrollView>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                                <Cocktail/>
                            </ScrollView>
                            
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    searchScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 5
    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        maxHeight: 80
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%'
    }
});

export default SearchScreen;