import { convert } from "./convert";
import { country } from "./country";
import { drawDoc } from "./drawDoc"

const axios= require("axios");

    //editable elements
    let fromCurrInput:HTMLInputElement=document.createElement("input");
    let toCurrInput:HTMLInputElement=document.createElement("input");
    let amntInput:HTMLInputElement=document.createElement("input");
    let convertBtn:HTMLButtonElement=document.createElement("button");
    let conversionResultLbl:HTMLLabelElement=document.createElement("label");
    let firstCountryLbl:HTMLLabelElement=document.createElement("label");
    let secondCountryLbl:HTMLLabelElement=document.createElement("label");
    let cntrDiv:HTMLDivElement=document.createElement("div");;


    drawDoc(fromCurrInput, toCurrInput, amntInput, convertBtn, conversionResultLbl, 
        cntrDiv, firstCountryLbl, secondCountryLbl);

    convertBtn.onclick=(ev) =>{
        
        if(fromCurrInput.value==="" || toCurrInput.value==="" || amntInput.value==="")
        {
            alert("Niste popunili sva polja!");
            return;
        }

        conversionResultLbl.innerHTML="";
        firstCountryLbl.innerHTML="Countries where you can use ";
        secondCountryLbl.innerHTML="Countries where you can use ";
        cntrDiv.style.visibility="visible";

        //pitaj ovde da li je cilj da prvo loguje num ili moze i after ispred(mozda kao dokaz da rade 2 threada?)
        convert(fromCurrInput.value, toCurrInput.value, parseInt(amntInput.value))
        .then((num)=>{
            conversionResultLbl.innerHTML=`Converted value:` + num.toFixed(2);
            console.log(num);
        })
        .catch((num)=> {conversionResultLbl.innerHTML="Error, wrong currency"});

        country(fromCurrInput.value).then((countries)=>
        {
            firstCountryLbl.innerHTML+=`${fromCurrInput.value} : `;
            countries.forEach((cntry)=>{
                firstCountryLbl.innerHTML+=`${cntry}, `;
            })
        })
        .catch((msg)=>firstCountryLbl.innerHTML="Error no currency found");

        country(toCurrInput.value).then((countries)=>
        {
            secondCountryLbl.innerHTML+=`${toCurrInput.value} : `;
            countries.forEach((cntry)=>{
                secondCountryLbl.innerHTML+=`${cntry}, `;
            })
        })
        .catch((msg)=>secondCountryLbl.innerHTML="Error no currency found");

        console.log("after");
    }
