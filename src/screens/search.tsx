import React,{} from 'react';
import {View,SafeAreaView,StyleSheet,FlatList,Text} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient';
import Cocktail from '../components/cocktail/cocktail'
import { CocktailData } from '../components/cocktail/cocktailData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../actions/search';
import { connect } from 'react-redux';
import { RootState } from '../store/store';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    data : CocktailData[]
    error : boolean
}

interface State{
    
}

class SearchScreen extends React.Component<Props,State>{
    constructor(props : Props){
        super(props);
    }

    static navigationOptions = {
        headerShown: false
    };
    cdata : CocktailData = {id: 5, name: 'test', thumbURL: 'test'}

    render(){
        return (
            <View style={styles.searchScreen}>
                <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#c81693','#e03c39']}>  
                    <SafeAreaView style={{flex:1}}>
                        <View style={styles.headerView}>
                            <Header navigation={this.props.navigation}/>
                        </View>
                        {this.props.error &&
                            <View style={styles.error}>
                                <Text style={styles.errorText}>Connection Error</Text>
                            </View>
                        }
                        
                        <View style={styles.body}>
                            <FlatList
                                data={this.props.data}
                                //keyExtractor={(item, index) => item.id}
                                renderItem={(item) => (
                                    <Cocktail data={item.item}></Cocktail>
                                )}
                            />
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </View>
        );
    }
};

const mapStateToProps = (state: RootState, props: Props) => ({
    data : state.search.cocktails,
    error : state.search.error
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,ActionTypes>, props: Props) => ({

});

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
    error:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        maxHeight: 40
    },
    errorText:{
        fontSize: 15,
        color: 'white'
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%'
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen);