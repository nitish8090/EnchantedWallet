import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView  } from "react-native";
import { Surface, Stack, Button } from "@react-native-material/core";
import SafeViewAndroid from "./SafeViewAndroid";

import { useRouter } from 'expo-router';

export default function Cards() {


    const cardsData = [
        {
            image: require('./assets/icici.png'),
        },
        {
            image: require('./assets/axis.png'),
        }
    ]

    const cards = []
    for (i=0;i<2;i++){
        cards.push(
            <View
        style={{ width: '90%', aspectRatio: '16/9', alignItems: 'center', justifyContent: 'center' }}
    >
        <ImageBackground
            resizeMode="stretch"
            style={{ width: '100%', height: '100%' }}
            source={cardsData[i].image}
        >
            <Text style={{
                textAlign: 'center',
                color: 'white',
                position: 'absolute',
                top: '58%',
                left: '10%',
                fontSize: 20
            }}>9876  5432 1234  2586</Text>
        </ImageBackground>
    </View>
        )
    }

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                {cards}
            </ScrollView >
        </SafeAreaView>
    )
}
