import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, NavController, Platform } from '../../../..';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {
  items: any[] = [];
  webview: string = '';
  counter: number = 0;

  constructor(plt: Platform, public navCtrl: NavController) {
    if (plt.is('ios')) {
      if (plt.testUserAgent('Safari')) {
        this.webview = ': iOS Safari';

      } else if (!!(window as any)['webkit']) {
        this.webview = ': iOS WKWebView';

      } else {
        this.webview = ': iOS UIWebView';
      }
    }
  }

  addItems() {
    if (this.items.length === 0) {
      for (var i = 0; i < 200; i++) {
        this.addItem();
      }
    }
  }

  headerFn(record: any, index: number, records: any[]) {
    if (index % 4 === 0) {
      return index + ' is divisible by 4';
    }
    return null;
  }

  pushPage() {
    this.navCtrl.push(E2EPage);
  }

  addItem() {
    this.items.push({
      value: this.counter,
      someMethod: function() {
        return '!!';
      }
    });
    this.counter++;
  }

  reload() {
    window.location.reload(true);
  }

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class AppComponent {
  root = E2EPage;
}


@NgModule({
  declarations: [
    AppComponent,
    E2EPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    E2EPage
  ]
})
export class AppModule {}
