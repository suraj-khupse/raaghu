import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCoreModule,VgControlsModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';
import { RdsVideoPlayerComponent } from './rds-video-player.component';

@NgModule({
  declarations: [
    RdsVideoPlayerComponent
  ],
  imports: [
    CommonModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule,
  ],
  exports: [
    RdsVideoPlayerComponent
  ]
})
export class RdsVideoPlayerModule { }
