<script setup>
import { BaseText, BaseLoader } from "src/components/ui/base";
import { ref } from "vue";

import { RouterLink } from "vue-router";

import { CharacterTab, EpisodeTab } from "./tabs";

const props = defineProps({
  character: {
    required: true,
    type: Object,
  },

  loading: Boolean,
});

const tab = ref("character");
</script>

<template>
  <q-page padding>
    <RouterLink to="/characters-list/1">
      <q-btn class="btn is-back" icon="arrow_back" label="Back to List" />
    </RouterLink>

    <BaseText tag="h1">{{ character.name }}</BaseText>

    <q-separator />

    <section class="character-hero">
      <q-card>
        <q-tabs
          v-model="tab"
          align="justify"
          dense
          class="text-grey"
          active-color="teal"
          indicator-color="teal"
          inline-label
          narrow-indicator
        >
          <q-tab name="character" icon="person" label="Character" />
          <q-tab name="episodes" icon="movie_creation" label="Episodes" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="character" class="c-infos">
            <div v-if="loading" class="flex row justify-center">
              <BaseLoader />
            </div>

            <CharacterTab v-else :character="character" />
          </q-tab-panel>

          <q-tab-panel name="episodes">
            <div v-if="loading" class="flex row justify-center">
              <BaseLoader />
            </div>

            <EpisodeTab v-else :episodes="character.episode" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </section>
  </q-page>
</template>

<style lang="scss" scoped>
.character-hero {
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
