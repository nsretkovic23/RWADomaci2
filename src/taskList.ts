import{task} from './task';


export class taskList{
    
    public cards:number;
    public tiles:HTMLElement[]=[];
    public container:HTMLElement;
    public tasks:task[]=[];

    constructor(panel:HTMLElement)
    {
        this.container=panel;
    }

    drawTile(_task:task)
    {
            let tiles=document.createElement("div");
            tiles.classList.add("tile");
            this.container.appendChild(tiles);

            this.tasks.push(_task);
            this.tasks[this.tasks.length-1].drawTask(tiles);
    }

    drawAllTasks()
    {
        if(this.tasks.length===0)
        {
            alert("No tasks added");
            return;
        }
        
        this.tasks.forEach((el)=>{
            let tiles=document.createElement("div");
            tiles.classList.add("tile");
            this.container.appendChild(tiles);

            el.drawTask(tiles);
        })
    }


}