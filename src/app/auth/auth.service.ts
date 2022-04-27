import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, Subject, tap, throwError} from "rxjs";
import {UserModel} from "./user.model";

export interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
  public user = new BehaviorSubject<UserModel | null>(null);

  constructor(private http: HttpClient) {}

  public signUp(email: string, password: string): Observable<any>{
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKY2kASb08rljKZhzvax0viSAWXEhJBDU',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
         this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  public login(email: string, password: string): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKY2kASb08rljKZhzvax0viSAWXEhJBDU',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserModel(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<AuthResponseData>{
    let errorMessage = 'An unknown error occurred';
    if(!errorResponse.error || !errorResponse.error.error){
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is invalid';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email is not found';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user is disabled by an administrator';
        break;
    }
    return throwError(errorMessage);
  }
}
