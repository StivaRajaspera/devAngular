import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = [
    {
      title: 'The Overstory',
      description: "L'Arbre-monde est le douzième roman de l'écrivain américain Richard Powers, paru aux éditions Norton le 3 avril 2018 et publié dans sa traduction en français le 6 septembre 2018 aux éditions du Cherche midi. Le roman reçoit le prix Pulitzer de la fiction en 2019",
      img: '../../assets/img/livre2.jpg'
    },
    {
      title: 'Yellow House',
      description: "La maison jaune est un mémoire de Sarah M. Broom. C'est le premier livre de Broom et il a été publié le 13 août 2019 par Grove Press. La maison jaune raconte la famille de Broom, sa vie à la Nouvelle-Orléans Est et la disparition éventuelle de sa maison d'enfance bien-aimée après l'ouragan Katrina.",
      img: '../../assets/img/livre1.jpg'
    },
    {
      title: 'Say Nothing',
      description: "Immense succès critique, lauréat du prestigieux prix Orwell, Ne dis rien est une enquête journalistique d'une puissance inédite, une plongée au cœur de la violence politique, le portrait bouleversant d'une génération sacrifiée. 1972, Belfast, quartier catholique. ...",
      img: '../../assets/img/livre3.jpg'
    },
    {
      title: 'Friday Black',
      description: "Friday Black est le premier livre de 2018 de l'auteur Nana Kwame Adjei-Brenyah. Situé dans un futur dystopique proche de paramètres prosaïques tordus, la collection de nouvelles explore les thèmes entourant l'identité noire en ce qui concerne une gamme de problèmes sociaux contemporains.",
      img: '../../assets/img/livre4.jpg'
    },
    {
      title: 'Amity and Prosperity',
      description: "Sept ans en gestation, Amity and Prosperity raconte l’histoire de l’impact du boom énergétique sur une petite ville aux abords des Appalaches et de la transformation d’une femme d’un parent seul en difficulté à un militant improbable. ",
      img: '../../assets/img/livre5.jpg'
    },
    {
      title: 'Che Seven Deaths of Evelyn Hardcastle',
      description: "Mixez Agatha Christie, Downton Abbey et Un jour sans fin... voilà le roman le plus divertissant de l'année. Lauréat du prestigieux Costa Award, le premier roman de Stuart Turton est à la fois un formidable jeu de l'esprit et un régal de lecture. Ce soir à 11 heures, Evelyn Hardcastle va être assassinée. ... ",
      img: '../../assets/img/livre6.jpg'
    }
  ];

  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
  
}