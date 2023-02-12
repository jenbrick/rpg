import { Component, Input } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AppComponent } from '../app.component';


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
  @Input()
  index!: number;
  getName(term : Person) {
    return term.name;
  }
	search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => (this.appComponent.origPersons.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 100))
    );

  formatter = (x: {name: string}) => x.name;

  replaceCharacter(replaceWith : Person) {
    alert(this.index);
    this.appComponent.party[this.index]=replaceWith;
  }

}