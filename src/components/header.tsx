import Icon from "react-native-vector-icons/Ionicons";
import {NavigationParams,NavigationScreenProp,NavigationState} from 'react-navigation';
import React,{} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,BackHandler} from 'react-native';
import SearchBar from './searchBar';
import {RootState} from '../store/store'
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes, startFetch } from '../actions/search';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

interface State {
    
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    isFetching : boolean,
    searchText : string,
    startFetch : Function
}

class Header extends React.Component<Props,State> {
    constructor(props : Props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    onCancel = () => {
        this.props.startFetch('');  
    }

    onBack = () => {
        this.props.startFetch('');
        this.props.navigation.goBack();
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        this.onBack();
        return true;
    }

    render() {
        return (
            <View style={styles.header}>
                {(this.props.searchText.length < 4) &&
                    <TouchableOpacity onPress={this.onBack}>
                        <Icon style={styles.backButton} name="md-arrow-back" color="#000" size={25} />
                    </TouchableOpacity>
                }
                <SearchBar/>
                {(this.props.searchText.length > 3) &&//this.props.isFetching &&
                    <TouchableOpacity onPress={this.onCancel}>
                        <Text style={styles.cancelButton} >Cancel</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

const mapStateToProps = (state: RootState, props: Props) => ({
    isFetching : state.search.isFetching,
    searchText : state.search.searchText
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,ActionTypes>, props: Props) => ({
    startFetch: bindActionCreators(startFetch, dispatch)
});

const styles = StyleSheet.create({
    header: {
        flex:1,
        marginTop: 30,
        minWidth: '90%',
        marginLeft: 15,
        marginRight: 15,
        height: 10,
        maxHeight: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelButton: {
        color: 'red',
        marginLeft: 5,
        fontSize: 17
    },
    backButton: {
        marginLeft: 0,
        marginRight: 10
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);