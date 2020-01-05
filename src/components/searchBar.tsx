import {TextInput, ActivityIndicator} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import React,{} from 'react';
import {View,StyleSheet} from 'react-native';
import {startFetch, ActionTypes} from '../actions/search'
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import {SearchState} from '../reducers/search'
import { RootState } from '../store/store';

interface State {
    searchText : string
    //controller : AbortController
}

interface Props {
    //dispatch: Dispatch<AnyAction>
    //searchText : string,
    startFetch : Function,
    isFetching : boolean
}

class SearchBar extends React.Component<Props,State> {
    constructor(props : Props){
        super(props);

        this.state = {
            searchText: '',
            //controller: new AbortController()
        };
        //const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(false);
    }
    
    onChangeText = (text) => {
        this.setState({searchText: text.text});
        //this.state.controller.abort();
        //this.props.searchText = text.text;
        this.props.startFetch(text.text);   
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <Icon style={styles.searchIcon} name="ios-search" color="#ccc" size={25} />
                <TextInput value={this.state.searchText} onChangeText={text => this.onChangeText({ text })} style={styles.searchBar} placeholder='Search'></TextInput>
                {this.props.isFetching &&
                    <ActivityIndicator size="large" color="#6b7585"/>
                }
            </View>
        );
    }
}

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

const mapStateToProps = (state: RootState, props: Props) => ({
    isFetching : state.search.isFetching
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,ActionTypes>, props: Props) => ({
    startFetch: bindActionCreators(startFetch, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);