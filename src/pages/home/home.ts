import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Awrad } from '../../app/awrad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  awrad = [] ;

  constructor(
    public navCtrl: NavController
  ) {
    this.awrad = Awrad

  }
  ionViewWillEnter() {
    // this._nativeStorage.getItem('fontSize').then(data =>{
    //   this.fontSize = data ?  data : this.fontSize;
    // });
    // this._nativeStorage.getItem('fontFace').then(data => {
    //   this.fontFaceClass = data ? data: this.fontFaceClass
    // });
  }

}
