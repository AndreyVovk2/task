import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  arr: string;

  ngOnInit(): void {
    console.log('hello');
    const test = new Promise((resolve) => {
      resolve(2);
    }).then((res: number) => {
      console.log(res);
      return new Promise((resolve) => {
        setTimeout(() => {
          alert(res);
          resolve(res * 6);
        }, 1000);
      });
    }).then(res => {
      console.log(res);
      return new Promise((resolve) => {
        setTimeout(() => {
          alert(res);
          resolve(res);
        }, 500);
      });
    });
    Promise.all([test]).catch(res => {
      console.log(res);
    });
  }

  test(v: number): void {
    this.changeSwitch(v);
    console.log(this.arr);
  }

  changeSwitch(v): void {
    const hel = {
      1: 'Один',
      2: (() => {
        return alert('TEST');
      }),
      3: 'Три'
    };
    // this.arr = hel[v];
    return hel[v]();
  }

  kt(v): void {
    alert(v);
  }
}

