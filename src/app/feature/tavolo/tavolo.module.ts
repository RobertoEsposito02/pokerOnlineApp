import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavoloListComponent } from './tavolo-list/tavolo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TavoloCreateComponent } from './tavolo-create/tavolo-create.component';

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
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    TavoloListComponent,
    TavoloCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TavoloModule { }
