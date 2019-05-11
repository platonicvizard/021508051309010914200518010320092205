import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  declarations: [SanitizeUrlPipe],
  exports: [SanitizeUrlPipe],
  imports: [CommonModule]
})
export class SharedModule {}
