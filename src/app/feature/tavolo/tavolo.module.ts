import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavoloListComponent } from './tavolo-list/tavolo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TavoloCreateComponent } from './tavolo-create/tavolo-create.component';
import { TavoloDetailComponent } from './tavolo-detail/tavolo-detail.component';
import { TavoloEditComponent } from './tavolo-edit/tavolo-edit.component';
import { TavoloDeleteComponent } from './tavolo-delete/tavolo-delete.component';

const routes:Routes = [
  {
    path: '',
    component: TavoloListComponent
  },
  {
    path: 'create',
    component: TavoloCreateComponent
  },
  {
    path: 'detail/:id',
    component: TavoloDetailComponent
  },
  {
    path: 'edit/:id',
    component:TavoloEditComponent
  },
  {
    path: 'delete/:id',
    component:TavoloDeleteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    TavoloListComponent,
    TavoloCreateComponent,
    TavoloDetailComponent,
    TavoloEditComponent,
    TavoloDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TavoloModule { }
