<script setup>
defineProps({
  errorMessage: String,
});
</script>

<template>
  <div class="flex column items-center">
    <h1 class="error-title" :errorMessage="errorMessage">{{ errorMessage }}</h1>
    <RouterLink to="/characters-list/1">
      <q-btn
        class="btn is-back"
        icon="arrow_back"
        label="Back to Character List"
      />
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.q-page {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.error-title {
  font-size: 30px;
  color: $red;

  @media (min-width: $md) {
    font-size: 50px;
  }
}
</style>
