import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        AuthModule,
        DashboardModule,
        HomeComponent
    ],
   declarations: [
  ],
})
export class AppModule { }