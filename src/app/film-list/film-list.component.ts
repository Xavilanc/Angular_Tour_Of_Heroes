import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';

import  * as XLSX from 'xlsx'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films: Film[] = [
    {
      title: 'The Godfather',
      imageUrl: 'https://www.listchallenges.com/f/items/c8c693e5-c06c-456c-ab66-40cf4ee7ba47.jpg'
    },
    {
      title: 'The Shawshank Redemption',
      imageUrl: 'https://www.listchallenges.com/f/items2020/783c1e5d-4598-49d1-8f13-7d0de96dc398.jpg'
    },
    {
      title: 'Gone With the Wind',
      imageUrl: 'https://www.listchallenges.com/f/items2020/d8c146be-ef32-49b5-86bc-d1ab2ceb6fb6.jpg'
    },
    {
      title: 'Casablanca',
      imageUrl: 'https://www.listchallenges.com/f/items2020/8bb5d09e-f8a9-4998-95bb-b3d2c52bdb94.jpg'
    }
  ];

  showMovies: boolean = true;

  name = 'ExcelSheet.xlsx';

  exportToExcel(): void {
    let element = document.getElementById('movie_table');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

  constructor() { }

  ngOnInit(): void {
  }

  setShowMovies(showMovies: boolean): void {
    this.showMovies = !showMovies;
  }

}
