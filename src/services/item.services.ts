import axios, { AxiosRequestConfig } from 'axios'
import config from 'config'
import { CategoryData } from '../utils/types';

export async function getSearchItems(query: string, limit: number) {
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: 'GET',
      baseURL: config.get('meliUrl'),
      url: '/sites/MLA/search',
      params: {
        q: query,
        limit
      }
    }
    return await axios(axiosConfig)
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getSearchCategory(query: string, limit: number) {
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: 'GET',
      baseURL: config.get('meliUrl'),
      url: '/sites/MLA/domain_discovery/search',
      params: {
        q: query,
        limit
      }
    }
    return await (await axios(axiosConfig)).data[0] as CategoryData
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getItem(id:string){
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: 'GET',
      baseURL: config.get('meliUrl'),
      url:`/items/${id}`,
    }
    return await (await axios(axiosConfig)).data
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getItemDescription(id:string){
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: 'GET',
      baseURL: config.get('meliUrl'),
      url:`/items/${id}/description`,
    }
    return await (await axios(axiosConfig)).data
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getCategoryPathById(id: string) {
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: 'GET',
      baseURL: config.get('meliUrl'),
      url: `/categories/${id}`,
    }
    console.log(axiosConfig)
    return await (await axios(axiosConfig)).data
  } catch (e: any) {
    throw new Error(e);
  }
}
