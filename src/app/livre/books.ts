import { Livre } from "../@core/model/livre";

export const Books : Livre[] = [
    {
        id:0,
        Name:"Nerone Restorante Italiano",
        local:"Italian, Mediteranean",
        title:"Best(Italian) restaurant in Tana",
        imageUrl:"/assets/ts1.jpg",
        isDeleted:true,
        nbLike:0,
        comment:[],
        clickComment:false
        
        
    },
    {
        id:1,
        Name:"Restaurant Sakamanga",
        local:"French,European",
        title:"Excellent menu, atmosphere, and friendly",
        imageUrl:"/assets/ts2.jpg",
        isDeleted:true,
        nbLike:0,
        comment:[],
        clickComment:true
    },
    {
        id:2,
        Name:"Le Carnivore",
        local:"Steakhouse, Brazilian",
        title:"Great food, festive atmosphere",
        imageUrl:"/assets/ts3.jpg",
        isDeleted:false,
        nbLike:0,
        comment:[],
        clickComment:false
        
    },
    {
        id:3,
        Name:"Les 3 Metises Antananarivo",
        local:"French, European",
        title:"Good food, somewhat expensive",
        imageUrl:"/assets/ts4.jpg",
        isDeleted:false,
        nbLike:0,
        comment:[],
        clickComment:false
    },
]