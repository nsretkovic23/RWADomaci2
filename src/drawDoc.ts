export const drawDoc =  (fromCurrencyInput:HTMLInputElement, toCurrencyInput:HTMLInputElement, amountInput:HTMLInputElement, 
    convertButton:HTMLButtonElement, resultLbl:HTMLLabelElement, countriesDiv:HTMLDivElement, 
    firstCntryLbl:HTMLLabelElement, secondCntryLbl:HTMLLabelElement) =>
{
    const inputDiv:HTMLDivElement=document.createElement("div");
    inputDiv.classList.add("inputDiv");
    document.body.appendChild(inputDiv);

    const fromLbl:HTMLLabelElement=document.createElement("label");
    fromLbl.innerHTML=" From: ";
    inputDiv.appendChild(fromLbl);

    //fromCurrencyInput=document.createElement("input");
    fromCurrencyInput.maxLength=3; 
    inputDiv.appendChild(fromCurrencyInput);

    const toLbl:HTMLLabelElement=document.createElement("label");
    toLbl.innerHTML=" To: ";
    inputDiv.appendChild(toLbl);

    //toCurrencyInput = document.createElement("input");
    toCurrencyInput.maxLength=3;
    inputDiv.appendChild(toCurrencyInput);
    

    const amountLbl:HTMLLabelElement=document.createElement("label");
    amountLbl.innerHTML=" Amount: ";
    inputDiv.appendChild(amountLbl);

    //amountInput = document.createElement("input");
    amountInput.type="number";
    amountInput.min="1";
    amountInput.maxLength=6;
    inputDiv.appendChild(amountInput);


    //convertButton=document.createElement("button");
    convertButton.innerHTML="Convert";
    convertButton.style.marginLeft="3px";
    inputDiv.appendChild(convertButton);
    

    //resultLbl=document.createElement("label");
    resultLbl.classList.add("rezKonverzijeLbl");
    inputDiv.appendChild(resultLbl);
    

    //countriesDiv=document.createElement("div");
    countriesDiv.classList.add("countriesDiv");
    document.body.appendChild(countriesDiv);
    countriesDiv.style.visibility="hidden";
    

    //firstCntryLbl = document.createElement("label");
    firstCntryLbl.classList.add("firstCountriesLbl");
    countriesDiv.appendChild(firstCntryLbl);
   

    //secondCntryLbl = document.createElement("label");
    secondCntryLbl.classList.add("secondCountriesLbl");
    countriesDiv.appendChild(secondCntryLbl);
    
}