import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, Modal, StyleSheet, Pressable } from "react-native";
import { Surface, Stack, Button } from "@react-native-material/core";
import SafeViewAndroid from "../SafeViewAndroid";
import theme from '../constants';
import { useRouter } from 'expo-router';
import { useRef, useState, useEffect } from 'react';

import CardComponent from "./cardComponent"

export default function NewCardForm() {
  const [modalVisible, setModalVisible] = useState(false);
  const [companyModalVisible, setCompanyModalVisible] = useState(false);

  const [company, setCompany] = useState('Axis')

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    companyCards: {
      flexWrap: 'wrap',
      flexDirection: 'row'
    },
    companyCard: {
      padding: '10px',
      margin: '10px',
      borderRadius: '10px',
      backgroundColor: 'grey'
    }
  });

  var Banks = ['Axis', 'ICICI', 'SBI', 'HDFC']

  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, theme.darkMode]}>
      <Text style={{ color: 'white' }}>ADD NEW CARD</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={companyModalVisible}
        onRequestClose={() => {
          setCompanyModalVisible(!companyModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.companyCards}>
              {Banks.map((i) => (
                <TouchableOpacity
                  style={styles.companyCard}
                  onPress={() => { setCompany(i); setCompanyModalVisible(!companyModalVisible) }}>
                  <Text>{i}</Text>
                </TouchableOpacity>
              ))}

            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setCompanyModalVisible(!companyModalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>



      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CardComponent image={require('../assets/axis.png')} />
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
          <Button title={`(${company}) Company`} onPress={() => setCompanyModalVisible(!companyModalVisible)} style={{ margin: '20px' }} />
          <Button title='lol' onPress={() => setModalVisible(!modalVisible)} style={{ margin: '20px' }} />
          <Button title='lol' onPress={() => setModalVisible(!modalVisible)} style={{ margin: '20px' }} />
          <Button title='lol' onPress={() => setModalVisible(!modalVisible)} style={{ margin: '20px' }} />
          <Button title='lol' onPress={() => setModalVisible(!modalVisible)} style={{ margin: '20px' }} />
        </View>
      </ScrollView>



    </SafeAreaView>
  )
}