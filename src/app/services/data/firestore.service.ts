import { Injectable } from '@angular/core';
import { collection, addDoc, Firestore } from 'firebase/firestore';
import { Product } from '../../models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private readonly firestore: Firestore) {}

}
