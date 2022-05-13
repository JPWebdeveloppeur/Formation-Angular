import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 isLoggedIn: boolean = false;
 redirectUrl: string;

 login(name: string, password:string): Observable<boolean>{
    const isLoggedIn = (name == 'Jpdev' && password == 'Jpdev');

    return of(isLoggedIn).pipe(delay(1000), tap(isLoggedIn => this.isLoggedIn = isLoggedIn));
 }

 logout(){
     this.isLoggedIn = false;
 }
}
