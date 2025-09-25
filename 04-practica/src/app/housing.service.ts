import { Injectable, inject, signal } from "@angular/core"

import type { iHousingLocation } from "./housing-location/housing-location.interface"
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations"
  private http: HttpClient = inject(HttpClient)

  housingLocationList = signal<iHousingLocation[]>([])
  filteredLocationList = signal<iHousingLocation[]>(this.housingLocationList())
  house = signal<iHousingLocation | null>(null)
  loading = signal<boolean>(true)

  constructor() {
    this.getAllHousingLocation()
  }

  getAllHousingLocation() {
    this.http.get<iHousingLocation[]>(this.url).subscribe((res) => {
      console.log(res)
      this.housingLocationList.set(res)
      this.filteredLocationList.set(res)
      this.loading.set(false)
    })

  }

  getHousingLocationById(id: number) {
    this.http.get<iHousingLocation>(`${this.url}/${id}`)
      .subscribe((res) => {
        this.house.set(res)
        this.loading.set(false)
      })
  }

  filterByCity(city: string) {
    city = city.trim().toLowerCase()

    if (city == "") {

      this.filteredLocationList.set(this.housingLocationList())
      this.loading.set(false)

    } else {
    
      this.filteredLocationList.set(this.housingLocationList().filter(h => h.city.toLowerCase().includes(city)))
      this.loading.set(false)

    }
    
  }
}


// import { Injectable } from '@angular/core'
// import { iHousingLocation } from './housing-location/housing-location.interface'

// @Injectable({
//   providedIn: 'root'
// })
// export class HousingService {
//   url = "http://localhost:3000/locations"
//   async getAllHousingLocation(): Promise<iHousingLocation[]> {
//     const data = await fetch(this.url)
//     const houses = (await data.json()) ?? []
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(houses)
//       }, 500)
//     })
//   }
//   async getHousingLocationById(id: Number): Promise<iHousingLocation> {
//     const data = await fetch(`${this.url}/${id}`)
//     return (await data.json()) ?? {}
//   }
// }
