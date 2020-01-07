import {StyleSheet} from 'react-native';
import {rs} from '../../styled';

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
        maxHeight: rs(90),
        minHeight: rs(90)
    },
    error:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        maxHeight : rs(40)
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
    },
    screen:{
        flex: 1
    }
});

export default styles;