import { Component } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import data from '../../assets/json/characters.json';
import { AppComponent } from '../app.component';

const states = [
	'Alabama',
	'Alaska',
	'American Samoa',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'District Of Columbia',
	'Federated States Of Micronesia',
	'Florida',
	'Georgia',
	'Guam',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Marshall Islands',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Northern Mariana Islands',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Palau',
	'Pennsylvania',
	'Puerto Rico',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virgin Islands',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
];
interface Person { 
  name : String,
  gender : String,
  race : String,
  abilities : String,
  genres : String,
  sources : String,
  universe : String,
  picture : String,
  dynpic : String
}
@Component({
	selector: 'app-typeahead-basic',
	standalone: true,
	imports: [NgbTypeaheadModule, FormsModule, JsonPipe],
	templateUrl: './typeahead-basic.component.html',
	styles: [
		`
			.form-control {
				width: 300px;
			}
		`,
	],
})

export class NgbdTypeaheadBasic {

  constructor(private appComponent: AppComponent) {}
	public model: any;
  origPersons: Person[] = data;
  

  getName(term : Person) {
    return term.name;
  }
	search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (this.origPersons.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 100))
    );

   formatter = (x: {name: string}) => x.name;

   replaceCharacter(replaceWith : Person) {
    this.appComponent.party[0]=replaceWith;
   }

}