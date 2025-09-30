import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from "@angular/router"
interface MenuOption {
  icon: string,
  label: string,
  subLabel: string,
  route: string
}

@Component({
  selector: 'side-menu-options',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html'
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOption[] = [
    {
      icon: "trending_up",
      label: "Tendencias",
      subLabel: "Los más populares",
      route: "/dashboard/trending"
    },
    {
      icon: "search",
      label: "Buscador",
      subLabel: "Encuentra tus gifs",
      route: "/dashboard/search"
    }
  ]
}
