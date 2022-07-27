<template>  
  <h4 style="text-align: center; margin-bottom: 0">Página de Cadastro</h4>
  <q-form
    @submit="onSubmit"
    @reset="onReset">
    <div class="q-pa-md">
        <div class="q-gutter-md">
        
            <q-input standout v-model="nome" label="Name" />
    
            <q-input standout v-model="matricula" label="Matricula" />
    
            <q-input standout v-model="media" label="Media" />

            <div>
                <q-btn color="green" label="submit" type="submit" />
                <q-btn color="red" label="reset" type="reset" />
            </div>
        </div>
    </div>
  </q-form>
</template>

<script>

import { ref } from 'vue'
import { api } from 'boot/axios'

export default {
  setup () {

    const nome = ref(null)
    const matricula = ref(null)
    const media = ref(null)
    
    const postAlunos = async (data) => {
        try{
            const response = await api.post('http://localhost:3000/alunos', data)
            console.log(response + "reponse aqui")
        }
        catch(error){
            console.log(error)
        }
    }

    return {        
        nome,
        matricula,
        media,

        onSubmit(){

            let data ={
                // id: '',
                matricula: matricula.value,
                nome: nome.value,
                media: media.value
            }

            postAlunos(data)

           nome.value = null
           media.value = null
           matricula.value = null
        },

        onReset(){
            nome.value = null
            media.value = null
            matricula.value = null
        }
        // text: ref('')
    }
  }
}
</script>
