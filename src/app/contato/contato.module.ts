import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
 
  
  ]
})
export class ContatoModule { }

