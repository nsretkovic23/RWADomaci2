import { convert } from "./convert";

const axios= require("axios");

//console.log("proba");

const srbija = async ()  => {
    const zemlja = await axios.get('https://restcountries.com/v2/currency/usd');

   console.log(zemlja.data[0].name);
   console.log(zemlja.data[0].currencies[0].code);
}


    const fromLbl=document.createElement("label");
    fromLbl.innerHTML=" From: ";
    document.body.appendChild(fromLbl);
    const fromCurrencyInput=document.createElement("input");
    fromCurrencyInput.maxLength=3; 
    document.body.appendChild(fromCurrencyInput);

    const toLbl=document.createElement("label");
    toLbl.innerHTML=" To: ";
    document.body.appendChild(toLbl);
    const toCurrencyInput = document.createElement("input");
    toCurrencyInput.maxLength=3;
    document.body.appendChild(toCurrencyInput);

    const amountLbl=document.createElement("label");
    amountLbl.innerHTML=" Amount: ";
    document.body.appendChild(amountLbl);
    const amountInput = document.createElement("input");
    amountInput.type="number";
    amountInput.min="1";
    amountInput.maxLength=6;
    document.body.appendChild(amountInput);

    const convertButton=document.createElement("button");
    convertButton.innerHTML="Convert";
    document.body.appendChild(convertButton);

    let resultLbl=document.createElement("label");
    
    document.body.appendChild(resultLbl);

    convertButton.onclick=(ev) =>{
        resultLbl.innerHTML="";
        const result= convert(fromCurrencyInput.value, toCurrencyInput.value, parseInt(amountInput.value));
        result.then((num:number)=>{resultLbl.innerHTML+=num;}).catch((numb:number)=>{resultLbl.innerHTML+=numb;});
        console.log(result); //reject/catch not working, finish countries where u can use currency
        
    }





//srbija();


//fullname();