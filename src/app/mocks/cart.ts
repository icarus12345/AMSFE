import cartListJson from './json/cart.list.json';
export const cart = [

    {
        url: /cart/,
        method: 'get',
        response: (config: any)=>{
            return cartListJson
        }
    }
]