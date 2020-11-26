import { JsonPipe } from '@angular/common';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ToastController } from '@ionic/angular';
import { ChangeDetectorRef }  from '@angular/core';

import { dic_espaniol } from '../diccionario/dic.model'

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit/*,OnChanges*/  {

  estatico ='Dí algo....';
  espaniol = 'Dí algo....';
  miskito ='';
  public traduccion: any = [];

  public silaba = ["aaa","bbbbb"];
  
  constructor(public speechRecognition: SpeechRecognition, public toastCtrl: ToastController, public cd: ChangeDetectorRef) { }
/*
  ngOnChanges(){
    this.estatico = this.espaniol;
    alert(this.estatico);
  }*/

  ngOnInit() {
    
  }

  Escuchar(){

    this.Permisos();

    this.speechRecognition.startListening().subscribe((speeches)=>{
      this.estatico = speeches[0]+"";
      this.cd.detectChanges();

    },(err)=>{
      JSON.stringify(err);
    })

}

  Permisos(){
    this.speechRecognition.hasPermission().then((permission)=>{

      if(permission){

        
      }else{

        this.speechRecognition.requestPermission().then((data)=>{
          JSON.stringify(data);
          
        },(err)=>{

          JSON.stringify(err);
        })

      }
    },(err)=>{
      JSON.stringify(err);
    })
  }

}

