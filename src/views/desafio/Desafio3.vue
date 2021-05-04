<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Ejercicio 3</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4>Resolución Ejercicio 3</h4>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="form-group">
                  <label>Filtrar por Nombre</label>
                  <input class="form-control" v-model="filterName"/>
                </div>
              </div>
              <div class="col-12 scroll">
                <div class="row">
                  <div class="col-lg-3 col-md-4 col-sm-12" v-for="(hero, index) in computedSuperHeros" :key="index">
                    <div class="card mb-4">
                      <a :href="hero.urls[0].url" target="_blank">
                      <img class="card-img-top" :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" alt="Hero Image" style="max-height:200px">
                      </a>
                      <div class="card-body">
                        <h5>{{hero.name}}</h5>
                        <p>{{hero.description}}</p>
                      </div>
                      <div class="card-footer">
                        <div class="row">
                          <div class="col-9">
                            <small class="text-muted">Fecha Modificación: {{formatDate(hero.modified)}}</small>
                          </div>
                          <div class="col-3 text-right">
                            <button class="btn btn-outline-secondary btn-sm" type="button" @click="selectCharacter(hero, index)">
                              <i class="material-icons">&#xE3C9;</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <infinite-loading @infinite="infiniteHandler"></infinite-loading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalEdit :showModal="showModal" :data="selected" v-if="showModal" @close="handleModalEdit(false)" @edit="editCharacter"/>
  </div>
</template>
<script>
import moment from 'moment'
import ModalEdit from './ModalEdit'
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'Desafio3',
  components: {
    ModalEdit,
    InfiniteLoading
  },
  data () {
    return {
      api_key: '01b6321b79c1347126b1ea62ac81a3a7',
      private_key: 'e7679a3f38e9ff462833687fe798a4f1b642941d',
      showModal: false,
      offset: 0,
      super_heros: {
        data: {
          result: []
        }
      },
      heros: [],
      indexChange: null,
      selected: null,
      filterData: [],
      filterName: ''
    }
  },
  created () {
    this.getSuperHeros()
  },
  computed: {
    computedSuperHeros () {
      return _.filter(this.heros, (value) => {
        if(_.includes(value.name.toLowerCase(), this.filterName.toLowerCase())) {
          return value
        }
      });
    }
  },
  methods: {
    getSuperHeros: function () {
      this.$store.commit('setLoading', true)
      var hash = md5('1'+'e7679a3f38e9ff462833687fe798a4f1b642941d'+'01b6321b79c1347126b1ea62ac81a3a7')
      axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          ts: 1,
          hash: hash,
          apikey: this.api_key,
          offset: this.offset,
          limit: 100
        }
      }).then((response) => {
        this.super_heros = response.data
        this.heros = response.data.data.results
        this.offset += 100
      }).catch(() => {

      }).finally(() => {
        this.$store.commit('setLoading', false)
      })
    },
    handleModalEdit: function (cond) {
      this.showModal = cond
    },
    selectCharacter: function (hero, index) {
      this.selected = JSON.parse(JSON.stringify(hero))
      this.indexChange = index
      this.handleModalEdit(true)
    },
    formatDate: function(date) {
      return moment(date).format('DD-MM-YYYY').toString()
    },
    editCharacter: function (payload) {
      this.$nextTick(function () {
        this.heros.splice(this.indexChange, 1, payload)
        this.heros = _.orderBy(this.heros, 'name', 'asc')
      })
    },
    infiniteHandler($state) {
      this.$store.commit('setLoading', true)
      var hash = md5('1'+'e7679a3f38e9ff462833687fe798a4f1b642941d'+'01b6321b79c1347126b1ea62ac81a3a7')
      axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          ts: 1,
          hash: hash,
          apikey: this.api_key,
          offset: this.offset,
          limit: 100
        },
      }).then((response) => {
        if (response.data.data.results.length) {
          this.offset += 100;
          this.heros.push(...response.data.data.results);
          this.heros = _.orderBy(this.heros, 'name', 'asc')
          $state.loaded();
        } else {
          $state.complete();
        }
      }).finally(() => {
        this.$store.commit('setLoading', false)
      })
    },
  },
}
</script>