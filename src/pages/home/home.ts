import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  postList = [];

  constructor(public navCtrl: NavController, public remoteService: RemoteServiceProvider) {
    this.getPosts();
  }

  

  getPosts() {
    this.remoteService.getUsers().subscribe((data) => {
      this.postList = data.data;
    });
  }

}
