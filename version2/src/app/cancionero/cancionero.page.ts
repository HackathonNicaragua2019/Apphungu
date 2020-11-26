import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-cancionero',
  templateUrl: './cancionero.page.html',
  styleUrls: ['./cancionero.page.scss'],
})
export class CancioneroPage implements OnInit {
  @ViewChild("range", {static: false}) range: IonRange;

  songs = [
    {
      title: "Dan Dan Kokoro",
      subtitle: "Dragon Ball GT",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/gt.jpg?alt=media&token=a31064a2-a02c-4066-af62-02e538c712c2",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/Dan_Dan.mp3?alt=media&token=344ed1dd-8afa-4280-8b8a-922bc7a23d1c"
    },
    {
      title: "Blue Bird",
      subtitle: "Naruto Shippuden",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/blue_bird.jpg?alt=media&token=205ff211-185c-428b-927e-a63d4920fead",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/Blue_Bird.mp3?alt=media&token=52c6a74a-3f19-4109-8aca-d9594dffea4f"
    },
    {
      title: "Butterfly",
      subtitle: "Digimon Adventura",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/digimon.jpg?alt=media&token=2eed1051-01bf-403f-8bb3-8e73de4840ff",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/Butter_Fly.mp3?alt=media&token=f548a5aa-b25e-41a6-a303-87b09ffd936c"
    }       
  ];

  //Detalles para la canción actual
  currTitle;
  currSubtitle;
  currImage;

  //Barra de progreso
  progress = 0;

  //triger para el botón de play/pause
  isPlaying = false;
  isfull = false;

  //Pista del ion-range
  isTouched = false;

  //Textos de ion-range
  currSecsText;
  durationText;

  //Valor para el ion-range
  currRangeTime;
  maxRangevalue;

  //Canción actual
  currSong: HTMLAudioElement;

  //Detalles para la siguiente canción
  upNextImg;
  upNextTitle;
  upNextSubtitle;

  constructor() { }

  ngOnInit() {
  }

  //Reproducir canción
  playSong(title, subTitle, img, song){
    if (this.currSong != null) {
      this.currSong.pause();     //Detener la canción que se esta reproduciendo
    }
    this.isfull = true;

    //Abrir la vista del reproductor
    document.getElementById("fullPlayer").style.bottom = "0px";
    //Colocar detalles de la cación actual
    this.currTitle = title;
    this.currSubtitle = subTitle;
    this.currImage = img;

    //Audio de la canción actual
    this.currSong = new Audio(song);

    this.currSong.play().then(() => {
      //Duración total de la canción
      this.durationText = this.sToTime(this.currSong.duration);
      //Colocar el valor maximo (Permite mostrar el progreso de la canción)
      this.maxRangevalue = Number(this.currSong.duration.toFixed(2).toString().substring(0, 5));

      //Colocar datos de la siguiente canción
      //Obtener canción actual 
      var index = this.songs.findIndex(x => x.title == this.currTitle);
      //si la canción actual es la última, configura la información de la primera canción para la siguiente canción
      if ((index + 1) == this.songs.length) {
        this.upNextImg = this.songs[0].img;
        this.upNextTitle = this.songs[0].title;
        this.upNextSubtitle = this.songs[0].subtitle;
      }

      //de lo contrario, se establece la información de la siguiente canción para la siguiente canción
      else {
        this.upNextImg = this.songs[index + 1].img;
        this.upNextTitle = this.songs[index + 1].title;
        this.upNextSubtitle = this.songs[index + 1].subtitle;
      }
      this.isPlaying = true;
    })

    this.currSong.addEventListener("timeupdate", () => {

      //actualice la información a medida que se reproduce la canción
      //si el ion-range no es tocado el actualiza la información
      if (!this.isTouched) {

        //Actualizar el valor del ion-range
        this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
        //Actualiza el texto de lo segundos
        this.currSecsText = this.sToTime(this.currSong.currentTime);
        //Actualiza la barra de porgreso de la vista minimozada
        this.progress = (Math.floor(this.currSong.currentTime) / Math.floor(this.currSong.duration));


        //Si la canción termina, Reproduce la siguiente canción
        if (this.currSong.currentTime == this.currSong.duration) {
          this.playNext();
        }
      }
    });
  }

  sToTime(t) {
    return this.padZero(parseInt(String((t / (60)) % 60))) + ":" +
      this.padZero(parseInt(String((t) % 60)));
  }
  padZero(v) {
    return (v < 10) ? "0" + v : v;
  }

  playNext() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    if ((index + 1) == this.songs.length) {
      this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);
    }
    else {
      var nextIndex = index + 1;
      this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);
    }
  }

  playPrev() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    if (index == 0) {
      var lastIndex = this.songs.length - 1;
      this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);
    }
    else {
      var prevIndex = index - 1;
      this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);
    }
  }

  minimize() {
    document.getElementById("fullPlayer").style.bottom = "-1000px";
    document.getElementById("miniPlayer").style.bottom = "0px";
    this.isfull = false;
  }

  maximize() {
    document.getElementById("fullPlayer").style.bottom = "0px";
    document.getElementById("miniPlayer").style.bottom = "-100px";
    this.isfull = true;
  }

  pause() {
    this.currSong.pause();
    this.isPlaying = false;
  }

  play() {
    this.currSong.play();
    this.isPlaying = true;
  }

  cancel() {
    document.getElementById("miniPlayer").style.bottom = "-100px";
    this.currImage = "";
    this.currTitle = "";
    this.currSubtitle = "";
    this.progress = 0;
    this.currSong.pause();
    this.isPlaying = false;
  }

  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.range.value);
  }

  touchMove() {
    this.currSecsText = this.sToTime(this.range.value);
  }

  touchEnd() {
    this.isTouched = false;
    //console.log(Number(this.range.value));
    this.currSong.currentTime = Number(this.range.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime)
    this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));

    if (this.isPlaying) {
      this.currSong.play();
    }
  }
}
