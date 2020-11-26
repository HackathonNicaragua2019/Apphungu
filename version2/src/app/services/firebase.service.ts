import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getPalabrasEspaniol(vocal: string){

    if (vocal == "A") 
    {
      return this.db.collection('letra_a', ref=>ref.orderBy('espaniol','desc')).snapshotChanges().pipe(
        delay(1000)
      )
    }
    else if(vocal == "B"){
      return this.db.collection('letra_b', ref=>ref.orderBy('espaniol','desc')).snapshotChanges().pipe(
        delay(1000)
      )
    }

    
  }

  getPalabrasMiskita(vocal: string){

    if (vocal == "A") 
    {
      return this.db.collection('miskito_a', ref=>ref.orderBy('miskito','desc')).snapshotChanges().pipe(
        delay(1200)
      )
    }
    else if(vocal == "B"){
      return this.db.collection('letra_b', ref=>ref.orderBy('espaniol','desc')).snapshotChanges().pipe(
        delay(1200)
      )
    }

    
  }

  getTraduccion(palabra: string){

    return this.db.collection('traductor')

  }



}
