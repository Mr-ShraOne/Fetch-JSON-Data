import { Injectable, enableProdMode } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Platform } from 'ionic-angular';

@Injectable()
export class RemoteServiceProvider {
  postList = [];

  constructor(private http: Http, public platform: Platform) {
    // if (this.platform.is('ios') || this.platform.is('android')) {
    //   enableProdMode();
    // } else {
    //   // something else
    // }
  }

  getApiUrl: string = "https://www.vighnhartaservices.com/jsonpages/getHospital";

  getUsers() {
    return this.http.get(this.getApiUrl)
      .map((res: Response) => res.json());
  }

}
