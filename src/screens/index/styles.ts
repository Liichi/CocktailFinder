import {StyleSheet} from 'react-native';
import {rs} from '../../styled';

const styles = StyleSheet.create({
    index: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    title: {
        color: 'white',
        fontSize: rs(30),
        fontWeight: '100',
        marginBottom: 15
    },
    titleBold:{
        fontWeight: 'bold'
    },
    background: {
        flex: 1,
        minWidth: '100%'
    },
    searchBar: {
        flex: 1,
        width: '90%',
        maxHeight: '28%',
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    },
    searchText: {
        flex: 1,
        width: '100%',
        fontSize: rs(15),
        marginLeft: 0
    },
    searchIcon: {
        marginLeft: 10,
        marginRight: 10
    },
    cocktailIcon: {
        marginTop: 40,
        marginBottom: 10
    }
});

export default styles;