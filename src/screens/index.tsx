import React,{} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class IndexScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Home',
        headerShown: false
    };

    handleSearch = () => {
        this.props.navigation.navigate('Search');
    }

    render(){
        return(
            <View style={styles.index}>
                <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#c81693','#e03c39']} style={styles.background} >
                    <SafeAreaView style={styles.index}>
                        <Icon2 style={styles.cocktailIcon} name="cocktail" color="white" size={40} />
                        <Text style={styles.title}>
                            <Text style={styles.titleBold}>Cocktail</Text>
                            Finder
                        </Text>
                        <TouchableOpacity onPress={() => {this.handleSearch()}}>
                            <View style={styles.searchBar}>
                                <Icon style={styles.searchIcon} name="ios-search" color="red" size={25} />
                                <Text style={styles.searchText}>Search your favorite cocktail</Text>
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>
                </LinearGradient>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    index: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '100',
        marginBottom: 15
    },
    titleBold:{
        fontWeight: 'bold'
    },
    background: {
        flex: 1,
        minWidth: '100%'
    },
    searchBar: {
        flex: 1,
        width: '90%',
        maxHeight: 50,
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    },
    searchText: {
        flex: 1,
        width: '100%',
        marginLeft: 0
    },
    searchIcon: {
        marginLeft: 10,
        marginRight: 10
    },
    cocktailIcon: {
        marginBottom: 10
    }
});

export default IndexScreen;