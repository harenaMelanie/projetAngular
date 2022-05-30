export interface Livre {
    id:number,
    Name: string,
    local: string,
    title:string,
    imageUrl:string;
    isDeleted:boolean;
    nbLike:number;
    comment:string[];
    clickComment:boolean;
}

