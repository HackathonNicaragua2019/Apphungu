import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { dic_espaniol, dic_miskito } from '../dic.model'


@Component({
  selector: 'app-dic-espaniol',
  templateUrl: './dic-espaniol.page.html',
  styleUrls: ['./dic-espaniol.page.scss'],
})
export class DicEspaniolPage implements OnInit {

  @ViewChild('search', {static: false}) search: IonSearchbar;
  
  public palabras_spaniol: any = [];
  public palabras_miskito: any = [];
  textoBuscar ='';
  
  selectTabs = 'espaniol';

  constructor(private activateRoute: ActivatedRoute, public diccionario : FirebaseService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const recipeID = paramMap.get('dicId')
      //console.log(recipeID)
      this.diccionario.getPalabrasEspaniol(recipeID).subscribe(palabras=>{
        palabras.map(paniol =>{
          const datos : dic_espaniol = paniol.payload.doc.data() as dic_espaniol;
          //datos.espaniol = pala.payload.doc.miskito;
          //console.log(datos)
          this.palabras_spaniol.push(datos);
        })
      })

      this.diccionario.getPalabrasMiskita(recipeID).subscribe(palabras=>{
        palabras.map(miski =>{
          const datos : dic_miskito = miski.payload.doc.data() as dic_miskito;
          //datos.espaniol = pala.payload.doc.miskito;
          //console.log(datos)
          this.palabras_miskito.push(datos);
        })
      })
    })
  }

  ionChange(event){

    const texto = event.target.value;
    this.textoBuscar = texto;
    

  }


}
