import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  searchValue:string = '';

  @Output() eventClick = new EventEmitter<string>()
  
  search(){
    this.eventClick.emit(this.searchValue);
  }

}
