import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScanPage } from './qr-scan';

@NgModule({
  declarations: [
    QrScanPage,
  ],
  imports: [
    IonicPageModule.forChild(QrScanPage),
  ],
})
export class QrScanPageModule {}
