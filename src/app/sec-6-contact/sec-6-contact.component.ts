import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LegalNoticeDialogComponent } from '../legal-notice-dialog/legal-notice-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sec-6-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatTooltipModule, CommonModule, RouterLink],
  templateUrl: './sec-6-contact.component.html',
  styleUrls: ['./sec-6-contact.component.scss'],
})
export class Sec6ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openLegalNoticeDialog(): void {
    this.dialog.open(LegalNoticeDialogComponent, {
      width: '400px',
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  send(): void {
    if (this.form.valid) {
      const formData = this.form.value;

      // Senden der Formulardaten an den Server
      this.http.post('https://deineDomain.de/send-email', formData).subscribe(
        () => {
          this.snackBar.open(
            'Ihre Nachricht wurde erfolgreich versendet!',
            '',
            {
              duration: 3000,
            }
          );
          this.form.reset();
        },
        (error) => {
          console.error('Fehler beim Versenden der E-Mail:', error);
          this.snackBar.open('Fehler beim Versenden der Nachricht.', '', {
            duration: 3000,
          });
        }
      );
    } else {
      alert(
        'Bitte füllen Sie alle Felder korrekt aus und akzeptieren Sie die Datenschutzerklärung.'
      );
    }
  }
}
