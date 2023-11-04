import React from "react";
import { NativeBaseProvider,ScrollView,Flex, Box, Image, View, Pressable, Text  } from "native-base";
import {TouchableOpacity } from 'react-native';
const Bottom = ()=>{
    return(
        <NativeBaseProvider>
            <Flex direction="row">
                <TouchableOpacity>
                    <Image height={42} width={42} alt="back" source={require('../assets/asset_app/back.png')}/>
                </TouchableOpacity>
            </Flex>
            
            
        </NativeBaseProvider>
    );
}

export default Bottom;