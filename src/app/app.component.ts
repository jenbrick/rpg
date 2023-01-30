//ng build --output-path docs --base-href /rpg/
import { Component } from '@angular/core';
import data from '../assets/json/characters.json';

interface Person { 
  name : String,
  type : String,
  gender : String,
  race : String,
  role : String,
  specialPowers : String,
  genres : String,
  sources : String,
  media : String,
  setting : String,
  notes : String,
  picture : String
}
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rpg';
  origPersons: Person[] = data;
  msg : String = "Not clicked"; 

  party: Person[] = this.origPersons;
 
   
  clickEvent() {
    this.party = [];
    this.msg = "Button is Clicked";
    this.party[0] = this.origPersons[Math.floor(Math.random() * 1000) + 1];
    this.party[1] = this.origPersons[Math.floor(Math.random() * 1000) + 1];
    this.party[2] = this.origPersons[Math.floor(Math.random() * 1000) + 1];
    this.party[3] = this.origPersons[Math.floor(Math.random() * 1000) + 1];
    this.party[4] = this.origPersons[Math.floor(Math.random() * 1000) + 1];
    return this.msg;
  }
 }
