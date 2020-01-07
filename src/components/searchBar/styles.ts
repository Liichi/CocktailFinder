import {StyleSheet, Dimensions} from 'react-native';

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
        fontSize: Dimensions.get('window').width * 0.04,
    },
    searchIcon: {
        marginLeft: 15,
        marginRight: 10
    }
});

export default styles;