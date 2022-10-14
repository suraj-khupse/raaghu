import { Component, Input, OnInit } from '@angular/core';
export interface item {
  id: number;
  value: number;
}

@Component({
  selector: 'rds-rating',
  templateUrl: './rds-rating.component.html',
  styleUrls: ['./rds-rating.component.scss']
})
export class RdsRatingComponent implements OnInit {
  @Input() itemList: any = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  @Input() withNoOfReviews: boolean = false;
  @Input() ratingPosition: 'left' | 'right' = 'left';
  @Input() rating: number = 0;
  @Input() colorVariant: 'review' | 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'secondary' | 'dark' | 'light' = "review";
  @Input() noOfReview: number | undefined = 123;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  height = '';
  width = '';
  selected: any;
  constructor() { }

  ngOnInit(): void {
  }

  public get colorSelection(): string {
    const color = `text-${this.colorVariant}`;
    return color;
  }

  public get classes(): string {
    const sizes = `${this.size === 'small' ? 'small ' : this.size === 'large' ? 'fs-4' : 'md'}`;
    const startsize = `${this.size === 'small' ? this.height = '14px' : this.size === 'large' ? this.height = '28px' : this.height = '19px'}`;
    const startsize1 = `${this.size === 'small' ? this.width = '14px' : this.size === 'large' ? this.width = '28px' : this.width = '19px'}`;
    return sizes;
  }


}

