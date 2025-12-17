import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogRef,
    MatDialogTitle,
} from '@angular/material/dialog';

@Component({
    selector: 'dialog-error',
    templateUrl: 'dialog-error.html',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogErrorDialog {
    readonly dialogRef = inject(MatDialogRef<DialogErrorDialog>);

    data = this.dialogRef._containerInstance._config.data as { message: string };
}
