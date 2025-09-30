import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SideMenuHeaderComponent } from "@app/gif/components/side-menu-header/side-menu-header.component"
import { SideMenuOptionsComponent } from '@app/gif/components/side-menu-options/side-menu-options.component'
@Component({
  selector: 'dashboard',
  imports: [RouterOutlet, SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

}
