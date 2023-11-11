import { Component } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubscribeService]
})
export class HeaderComponent {

  constructor(private subscribe: SubscribeService) {
    console.log(this.subscribe);
  }

  onSubscription = (type: string) => {
    this.subscribe.onSubscribeClicked(type);
  }

}
