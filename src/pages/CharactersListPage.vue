<script setup>
import { computed, onMounted, ref, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import QUERY from "src/modules/CharacterList/services/getAllCharacters.query.gql";
import { CharacterListMain } from "src/modules/CharacterList";
import { BaseMessageError } from "src/components/ui/base";

const ROUTE = useRoute();
const ROUTER = useRouter();

// TODO = Add a debouncer here
const search = ref("");
const isLoading = ref(false);
const currentPage = ref(1);
const error = ref(false);
let results = reactive({});

const characters = computed(() => results?.value?.characters?.results ?? []);
const pagination = computed(() => results?.value?.characters?.info ?? null);

onMounted(() => {
  currentPage.value = parseInt(ROUTE.params.page);

  const { loading, result, error } = useQuery(QUERY, {
    name: search,
    page: currentPage,
  });

  isLoading.value = loading;
  results.value = result;
  error.value = error;
});

watch(currentPage, async () => {
  if (!pagination.value?.pages) {
    currentPage.value = 1;
  }

  if (currentPage.value !== 1) {
    await ROUTER.replace({ path: `${currentPage.value}` });
  }
});
</script>

<template>
  <q-page padding>
    <div v-if="!error">
      <CharacterListMain
        v-model="search"
        :characters="characters"
        :loading="isLoading.value"
      />

      <div v-if="pagination && pagination.count" class="flex flex-center">
        <q-pagination
          v-model="currentPage"
          color="teal"
          :max="pagination.pages"
          :max-pages="5"
          :ellipses="false"
          :boundary-numbers="false"
        />
      </div>
    </div>

    <BaseMessageError
      v-else-if="error || !characters.value.length"
      error-message="Sorry! Any character was found :/"
    />
  </q-page>
</template>
