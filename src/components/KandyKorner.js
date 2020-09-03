import React from "react"
import { LocationPovider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import "./KandyKorner.css"


export const KandyKorner = () => (
  <>
    <div className="kandy-korner">
      <div>Kandy Korner</div>

      <h2>Locations</h2>
      <LocationPovider>
        <LocationList />
      </LocationPovider>
    </div>
  </>
)