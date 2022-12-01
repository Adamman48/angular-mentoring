import { Injectable } from '@angular/core';
import { UserEntityInterface } from '../definitions/user.core';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthenticationService {
  private isAuthenticated = false;
  private currentUserId: string | null = null;

  login(userInfo: Omit<UserEntityInterface, 'id'>): void {
    this.currentUserId = uuidv4();
    localStorage.setItem(
      this.currentUserId,
      JSON.stringify({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      })
    );
    this.isAuthenticated = true;
  }

  logout(): void {
    this.currentUserId = null;
    localStorage.clear();
  }

  getUserInfo(): Omit<UserEntityInterface, 'id'> | void {
    const userData: string | null = localStorage.getItem(
      this.currentUserId || ''
    );
    if (userData) {
      return JSON.parse(userData);
    } else {
      console.error('User not found');
    }
  }
}
