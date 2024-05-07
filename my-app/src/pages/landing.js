import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

const img = require('../assets/img/landing page.png')
const Landing = () => {
    const navigation = useNavigation();
    return ( 
        <View style={styles.container}>
            <ImageBackground 
                source={img}
                resizeMode="cover"
                style={styles.bg}
            >
                <Text style={styles.title}>Mari Mengenal Nama Nama Hewan</Text>
                <Pressable style={styles.btn}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.t_btn}>Start</Text>
                </Pressable>
            </ImageBackground>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'lightblue',
      },
      bg : {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
      title : {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        opacity: 0.8,
        textAlign: 'center',
        marginTop: 50,
      },
      btn : {
        backgroundColor: '#EE7214',
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        bottom: 120,
        width: 100,
        alignItems: 'center',
      },
      t_btn : {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
      }
})

export default Landing;