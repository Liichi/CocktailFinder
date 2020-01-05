import {TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import React,{} from 'react';
import {View,StyleSheet} from 'react-native';
import {startFetch, ActionTypes} from '../actions/search'
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

interface State {
    searchText : string,
    //controller : AbortController
}

interface Props {
    //dispatch: Dispatch<AnyAction>
    startFetch : Function
}

class SearchBar extends React.Component<Props,State> {
    constructor(props){
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
        if(text.text.length > 3)
            this.props.startFetch(text.text);   
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <Icon style={styles.searchIcon} name="ios-search" color="#ccc" size={25} />
                <TextInput onChangeText={text => this.onChangeText({ text })} style={styles.searchBar} placeholder='Search'></TextInput>
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

const mapStateToProps = (state: State, props: Props) => ({
    //searchString : props.searchString
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,ActionTypes>, props: Props) => ({
    startFetch: bindActionCreators(startFetch, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);