import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';

  orders: any;

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:no-trailing-whitespace
  ngOnInit(): void {
    this.getOrders();
  }

  // tslint:disable-next-line:typedef
  onSumit(data){
    this.http.post('https://localhost:44302/Order', data).subscribe();
    window.location.reload();
  }

  // tslint:disable-next-line:typedef
  getOrders() {
    this.http.get('https://localhost:44302/Order').subscribe(response => { this.orders = response; }, error => { console.log(error); });
  }
}
