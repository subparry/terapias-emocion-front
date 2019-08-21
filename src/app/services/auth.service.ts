import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentRole:string = 'Guest'

  constructor() { }
}
