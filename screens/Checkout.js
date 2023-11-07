import {
    NativeBaseProvider,
    ScrollView,
    Flex,
    Box,
    Image,
    View,
    Pressable,
    Text,
    Container,
    Divider,
    Radio,
    } from "native-base";
import {TouchableOpacity } from 'react-native';
import Payment from "../components/Payment";
import React, {Component, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import Address from "./Address";

const Checkout = ()=>{
    const [value, setValue] = React.useState('one');
    const [selectedValue, setSelectedValue] = useState("");
    const navigation = useNavigation();
    return(
        <NativeBaseProvider>
            
            <View width={'100%'} marginBottom={79} alignItems={'center'} height={'100%'} backgroundColor={'grey'}>
                
                <ScrollView marginBottom={79}>
                    <TouchableOpacity>
                        <Box justifyContent={'center'} padding={3} marginY={5} height={135} width={360} backgroundColor={'#FEFFC1'} borderRadius={10} alignSelf={'center'}>
                            <Text fontWeight={'bold'} fontSize={16}>Brody Pentagon</Text>
                            <Text color={'#89580A'} fontSize={12}>darkside@gmail.com</Text>
                            <Text color={'#89580A'} fontSize={12}>+14987889999</Text>
                            <Text fontWeight={'bold'} fontSize={14}>Leibnizstraße 16, Wohnheim 6, No: 8X Clausthal-Zellerfeld, Germany</Text>
                        </Box>
                    </TouchableOpacity>
                    
                    
                    <Text fontSize={15} fontWeight={'bold'} color={'#212529'}>Payment</Text>
                    <Radio.Group
                    name="myRadioGroup"
                    value={value}
                    onChange={(nextValue) => {
                        setValue(nextValue);
                    }}
                    >
                        <Box
                        selected={selectedValue === "option1"}
                        onPress={() => setSelectedValue("option1")}
                        style={selectedValue === "option1" ? styles.selectedRadioButton : styles.unselectedRadioButton}
                        padding={3} justifyContent={'center'} my={3} borderRadius={10} alignSelf={'center'} height={66} width={348} backgroundColor={'#FEFFC1'}>
                            <Radio value="one" my="1">DANA</Radio>
                        </Box>
                        <Box
                        selected={selectedValue === "option2"}
                        onPress={() => setSelectedValue("option2")}
                        style={selectedValue === "option2" ? styles.selectedRadioButton : styles.unselectedRadioButton}
                        padding={3} justifyContent={'center'} my={3} borderRadius={10} alignSelf={'center'} height={66} width={348} backgroundColor={'#FEFFC1'}>
                            <Radio my="1">Bank</Radio>
                        </Box>
                        {/* <Box
                        selected={selectedValue === "option3"}
                        onPress={() => setSelectedValue("option3")}
                        style={selectedValue === "option3" ? styles.selectedRadioButton : styles.unselectedRadioButton}
                        padding={3} justifyContent={'center'} my={3} borderRadius={10} alignSelf={'center'} height={66} width={348} backgroundColor={'#FEFFC1'}>
                            <Radio my="1">Gopay</Radio>
                        </Box> */}
                    </Radio.Group>
                    <Text my={3}>Item Detail</Text>
                    <Box padding={3} flexDirection={'row'} alignSelf={'center'} borderRadius={10} backgroundColor={'#FEFFC1'} height={112} width={346}>
                        <Image justifyContent={'center'} marginRight={3} alignSelf={'center'} marginTop={15} width={90} height={65.95} alt="laci" source={{uri:"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/553/0555306_PE660432_S5.webp"}} />
                        <View justifyContent={'center'} flexDirection={'column'}>
                            <Text>NORDLI</Text>
                            <Text>Drawer</Text>
                            <Text>Rp 2.500.000</Text>
                        </View>
                        
                    </Box>
                    
                </ScrollView>
                <View zIndex={999} justifyContent={'space-between'} flexDirection={'row'} paddingY={1} paddingX={21} bottom={0} position={'absolute'} backgroundColor={'#FFFFE7'} height={76} width={'100%'}>
                    <View>
                        <Text fontSize="2xl" color="#3B454D">Payment</Text>
                        <Text fontSize={18}>IDR </Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate('Address')}>
                        <Box top={2.5} borderRadius={10} justifyContent={'center'} width={120} height={45} backgroundColor={'#D19E00'}>
                            <Text color={'white'} fontSize={'16'} textAlign={'center'}>Checkout</Text>
                        </Box>
                    </TouchableOpacity>
                </View>
            </View>
            
        </NativeBaseProvider>
    )
}

const styles = {
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    selectedRadioButton: {
      backgroundColor: '#FFFD86', // Ganti warna latar belakang saat dipilih
    },
    unselectedRadioButton: {
      backgroundColor: '#FEFFC1', // Ganti warna latar belakang saat tidak dipilih
    },
  };

export default Checkout;