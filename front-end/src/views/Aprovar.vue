<template>
  <body>
    <b-container>
      <b-row>
        <h2>Aprovar itens cadastrados</h2>
        <b-table
        striped
        hover
        :per-page="perPage"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        @row-clicked = "editar">
        <template #cell(buttons)>
          <div class="div-todos-ico">
              <div class="div-icones">
                <b class="margem-entre">
                  <b-icon-check class="icons" scale="2" />
                  <b class="finalizar">aprovar</b>
                </b>
              </div>
              <div class="div-icones">
                <a>
                  <b-icon-trash class="icons" scale="1"/>
                  <b class="excluir">excluir</b>
                </a>
              </div>     
            </div>
        </template>
      </b-table>
      </b-row>

      <b-modal id = "modal-editar" hide-footer>
          <template #modal-title>
            Aprovar Item
          </template>

          <b-button @click="deletar" class="mt-3 botaoModal" block>Excluir</b-button>
          <b-button @click="editarItem" class="mt-3 botaoModal" block>Aprovar</b-button>
        </b-modal>

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
    <b-modal id="modalDeletar" hide-footer>
      <div class="d-block text-center">
        <h3>Item apagado com sucesso</h3>
      </div>
      <b-button @click="hide" class="mt-3 botaoModal" block>Ok</b-button>
    </b-modal>
    <b-modal id="modalEditado" hide-footer>
      <div class="d-block text-center">
        <h3>Item Aprovado!</h3>
      </div>
      <b-button @click="hide2" class="mt-3 botaoModal" block>Ok</b-button>
    </b-modal>
  </body>
</template>

<script>
  import {getItens, deleteItem, putItem} from "@/services/api/itemAprovar.js"
  export default {
    data() {
      return {
      perPage: 6,
      currentPage: 1,
      selected: [],
      fields: [
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
        {
          key: 'buttons',
          label: 'Botões',
          tdClass: 'buttons',
          thClass: 'th-buttons',
        },
      ],
      items: []
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    deletar(){
      deleteItem(this.dados.itemid)
      .then(()=>{
        this.$bvModal.hide("modal-editar");
        this.$bvModal.show("modalDeletar");
      }).catch((err)=>{
        console.error(err)
        this.$bvModal.hide("modal-editar");
      });
      location.reload();
    },

    editarItem(){
      putItem(this.dados.itemid)
        .then(()=>{
          this.$bvModal.hide("modal-editar");
          this.$bvModal.show("modalEditado");
        }).catch((err)=>{
          console.error(err)
        });
        location.reload();
    },

    editar(item){
      this.dados = item;
      this.$bvModal.show("modal-editar");
    },
    hide(){
      this.$bvModal.hide("modalDeletar");
    },
    hide2(){
      this.$bvModal.hide("modalEditado");
    }
  },
  mounted(){

    getItens()
      .then((res)=>{
          this.items = res.data;
      })
      .catch((err)=>{
          console.log(err);
      });
  },
  

}

</script>