import {StyleSheet} from 'react-native';
import {rs} from '../../styled';

const styles = StyleSheet.create({
    cocktail: {
        flex:1,
        marginTop: 10,
        marginBottom: 10,
        minWidth: '90%',
        maxWidth: '90%',
        marginLeft: 15,
        marginRight: 15,
        height: '30%',
        borderRadius:8,
        backgroundColor: 'white',
        margin: 90,
        maxHeight: rs(150),
        minHeight: rs(150),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: rs(26),
        marginRight: 10,
        marginLeft: 15,
        maxWidth: rs(140),
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumb: {
        marginLeft: 15,
        marginRight: 10,
        width: rs(130),
        height: rs(130),
        borderRadius:1000
    }
});

export default styles;