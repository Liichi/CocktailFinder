import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    searchScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        maxHeight: Dimensions.get('window').height / 7.5,
        minHeight: Dimensions.get('window').height / 7.5
    },
    error:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        maxHeight : Dimensions.get('window').height / 15
    },
    errorText:{
        fontSize: 15,
        color: 'white'
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%'
    }
});

export default styles;