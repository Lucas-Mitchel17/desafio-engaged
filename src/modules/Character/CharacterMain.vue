<script setup>
import { BaseText } from "src/components/ui/base";
import { ref } from "vue";

import { CharacterTab, EpisodeTab } from "./tabs";

const tab = ref("character");

const characterInfos = ref({
  id: 1,
  name: "Rick Sanchez",
});

</script>

<template>
  <q-page padding>
    <q-btn class="btn-back" icon="arrow_back" label="Back" />

    <BaseText tag="h1">{{ characterInfos.name }}</BaseText>

    <q-separator />

    <section class="character-hero">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="teal"
          indicator-color="teal"
          inline-label
          align="justify"
          narrow-indicator
        >
          <q-tab name="character" icon="person" label="Character" />
          <q-tab name="episodes" icon="movie_creation" label="Episodes" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="character" class="c-infos">
            <CharacterTab />
          </q-tab-panel>

          <q-tab-panel name="episodes">
            <EpisodeTab />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </section>
  </q-page>
</template>

<style lang="scss" scoped>
.character-hero{ 
  margin-top: 40px;
  .c-infos {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 25px auto;
  
    @media (min-width: $md) {
      flex-direction: row;
      margin: 0;
    }
  }
}

</style>
