<script setup>
import { BaseText } from 'components/ui/base';
import { ref } from 'vue';

const episode = ref([
  {
    id: "1",
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
  },
  {
    id: "1",
    name: "Name ep 2",
    air_date: "December 2, 2013",
    episode: "S01E01",
  },
  {
    id: "1",
    name: "Name ep 3",
    air_date: "December 2, 2013",
    episode: "S01E01",
  },
  {
    id: "1",
    name: "Name ep 4",
    air_date: "December 2, 2013",
    episode: "S01E01",
  },
])

const character = ref([
  {
    "name": "Rick Sanchez"
  },
  {
    "name": "Morty Smith"
  },
  {
    "name": "Bepisian"
  },
  {
    "name": "Beth Smith"
  },
  {
    "name": "Canklanker Thom"
  },
  {
    "name": "Davin"
  },
  {
    "name": "Frank Palicky"
  },
  {
    "name": "Glenn"
  },
  {
    "name": "Hookah Alien"
  },
  {
    "name": "Jerry Smith"
  },
  {
    "name": "Jessica"
  },
  {
    "name": "Jessica's Friend"
  },
  {
    "name": "Mr. Goldenfold"
  },
  {
    "name": "Mrs. Sanchez"
  },
  {
    "name": "Principal Vagina"
  },
  {
    "name": "Summer Smith"
  },
])

const slide = ref(0)
</script>

<template>
  <div class="episode-tab">
    <BaseText class="episode-count" tag="h3"> All episode appearences: {{ episode.length }}</BaseText>
    <BaseText class="episode-info" tag="h4"> Click on arrow to see the next episode *</BaseText>

    <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="black"
        arrows
        class="episode-carousel"
      >
        <q-carousel-slide :name="index" class="column no-wrap flex-center" v-for="(episodes, index) in episode" :key="episodes.id">

          <q-card class="episode-card">
            <q-card-section>
              <BaseText class="card-title" tag="p">Ep name: <span>{{ episodes.name }}</span></BaseText>
              <BaseText class="card-title" tag="p">Ep number: <span>{{ episodes.episode }}</span></BaseText>
              <BaseText class="card-title" tag="p">Air date: <span>{{ episodes.air_date }}</span></BaseText>

              <q-expansion-item
                class="card-expand"
                expand-icon-toggle
                label="Characters appearing in the same episode"
              >
                <BaseText
                  class="card-title card-expand-name"
                  tag="p"
                  v-for="characters in character"
                  :key="characters"
                >
                  Name: <span>{{ characters.name }}</span>
                </BaseText>
              </q-expansion-item>

            </q-card-section>
          </q-card>

        </q-carousel-slide>
      </q-carousel>

  </div>
</template>

<style lang="scss" scoped>
.episode-tab {

  .episode-count {
    color: $brown;
  }

  .episode-info {
    color: $brown;
  }

  .episode-carousel {
    height: fit-content;
    .episode-card {
      max-width: 100%;
      @media (min-width: $md) { width: calc(100% - 100px); }

      .card-title {
        align-items: center;
        color: $lightGreen;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: 700;
        margin-top: 10px;
        text-transform: uppercase;

        span {
          color: $brown;
          font-size: 17px;
          font-weight: 400;
          margin-left: 10px;
        }

        @media (min-width: $md) {
          display: block;
          font-size: 20px;

          span { font-size: 25px; }
        }
      }

      .card-expand {
        color: $blue;
        font-size: 15px;
        font-weight: 700;
        margin-top: 20px;
        & > .q-expansion-item__container > .q-item { padding: 0; }

        &-name { color: $blue; padding-left: 16px; }

        @media (min-width: $sm) {font-size: 20px;}

        @media (min-width: $md) {
          font-size: 30px;
        }
      }
    }
  }
}
</style>