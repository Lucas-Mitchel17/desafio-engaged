<script setup>
import { BaseText } from "src/components/ui/base";
import { ref } from "vue";

const characterInfos = ref({
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episodes: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51",
  ],

});

const info = ref([
  {
    subject: 'Status',
    item: characterInfos.value.status
  },
  {
    subject: 'Species',
    item: characterInfos.value.species
  },
  {
    subject: 'Gender',
    item: characterInfos.value.gender
  },
  {
    subject: 'Type',
    item: (characterInfos.value.type || '-')
  },
  {
    subject: 'Location',
    item: characterInfos.value.location.name
  },
])
</script>

<template>
    <div class="c-img">
      <img :src="characterInfos.image">
    </div>
    <div class="c-infos-section">
      <BaseText
        v-for="infos in info"
        :key="infos"
        tag="p"
        class="infos"
      >
        {{ infos.subject }}: <span> {{ infos.item }}</span>
      </BaseText>
    </div>
</template>

<style lang="scss" scoped>
.c-infos {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 25px auto;

  .c-img {
    margin: 0 0 25px;
    img {
      border-radius: 5px;
    } 
  }

  @media (min-width: $md) {
    flex-direction: row;
    margin: 0;

  .c-img {
      margin: 0 50px 0 0;
    }
  }

  .c-infos-section {
    max-width: 300px;
    width: 100%;
    .infos {
      color: $lightGreen;
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 10px;

      span {
        color: $brown;
        font-weight: 400;
      } 
    }
  }
}
</style>
