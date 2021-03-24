    const axios=require('axios');

    export const convert = async (fromCurrency:String, toCurrency:String, amount:number):Promise<number>=>{
        const getData = await axios.get(`http://apilayer.net/api/live?access_key=d06c19ba416eec29f355fcce290f4458&currencies=${toCurrency},${fromCurrency}&source=USD&format=1`);
        
        const from:number=getData.data.quotes[`USD${fromCurrency}`];
        const to:number=getData.data.quotes[`USD${toCurrency}`];
        return new Promise<number>((resolve,reject)=>{
            if(from!==NaN && to!==NaN)
            resolve((to/from)*amount);
            else
            reject(-1);
        })
        
    }