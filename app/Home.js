import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Surface, Stack, Button } from "@react-native-material/core";
import SafeViewAndroid from "./SafeViewAndroid";

import { useRouter } from 'expo-router';

export default function Home() {

    const router = useRouter();


    function openCards() {
        router.push(`Cards`);
    }
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <Stack fill center spacing={10}>
                <TouchableOpacity
                    style={{ width: '90%', height: 70 }} onPress={openCards}>
                    <Surface
                        elevation={2}
                        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',backgroundColor: 'red' }}
                    >
                        <Text>Cards</Text>
                    </Surface>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '90%', height: 70 }} onPress={openCards}>
                    <Surface
                        elevation={2}
                        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'primary' }}
                    >
                        <Text>Credentials</Text>
                    </Surface>
                </TouchableOpacity>
            </Stack>
        </SafeAreaView>
    )
}
