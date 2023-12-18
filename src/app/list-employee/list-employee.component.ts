import { Component, Input } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-employee.component.html',
  styles: ``
})
export class ListEmployeeComponent {

  employees: Employee[] = [
    {
      "nombre": "John",
      "apellido": "Doe",
      "cargo": "Desarrollador",
      "departamento": "Tecnología"
    },
    {
      "nombre": "Jane",
      "apellido": "Smith",
      "cargo": "Diseñadora",
      "departamento": "Diseño"
    },
    {
      "nombre": "Robert",
      "apellido": "Johnson",
      "cargo": "Gerente de Proyecto",
      "departamento": "Administración"
    },
    {
      "nombre": "Emily",
      "apellido": "Davis",
      "cargo": "Analista de Datos",
      "departamento": "Tecnología"
    }
  ]

  @Input() nameSearch:string = '';

  get filterValue():Employee[] {
    return this.employees.filter(employee => employee.nombre === this.nameSearch)
  } 
    
 
  

}
