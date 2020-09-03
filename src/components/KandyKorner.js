import React from "react"
import { LocationPovider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

export const KandyKorner = () => (
  <>
    <div>Kandy Korner</div>

    <h2>Locations</h2>
    <LocationPovider>
      <LocationList />
    </LocationPovider>
  </>
)