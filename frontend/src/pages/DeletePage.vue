<template>
  <div class="q-pa-md">
    <q-list bordered separator>

      <q-item clickable v-ripple
        v-for="aluno in alunos"
        :key="aluno.name"
        v-bind="aluno"        
      >
        <q-item-section class="section">
            {{aluno.nome}}
            <q-btn color="red" label="Delete" @click="onClick(aluno.id)"/>
        </q-item-section>

      </q-item>

    </q-list>
  </div>
</template>

<script>

import { defineComponent, onMounted, ref } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
    name: 'DeletePage',

    setup () {

        let array = []
        let alunos = ref(array)

        onMounted(()=>{
            getAlunos()
        })

        const getAlunos = async () => {
            try{
                const { data } = await api.get('/alunos')
                alunos.value = data
                array = data
            }
            catch(error){
                console.log(error)
            }
        }

        return{
            alunos,
            async onClick(id){
                array = array.filter(aluno => aluno.id !== id)
                alunos.value = array
                try{
                    const response = await api.delete(`/alunos/${id}`)
                    console.log(response)
                }
                catch(error){
                    console.log(error.message)
                }
            }            
        }
    }
})
</script>

<style>
.section{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.q-btn{

    width: auto;
    height: auto;
    max-width: 6%;
    max-height: 6%;
}

</style>
