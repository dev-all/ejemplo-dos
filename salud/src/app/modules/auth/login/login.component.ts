import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, finalize } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginCredentials } from '../model';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/consts/routes/internal.routes';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  errorMessage!:string;
  processingRequest = false;
  public form: FormGroup;

  constructor(private formBuilder : FormBuilder,
    public authService: AuthService,
    private cdr: ChangeDetectorRef
    , private router: Router
  ) {
    this.form = this.formBuilder.group({
      username : ['',[Validators.required,
                  Validators.email,
                  Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
                ],
      password: ['',[Validators.required,Validators.minLength(4)]],
      });
  }

  Authenticate() {
    this.processingRequest = true;
    if(!this.form.valid ){
      this.errorMessage= "Revise los datos ingresados";
      return;
    }
    this.authService.signIn(this.form.value as LoginCredentials)
    .pipe(
      finalize(() => (this.processingRequest = false)),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.handleUnauthorized();
          return EMPTY;
        }

        throw error;
      })
    )
    .subscribe(
      (response: any)  => {
        this.authService.saveTokenToLocalStore(response.token);
        this.authService.userSubject$.next(response.token);
        this.router.navigateByUrl(INTERNAL_ROUTES.PAGE_DEFAULT);
      }
    );
  }

  handleUnauthorized() {
    this.form.setErrors({ invalidCredentials: true });
    this.cdr.markForCheck();
  }
}
