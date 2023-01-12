import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ComponentRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import { ComponentLoaderOptions } from './component-loader-options.model';
import { MfeConfig } from 'projects/mfe-config';


@Component({
  selector: 'mfe-loader',
  template: ` <ng-container #placeHolder></ng-container> `,
})
export class ComponentLoaderComponent implements OnInit, DoCheck, OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;
  @Input() config: ComponentLoaderOptions;
  @Input() tableDataLength: any;

  rdsComponentsRemote: string = MfeConfig.rdsComponents.url;
  compRef: ComponentRef<any>;
  constructor() { }

  async ngOnInit(): Promise<void> {
    this.viewContainer.clear();
    const Component = await loadRemoteModule({
      type: 'module',
      remoteEntry: this.rdsComponentsRemote,
      exposedModule: `./${this.config.name}`,
      componentName: `${this.config.name}Component`,
    } as LoadRemoteModuleOptions).then(
      (m) => m[`${this.config.name}Component`]
    );
    this.compRef = this.viewContainer.createComponent(Component);
    this.handleInputsAndOutputs();
  }

  ngDoCheck(): void {
    if (this.config.input && this.compRef) {
      for (const input of Object.keys(this.config.input)) {
        this.compRef.instance[input] = this.config.input[input];
        this.compRef.changeDetectorRef.detectChanges();
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  handleInputsAndOutputs() {
    if (!this.compRef) return;
    if (this.config.input) {
      for (const input of Object.keys(this.config.input)) {
        this.compRef.instance[input] = this.config.input[input];
      }
    }
    if (this.config.output) {
      for (const output of Object.keys(this.config.output)) {
        this.compRef.instance[output]?.subscribe(this.config.output[output]);
      }
    }
  }
}
