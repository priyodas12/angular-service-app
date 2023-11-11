import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SubscribeService]
})
export class SidebarComponent {

  constructor(private subscribe: SubscribeService) {
    console.log(this.subscribe);
  }

  onSubscription = (type: string) => {
    this.subscribe.onSubscribeClicked(type);
  }

}
