import { StyleSheet, Text, View } from "react-native";
import HeaderApp from "../components/Header";
import LayoutApp from "../components/Layout";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <View style={styles.container}>
            <HeaderApp />
            <LayoutApp />
            <Footer />
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
      },
})

export default Home;