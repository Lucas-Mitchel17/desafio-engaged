<script setup>
import { RouterLink } from "vue-router";
import { BaseCharacterCard, BaseText } from "src/components/ui/base";
import { ref } from "vue";

const name = ref("");

const current = ref(1);

const character = ref([
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
]);
</script>

<template>
  <q-page padding>
    <RouterLink to="/">
      <q-btn class="btn is-back" icon="arrow_back" label="Back to Home" />
    </RouterLink>

    <BaseText tag="h2"> Find your favorite character! </BaseText>

    <q-input
      outlined
      v-model="name"
      label="Character Name *"
      hint="Name and surname to be more especifique"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      class="input"
    />

    <section class="row justify-center">
      <BaseCharacterCard
        v-for="characters in character"
        :key="characters"
        :scr-image="characters.image"
        :status="characters.status"
        :species="characters.species"
        :name="characters.name"
      />
    </section>

    <div class="flex flex-center">
      <q-pagination
        v-model="current"
        color="teal"
        :max="10"
        :max-pages="5"
        :ellipses="false"
        :boundary-numbers="false"
      />
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.text-h2 {
  color: $brown;
  margin: 20px 0 50px;
  text-align: center;
}

.input {
  margin-bottom: 50px;
}
</style>
