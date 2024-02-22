import { View, Text, StyleSheet, Button } from 'react-native';
import {FC} from "react"
import { PostImage, RoutStackParams } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
type PostImageNavigationType =NativeStackNavigationProp<RoutStackParams, "Detail">
const LastFiveDaysImages: FC<PostImage> = ({date,title,url,explanation}) => {
  

  const {navigate} = useNavigation<PostImageNavigationType>()
  const handlerViewsPress =()=>{
    navigate("Detail",{title,date,url,explanation })
  }
  return (
    <View style={style.container}>
      <Text style={style.title} >{title}</Text>
      <Text style={style.date} >{date}</Text>
      <View style={style.btnContainer}>
        <Button title='View' onPress={handlerViewsPress}></Button>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container:{
    backgroundColor: "#2c449d",
    borderRadius:32,
    borderWidth:2,
    borderColor:"#fff",
    marginVertical:15,
    marginHorizontal:62,
    
    padding:25
  },
  title:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
 },
 date:{
  color:"white"
},
btnContainer:{ alignItems:"flex-end"}
})
export default LastFiveDaysImages;
