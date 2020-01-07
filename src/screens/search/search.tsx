import React,{} from 'react';
import {View,SafeAreaView,FlatList,Text, Platform, KeyboardAvoidingView} from 'react-native';
import {NavigationParams,NavigationScreenProp,NavigationState,} from 'react-navigation';
import Header from '../../components/header';
import LinearGradient from 'react-native-linear-gradient';
import Cocktail from '../../components/cocktail/cocktail'
import { CocktailData } from '../../components/cocktail/cocktailData';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../actions/search';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './styles';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    data : CocktailData[]
    error : boolean
}

class SearchScreen extends React.Component<Props>{
    constructor(props : Props){
        super(props);
    }

    static navigationOptions = {
        headerShown: false
    };

    render(){
        const data : CocktailData[] = this.props.data;
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
                        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : null} style={styles.body}>
                            <FlatList
                                data={data}
                                renderItem={(item) => (
                                    <Cocktail data={item.item}></Cocktail>
                                )}
                            />
                        </KeyboardAvoidingView>
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen);