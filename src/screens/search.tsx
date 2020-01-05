import React,{useState, useCallback,Component} from 'react';
import {View,SafeAreaView,Text,StyleSheet,Button,ScrollView,FlatList} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient';
import Cocktail from '../components/cocktail/cocktail'
import { CocktailData } from '../components/cocktail/cocktailData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../actions/search';
import { connect } from 'react-redux';
import store, { RootState } from '../store/store';
import { bindActionCreators } from 'redux';
import { SearchState } from '../reducers/search';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    data : CocktailData[]
}

interface State{
    
}

class SearchScreen extends React.Component<Props,State>{
    constructor(props){
        super(props);
        //const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(false);
        //cdata : CocktailData = {id: 5, name: 'test', thumbURL: 'test'}
    }

    static navigationOptions = {
        headerShown: false
    };
    cdata : CocktailData = {id: 5, name: 'test', thumbURL: 'test'}

    render(){
        console.log(this.props.data);
        return (
            <View style={styles.searchScreen}>
                <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#c81693','#e03c39']} style={styles.linearGradient} >  
                    <SafeAreaView style={{flex:1}}>
                        <View style={styles.headerView}>
                            <Header navigation={this.props.navigation}/>
                        </View>
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

const mapStateToProps = (state: RootState, props: Props) => ({
    data : state.search.cocktails
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,ActionTypes>, props: Props) => ({
    //startFetch: bindActionCreators(startFetch, dispatch)
    //getSearchText: bindActionCreators()
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen);