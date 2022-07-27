<template>
  <q-item
    clickable
    :to="route"
    exact
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" class="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="icon">{{ title }}</q-item-label>
      <q-item-label caption class="icon">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    route: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style>
.icon{
  color: white;
}
</style>
