<template>
  <q-page padding>
    <div>
      <q-table
        title="Alunos"
        :rows="alunos"
        :columns="columns"
        row-key="name"
        bordered
        class="table"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const alunos = ref([])
    const columns = [
      { name: 'matricula', label: 'Matrícula', field: 'matricula', sortable: true },
      { name: 'nome', label: 'Nome', field: 'nome', sortable: true },
      { name: 'media', label: 'Media', field: 'media', sortable: true }
    ]
    onMounted(() => {
      getAlunos()
    })

    const getAlunos = async () => {
      try {
        const { data } = await api.get('http://localhost:3000/alunos')
        console.log(data)
        alunos.value = data
      } catch (error) {
        console.log(error)
      }
    } 
    return {
      alunos,
      columns
    }
  }
})
</script>

<style>

.table{
  background-color: #fdc27d;
  font-weight: bold;
}

</style>
