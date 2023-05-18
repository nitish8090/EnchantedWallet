
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from "react-native";
import { Surface, Stack, Button } from "@react-native-material/core";
import SafeViewAndroid from "../SafeViewAndroid";
import theme from '../constants';
import { useRouter } from 'expo-router';


function CardComponent(props) {
    return <View
        style={{ width: '90%', aspectRatio: '16/9', alignItems: 'center', justifyContent: 'center', margin: 5 }}
    >
        <ImageBackground
            resizeMode="stretch"
            style={{ width: '100%', height: '100%' }}
            source={props.image}
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
}

export default CardComponent
