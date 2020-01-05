import {TextInput, ActivityIndicator} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import React,{} from 'react';
import {View,StyleSheet} from 'react-native';
import {startFetch, ActionTypes} from '../actions/search'
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { RootState } from '../store/store';

interface State {

}

interface Props {
    searchText : string,
    startFetch : Function,
    isFetching : boolean
}

class SearchBar extends React.Component<Props,State> {
    constructor(props : Props){
        super(props);
    }
    
    onChangeText = (text) => {
        this.props.startFetch(text.text);   
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <Icon style={styles.searchIcon} name="ios-search" color="#ccc" size={25} />
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
    searchText : state.search.searchText
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,ActionTypes>, props: Props) => ({
    startFetch: bindActionCreators(startFetch, dispatch)
});

const styles = StyleSheet.create({
    searchBar: {
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
    searchIcon: {
        marginLeft: 10,
        marginRight: 10
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);