import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  type = 0;
  name = '';
  type2 = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // params and Query params are old API, avoid use

    // use snapshot, if you are in the same page, u need to reload to update the val
    // in this case, we will use paraMap
    // this.type = +this.route.snapshot.paramMap.get('type');

    // PS: TS, if you use [] to get stuff, the type auto-convert to any
    // if you use . notation to get, TS also think all of them are any,
    // it's more like weakly type


    // try with: http://localhost:4200/#/utilities/color/3
    this.route.paramMap.subscribe(params => {
      if (+params.get('type') !== null) {
        console.log(+params.get('type'));
        this.type = +params.get('type');
      }

    });

    // try with: http://localhost:4200/#/utilities/color?name=23
    // this.name = this.route.snapshot.queryParamMap.get('name');

    // try with http://localhost:4200/#/utilities/color/3?name=23
    this.route.queryParamMap.subscribe(params => {
      if (params.get('name') !== null) {
        console.log(params.get('name'));
        this.name = params.get('name');
      }
    })


  }

}
