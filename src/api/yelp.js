import axios from 'axios';

console.log(process.env.YELP_API_KEY)
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_YELP_API_KEY}`
  }
})
