import { Component, Inject , OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
    Loading:boolean = false
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
    }
    onNoClick(){
        if(this.Loading) return;
        this.dialogRef.close()
    }
    onYesClick(){
        if(this.Loading) return;
        if(this.data.preConfirm) {
            this.Loading = true;
            this.data.preConfirm()
                .subscribe(
                    (res:any) => {
                        this.Loading = false;
                        this.dialogRef.close(res);
                    }
                );
        } else {
            this.dialogRef.close(this.data.prompt ? this.data.prompt.value : true)
        }
    }
    get type(){
        return this.data.type || 'alert';
    }
}
