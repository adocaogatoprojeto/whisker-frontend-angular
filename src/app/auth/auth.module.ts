import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Auth } from "./auth";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [AuthService, FormGroupDirective],
    declarations: [Auth],
})
export class AuthModule { }