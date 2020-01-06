import {TextInput, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React,{} from 'react';
import {View,StyleSheet} from 'react-native';
import {startFetch, ActionTypes} from '../actions/search'
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { RootState } from '../store/store';

interface State {
    timer : any,
    searchText : string
}

interface Props {
    searchText : string,
    startFetch : Function,
    isFetching : boolean,
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
        let tmpTimer = setInterval(this.checkForDataUpdate, 1000);
        this.setState({timer: tmpTimer});
    }
    
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    checkForDataUpdate =() => {
        if(!this.props.isFetching){
            if(this.props.searchText != this.state.searchText){
                this.props.startFetch(this.state.searchText); 
            }
        }
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
        maxWidth: '80%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    },
    searchIcon: {
        marginLeft: 15,
        marginRight: 10
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);