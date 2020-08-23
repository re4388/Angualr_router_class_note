import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router) { }

  goColor(type: number, name: string) {

    this.route.navigateByUrl(`/utilities/color/${type}?name=${name}`);

    // another way to do above
    // this.route.navigate(['/utilities/color/' + type], {
    //   queryParams: {
    //     name,
    //     key: 123,
    //   }
    // })

    // other ways of doing
    // this.route.navigate(['/utilities/', color' + type])
    // this.route.navigate(['/', 'utilities', 'color' + type])
  }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

}
