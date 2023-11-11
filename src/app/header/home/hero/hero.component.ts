import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  onSubscription = (type: string) => {
    const subscription = new SubscribeService();
    subscription.onSubscribeClicked(type);
  }

}
