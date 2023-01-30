import {config} from 'dotenv'

config()

export const APP_PORT =  process.env.PORT || 4002
export const DB_USER =  process.env.DB_USER || 'meicapp'
export const DB_PASSWORD =  process.env.DB_PASSWORD ||'appmeicno023'
export const DB_HOST =  process.env.DB_HOST || '127.0.0.1'
export const DB_DATABASE =  process.env.DB_DATABASE || 'meic'
export const DB_PORT =  process.env.DB_PORT ||3306



