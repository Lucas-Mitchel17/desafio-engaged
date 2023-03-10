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
</script>

<template>
  <q-page padding>
    <BaseMessageError
      v-if="!loading && (error || !character.name)"
      error-message="Character Not Found"
    />

    <CharacterMain v-else :character="character" :loading="loading" />
  </q-page>
</template>
