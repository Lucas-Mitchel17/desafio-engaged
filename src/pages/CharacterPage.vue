<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { CharacterMain } from "src/modules/Character";
import { useQuery } from "@vue/apollo-composable";
import QUERY from "src/modules/Character/services/getCharacter.query.gql";

import { BaseMessageError } from "src/components/ui/base";

const ROUTE = useRoute();
const ROUTER = useRouter();

if (!ROUTE.params.id) {
  ROUTER.push("/characters-list/1");
}

const { loading, result, error } = useQuery(QUERY, { id: ROUTE.params.id });

const character = computed(() => result?.value?.character ?? {});

const showCharacters = computed(() => {
  return !error.value && character && character.value.name;
});
</script>

<template>
  <q-page padding>
    <CharacterMain
      v-if="showCharacters"
      :character="character"
      :loading="loading"
    />

    <BaseMessageError v-else error-message="Character Not Found" />
  </q-page>
</template>
