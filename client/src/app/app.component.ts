import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { OnSameUrlNavigation, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
  http =inject(HttpClient);
  title = 'Chatify';
  users:any;
  ngOnInit(): void {

this.http.get('http://localhost:5000/api/users').subscribe({
 next: Response => this.users=Response,
 error: error => console.log(error),
 complete:()=> console.log("Requset has completed")

})
  }
}
