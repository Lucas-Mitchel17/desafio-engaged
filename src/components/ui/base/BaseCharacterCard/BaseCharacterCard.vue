<script setup>
import { ref } from 'vue';


const character = ref({
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "url": "https://rickandmortyapi.com/api/character/1",
})
</script>

<template>
  <div class="card">
    <q-card class="card-item">
      <img :src="character.image">

      <q-card-section>
        <div class="text-h6">Name: {{ character.name }} </div>
      </q-card-section>
      
      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">Status: {{ character.status }}</div>
        <div class="text-subtitle2">Species: {{ character.species }}</div>
      </q-card-section>

      <q-card-actions>
        <router-lin to="#">
          <q-btn 
            flat
            label="Ver mais..."
            class="full-width"
          />
        </router-lin>
      </q-card-actions>
    </q-card>

  </div>
</template>

<style lang="scss">
.card {
  margin-bottom: 40px;

  &-item {
    max-width: 300px;
    width: 100%;
  }
}
  
</style>