import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ContactosComponent } from '../contactos';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { LibrosComponent } from '../contactos copy';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'formulario', icono: 'chalkboard', componente: FormularioComponent },
    { texto: 'inicio', icono: 'home', componente: HomeComponent},
    { texto: 'demos', icono: 'chalkboard-teacher', componente: DemosComponent },
    { texto: 'calculadora', icono: 'calculator', componente: CalculadoraComponent },
    { texto: 'contactos', icono: 'address-book', componente: ContactosComponent },
    { texto: 'libros', icono: 'book', componente: LibrosComponent },
  ]
  actual: any = this.menu[0].componente;

  constructor() { }

  public seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
