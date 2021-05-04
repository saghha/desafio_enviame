<template>
  <d-modal v-if="showModal" @close="closeModal()">
    <d-modal-header>
      <d-modal-title>Editar Información de Personaje</d-modal-title>
    </d-modal-header>
    <d-modal-body>
      <div class="row">
        <div class="col-12 text-center">
          <img class="responsive" :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" alt="Hero Image" style="max-height:200px">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="form-group">
            <label>Name</label>
            <input v-model="hero.name" class="form-control" type="text"/>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="hero.description" class="form-control" placeholder="description of the character" rows="6"></textarea>
          </div>
        </div>
        <div class="col-12 text-right">
          <button class="btn btn-success" @click="edit()">Editar</button>
        </div>
      </div>
    </d-modal-body>
  </d-modal>
</template>
<script>
export default {
  name: 'ModalEdit',
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      hero: {}
    }
  },
  created () {
    this.hero = JSON.parse(JSON.stringify(this.data))
  },
  methods: {
    closeModal: function () {
      this.$emit('close')
    },
    edit: function () {
      this.$emit('edit', this.hero)
      this.closeModal()
    }
  }
}
</script>