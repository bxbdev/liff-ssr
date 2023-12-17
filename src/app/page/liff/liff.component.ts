import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import liff from '@line/liff';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-liff',
  templateUrl: './liff.component.html',
  styleUrls: ['./liff.component.scss'],
  standalone: true,
})
export class LiffComponent implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Liff line bot');
    this.metaService.addTags([
      { name: 'description', content: 'Liff line bot' },
      { name: 'keywords', content: 'liff,line bot,message,name card,ssr' },
    ]);

    this.onShareBusinessCard();
  }

  onShareBusinessCard() {
    liff
      .init({
        liffId: environment.liff_id,
      })
      .then(() => {
        // Start to use liff's api
        if (!liff.isLoggedIn()) {
          liff.login();
        }
        const os = liff.getOS();
        if (os === 'ios') {
          // do something for ios
        }
        if (os === 'web') {
          // do something for web
        }

        if (os === 'android') {
          // do something for android
        }

        const flexMessage = this.createFlexMessage();
        // @ts-ignore
        liff.shareTargetPicker([flexMessage], { isMultiple: true });
      })
      .then((res: any) => {
        if (res) {
          console.log(`${res.status} message sent!`);
          liff.closeWindow();
        }
      })
      .catch((err) => {
        // Error happens during initialization
        console.error(err.code, err.message);
      });
  }

  private createFlexMessage() {
    const message = {};
    const parseMessage = JSON.parse(JSON.stringify(message));
    return {
      type: 'flex',
      altText: 'This is a flex message',
      contents: parseMessage,
    };
  }
}

// GetUserProfile
// liff.getProfile().then((profile) => {
//   console.log(profile);
// });
