import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sec-6-contact',
  templateUrl: './sec-6-contact.component.html',
  styleUrls: ['./sec-6-contact.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    MatTooltipModule,
    RouterLink,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class Sec6ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9]*$')]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  post = {
    endPoint: 'https://lisa-maria-kleiner.de/sendMail.php',
    body: (payload: {
      name: string;
      email: string;
      phone: string;
      message: string;
      privacyPolicy: boolean;
    }) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json', // JSON-Daten im Header
      },
      responseType: 'json' as const, // Response-Typ setzen
    },
  };

  onSubmit(): void {
    if (this.form.valid) {
      this.form.markAllAsTouched();
      const formData = {
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone || '',
        message: this.form.value.message,
        privacyPolicy: this.form.value.privacyPolicy,
      };

      this.http
        .post(this.post.endPoint, formData, this.post.options)
        .subscribe({
          next: (response: any) => {
            this.snackBar.open('Nachricht wurde gesendet!', '', {
              duration: 3000,
              panelClass: ['custom-snackbar'],
            });
            this.form.reset();
          },
          error: (error) => {
            console.error('HTTP Fehler:', error);
            console.error('Error Status:', error.status);
            console.error('Error Message:', error.message);

            let errorMessage = 'Ein Fehler ist aufgetreten.';

            if (error.status === 0) {
              errorMessage =
                'Verbindungsfehler. Prüfen Sie Ihre Internetverbindung.';
            } else if (error.status === 400) {
              errorMessage = error.error?.error || 'Ungültige Formulardaten.';
            } else if (error.status === 403) {
              errorMessage = 'Zugriff verweigert.';
            } else if (error.status === 404) {
              errorMessage = 'sendMail.php nicht gefunden.';
            } else if (error.status === 500) {
              errorMessage = error.error?.error || 'Server-Fehler beim Senden.';
            }

            this.snackBar.open(errorMessage, 'Schließen', {
              duration: 5000,
              panelClass: ['error-snackbar'],
            });
          },
        });
    } else {
      const missingFields = Object.keys(this.form.controls)
        .filter((key) => this.form.get(key)?.errors)
        .join(', ');

      this.snackBar.open(
        `Bitte überprüfen Sie folgende Felder: ${missingFields}`,
        '',
        { duration: 3000 }
      );
    }
  }
}
