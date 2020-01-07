import {TextInput, ActivityIndicator, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React,{useEffect} from 'react';
import {View,StyleSheet} from 'react-native';
import {startFetch, ActionTypes} from '../../actions/search'
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './styles';

interface State {
    timer : any,
    searchText : string
}

interface Props {
    searchText : string,
    startFetch : Function,
    isFetching : boolean,
    needUpdate : boolean
}

class SearchBar extends React.Component<Props,State> {
    constructor(props : Props){
        super(props);

        this.state = {
            searchText : '',
            timer : null
        };
    }
    
    onChangeText = (text) => {
        this.props.startFetch(text.text);  
        this.setState({searchText : text.text});
    }

    componentDidMount() {
        let tmpTimer = setInterval(this.checkForDataUpdate, 500);
        this.setState({timer: tmpTimer});
    }
    
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    //start new fetch if data is old
    checkForDataUpdate =() => {
        if(!this.props.isFetching && this.props.needUpdate)
            this.props.startFetch(this.state.searchText);
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <Icon style={styles.searchIcon} name="ios-search" color="#ccc" size={Dimensions.get('window').height / 25} />
                <TextInput value={this.props.searchText} onChangeText={text => this.onChangeText({ text })} style={styles.searchBar} placeholder='Search'/>
                {this.props.isFetching &&
                    <ActivityIndicator size="large" color="#6b7585"/>
                }
            </View>
        );
    }
}

const mapStateToProps = (state: RootState, props: Props) => ({
    isFetching : state.search.isFetching,
    searchText : state.search.searchText,
    needUpdate : state.search.needUpdate
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,ActionTypes>, props: Props) => ({
    startFetch: bindActionCreators(startFetch, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);