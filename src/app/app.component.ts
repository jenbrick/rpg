//ng build --output-path docs --base-href /rpg/
import { Component } from '@angular/core';
import data from '../assets/json/characters.json';
import {
  trigger, state, style, animate, transition, query, group
 } from '@angular/animations';

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
  picture : String,
  dynpic : String
}
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {

  title = 'rpg';
  origPersons: Person[] = data;
  errMessage : String = "";

  party: Person[] = []; //this.origPersons;
  sliderValue = 4;
  storedValues: number[] = [];
  partySizeLimit = this.origPersons.length;

  showMyClass = true;

  displayAnimations = false;

  timer : ReturnType<typeof setTimeout> = setTimeout(() => { });

   
  generateParty() {
    this.party = [];
    this.storedValues = [];
    this.showMyClass = true;
    this.displayAnimations = true;
    this.startAnimationsWithTimer();
    for (var i=0; i<this.sliderValue; i++) {
      this.assignCharacterToParty(i);
    }
    return this.errMessage;
  }

  startPicAnimations() {
    this.displayAnimations = true;
  }
  startAnimationsWithTimer() {
    clearTimeout(this.timer);
    this.displayAnimations = true;
    this.timer = setTimeout(() => this.stopPicAnimations(), 5000);
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
      this.showMyClass = false;
      var idx = this.party.findIndex(party => party.name === name);
      this.assignCharacterToParty(idx);
    }
  }
  
  
  
  stopPicAnimations() {
    this.displayAnimations = false;
  }
  
  mouseEnter(el: Event) {
    let element: Element = (el.target as Element);
    let idx = this.findIdIndex(element);
    document.getElementById("imgStatic_"+idx)?.classList.add('d-none');
    document.getElementById('imgDynamic_'+idx)?.classList.remove('d-none');
  }

  mouseLeave(el: Event) {
    let element: Element = (el.target as Element);
    let idx = this.findIdIndex(element);
    document.getElementById("imgStatic_"+idx)?.classList.remove('d-none');
    document.getElementById('imgDynamic_'+idx)?.classList.add('d-none');
  }

  private findIdIndex(element: Element) {
    let strIdx = element.id.indexOf("_");
    console.log(strIdx);
    let idx = element.id.substring(strIdx + 1, element.id.length);
    return idx;
  }

  ngOnChanges() {
    //  console.log("ngOnChanges");
    }
  
    ngOnInit() {
     // console.log("ngOnInit");
    }
  
    ngDoCheck() {
     // console.log("ngDoCheck");
    }
  
    ngAfterContentInit() {
     // console.log("ngAfterContentInit");
    }
  
    ngAfterContentChecked() {
     //console.log("ngAfterContentChecked");
    }
  
    ngAfterViewInit() {
     // console.log("ngAfterViewInit");
    }
  
   
    ngAfterViewChecked() {
      //console.log("ngAfterViewChecked");
      
    }
  
    ngOnDestroy() {
      console.log("ngOnDestroy");
    }
}
