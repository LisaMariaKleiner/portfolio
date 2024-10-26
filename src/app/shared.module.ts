// shared.module.ts
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    RouterOutlet,
  ],
  exports: [ReactiveFormsModule, MatSnackBarModule, MatDialogModule],
})
export class SharedModule {}
