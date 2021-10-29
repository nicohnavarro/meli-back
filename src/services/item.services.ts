import axios from 'axios'
import config from 'config'

type Data = {
  results:any[];
}

export async function getSearchItems(query:String,limit:Number=50){
  try{
    return await axios.get(`${config.get('meliUrl')}/sites/MLA/search?q=${query}&limit=${limit}`)
  }catch(e:any){
    throw new Error(e);
  }
}