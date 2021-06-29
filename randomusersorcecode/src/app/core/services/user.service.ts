import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class UserService {
apiUrl = 'https://api.github.com/users';
apiRandomUrl = 'https://randomuser.me/api/';
randuser: any;

  constructor(private http: HttpClient) {
  	 this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      this.randuser = res.results[0];
      console.log(this.randuser);
    })
  };

  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`); 
  }

  getRandomUser() {
   return this.http.get('https://randomuser.me/api');
  }

  //Luthando RESTAPI - We will get data from config.json:
  configUrl = 'assets/config.json';

  getConfig() {
  return this.http.get(this.configUrl);
  }


  /*
  name = 'Angular ' + VERSION.major;
  user: any;

  constructor(private http: HttpClient) {
    this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      this.user = res.results[0];
      console.log(this.user);
    })
  }

//Works
 getRandomUser() {
    return this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      this.randuser = res.results[0];
      console.log(this.randuser);
    })
  }



  */


}
