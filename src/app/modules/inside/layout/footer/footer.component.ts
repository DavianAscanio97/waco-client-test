import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-inside-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class InsideFooterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
