import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: '#A134D6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu: {
        backgroundColor: '#A134D6',
    },
    subMenu: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
    }
})

export default styles