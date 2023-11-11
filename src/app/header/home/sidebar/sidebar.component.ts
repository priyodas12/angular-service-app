import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  onSubscription = (type: string) => {
    const subscription = new SubscribeService();
    subscription.onSubscribeClicked(type);
  }

}
