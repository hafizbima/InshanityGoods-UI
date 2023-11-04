import React from "react";
import { NativeBaseProvider,ScrollView,Flex, Box, Image, View, Pressable, Text  } from "native-base";
import {TouchableOpacity } from 'react-native';
const List = ()=>{
    return(
        <NativeBaseProvider>
            <Flex direction="row">
                <TouchableOpacity>
                    <Image flexDirection={'row-reverse'} height={42} width={42} alt="list" source={require('../assets/asset_app/list.png')}/>
                </TouchableOpacity>
            </Flex>
            
            
        </NativeBaseProvider>
    );
}

export default List;