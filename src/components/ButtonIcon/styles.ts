import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({


    container: {
        width: '100%',
        height: 65,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        alignItems:'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line,
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',

    },
    icon: {
        width: 24,
        height: 18
    },

})