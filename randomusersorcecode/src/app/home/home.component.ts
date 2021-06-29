import { Component, OnInit, VERSION } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { UserService } from '../core/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //user;
   
  name = 'Angular ' + VERSION.major;
  user: any;
  field: any;
  userimg:any;
  text = "Hi, My name is";

  constructor(private http: HttpClient) {
    this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      this.user = res.results[0];
      this.field = this.user.name.first+' '+this.user.name.last;
      this.userimg = this.user.picture.large;
      console.log(this.user);
    })
  }


  fieldChange(fieldName, subHead){

  	this.field = fieldName;
  	this.text = subHead;

  }

  getFormatDate() {
  var x = document.getElementById("date").innerText;
  document.getElementById("date").innerHTML = x;
  return x  
  }
  //constructor(private userService: UserService) {}

  ngOnInit() {
    //Luthando API - This Imports RESTAPI Data user.service which will be rendered on the page
    //Luthando API - This Is Where You Register The Variables
    //this.users = this.userService.getUsers();
    //this.users = this.userService.getRandomUser()
    //console.log(this.users);
    //this.user = this.userService.getRandomUser();
    //console.log(this.user);
  }
}
