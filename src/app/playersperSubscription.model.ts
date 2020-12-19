interface Player{
    playerid:number;
    firstname:string;
    lastname:string;
    location:string;
}

interface Sport{
    sportid:number;
    sportsname:string;
}

export class playerspersubscription{
    subscriptionid:number;
    player:Player;
    sport:Sport;
}