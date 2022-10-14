import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Tooltip } from 'bootstrap'
import { Tooltip } from 'bootstrap'
declare var bootstrap: any;
@Component({
  selector: 'rds-button',
  templateUrl: './rds-button.component.html',
  styleUrls: ['./rds-button.component.scss']
})
export class RdsButtonComponent implements AfterViewInit, OnInit, DoCheck {

  @Input() colorVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'default' = 'default';
  @Input() submit = false;
  static count: number = 0;
  @Input() block: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() disabled = false;
  @Input() outlineButton = false;
  @Input() roundedButton = false;
  @Input() roundedCorner = false;
  @Input() tooltipTitle: string = '';
  @Input() tooltipPlacement: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
  @Input() id: string = 'buttonId';
  @Input() isLoading: boolean = false;
  @Input() showLoadingSpinner: boolean = false;
  @Input() iconHeight: string = '';
  @Input() iconWidth: string = '';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() buttonType?: 'iconOnly' | 'labelOnly' | 'iconLabel' = 'iconLabel';
  @Input() icon: string = '';
  @Input() label: string = '';
  private labelTemp: string;

  @Output() onClick = new EventEmitter<Event>();


  makeSpinnerActive: boolean;
  iconTemp: string;
  buttonTypeTemp: 'iconOnly' | 'labelOnly' | 'iconLabel' | undefined;

  constructor() {
    this.id = this.id + RdsButtonComponent.count++;
  }


  ngOnInit(): void {
    this.makeSpinnerActive = this.showLoadingSpinner;
    this.showLoadingSpinner = false;
    this.labelTemp = this.label;
    this.iconTemp = this.icon;
    this.buttonTypeTemp = this.buttonType;
  }

  ngDoCheck(): void {
    if (this.showLoadingSpinner == true) {
      this.label = '';
      this.icon = '';
      this.buttonType = 'labelOnly';
    }
    else {
      this.label = this.labelTemp;
      this.icon = this.iconTemp;
      this.buttonType = this.buttonTypeTemp;
    }
  }


  ngAfterViewInit(): void {
    const tooltipTriggerList: any = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    if (this.tooltipTitle && tooltipTriggerList) {
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
    }
    // if (this.tooltipPlacement && this.tooltipTitle) {
    //   const tooltipElement: any = document.getElementById(this.id)
    //   // update
    //   if (tooltipElement) {
    //     let bsTooltip = new bootstrap.Tooltip(tooltipElement)
    //     tooltipElement.title = this.tooltipTitleou
    //     bsTooltip = new bootstrap.Tooltip(tooltipElement)
    //   }
    // }
  }

  public get classes(): string {
    const outline = `${this.outlineButton ? ' btn btn-outline-' + this.colorVariant : ' btn btn-' + this.colorVariant}`;
    const mode = ` btn-${this.size === 'small' ? 'sm ' : this.size === 'large' ? 'lg ' : 'md '}`;
    const icon = `${this.roundedButton ? ' btn-icon rounded-pill ' : ''}`;
    const icon1 = `${this.roundedCorner ? ' rounded-pill ' : ''}`;
    const disabledGrey = `${this.disabled === true ? 'btn ' : ''}`

    return outline + mode + icon + icon1 + disabledGrey;
  }

  public get blockWidth(): string[] {
    let classes: string[] = [];
    if (this.block === true) {
      classes.push('w-100')
      return classes
    }

    return classes;
    // return this.block ? 'd-grid' : '';
  }

  public get submitButton(): string {
    return this.submit ? 'submit' : 'button';
  }

  ngOnDestroy(): void {
    RdsButtonComponent.count = 0;
  }

  buttonClick(evt: any) {
    if (this.makeSpinnerActive) {
      this.showLoadingSpinner = true;

    }
    this.onClick.emit(evt);
  }

}
