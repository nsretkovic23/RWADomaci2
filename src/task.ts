export class task
{
    public description:string;
    public date:string;

    constructor(desc:string, date:string)
    {
       
        this.description=desc;
        this.date=date;
    }

    drawTask(panel:HTMLElement)
    {
        const eventDiv=document.createElement("div");
        eventDiv.classList.add("task");
        panel.appendChild(eventDiv);

        const dateLbl=document.createElement("label");
        dateLbl.innerHTML=this.date;
        eventDiv.appendChild(dateLbl);

        const descLbl=document.createElement("label");
        descLbl.innerHTML="Description:";
        eventDiv.appendChild(descLbl);

        const desc=document.createElement("label");
        desc.innerHTML=this.description;
        eventDiv.appendChild(desc);

    }


}