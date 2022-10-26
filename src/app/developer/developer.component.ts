import { Component, OnInit } from '@angular/core';

import { Developer } from '../models/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developers: Developer[] = [
    {
      lastname: 'Deray',
      firstname: 'Odile',
      age: 34,
      gender: 'Femme',
      bio: 'Bonjour, moi c\'est Odile',
      skills: [
        {
          name: 'JavaScript',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          site: 'https://developer.mozilla.org/fr/'
        },
        {
          name: 'Angular',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png',
          site: 'https://angular.io/'
        }
      ]
    },
    {
      lastname: 'Alain',
      firstname: 'Deloin',
      age: 41,
      gender: 'Homme',
      bio: 'Je suis Alain Deloin',
      skills: [
        {
          name: 'JavaScript',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          site: 'https://developer.mozilla.org/fr/'
        },
        {
          name: 'Angular',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png',
          site: 'https://angular.io/'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
