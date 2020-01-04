import React,{useState, useCallback, Component} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,SafeAreaView,TextInput} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class IndexScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Home',
    };

    handleSearch = () => {
        console.log('test');
        this.props.navigation.navigate('Search');
    }

    render(){
        return(
            <SafeAreaView style={styles.home}>
                <TouchableOpacity onPress={() => {this.handleSearch()}}>
                    <View style={sbStyle.sbar}>
                        <Icon style={sbStyle.sicon} name="ios-search" color="#ccc" size={25} />
                        <TextInput onChangeText={text => this.onChangeText({ text })} style={sbStyle.sbar} placeholder='Search'></TextInput>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
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

export default IndexScreen;