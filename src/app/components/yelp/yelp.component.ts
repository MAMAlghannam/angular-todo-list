import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Category } from '../../types/Category'

const httpOptions = {
  headers: new HttpHeaders({      
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer ODhDW-tWOd7Uo0-lpyIV1nWzLQmRHqjH5hYR18QfKM4qco7GSIhWpuValltHQZCm-KGgVYRRn8YktfFosXauGwfpYYBd9i6ZbgD4_ebFoIQj7I5tnfLktAhG4IPqYHYx',
  }),
};

@Component({
  selector: 'app-yelp',
  templateUrl: './yelp.component.html',
  styleUrls: ['./yelp.component.css']
})

export class YelpComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  categories: Category[] = []; 

  ngOnInit(): void {
    this.http.get(
      'https://api.yelp.com/v3/categories', 
      httpOptions
    )
    .subscribe(
      data => {
        console.log(data)
      },
      err => {
          
      }
    )
  }

}
