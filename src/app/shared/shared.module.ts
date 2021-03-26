import { NgModule } from '@angular/core';
import { LowercasePipe } from './lowercase.pipe';

@NgModule({
    declarations: [LowercasePipe],
    exports: [LowercasePipe]
})

export class SharedModule {}