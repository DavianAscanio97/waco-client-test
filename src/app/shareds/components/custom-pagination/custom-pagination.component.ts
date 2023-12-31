import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'
@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CustomPaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() id!: string;
  @Input() maxSize: number = 5;
  @Input()
  get directionLinks(): boolean {
    return this._directionLinks;
  }
  set directionLinks(value: boolean) {
    this._directionLinks = !!value && <any>value !== 'false';
  }
  @Input()
  get autoHide(): boolean {
    return this._autoHide;
  }
  set autoHide(value: boolean) {
    this._autoHide = !!value && <any>value !== 'false';
  }
  @Input() previousLabel: string = 'Previous';
  @Input() nextLabel: string = 'Next';
  @Input() screenReaderPaginationLabel: string = 'Pagination';
  @Input() screenReaderPageLabel: string = 'page';
  @Input() screenReaderCurrentLabel: string = `You're on page`;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  private _directionLinks: boolean = true;
  private _autoHide: boolean = false;
  public totalListCount: number = this.maxSize;

  pageLabelValue(page: any, p: any): string {
    const labelNumber = +page.label; // Try to convert to a number
    if (!isNaN(labelNumber)) {
      return `${5 * (labelNumber - 1) + 1} - ${5 * p.getCurrent()}`;
    } else {
      return "Invalid Label"; // You can handle this case appropriately
    }
  }
}
