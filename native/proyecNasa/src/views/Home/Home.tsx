import React, { useEffect, useState } from 'react'
import { View,StyleSheet ,ScrollView} from 'react-native'
import Header from '../../conponets/Header/Header'
import fetchApi from "../../utils/Fech"
import TodayImages from '../../conponets/TodayImages/TodayImages'
import { PostImage } from '../../types'

import {format,sub} from "date-fns"
import LastFiveDaysImages from '../../conponets/LastFiveDaysImages/LastFiveDaysImages'
const Home = () => {
  const [todaysImage, setTodaysImage]= useState<PostImage>({})
  const [lastFiveDaysImages,setLastFiveDaysImages] = useState<PostImage[]>([])
  useEffect(()=>{
    const loadTodatsImage = async ()=>{
      try {
       const todaysImageResponse = await fetchApi()
       setTodaysImage(todaysImageResponse);
       
      } catch (error) {
        console.error(error);
        setTodaysImage({})
        
      }
      
    }
    const loadLast5DaysImages =async()=>{
      try {
        const date = new Date()
        const todaysDate = format(date, "yyyy-MM-dd")
        const fiveDate = format(sub(date,{days:5}),"yyyy-MM-dd")
        console.log(`d ${todaysDate} -5 ${fiveDate}`);
        const lastFiveDaysImagesResponse =  await fetchApi(`&start_date=${fiveDate}&end_date=${todaysDate}`)
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
        
        
        
      } catch (error) {
        console.error(error);
        
      }
    }
    loadLast5DaysImages().catch(null)
    loadTodatsImage().catch(null)
  },[])
  return (
    <ScrollView style={style.container}>
        <Header/>
        <TodayImages {...todaysImage}/>
        {lastFiveDaysImages?.length >0 && lastFiveDaysImages.map((lastDaysImages,index)=>(
          <LastFiveDaysImages {...lastDaysImages} key={index}/>
        ))}
        
    </ScrollView>
  )
}
const style = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: "rgba(7,29,93,255)",
  textAlign:"center"
  },
  containerLast:{
    borderRadius:32
  }
})
export default Home