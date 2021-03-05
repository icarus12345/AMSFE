import {appJson} from './json/app-json';
import productListJson from './json/product.list.json';
export const app = [

    {
        url: /app-info/,
        method: 'get',
        response: (config: any)=>{
            return appJson
        }
    }, {
        url: /product/,
        method: 'get',
        response: (config: any)=>{
            return productListJson
        }
    }
]