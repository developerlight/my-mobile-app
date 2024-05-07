import { StatusBar, StyleSheet, Text, View } from "react-native";

const HeaderApp = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Nama - Nama Hewan</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: '100%',
        padding: 12,
        marginTop: StatusBar.currentHeight,
        borderBottomColor: '#F9E8D9',
        borderBottomWidth: 1,

    },
    title : {
        fontSize: 20,
        color: '#527853',
        fontWeight: 'bold',
    },
})

export default HeaderApp;