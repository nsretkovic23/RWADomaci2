const axios = require('axios');

export const country = async(currecncyCode:String)=>{
    const getData = await axios.get(`https://restcountries.com/v2/currency/${currecncyCode}`);
    //getData vraca niz zemalja sa kompletnim informacijama, potrebno mapirati u niz koji ce sadrzati samo name iz tog jsona
    const countryNames:string[] = (getData.data).map((cntry:any) => cntry.name);

    //console.log(getData.data);
    return new Promise<String[]>((resolve, reject)=>{
        if(countryNames.length!==0)
        resolve(countryNames);
        else
        reject("Error: No countries found");
    })

    //console.log(countryNames);
}