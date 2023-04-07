import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  ngAfterViewInit(): void {
    const js = document.createElement('script');
    js.src = '../../../../assets/js/scripts.js';
    js.type = 'text/javascript';
    document.body.appendChild(js);
  }
}
