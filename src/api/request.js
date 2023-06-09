import axios from "axios"

const BASE_URL='https://github.com/bsc-com-34-19/hotelsytem-api'


const getHotels=()=>axios.get(`${BASE_URL}/hotels`)

const getHotelBySlug=(slug)=>axios.get(`${BASE_URL}/hotels/${slug}`)


export {getHotels,getHotelBySlug}