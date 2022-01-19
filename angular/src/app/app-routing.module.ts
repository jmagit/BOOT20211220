import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent, PageNotFoundComponent } from './main';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'inicio', component: HomeComponent},
  { path: 'demos', component: DemosComponent},
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent},
  { path: 'contactos', component: ContactosListComponent},
  { path: 'contactos/:id', component: ContactosViewComponent},
  { path: 'contactos/:id/:kk', component: ContactosViewComponent},
  { path: 'contactos/:id/edit', component: ContactosEditComponent},
  { path: 'contactos/add', component: ContactosAddComponent},
  { path: 'pepito/grillo', redirectTo: '/contactos/2'},
  { path: '404.html', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
