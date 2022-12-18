import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsUserLoggedDirective } from './directives/is-user-logged.directive';
import { IfRolesDirective } from './directives/if-roles.directive';



@NgModule({
  declarations: [
    IsUserLoggedDirective,
    IfRolesDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsUserLoggedDirective,
    IfRolesDirective
  ]
})
export class SharedModule { }
