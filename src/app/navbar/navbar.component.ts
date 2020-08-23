import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { faGithub, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  name: string;

  // Icons
  faGithub = faGithub;
  faAngular = faAngular;
  faUserCircle = faUserCircle;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
      console.log(params);
    });
  }
}
