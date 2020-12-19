import { Component, OnInit } from '@angular/core';
import {StaffData} from '../staff.model';
import {drinkData} from '../drinks.model';
import {gameData} from  '../game.model';
import {playerData} from '../player.model';
import {selectgameData} from '../selectgame.model';
import {playerspersubscription} from '../playersperSubscription.model';
import {subscription} from '../subscription.model';
import {drinksboughtData} from '../getdrinksbought.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {SportsService} from '../sports.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.css']
})
export class SportsPageComponent implements OnInit {

  staff:StaffData[];
  drink:drinkData[];
  game:gameData[];
  selectgame:selectgameData[];
  player:playerData[];
  subscriptions:subscription[];
  playersperSports:playerspersubscription[];
  drinksbought:drinksboughtData[];

  constructor(private http:HttpClient,
    private sportService:SportsService) { }

  ngOnInit(): void {
     this.getAllStaff();
     this.getAllDrinks();
     this.getAllGames();
     this.getAllGamesToSelect();
     this.getAllPlayers();
     this.getAllSubscription();
     this.getAllDrinksbought();
  }

  getAllStaff(){
    this.sportService.getAllStaff().subscribe(data =>{
      this.staff = data;
    });
  }

  getAllDrinks(){
    this.sportService.getAllDrinks().subscribe(data =>{
      this.drink = data;
    });
  }

  getAllGames(){
    this.sportService.getAllGames().subscribe(data =>{
      this.game = data;
    });
  }

  getAllGamesToSelect(){
    this.sportService.getAllGamesToSelect().subscribe(data =>{
      this.selectgame = data;
    });
  }

  getAllPlayers(){
    this.sportService.getAllPlayers().subscribe(data =>{
      this.player = data;
    });
  }

  getAllSubscription(){
    this.sportService.getAllSubscriptions().subscribe(data =>{
      this.subscriptions = data;
    });
  }

  getAllDrinksbought(){
    this.sportService.getAllDrinksbought().subscribe(data =>{
      this.drinksbought = data;
    });
  }
  
  getAllPlayersPerSubscription(){
    let selectedValue = (<HTMLSelectElement>document.getElementById('sportid2')).value;
    let convertedSelectedValue:number = +selectedValue;

    console.log(convertedSelectedValue);

     this.sportService.getAllPlayersPerSubscription(convertedSelectedValue).subscribe(data =>{
       this.playersperSports = data;
      console.log(this.playersperSports);
     }); 
  }

  addDrink(form : any):void{
    console.log(form.value);
    const headers = { 'content-type': 'application/json'}
    const body = form.value

    this.http.post(this.sportService.drinksUrl,body,
    {'headers':headers}).toPromise().then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err);
    }).finally(() => {
      console.log("done")
    });
  }

  addGame(form : any):void{
    console.log(form.value);
    const headers = { 'content-type': 'application/json'}
    const body = form.value

    this.http.post(this.sportService.gamesUrl,body,
    {'headers':headers}).toPromise().then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err);
    }).finally(() => {
      console.log("done")
    });
  }

  addPlayer(form : any):void{
    console.log(form.value);
    const headers = { 'content-type': 'application/json'}
    const body = form.value

    this.http.post(this.sportService.savePlayerUrl,body,
    {'headers':headers}).toPromise().then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err);
    }).finally(() => {
      console.log("done")
    });
  }

  subScribePlayer(form : any):void{
    console.log(form.value);
    const headers = { 'content-type': 'application/json'}
    const body = form.value
    console.log(body);

    this.http.post(this.sportService.subscriptionUrl,body,
    {'headers':headers}).toPromise().then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err);
    }).finally(() => {
      console.log("done")
    });
  }

  registerStaff(form : any):void{
    console.log(form.value);
    const headers = { 'content-type': 'application/json'}
    const body = form.value

    this.http.post(this.sportService.staffUrl,body,
    {'headers':headers}).toPromise().then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err);
    }).finally(() => {
      console.log("done")
    });
  }
}
