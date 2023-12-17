import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onShare() {
    console.log('go to liff page');
    window.location.href = `https://liff.line.me/${environment.liff_id}`;
  }
}
