import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class PocketbaseService {

    pocketbase = new PocketBase('http://127.0.0.1:8090');

    constructor() { }

    async createUser(name: String, password: String, confirmPassword: String) {

        const data = {
            "username": name,
            "password": password,
            "passwordConfirm": confirmPassword,
            "name": name
        };
        await this.pocketbase.collection('users').create(data);

    }

    async signIn(name: string, password: string) {
        await this.pocketbase.collection('users').authWithPassword(name, password);
    }

    isSignedIn() {
        return this.pocketbase.authStore.isValid;
    }

    async signOut() {
        await this.pocketbase.authStore.clear();
    }

}
