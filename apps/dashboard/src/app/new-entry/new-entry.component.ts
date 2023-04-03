import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'sandbox-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None

})
export class NewEntryComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex = 0;

  constructor(
    private messageService: MessageService,
    private router: Router,
    ) {}

    ngOnInit() {
        this.items = [
          {
            label: 'Add a Location',
            command: (event: any) => {
                this.activeIndex = 0;
                this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
            }
        },
        {
            label: 'Describe your Experience',
            command: (event: any) => {
                this.activeIndex = 1;
                this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
            }
        },
        {
            label: 'Add Photos?',
            command: (event: any) => {
                this.activeIndex = 2;
                this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
            }
        },
        {
            label: 'Confirm Entry',
            command: (event: any) => {
                this.activeIndex = 3;
                this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
            }
        }
        ];
    }
}
