import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import { LibrosComponent } from './libros';
import { HomeComponent, PageNotFoundComponent } from './main';
import { AuthGuard } from './security';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'inicio', component: HomeComponent},
  { path: 'demos', component: DemosComponent, data: {pageTitle:'demos'}},
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent, data: {pageTitle:'calculadora'}},
  { path: 'contactos', component: ContactosListComponent},
  { path: 'contactos/add', component: ContactosAddComponent, canActivate: [ AuthGuard ]},
  { path: 'contactos/:id/edit', component: ContactosEditComponent},
  { path: 'contactos/:id', component: ContactosViewComponent},
  { path: 'contactos/:id/:kk', component: ContactosViewComponent},
  { path: 'pepito/grillo', redirectTo: '/contactos/2'},
  { path: 'libros', children: [
    { path: '', component: LibrosComponent},
    { path: 'add', component: LibrosComponent},
    { path: ':id/edit', component: LibrosComponent},
    { path: ':id', component: LibrosComponent},
    { path: ':id/:kk', component: LibrosComponent},
  ]},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: '404.html', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
