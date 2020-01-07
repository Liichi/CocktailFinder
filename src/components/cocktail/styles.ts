import {StyleSheet, Dimensions} from 'react-native';

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
        maxHeight: Dimensions.get('window').height / 4.5,
        minHeight: Dimensions.get('window').height / 4.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: Dimensions.get('window').width * 0.06,
        marginRight: 10,
        marginLeft: 15,
        maxWidth: Dimensions.get('window').width * 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumb: {
        marginLeft: 15,
        marginRight: 10,
        width: Dimensions.get('window').height / 5.5,
        height: Dimensions.get('window').height / 5.5,
        borderRadius:1000
    }
});

export default styles;