import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-liff',
  templateUrl: './liff.component.html',
  styleUrls: ['./liff.component.scss'],
})
export class LiffComponent implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Liff line bot');
    this.metaService.addTags([
      { name: 'description', content: 'Liff line bot' },
      { name: 'keywords', content: 'liff,line bot,message,name card,ssr' },
    ]);
  }
}
