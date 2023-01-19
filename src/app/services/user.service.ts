import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private role: string;

  constructor(private router: Router) {
    this.role = 'ADMIN';
   }

  sendRoleUser(): Observable<boolean> {
    if(this.role === 'USER' || this.role === 'ADMIN') {
      return of(true)
    }
    return of (false);
  }

  sendRoleAdmin(): Observable<boolean> {
    if(this.role === 'ADMIN') {
      return of(true)
    }
    return of (false);
  }
}
