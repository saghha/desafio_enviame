<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Ejercicio 1</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h4>Resolución de Ejercicio 1</h4>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="form-group">
                  <label>Ingrese cota inferior</label>
                  <input type="number" class="form-control" v-model="minimo" min="2"/>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="form-group">
                  <label>Ingrese cota superior</label>
                  <input type="number" class="form-control" v-model="maximo"/>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 pt-4">
                <d-btn variant="success" @click="validateData()">Calcular</d-btn>
              </div>
              <div class="col-12">
                <h6>Los números primos en el rango son:</h6>
                <span>{{numerosPrimosString}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Desafio1',
  data () {
    return {
      maximo: null,
      minimo: null,
      numerosPrimos: [],
      numerosPrimosString: null,
    }
  },
  created () {

  },
  methods: {
    validateData: function () {
      if(!(!!this.minimo)) {
        this.showAlert('error', 'Debe ingresar una cota mínima')
        return
      }
      if(!(!!this.maximo)) {
        this.showAlert('error', 'Debe ingresar una cota máxima')
        return
      }
      if(this.minimo >= this.maximo) {
        this.showAlert('error', 'La cota máxima debe ser mayor que la mínima')
      }
      this.calcularPrimos()
    },
    calcularPrimos: function () {
      this.numerosPrimos = []
      for (var j = this.minimo; j <= this.maximo; j++) {
        if (this.primo(j)) {
          this.numerosPrimos.push(j);
        }
      }
      //console.log(this.numerosPrimos)
      this.convertToString()
    },
    primo: function(numero) {
      for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return numero !== 1;
    },
    convertToString: function() {
      this.numerosPrimosString = this.numerosPrimos.toString()
      this.numerosPrimosString = this.numerosPrimosString.replaceAll(',', ' ')
      console.log(this.numerosPrimosString)
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