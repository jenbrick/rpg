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
  errMessage : String = "";

  party: Person[] = this.origPersons;
  sliderValue = 4;
  storedValues: number[] = [];
  partySizeLimit = this.origPersons.length;
   
  generateParty() {
    this.party = [];
    this.storedValues = [];
    for (var i=0; i<this.sliderValue; i++) {
      this.assignCharacterToParty(i);
    }
    return this.errMessage;
  }

  assignCharacterToParty(idx: number) {
    var randNum = Math.floor(Math.random() * this.partySizeLimit-1) + 1;
    console.log(this.storedValues.length);
      if (this.storedValues.indexOf(randNum) === -1) {
        this.party[idx] = this.origPersons[randNum];
        this.storedValues.push(randNum);
      } else {
          this.assignCharacterToParty(idx);
      }
  }

  swapCharacter(name: String) {
    if (this.storedValues.length === this.partySizeLimit) {
      this.errMessage = 'Character swap limit has been met';  
    } else {
      var idx = this.party.findIndex(party => party.name === name);
      this.assignCharacterToParty(idx);
    }
  }

 }
