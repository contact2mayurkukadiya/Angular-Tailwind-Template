import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptInjectorService {
  private scripts: any = {};

  constructor() {}

  load(...scripts: string[]) {
    this.scripts = scripts;
    let promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script') as any;
      script.type = 'text/javascript';
      script.src = name;

      if (script.readyState) {
        //IE
        script.onreadystatechange = () => {
          if (
            script.readyState === 'loaded' ||
            script.readyState === 'complete'
          ) {
            script.onreadystatechange = null;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          }
        };
      } else {
        //Others
        script.onload = () => {
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
      }

      script.onerror = (error: any) =>
        resolve({ script: name, loaded: false, status: 'Loaded' });
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  /*   loadScript() {
    let node = document.createElement('script');
    node.src = 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js';
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  } */
}
