import {StyleSheet} from 'react-native';
import {rs} from '../../styled';

const styles = StyleSheet.create({
    header: {
        flex:1,
        marginTop: 30,
        minWidth: '100%',
        minHeight: rs(45),
        maxHeight: rs(45),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    searchBar : {
        minHeight : '100%'
    }
});

export default styles;