import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost/signup.php';
  private apiUrlIN = 'http://localhost/signin.php';
  private emailUrl = 'http://localhost/email.php';

  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  signUp(name: string, email: string, password: string) {
    // Send the HTTP request with the Content-Type header set to application/json
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams()
      .set('name', name)
      .set('email', email)
      .set('password', password);

    console.log(params.toString());

    return this.http
      .post(this.apiUrl, {}, { headers: headers, params: params })
      .subscribe((error) => console.log(error));
  }

  signIn(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .get(this.apiUrlIN, { params: params, headers: headers })
      .subscribe(
        (response: any) => {
          const token = response.token;
          console.log('Token:', token);
          localStorage.setItem('token', token);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
        },
        (error) => console.log(error)
      );
  }

  autoAuthUser() {
    const token = localStorage.getItem('token');
    if (token == null && token == undefined) {
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
    } else {
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    console.log('Logout runs seccesfully!');
  }

  getLocation(minPrice?: number, maxPrice?: number) {
    let url = 'http://localhost/location.php';
    if (minPrice && maxPrice) {
      url += ` ?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    }
    return this.http.get(url);
  }

  sendEmail(
    name: string,
    email: string,
    startDate: string,
    endDate: string,
    requests: string
  ) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      name: name,
      email: email,
      startDate: startDate,
      endDate: endDate,
      requests: requests,
    };
    console.log(body);
    return this.http.post(this.emailUrl, body, { headers: headers });
  }
}
