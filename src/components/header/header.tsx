import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {NavigationParams,NavigationScreenProp,NavigationState} from 'react-navigation';
import React,{} from 'react';
import {View,StyleSheet,TouchableOpacity,BackHandler, Dimensions} from 'react-native';
import SearchBar from '../searchBar';
import {RootState} from '../../store/store'
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes, startFetch } from '../../actions/search';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    isFetching : boolean,
    searchText : string,
    startFetch : Function
}

class Header extends React.Component<Props> {
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
                {(this.props.searchText.length < 3) &&
                    <TouchableOpacity onPress={this.onBack}>
                        <Icon name="md-arrow-back" color="#000" size={Dimensions.get('window').height / 25} />
                    </TouchableOpacity>
                }
                <SearchBar style={styles.searchBar}/>
                {(this.props.searchText.length > 2) &&
                    <TouchableOpacity onPress={this.onCancel}>
                        <Icon2 name="cancel" color="#F00" size={Dimensions.get('window').height / 25} />
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);