import React, { FC } from 'react';
import { Button, Image, StyleSheet, Text, View ,Dimensions,ScrollView} from 'react-native'
import { PostImage, RoutStackParams } from '../../types'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PostImageNavigationType =NativeStackNavigationProp<RoutStackParams, "Detail">

const TodayImages: FC<PostImage> = ({date,title,url,explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationType>()
    const handlerViewsPress =()=>{
      navigate("Detail",{title,date,url,explanation })
    }
  return (
    <ScrollView style={style.container}>

            <Image source={{uri:url}} style={style.image}/>

        <Text style={style.title}>{title}</Text>
        <Text style={style.date}>{date}</Text>
        <View style={style.buttonContainer}>
            <Button title='View' onPress={handlerViewsPress}></Button>            
        </View>

    </ScrollView>
  )
}
const style = StyleSheet.create({
    container:{
        marginVertical:16,
        backgroundColor: "#2c449d",
        borderColor:"white",
        borderWidth:2,
        borderRadius:32,
        padding:25,
        marginHorizontal:62,
        width:"80%",
       },
       
       image:{
        width:"100%",
        borderRadius:32,
        height:190,
        borderWidth:2,
        borderColor:"white",
        paddingHorizontal:15
       },
       title:{
        color:"white",
        fontSize:20,
        marginVertical:12,
        fontWeight:"bold",

       },
       date:{
        color:"white",
        fontSize:16,
        marginVertical:12
       },
       buttonContainer:{
        
        alignItems:"flex-end"
       }
})

export default TodayImages