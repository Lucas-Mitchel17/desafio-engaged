<script setup>
  import { BaseCharacterCard, BaseText } from 'src/components/ui/base';
</script>

<template>
  <q-page padding>
    <BaseText tag="h1"> Encontre o seu personagem favorito! </BaseText>

    <BaseCharacterCard />

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" class="top-btn" />
    </q-page-scroller>
  </q-page>
</template>

<style lang="scss">
.top-btn {
  background-color: $lightGreen;
  color: white;
}
</style>
