import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sec-6-contact',
  templateUrl: './sec-6-contact.component.html',
  styleUrls: ['./sec-6-contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class Sec6ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('\\d*')]], // Optionales Feld
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  post = {
    endPoint: 'http://lisa-maria-kleiner.de/sendMail.php',
    body: (payload: {
      name: string;
      email: string;
      phone: number;
      message: string;
      privacyPolicy: boolean;
    }) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json', // JSON-Daten im Header
      },
      responseType: 'text' as const, // Response-Typ setzen
    },
  };

  onSubmit(): void {
    if (this.form.valid) {
      const formData = {
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone,
        message: this.form.value.message,
        privacyPolicy: this.form.value.privacyPolicy,
      };

      this.http
        .post(this.post.endPoint, formData, this.post.options)
        .subscribe({
          next: () => {
            console.log('Formular erfolgreich gesendet');
            this.snackBar.open('Nachricht wurde gesendet!', '', {
              duration: 3000,
              panelClass: ['custom-snackbar'],
            });
            this.form.reset();
          },
          error: (error) => {
            console.error('Fehler beim Senden:', error);
            this.snackBar.open('Ein Fehler ist aufgetreten.', '', {
              duration: 3000,
            });
          },
        });
    } else {
      this.snackBar.open('Bitte fülle das Formular korrekt aus.', '', {
        duration: 3000,
      });
    }
  }
}
