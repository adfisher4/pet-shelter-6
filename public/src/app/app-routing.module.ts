import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'pets', component: AllPetsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/pets'},
  {path: 'pets/new',component: NewComponent },
  //{path: 'edit/movie/:id',component: EditComponent },
  {path: 'pets/:id',component: DetailsComponent },
  {path: 'pets/:id/edit',component: EditComponent },
  {path: '**',component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
