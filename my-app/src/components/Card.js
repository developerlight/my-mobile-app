import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const CardAnimals = ({ data }) => {
    return (
        <Pressable style={styles.container}
            onPress={() => alert('Anda memilih ' + data.key)}
        >
            <View style={styles.v_img}>
                <Image 
                    source={data.img}
                    style={styles.img}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.t_content}>{data.idn}</Text>
                <Text style={styles.en_content}>{data.eng}</Text>
            </View>
        </Pressable>
     );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 200,
        backgroundColor: '#f9c2ff',
        borderRadius: 10,
        margin: 2,
    },
    v_img: {
        width: '100%',
        height: 150,
        backgroundColor: 'lightblue',
        borderTopLeftRadius: 10,
    },
    img : {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
    },
    content : {
        flex: 1,
        paddingLeft: 10,
        backgroundColor: '#F7B787',
        justifyContent: 'center',
    },
    t_content: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    en_content: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'sans-serif-light',
        fontStyle: 'italic',
    },
})

export default CardAnimals;