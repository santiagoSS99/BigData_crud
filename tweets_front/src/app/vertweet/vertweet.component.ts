import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-vertweet',
  templateUrl: './vertweet.component.html',
  styleUrls: ['./vertweet.component.scss']
})
export class VertweetComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  tweets: any

  ngOnInit(): void {
    this.obtenerTw()
  }

  obtenerTw() {
    this.servicesService.obtenerTweets().subscribe((res) => {
      this.tweets = res
      console.log(res)
    })
  }

  delete(id: string) {
    this.servicesService.borrartweet(id).subscribe((res) => {
      console.log(res)
    })
  }

}
