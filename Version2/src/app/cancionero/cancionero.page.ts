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
      title: "May Pole",
      subtitle: "Mango Ghost, René Cassells, Arturo Putchie",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2FMay-Pole%20_Autor_mango-ghost-sabu-rene-poochie.mp3?alt=media&token=21a6d7f1-993a-444f-b786-98f8911f9a03"
    },
    {
      title: "Come Down Brother Willy",
      subtitle: "Dimensión Costeña",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fcome-down-brother-willy-dimension-costena.mp3?alt=media&token=3b4d77e9-bb30-42c3-bd79-61c54d79b80a"
    },
    {
      title: "Himno Nacional de Nicaragua",
      subtitle: "Miskito",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fhimno-nacional-de-nicaragua-en-miskito.mp3?alt=media&token=992bda14-9d74-4c46-8257-97df982625b4"
    },
    {
      title: "Instrumental Caribbean",
      subtitle: "Larry",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Finstrumental-caribbean-by-larry.mp3?alt=media&token=f9be316d-67e0-4e21-b5d4-ab5cb3c36777"
    } ,
    {
      title: "Mama Lika Kumi",
      subtitle: "Joy Ramos",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fmama-lika-kumi-joy-ramos-video-oficial.mp3?alt=media&token=bfa38eea-fb1e-425f-baaa-aeb53c335be7"
    } ,
    {
      title: "Miskita Mairin",
      subtitle: "Layan Siksa",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fmiskita-mairin_autor_Layan%20Siksa%20(Black%20Lion).mp3?alt=media&token=ed986d42-2e8f-453c-830a-40b9eaea30ae"
    } ,
    {
      title: "Miskito",
      subtitle: "Kabu Waitna",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fmiskito-Kabu%20Waitna.mp3?alt=media&token=5f6322a5-bc54-4701-a5c1-a6ea3c49119a"
    } ,
    {
      title: "Mix Musica Miskita",
      subtitle: "Sandrita Maryin",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fmix-musica-miskita-sandrita-mayrin-entre-otras.mp3?alt=media&token=7de089a6-897b-4433-9108-bbedf6795349"
    } ,
    {
      title: "Musica Miskita",
      subtitle: "Papanola",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fmusica-miskita-papanola-tang-si.mp3?alt=media&token=91f99441-eaa2-4648-b09f-1ca013ed978d"
    } ,
    {
      title: "Darling U",
      subtitle: "Philip Montalban",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fphilip-montalban-darling-u.mp3?alt=media&token=20381bcb-c552-41f8-98c0-3d83822f9d7d"
    } ,
    {
      title: "Acoustic Stories",
      subtitle: "Philip Montalban",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2Fphillip-montalban-acoustic-stories.mp3?alt=media&token=bc14860b-cba5-4123-95e4-bb8fff455571"
    } ,
    {
      title: "Reggae de Coco",
      subtitle: "Philip Montalban",
      img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/uhung.fw.png?alt=media&token=1b789c7e-2915-4fd6-80cf-f21ef5bdb66a",
      path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/canciones%2FMay-Pole%20_Autor_mango-ghost-sabu-rene-poochie.mp3?alt=media&token=21a6d7f1-993a-444f-b786-98f8911f9a03"
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
