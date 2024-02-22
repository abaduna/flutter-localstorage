import React from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RoutStackParams } from '../../types'
import Header from '../../conponets/Header/Header'


const Detail = () => {
  const {params:{title,url,explanation,date}} = useRoute<NativeStackScreenProps<RoutStackParams,"Detail">["route"]>()
  return (
    <View style={style.container}>
        <Header/>
        <View  style={style.block}>
          <Text  style={style.title}>{title}</Text>
          <Image  source={{uri:url}} style={style.image}/>
          <Text style={style.explanation}>{explanation}</Text>
          <Text style={style.date}>{date}</Text>
        </View>
        
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:16,
  backgroundColor:"rgba(7,26,93,255)",
  padding:12,
  borderColor:"#fff"
  },
  image:{
    width:"100%",
    borderRadius:32,
    height:300,
    paddingHorizontal:15
  },
  title:{
    color:"#fff",
    textAlign:"center",
    fontSize:25,
    fontWeight:"bold"
  },
  date:{
  color:"#fff",
  fontSize:25,
  fontWeight:"bold"},
  explanation:{
  color:"#fff",
  fontSize:15,
  fontWeight:"bold"},
  block:{
    padding:15
  }
})
export default Detail