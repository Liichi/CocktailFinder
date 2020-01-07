import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    header: {
        flex:1,
        marginTop: 30,
        minWidth: '100%',
        minHeight: Dimensions.get('window').height / 15,
        maxHeight: Dimensions.get('window').height / 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    searchBar : {
        minHeight : '100%'
    }
});

export default styles;