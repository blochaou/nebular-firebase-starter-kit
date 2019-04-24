import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }

    signInWithEmailAndPassword(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    createUserWithEmailAndPassword(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    updatePassword(password: string) {
        return this.afAuth.auth.currentUser.updatePassword(password);
    }

    signOut() {
        return this.afAuth.auth.signOut();
    }

    getAuth() {
        return this.afAuth.auth;
    }

    getCurrentUser() {
        return this.afAuth.auth.currentUser;
    }

    isAuthenticated() {
        return this.afAuth.user.pipe(map(user => !!user));
    }

    setPersistence(persistence: AuthPersistanceType) {
        return this.afAuth.auth.setPersistence(persistence);
    }

    requestpassword(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }
}

export enum AuthPersistanceType {
    localPersistence = 'local',
    sessionPersistence = 'session',
    nonePersistence = 'none',
}
