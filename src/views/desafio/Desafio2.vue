<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Ejercicio 2</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h4>Resolución de Ejercicio 2</h4>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <d-button theme="success" @click="generarJSON()">Generar JSON resultante</d-button>
              </div>
              <div class="col-12 pt-2">
                <h6>JSON Resultante:</h6>
              </div>
              <div class="col-12" v-if="json_calculado">
                <vue-json-pretty :path="'res'" :data="result"> </vue-json-pretty>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
export default {
  name: 'Desafio1',
  components: {
    VueJsonPretty
  },
  data () {
    return {
      result: {},
      json_calculado: false,
      values: {
        1: {
          carrier: "CCH",
          service: "DEX",
        },
        17: {
          carrier: "CHP",
          service: "express",
        }
      },
      json: { 
        data: {
          BUIN: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
          },
          LAJA: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
          },
          LEBU: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
          },
          LOTA: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
          }
        }
      }
    }
  },
  created () {

  },
  methods: {
    generarJSON: function () {
      this.result = {}
      _.forEach(this.json.data, (value, index) => {
        var over_carrier = _.find(this.values, (val, ind) => {return ind == value.over_carrier_service_id})
        var under_carrier = _.find(this.values, (val, ind) => {return ind == value.under_carrier_service_id})
        this.result[index] = {
          limit: 1,
          over: over_carrier,
          under: under_carrier
        }
      })
      this.json_calculado = true
      console.log(this.result)
    },
    showAlert: function (icon, title) {
      this.$swal({
        title: title,
        icon: icon,
        confirmButtonText: 'Ok'
      })
    }
  }
}
</script>