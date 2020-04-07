import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginTop: 15,
        color: '#A134D6',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logo: {
        height: '35%',
        marginTop: 45,
        marginBottom: 45,
        resizeMode: 'contain'
    }, 
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    register:{
        marginBottom: 10,
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'center',
        padding: 10
    },
    registerText: {
        fontSize: 12
    },
    input: {
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#A134D6',
        marginTop: 15,
        marginBottom: 0,
        width: '80%',
        height: 40
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 7,
        backgroundColor: '#A134D6',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;