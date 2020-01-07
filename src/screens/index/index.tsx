import React,{} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView, Dimensions} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {rs,nlz} from '../../styled';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class IndexScreen extends React.Component<Props> {
    static navigationOptions = {
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
                        <Icon2 style={styles.cocktailIcon} name="cocktail" color="white" size={rs(50)} />
                        <Text style={styles.title}>
                            <Text style={styles.titleBold}>Cocktail</Text>Finder
                        </Text>
                        <TouchableOpacity onPress={() => {this.handleSearch()}}>
                            <View style={styles.searchBar}>
                                <Icon style={styles.searchIcon} name="ios-search" color="red" size={rs(30)} />
                                <Text style={styles.searchText}>Search your favorite cocktail</Text>
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>
                </LinearGradient>
            </View>
        );
    }
};

export default IndexScreen;