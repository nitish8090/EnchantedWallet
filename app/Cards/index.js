import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from "react-native";
import { Surface, Stack, Button } from "@react-native-material/core";
import SafeViewAndroid from "../SafeViewAndroid";
import theme from '../constants';
import { useRouter } from 'expo-router';
import CardComponent from "./cardComponent";

export default function Cards() {

    const router = useRouter();

    function openNewCardForm(){
        router.push(`Cards/newCardForm`);
    }


    const cardsData = [
        {
            image: require('../assets/icici.png'),
        },
        {
            image: require('../assets/axis.png'),
        }
    ]

    const cards = []
    for (i = 0; i < 2; i++) {
        cards.push(
            <CardComponent image={cardsData[i].image} key={i} />
        )
    }

    return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, theme.darkMode]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                {cards}
                <Button title='New' onPress={openNewCardForm}></Button>
            </ScrollView >
        </SafeAreaView>
    )
}
