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
    Divider
    } from "native-base";
import {TouchableOpacity } from 'react-native';
import React, {Component, useState} from "react";

const Payment = () =>{
    const [count, setCount] = useState(0);
  let plus =()=>{
    setCount(count+1)
  }
  let minus =()=>{
    setCount(count-1)
  }

    return(
        <View justifyContent={'space-between'} flexDirection={'row'} paddingY={1} paddingX={21} bottom={0} position={'absolute'} backgroundColor={'#FFFFE7'} height={76} width={'100%'}>
            <View>
                <Text fontSize="2xl" color="#3B454D">Payment</Text>
                <Text fontSize={18}>IDR {count*2500000}</Text>
            </View>
            <TouchableOpacity >
                <Box top={2.5} borderRadius={10} justifyContent={'center'} width={120} height={45} backgroundColor={'#D19E00'}>
                    <Text color={'white'} fontSize={'16'} textAlign={'center'}>Checkout</Text>
                </Box>
            </TouchableOpacity>
        </View>
    );
}

export default Payment;