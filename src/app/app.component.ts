import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'theme';

  constructor(private hljsLoader: HighlightLoader) {
    Chart.register(...registerables);
  }

  onAppThemeChange(appTheme: 'dark' | 'light') {
    this.hljsLoader.setTheme(
      appTheme === 'dark'
        ? 'assets/styles/solarized-dark.css'
        : 'assets/styles/solarized-light.css'
    );
  }
}
