// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { FirebaseApp, initializeApp } from 'firebase/app';
// import {Auth, getAuth} from 'firebase/auth';
// import {
//     CollectionReference,
//     Firestore,
//     getFirestore,
//     collection, 
// } from 'firebase/firestore';

// @Injectable()
// export class FirebaseService {
//     public app: FirebaseApp;
//     public auth: Auth;
//     public firestore: Firestore;

//     public usersCollection: CollectionReference;

//     constructor(private configService: ConfigService) {
//         //here i put the variables from the .env file
//         this.app = initializeApp({
//             apiKey: this.configService.get('FIREBASE_API_KEY'),
//             authDomain: this.configService.get('FIREBASE_AUTH_DOMAIN'),
//             projectId: this.configService.get('FIREBASE_PROJECT_ID'),
//             storageBucket: this.configService.get('FIREBASE_STORAGE_BUCKET'),
//             messagingSenderId: this.configService.get('FIREBASE_MESSAGING_SENDER_ID'),
//             appId: this.configService.get('FIREBASE_APP_ID'),
//             measurementId: this.configService.get('FIREBASE_MEASUREMENT_ID'),
//         });
//         this.auth = getAuth(this.app);
//         this.firestore = getFirestore(this.app);
//         this._createCollections();
//         console.log('FirebaseService instantiated');
//     }
//     private _createCollections() {
//         this.usersCollection = collection(this.firestore,'users');
//     }
// }