import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  expand: boolean = false;
  // Icons
  faBell = faBell;

  // Angular only binds to public component properties.
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  toggleExpand(): void {
    this.expand = !this.expand;
  }

  clear(): void {
    this.messageService.clear();
    this.expand = false;
  }
}
