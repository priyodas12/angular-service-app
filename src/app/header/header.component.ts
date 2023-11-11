import { Component } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  onClickAlert() {
    const subscription = new SubscribeService();
    subscription.onSubscribeClicked('yearly');
  }

}
