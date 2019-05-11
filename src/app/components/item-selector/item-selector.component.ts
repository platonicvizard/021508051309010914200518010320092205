import { Component, OnInit, Input } from '@angular/core';
import { IWeaponBaseItem } from 'src/app/models/i-weapon-base-item';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit {
  @Input() items: IWeaponBaseItem[];
  @Input() height: number | string = '100%';

  currentItem: IWeaponBaseItem = null;
  currentIndex = 0;
  length = 0;

  constructor() {}

  get showNext() {
    return this.currentIndex < this.length - 1;
  }
  get showPrevious() {
    return this.currentIndex > 0;
  }

  ngOnInit() {
    if (typeof this.height === 'number') {
      this.height = `${this.height}px`;
    }
    this.update();
  }

  update() {
    const { items, currentIndex } = this;
    if (items && items.length) {
      this.length = items.length;
      this.currentItem = items[currentIndex];
    }
  }

  next(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }

    const { length } = this;
    if (this.currentIndex < length - 1) {
      this.currentIndex++;
      this.update();
    }
  }

  previews(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }

    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.update();
    }
  }
}
