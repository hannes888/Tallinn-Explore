import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected to styleUrls
})
export class HomeComponent {
  @ViewChildren('accordionContent') accordionContents!: QueryList<ElementRef>;

  accordionItems = [
    { title: 'Restaurants', content: 'Here are some great restaurants to try...', active: false, contentHeight: '0' },
    { title: 'Museums', content: 'Here are some interesting museums to visit...', active: false, contentHeight: '0' },
    { title: 'Entertainment', content: 'Here are some entertainment options...', active: false, contentHeight: '0' },
    { title: 'Events', content: 'Here are some upcoming events...', active: false, contentHeight: '0' }
  ];

  toggleAccordion(item: any) {
    item.active = !item.active;
    setTimeout(() => {
      const contentElement = this.accordionContents.toArray()[this.accordionItems.indexOf(item)].nativeElement;
      item.contentHeight = item.active ? contentElement.scrollHeight + 'px' : '0';
    }, 0);
  }
}
