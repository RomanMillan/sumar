import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { User } from './interfaces/user.interface';
import { SearchComponent } from './search/search.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, 
            RouterOutlet, ContadorComponent, 
            FormularioComponent, SearchComponent,
            ListEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // Ejercicio 1
  incrementValue:number = 0;
  currentValue:number = 0;
  viewCurrentValue(value:number){
    this.currentValue = value;
  }

  // Ejercicio 2
  viewUser(user:User){
    console.log(`nombre: ${user.username} ; contraseña: ${user.password}`);
  }

  // Ejercicio 3
  nameSearch:string = ''
  searchValue(name:string){
    this.nameSearch = name;
  }


}
