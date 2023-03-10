<script setup>
import { BaseText } from "../BaseText";

const props = defineProps({
  scrImage: String,
  name: String,
  status: String,
  species: String,
  href: String,
});
</script>

<template>
  <div class="card">
    <q-card class="card-item">
      <img :src="scrImage" />

      <q-card-section>
        <div :name="name">
          <BaseText tag="h4">
            Name: <span>{{ name }}</span></BaseText
          >
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="sub-item" :status="status">
          Status: <span>{{ status }}</span>
        </div>
        <div class="sub-item" :species="species">
          Species: <span>{{ species }}</span>
        </div>
      </q-card-section>

      <q-card-actions>
        <router-link :to="href" class="full-width">
          <q-btn flat label="Show more..." class="btn is-green full-width" />
        </router-link>
      </q-card-actions>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: 40px;

  &-item {
    margin-right: 20px;
    max-width: 300px;
    width: 100%;

    .text-h4 {
      height: 35px;
    }

    .text-h4,
    .sub-item {
      color: $blue;
      font-weight: 700;
      margin: 0;

      span {
        color: $brown;
        font-weight: 400;
        margin-left: 5px;
      }
    }

    .sub-item {
      font-size: 17px;
    }
  }
}
</style>
