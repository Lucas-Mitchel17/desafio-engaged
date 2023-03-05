<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Engaged
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />  
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
  }
})
</script>
