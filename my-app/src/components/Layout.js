import { FlatList, StyleSheet, View } from "react-native";
import CardAnimals from "./Card";
import dataAnimal from "../data/data";

const data = dataAnimal;

if (data.length % 2 !== 0) {
    data.push({ idn: null });

}

const LayoutApp = () => {
    return (
        <FlatList 
            data={data}
            numColumns={2}
            renderItem={
                ({ item }) => item.idn ? <CardAnimals data={item} /> : <View style={styles.emptyItem} />
            }
            style={styles.card}
        />
     );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '100%',
        padding: 10,
        marginBottom: 10,
    },
    emptyItem: {
        flex: 1,
    },
})
 
export default LayoutApp;