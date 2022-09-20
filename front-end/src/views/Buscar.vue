<template>
  <body>
    <h2>Buscar Item</h2>
    <label id="categoria" for="categoria">Categoria do item:</label><br>
    <b-nav-form>
      <b-form-select
      :options="[{ text: 'Selecione a categoria do item', value:null}, 'Vestuário', 'Eletrônico', 'Acessório', 'Documento', 'Outros']"
      :value="null"
      type="text"
      id="categoria"
      name="categoria"
      ></b-form-select><br><br>
      <b-button size="mm" class="my-3 my-sm-0" type="submit">Buscar</b-button>
    </b-nav-form>
    <div style="margin-top: 30px">
      <h1 id="categoria">Itens que foram cadastrados recentemente:</h1>
      <b-container style="margin-top: 40px">
        <b-row>
          <b-table
          striped
          hover
          :per-page="perPage"
          :items="items"
          :fields="fields"
          :current-page="currentPage">
          </b-table>
        </b-row>
        <b-row class="justify-content-end">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-number
            last-number
            class="pagination"
            style="margin-right: 90px; margin-bottom: 22px; padding-right:15px;"
          />
        </b-row>
      </b-container>
    </div>
  </body>
</template>

<script>
 import {getItens} from "@/services/api/item.js"

export default {
   data() {
      return {
      perPage: 4,
      currentPage: 1,
      selected: [],
      fields: [
        {
          key: 'status',
          label: 'Situação',
          tdClass: 'status',
          thClass: 'th-situacao',
        },
        {
          key: 'categoria',
          label: 'Categoria',
          tdClass: 'categoria',
          thClass: 'th-categoria',
        },
        {
          key: 'descricao',
          label: 'Descrição',
          tdClass: 'descricao',
          thClass: 'th-descricao',
        },
      ],
      items: [],
      dados:{
        status: '',
        categoria:'',
        descricao:'',
      }
    }
  },
  mounted(){
    getItens(this.$route.query.categoria)
    .then((res)=>{
      this.items = res.data;
    })
    .catch((err)=>{
      console.log(err);
    });
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
}

</script>


<style scoped>

#categoria{
  font-family: MontSerrat;
  font-size: 20px;
}

.my-3{
  margin-left: 20px !important;
  font-family: MontSerrat;
  font-size: 18px;
}

.mb-0{
  font-family: MontSerrat;
  font-size: 20px;
}
</style>