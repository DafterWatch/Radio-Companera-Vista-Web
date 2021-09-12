import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoticiaExpandidaComponent } from './noticia-expandida/noticia-expandida.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'noticia', pathMatch: 'full'},
  { path: 'paginaPrincipal', component: PaginaPrincipalComponent },
  { path: 'noticia', component: NoticiaExpandidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
