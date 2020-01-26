import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDatepickerModule,
   MatInputModule,
   MatNativeDateModule,
   MatDividerModule,
   MatGridListModule,
   MatCardModule,
   MatCheckboxModule,
   MatRadioModule,
   MatSelectModule,
   MatTableModule
} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFileUploadModule } from 'mat-file-upload';
import {MatExpansionModule} from '@angular/material/expansion';

const material = [
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatIconModule ,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatFileUploadModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatGridListModule,
  MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
