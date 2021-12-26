import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
const Homel = () => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <Text> Subjects </Text>
            <View
            >
                <FlatList
                    data={[
                        require('./Images/chemistry.jpg'),
                        require('./Images/English.jpg'),
                        require('./Images/Math.png'),
                        require('./Images/Gk.jpg'),
                        require('./Images/Physics.jpg'),
                    ]}
                    // keyExtractor={
                    //   (index) => { return index }
                    // } 

                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.view}>
                                <Image
                                    style={styles.image}
                                    source={item} />
                                <View style={styles.insideImage}>
                                    <Text style={styles.text}> {item.title}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 20
    },
    insideImage: {
        position: 'absolute',
        marginLeft: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
});
export default Home;
