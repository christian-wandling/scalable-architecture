import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluckKeyPipe } from './pluckKey.pipe';



@NgModule({
  declarations: [ PluckKeyPipe ],
  exports: [
    PluckKeyPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
