import { Component } from '@angular/core'
import { environment } from 'src/environments/environment.development'

@Component({
  selector: 'side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html'
})
export class SideMenuHeaderComponent {
  env = environment
}
