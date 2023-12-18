import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styles: ``
})
export class FormularioComponent {
  // datos del usuario
  username:string = '';
  password:string = '';

  // Emite un evento al componente padre con un User
  @Output() clickEvent = new EventEmitter<User>();
  
  // crea un objeto User y lo emite al padre
  register(){
    const user:User = {
        username: this.username,
        password: this.password
    }
    this.clickEvent.emit(user);
  }

}
