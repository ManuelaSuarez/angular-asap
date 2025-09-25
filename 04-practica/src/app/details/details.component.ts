import { CommonModule } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { iHousingLocation } from '@app/housing-location/housing-location.interface'
import { HousingService } from '@app/housing.service'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: "./details.component.html",
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  service = inject(HousingService);

  house = this.service.house
  loading = this.service.loading  
  id = Number(this.route.snapshot.paramMap.get('id'))

  constructor() {
    this.service.getHousingLocationById(this.id)
  }

}


// import { CommonModule } from '@angular/common'
// import { Component, inject, signal } from '@angular/core'
// import { ActivatedRoute } from '@angular/router'
// import { iHousingLocation } from '@app/housing-location/housing-location.interface'
// import { HousingService } from '@app/housing.service'

// @Component({
//   selector: 'app-details',
//   standalone: true,
//   imports: [],
//   templateUrl: "./details.component.html",
//   styleUrl: './details.component.css',
// })
// export class DetailsComponent {
//   private route: ActivatedRoute = inject(ActivatedRoute);
//   id = Number(this.route.snapshot.paramMap.get('id'))
//   service = inject(HousingService);
//   house = signal<iHousingLocation | null>(null)


//   constructor() {

//     this.service.getHousingLocationById(this.id)
//       .then((res) => this.house.set(res))
//   }


// }

