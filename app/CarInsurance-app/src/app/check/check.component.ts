import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ckpage()
  {
    this.router.navigate(['/customer'])
  }

}
