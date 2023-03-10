<script setup>
import { computed } from "vue";
import { BaseText } from "src/components/ui/base";

const props = defineProps({
  character: {
    required: true,
    type: Object,
  },
});

const infos = computed(() => [
  {
    label: "Status",
    content: props.character.status || "-",
  },
  {
    label: "Species",
    content: props.character.species || "-",
  },
  {
    label: "Gender",
    content: props.character.gender || "-",
  },
  {
    label: "Type",
    content: props.character.type || "-",
  },
  {
    label: "Location",
    content: props.character.location.name || "-",
  },
]);
</script>

<template>
  <div class="c-img">
    <img :src="character.image" />
  </div>

  <div class="c-infos-section">
    <BaseText
      v-for="{ label, content } in infos"
      :key="label"
      class="infos"
      tag="p"
    >
      {{ label }}: <span> {{ content }}</span>
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
