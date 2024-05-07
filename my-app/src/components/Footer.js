import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.txt}>Created Developer Light</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#527853',
        alignItems: 'center',
    },
    txt : {
        fontSize: 16,
        color: '#fff',
        padding: 10,
    },
})

export default Footer;