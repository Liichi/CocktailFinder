import React,{useState, useCallback, Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';

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
            <View style={styles.home}>
                <Button onPress={() => {this.handleSearch()} } title='Go TO Search'></Button>
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

export default IndexScreen;