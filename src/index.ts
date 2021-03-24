import { convert } from "./convert";
import { country } from "./country"
const axios= require("axios");

    const inputDiv:HTMLDivElement=document.createElement("div");
    inputDiv.classList.add("inputDiv");
    document.body.appendChild(inputDiv);

    const fromLbl:HTMLLabelElement=document.createElement("label");
    fromLbl.innerHTML=" From: ";
    inputDiv.appendChild(fromLbl);

    const fromCurrencyInput:HTMLInputElement=document.createElement("input");
    fromCurrencyInput.maxLength=3; 
    inputDiv.appendChild(fromCurrencyInput);

    const toLbl:HTMLLabelElement=document.createElement("label");
    toLbl.innerHTML=" To: ";
    inputDiv.appendChild(toLbl);
    const toCurrencyInput = document.createElement("input");
    toCurrencyInput.maxLength=3;
    inputDiv.appendChild(toCurrencyInput);

    const amountLbl:HTMLLabelElement=document.createElement("label");
    amountLbl.innerHTML=" Amount: ";
    inputDiv.appendChild(amountLbl);

    const amountInput:HTMLInputElement = document.createElement("input");
    amountInput.type="number";
    amountInput.min="1";
    amountInput.maxLength=6;
    inputDiv.appendChild(amountInput);

    const convertButton:HTMLButtonElement=document.createElement("button");
    convertButton.innerHTML="Convert";
    convertButton.style.marginLeft="3px";
    inputDiv.appendChild(convertButton);
    

    let resultLbl:HTMLLabelElement=document.createElement("label");
    resultLbl.classList.add("rezKonverzijeLbl");
    inputDiv.appendChild(resultLbl);

    const countriesDiv:HTMLDivElement=document.createElement("div");
    countriesDiv.classList.add("countriesDiv");
    document.body.appendChild(countriesDiv);
    countriesDiv.style.visibility="hidden";

    let firstCntryLbl:HTMLLabelElement = document.createElement("label");
    firstCntryLbl.classList.add("firstCountriesLbl");
    countriesDiv.appendChild(firstCntryLbl);

    let secondCntryLbl:HTMLLabelElement = document.createElement("label");
    secondCntryLbl.classList.add("secondCountriesLbl");
    countriesDiv.appendChild(secondCntryLbl);



    convertButton.onclick=(ev) =>{
        
        if(fromCurrencyInput.value==="" || toCurrencyInput.value==="" || amountInput.value==="")
        {
            alert("Niste popunili sva polja!");
            return;
        }

        resultLbl.innerHTML="";
        firstCntryLbl.innerHTML="Countries where you can use ";
        secondCntryLbl.innerHTML="Countries where you can use ";
        countriesDiv.style.visibility="visible";

        //pitaj ovde da li je cilj da prvo loguje num ili moze i after ispred(mozda kao dokaz da rade 2 threada?)
        convert(fromCurrencyInput.value, toCurrencyInput.value, parseInt(amountInput.value))
        .then((num)=>{
            resultLbl.innerHTML=`Converted value:` + num.toFixed(2);
            console.log(num);
        })
        .catch((num)=> {resultLbl.innerHTML="Error, wrong currency"});

        country(fromCurrencyInput.value).then((countries)=>
        {
            firstCntryLbl.innerHTML+=`${fromCurrencyInput.value} : `;
            countries.forEach((cntry)=>{
                firstCntryLbl.innerHTML+=`${cntry}, `;
            })
        })
        .catch((msg)=>firstCntryLbl.innerHTML="Error no currency found");

        country(toCurrencyInput.value).then((countries)=>
        {
            secondCntryLbl.innerHTML+=`${toCurrencyInput.value} : `;
            countries.forEach((cntry)=>{
                secondCntryLbl.innerHTML+=`${cntry}, `;
            })
        })
        .catch((msg)=>secondCntryLbl.innerHTML="Error no currency found");

        console.log("after");
    }
