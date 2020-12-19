interface Player{
    playerid:number;
    firstname:string;
    lastname:string;
    location:string;
}

interface drink{
    drinkid:number;
    drinkcost:number;
    drinkname:string;
    drinktype:string;
}

export class drinksboughtData{
    id:number;
    boughtdate:Date;
    player:Player;
    drink:drink;
}
