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

export class subscription{
    subscriptionid:number;
    player:Player;
    sport:Sport;
}