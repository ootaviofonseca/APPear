<template>
  <body>
    <h2>Cadastrar item perdido</h2>
    <b-card id="card">
      <form @submit="criarItem">
        <input type="text" id="estado" name="status" v-model="estado" hidden>
        <label for="categoria">Categoria do item:</label><br>
        <b-form-select
        :options="[{ text: 'Selecione a categoria do item', value:null}, 'Vestuário', 'Eletrônico', 'Acessório', 'Documento', 'Outros']"
        :value="null"
        type="text"
        id="cat"
        name="categoria"
        v-model="categoria"
        ></b-form-select><br><br>
        
        <label for="descricao">Descrição do item:</label><br>
        <b-form-input type="text" id="descricao" name="descricao" v-model="descricao"></b-form-input><br>
          <label for="dataPerca">Quando foi perdido:</label><br>
          <input type="date" id="data" name="data" v-model="data"><br><br>
          <label for="fotos">Fotos:</label><br>
          <input type="text" id="fotos" name="fotos" v-model="fotos"><br><br>
        <div>
          <b-button id="botaoConfirmar" type="submit" block>Confirmar</b-button>
          <b-button id="botao" type="reset" block>Limpar</b-button>
        </div>
      </form> 
    </b-card>
  </body>
</template>

<script>
import {createItem} from "@/services/api/item.js"
export default{
  data(){
    return{
      dados:{
        status: '',
        categoria:'',
        descricao:'',
        data: '',
        fotos:''
      }
    }
  },
  methods: {
    criarItem(event){
      event.preventDefault();
      this.dados.status = "perdido";
      this.dados.categoria = this.categoria;
      this.dados.descricao = this.descricao;
      this.dados.data = this.data;
      this.dados.fotos = this.fotos;
      createItem(this.dados)
      .then(()=>{
          alert('item criado')
        }).catch((err)=>{
          console.error(err)
        });
    }
  }
}
</script>

<style scoped>

#botao{
  font-size: 15px;
  font-weight: 500;
}

#card{
  color: white;
  text-align: left;
  position: absolute;
  display: flex;
  font-family: MontSerrat;
  font-size: 15px;
  width: 70%;
  background-color: #343434;
}
 
body{
  margin-left: 10px;
}
</style>

