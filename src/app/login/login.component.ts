import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  data: any = {
    rememberMe: true,
    email: `dcdc@gmail.com`,
    password: `123456`,

  };


  doSubmit(form: NgForm): void {
    switch (form.status) {
      case 'VALID':
        console.log(form.value);
        // this.http.post('/save', this.data).subscribe(result => {
        // });
        break;
      case 'INVALID':
        alert(' 表單驗證失敗，無法送出表單！');
        break;
      case 'PENDING':
        alert(' 表單驗證進行中，請稍後再試...');
        break;
      case 'DISABLED':
        break;
    }
  }





  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
    // setTimeout(() => {
    //   localStorage.setItem('token', 'JWT');
    //   const ret = this.route.snapshot.queryParamMap.get('ret');
    //   this.router.navigateByUrl(ret);
    // }, 3000);

  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
