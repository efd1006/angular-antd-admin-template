import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users?delay=1').subscribe((res) => {
      console.log(res)
    })
  }

}
