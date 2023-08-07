import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
    paragraph3: {
        color: "#999",
        fontSize: 16,
    },
    paragraph2: {
        color: "#eee",
        fontSize: 18,
    },
    paragraph1: {
        color: "#fff",
        fontSize: 20,
    },

    highlight1: {
        color: "#3bc",
    },

    header3: {
        color: "#999",
        fontSize: 22,
        fontWeight: "600"
    },
    header2: {
        color: "#eee",
        fontSize: 32,
        fontWeight: "600"
    },
    header1: {
        color: "#fff",
        fontSize: 48,
        fontWeight: "600"
    },


    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        paddingHorizontal: 24,
        backgroundColor: "#222",
        borderRadius: 16,
    }


});
export { global };