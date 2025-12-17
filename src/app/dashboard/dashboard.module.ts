import { NgModule } from "@angular/core";
import { Dashboard } from "./dashboard";
import { CommonModule } from "@angular/common";
import { SideNav } from "../side-nav/side-nav";

@NgModule({
    imports: [CommonModule, SideNav],
    declarations: [Dashboard],
})

export class DashboardModule {}