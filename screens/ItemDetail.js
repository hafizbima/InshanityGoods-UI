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
    useNavigation
    } from "native-base";
import {TouchableOpacity } from 'react-native';
import Payment from "../components/Payment";
import React, {Component, useState} from "react";


const ItemDetail = ({navigation})=>{
    // const navigation = useNavigation;
        const [count, setCount] = useState(0);
    let plus =()=>{
        setCount(count+1)
    }
    let minus =()=>{
        setCount(count-1)
    }

    return(
        <NativeBaseProvider>
            <View backgroundColor={'white'} paddingBottom={76} paddingTop={21} paddingX={21} height={'100%'} width={'100%'}>
                <View flexDirection={'row'} justifyContent={'space-between'}>
                    <TouchableOpacity>
                        <Image left={0} position={'absolute'} alignSelf={'flex-end'} source={require('../assets/asset_app/back.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image right={0} position={'absolute'} source={require('../assets/asset_app/list.png')}/>
                    </TouchableOpacity>
                </View>

                <ScrollView zIndex={-1}>
                    <Image alignSelf={'center'} marginTop={15} width={348} height={255} alt="laci" source={{uri:"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/553/0555306_PE660432_S5.webp"}}/>
                    <Image alt="save" alignSelf={'flex-end'} source={require('../assets/asset_app/save.png')}/>
                    <Text color={'#89580A'} fontWeight={'bold'} fontSize={20}>NORDLI</Text>
                    <View display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Text flex={2} fontSize={16}>IDR 2.500.000</Text>
                        <TouchableOpacity disabled={count===0} onPress={minus}>
                            <Box borderRadius={10} height={36} width={36} backgroundColor={'#89580A'} alignItems={'center'} justifyContent={'center'}><Text color={'white'} fontSize={24}>-</Text></Box>
                        </TouchableOpacity>
                        <Text marginX={5} fontSize={22}>{count}</Text>
                        <TouchableOpacity onPress={plus}>
                            <Box borderRadius={10} height={36} width={36} backgroundColor={'#89580A'} alignItems={'center'} justifyContent={'center'}><Text color={'white'} fontSize={24}>+</Text></Box>
                        </TouchableOpacity>
                        
                    </View>
                    <Divider thickness={2} bg={'black'} my={3}/>
                    {/* <Text fontWeight={'bold'} color={'#89580A'} fontSize={16}>Color</Text>
                    <View flexDirection={'row'} justifyContent={'space-between'} width={'45%'}>
                        <Box elevation={2} my={2} borderRadius={10} height={'48px'} width={'48px'} backgroundColor={'#E7E7E7'}/>
                        <Box my={2} borderRadius={10} height={'48px'} width={'48px'} backgroundColor={'#89580A'}/>
                        <Box my={2} borderRadius={10} height={'48px'} width={'48px'} backgroundColor={'#56524F'}/>
                    </View> */}
                    <Text fontWeight={'bold'}>Description</Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </ScrollView>
                
                
            </View>
            {/* <Payment/> */}
        <View zIndex={999} justifyContent={'space-between'} flexDirection={'row'} paddingY={1} paddingX={21} bottom={0} position={'absolute'} backgroundColor={'#FFFFE7'} height={76} width={'100%'}>
            <View>
                <Text fontSize="2xl" color="#3B454D">Payment</Text>
                <Text fontSize={18}>IDR {count*2500000}</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Checkout')}>
                <Box top={2.5} borderRadius={10} justifyContent={'center'} width={120} height={45} backgroundColor={'#D19E00'}>
                    <Text color={'white'} fontSize={'16'} textAlign={'center'}>Checkout</Text>
                </Box>
            </TouchableOpacity>
        </View>
        </NativeBaseProvider>
            
            
        
        
    )
}

export default ItemDetail;