import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
    imports: [
        AuthModule,
        DashboardModule
    ],
})
export class AppModule { }