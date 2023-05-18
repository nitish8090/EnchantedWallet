import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Surface, Stack, Button } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';

function TouchableCard(props) {
    return <TouchableOpacity
        style={[{ width: '90%', height: 70, margin: 10 }, props.style]}
        onPress={props.onPress}>
        <LinearGradient colors={['#525252', '#1b1b1b']}
            style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
            <Text style={{color: 'white', fontSize: 20}}>{props.title}</Text>
        </LinearGradient>
    </TouchableOpacity>
}
export default TouchableCard
