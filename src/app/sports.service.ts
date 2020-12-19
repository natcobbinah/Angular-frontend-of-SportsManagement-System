import { Injectable } from '@angular/core';
import {StaffData} from './staff.model';
import {drinkData} from './drinks.model';
import {gameData} from './game.model';
import {playerData} from './player.model';
import {selectgameData} from './selectgame.model';
import {drinksboughtData} from './getdrinksbought.model';
import {subscription} from './subscription.model';
import {playerspersubscription} from './playersperSubscription.model';
import {Observable,of, from } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

   baseURL:string = 'http://localhost:8090/sportsClub';

  staffUrl:string = this.baseURL + '/personnelModule/staff';
  drinksUrl:string = this.baseURL +'/personnelModule/drink';
  gamesUrl:string = this.baseURL +'/personnelModule/sport';
  playerUrl:string = this.baseURL +'/personnelModule/players';
  savePlayerUrl:string = this.baseURL +'/registerModule/player';
  subscriptionUrl:string = this.baseURL +'/registerModule/subscription';
  playersperActivityUrl:string = this.baseURL + '/registerModule/activityplayers/';
  drinksboughtUrl:string = this.baseURL + '/registerModule/getdrinksbought';

  constructor(private http:HttpClient) {
  }

  getAllStaff():Observable<StaffData[]>{
    return this.http.get(this.staffUrl).pipe(
       map((data: any[]) => data.map((item: any) => {
           const model = new StaffData();
           Object.assign(model, item);
           return model;
        }))
        );
  }

  getAllDrinks():Observable<drinkData[]>{
    return this.http.get(this.drinksUrl).pipe(
       map((data: any[]) => data.map((item: any) => {
           const model = new drinkData();
           Object.assign(model, item);
           return model;
        }))
        );
  }

  getAllGames():Observable<gameData[]>{
    return this.http.get(this.gamesUrl).pipe(
       map((data: any[]) => data.map((item: any) => {
           const model = new gameData();
           Object.assign(model, item);
           return model;
        }))
        );
  }

  getAllGamesToSelect():Observable<selectgameData[]>{
   return this.http.get(this.gamesUrl).pipe(
      map((data: any[]) => data.map((item: any) => {
          const model = new selectgameData();
          Object.assign(model, item);
          return model;
       }))
       );
 }

  getAllPlayers():Observable<playerData[]>{
    return this.http.get(this.playerUrl).pipe(
       map((data: any[]) => data.map((item: any) => {
           const model = new playerData();
           Object.assign(model, item);
           return model;
        }))
        );
  }

  getAllSubscriptions():Observable<subscription[]>{
    return this.http.get(this.subscriptionUrl).pipe(
       map((data: any[]) => data.map((item: any) => {
           const model = new subscription();
           Object.assign(model, item);
           return model;
        }))
        );
  }

  getAllPlayersPerSubscription(activity:number):Observable<playerspersubscription[]>{
   return this.http.get(this.playersperActivityUrl + activity).pipe(
      map((data: any[]) => data.map((item: any) => {
          const model = new playerspersubscription();
          Object.assign(model, item);
          return model;
       }))
   ); 
 }

 getAllDrinksbought():Observable<drinksboughtData[]>{
   return this.http.get(this.drinksboughtUrl).pipe(
      map((data: any[]) => data.map((item: any) => {
          const model = new drinksboughtData();
          Object.assign(model, item);
          return model;
       }))
   ); 
 }

  
}
