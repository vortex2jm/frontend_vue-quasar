<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Baguncinha do João
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="drawer"
    >
      <q-list>
        <q-item-label
          header
          class="menu_text"
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Página inicial',
    icon: 'home',
    route: { name: 'home' }
  },
  {
    title: 'Alunos',
    caption: 'Listagem de alunos',
    icon: 'list',
    route: { name: 'list' }
  },
  {
    title: 'Cadastrar',
    caption: 'Cadastro de alunos',
    icon: 'edit',
    route: { name: 'create'}
  },
  {
    title: 'Deletar',
    caption: 'Exclusão de alunos',
    icon: 'delete',
    route: { name: 'delete' }
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>

.drawer{
  background-color: black;
}

.toolbar{
  background-color: black;
}

.menu_text{
  color: white;
  text-align: center;
  font-weight: bold;
}

</style>
