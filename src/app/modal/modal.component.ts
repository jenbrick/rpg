import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(public modalRef: MdbModalRef<ModalComponent>, private appComponent: AppComponent) {}
  faSearch = faSearch;
  searchForCharName: String = "";

  getCharacterByName() {
    alert(this.searchForCharName);
    let swapName = this.appComponent.getCharacterByName(this.searchForCharName);
    if (swapName) {
      alert("Found!");
      
    }
  }
}
