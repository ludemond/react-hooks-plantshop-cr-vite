import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onSearchChange, searchTerm, onToggleStock }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search value={searchTerm} onSearchChange={onSearchChange} />
      <PlantList plants={plants} onToggleStock={onToggleStock} />
    </main>
  );
}

export default PlantPage;
