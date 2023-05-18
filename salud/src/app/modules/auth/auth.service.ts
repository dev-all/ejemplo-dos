import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, ignoreElements, map, Observable, tap } from 'rxjs';
import { LoginCredentials} from './model';
import { User, UserWithToken } from './model/user.interface';
import { IApiUserAuthenticated } from './model/iapi-auth-user.metadata';
import { JwtHelperService} from '@auth0/angular-jwt';
import { API_ROUTES } from '@data/consts/routes/api.routes';
import { Response } from './model/response';
import { INTERNAL_ROUTES } from '@data/consts/routes/internal.routes';
const USER_LOCAL_STORAGE_KEY = 'userData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public resp! : Response;
  public userLogeado! : IApiUserAuthenticated;
  public userSubject$! : BehaviorSubject<IApiUserAuthenticated>; //tipo especial de observable

  //usaría BehaviorSubject para un servicio de datos, ya que un servicio angular
  //a menudo se inicializa antes de que el componente y el sujeto de comportamiento
  //garanticen que el componente que consume el servicio reciba los últimos datos
  //actualizados, incluso si no hay nuevas actualizaciones desde la suscripción del componente a estos datos.
  //public usuario$ : Observable<IApiUserAuthenticated>;

  public userLocalStorage = 'currentUserAngular';
  helper!: JwtHelperService;

  private user = new BehaviorSubject<UserWithToken | null>(null);
  user$ = this.user.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  //-----------------
  constructor(private httpClient: HttpClient, private router: Router) {

    this.loadUserFromLocalStorage();
    this.userSubject$ =  this.GetItem();
    this.helper = new JwtHelperService();
  }

  public GetItem(){
    return new BehaviorSubject<IApiUserAuthenticated>(JSON.parse(localStorage.getItem(this.userLocalStorage)!));
  }
  public get getUser(): IApiUserAuthenticated{
    return this.userSubject$.value;
  }
  signIn(credentials : LoginCredentials):Observable<Response>{
    return this.httpClient.post<Response>(API_ROUTES.AUTH.SIGNIN, credentials)
  }


//------------------
  login(credentials: LoginCredentials): Observable<never> {
    return this.httpClient.post<string>('login', credentials).pipe(
      tap((userToken) => this.saveTokenToLocalStore(userToken)),
      tap((userToken) => this.pushNewUser(userToken)),
      tap(() => this.redirectToDashboard()),
      ignoreElements()
    );
  }

  logout(): void {
    this.removeUserFromLocalStorage();
    this.user.next(null);
    this.router.navigateByUrl('/login');
  }

  private redirectToDashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }

  private pushNewUser(token: string) {
    this.user.next(this.decodeToken(token));
  }

  private decodeToken(userToken: string): UserWithToken {
    const userInfo = JSON.parse(window.atob(userToken)) as User;

    return { ...userInfo, token: userToken };
  }

  private loadUserFromLocalStorage(): void {

    const userFromLocal = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    userFromLocal && this.pushNewUser(userFromLocal);
  }

  public saveTokenToLocalStore(userToken: string): void {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, userToken);
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }

}
