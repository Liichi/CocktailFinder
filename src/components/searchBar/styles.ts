import {StyleSheet} from 'react-native';
import {rs} from '../../styled';

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        maxWidth: '80%',
        minHeight: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        fontSize: rs(16),
    },
    searchIcon: {
        marginLeft: 15,
        marginRight: 10
    }
});

export default styles;