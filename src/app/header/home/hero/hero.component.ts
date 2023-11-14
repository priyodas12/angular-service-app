import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [SubscribeService]
})
export class HeroComponent {

  constructor(private subscribe: SubscribeService) {
    console.log(this.subscribe.toString());
  }
  onSubscription = (type: string) => {
    this.subscribe.onSubscribeClicked(type);
  }

}
