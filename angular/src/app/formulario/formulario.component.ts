import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotificationService, NotificationType } from '../common-services';
import { AUTH_REQUIRED } from '../security';

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
  listado: Array<Persona> = [];

  isAdd: boolean = true;

  constructor(private http: HttpClient, private notify: NotificationService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.elemento = new Persona();
    this.isAdd = true;
  }
  edit(id: number | null): void {
    this.http.get<Persona>(environment.apiURL + 'personas/' + id)
      .subscribe({
        next: data => {
          this.elemento = data;
          this.isAdd = false;
        },
        error: err => this.notify.add(err.message)
      });
    // this.elemento = { id, nombre: 'Pepito', apellidos: 'Grillo', edad: 66, nif: null, email: 'pepito@grillo' }
    // this.isAdd = false;
  }
  list() {
    this.http.get<Array<Persona>>(environment.apiURL + 'personas')
      .subscribe({
        next: data => {
          this.listado = data;
        },
        error: err => this.notify.add(err.message)
      });
  }
  send(): void {
    if(this.isAdd)
    this.http.post<Persona>(environment.apiURL + 'personas', this.elemento, { context: new HttpContext().set(AUTH_REQUIRED, true) })
    .subscribe({
      next: data => this.notify.add('OK', NotificationType.warn),
      error: err => this.notify.add(err.message)
    });
    else
    this.http.put<Persona>(environment.apiURL + 'personas/' + this.elemento.id, this.elemento, { context: new HttpContext().set(AUTH_REQUIRED, true) })
    .subscribe({
      next: data => this.notify.add('OK', NotificationType.warn),
      error: err => this.notify.add(err.message)
    });
    // alert(`Enviar ${this.isAdd? 'nuevo':'modificación'}: ${JSON.stringify(this.elemento)}`)
  }
  cancel(): void {

  }
}
