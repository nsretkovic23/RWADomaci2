    const axios=require('axios');

    export const convert = async (fromCurrency:String, toCurrency:String, amount:number):Promise<number>=>{
        const getData = await axios.get(`http://apilayer.net/api/live?access_key=d06c19ba416eec29f355fcce290f4458&currencies=${toCurrency},${fromCurrency}&source=USD&format=1`);
        
        const from:number=getData.data.quotes[`USD${fromCurrency}`];
        const to:number=getData.data.quotes[`USD${toCurrency}`];
        const result:number=(to/from)*amount;
        //return (from===NaN || from===undefined || isNaN(to) || isNaN(amount)) ? -1 : ((to/from)*amount);
       return new Promise<number>((resolve,reject)=>{
           if(!isNaN(from) && !isNaN(to) && !isNaN(amount) && !isNaN(result))
           resolve(result);
           else
           reject(()=>-1);
       })
    }
