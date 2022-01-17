import { Component, OnInit } from '@angular/core';

export class Persona {
  id: number | null = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  edad: number | null = null;
  nif: string | null = null;
  email: string | null = null;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento: Persona = new Persona();
  isAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.elemento = new Persona();
    this.isAdd = true;
  }
  edit(id: number): void {
    this.elemento = { id, nombre: 'Pepito', apellidos: 'Grillo', edad: 66, nif: null, email: 'pepito@grillo' }
    this.isAdd = false;
  }
  send(): void {
    alert(`Enviar ${this.isAdd? 'nuevo':'modificación'}: ${JSON.stringify(this.elemento)}`)
  }
  cancel(): void {

  }
}
