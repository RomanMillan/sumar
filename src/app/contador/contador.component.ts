import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styles: ``
})
export class ContadorComponent {
  currentValue:number = 0;
  // obtiene el valor enviado desde el componente padre
  @Input() increment:number = 0;
  // envia un evento al componente padre con un valor numerico
  @Output() eventClick = new EventEmitter<number>();

  add(){
    this.currentValue+= this.increment;
    this.eventClick.emit(this.currentValue);    
  }

  less(){
    this.currentValue-= this.increment;
    this.eventClick.emit(this.currentValue);  
  }

}
