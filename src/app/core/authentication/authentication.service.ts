import { Injectable } from '@angular/core';
import { UserEntityInterface } from '../definitions/user.core';

@Injectable()
export class AuthenticationService {
  // ! instead isAuthenticated
  private currentUserId: string | null = null;

  login(userInfo: Omit<UserEntityInterface, 'id'>): void {
    this.currentUserId = 'mando';
    localStorage.setItem(
      this.currentUserId,
      JSON.stringify({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      })
    );
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
