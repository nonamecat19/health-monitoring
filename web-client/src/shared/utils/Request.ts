import axios from "axios";
import {GET, RequestMethod, RequestPath, TOKEN_NAME} from "../constants";

export type ResponseType = {
  isError: boolean
  data: any
  errorMessage: string
  status: number
}

export const Request = async (method: RequestMethod, path: RequestPath, params: any = {}): Promise<ResponseType> => {
  let myPath = path
  if (params && method === GET) {
    myPath += '?' + new URLSearchParams(params).toString()
  }

  const token = localStorage.getItem(TOKEN_NAME) ?? ''
  const options = {
    method: method,
    url: myPath,
    data: params,
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  try {
    const response = await axios.request(options)
    return {
      isError: false,
      data: response.data,
      errorMessage: '',
      status: response.status
    }
  } catch (error: any) {
    return {
      isError: true,
      data: null,
      errorMessage: error.message,
      status: error.status
    }
  }
}
