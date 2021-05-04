<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Menú de desafíos Enviame.io</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4>Bienvenido a la resolución de desafíos propuestos por Enviame.io!!</h4>
            <p>En este Menú se encuentran las opciones que les enviarán a la resolución del desafío seleccionado</p>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12">
                <d-btn @click="handlerCollapse(1)" class="mr-2">Ejercicio 1</d-btn>
                <d-btn @click="handlerCollapse(2)" variant="primary" class="mr-2">Ejercicio 2</d-btn>
                <d-btn @click="handlerCollapse(3)" variant="primary">Ejercicio 3</d-btn>
              </div>
              <div class="col-12">
                <d-collapse :visible="collapse1" id="desafio-1-collapse">
                  <div class="p-3 mt-3 border rounded">
                    <h5>Ejercicio 1 😄</h5>
                    <span>Crear una script que reciba un rango entre A y B y a partir de este rango se muestre en pantalla los números primos.</span>
                    <div class="text-right">
                      <router-link type="button" to="/desafio1" class="btn btn-primary">Ver Resolución</router-link>
                    </div>
                  </div>
                </d-collapse>
                <d-collapse :visible="collapse2" id="desafio-2-collapse">
                  <div class="p-3 mt-3 border rounded">
                    <h5>Ejercicio 2 😄</h5>
                    <span>Generar un JSON a partir de 2 JSON entregados</span>
                    <div class="text-right">
                      <router-link type="button" to="/desafio2" class="btn btn-primary">Ver Resolución</router-link>
                    </div>
                  </div>
                </d-collapse>
                <d-collapse :visible="collapse3" id="desafio-1-collapse">
                  <div class="p-3 mt-3 border rounded">
                    <h5>Ejercicio 3 😄</h5>
                    <span>El siguiente desafío pondrá a prueba tus habilidades como frontend, el desafío consta de construir una interfaz web responsive de los super héroes de Marvel.
                    En la evaluación consideraremos usabilidad y consistencia en el diseño.</span><br>
                    <span><strong>API</strong></span><br>
                    <span>Para poder utilizar la API debes ingresar a <a href="https://developer.marvel.com/">https://developer.marvel.com/</a> sección <strong>Get a key</strong> completar el formulario de registro 
                      y del menú API-KEY. Luego de obtener la <strong>public y private key</strong> revisa la forma de autenticar en el siguiente link para poder acceder a los recursos y al endpoint de personajes.</span>
                      <br>
                      <span><strong>Requerimientos</strong></span><br>
                      <ol>
                        <li>Construir una interfaz web en la cual se listen los super héroes de Marvel entregados por la API https://gateway.marvel.com/v1/public/characters, cada elemento de la lista debe entregar la siguiente información (<strong>2pts</strong>) - Name - Description - Thumbnail - Modified (Fecha en formato 'DD-MM-YYYY')</li>
                        <li>El listado debe tener infinite scroll que vaya cargando más super héroes al listado. (<strong>2pts</strong>)</li>
                        <li>Añadir un buscador en la interfaz que permita buscar un super héroe por su nombre. (<strong>1pts</strong>)</li>
                        <li>Generar un componente nuevo que permita editar la información “Name” y “Description” localmente y actualizar el listado en consecuencia. (Al actualizar el sitio está bien que se pierda la información) (<strong>2pts</strong>)</li>
                      </ol>
                    <div class="text-right">
                      <router-link type="button" to="/desafio3" class="btn btn-primary">Ver Resolución</router-link>
                    </div>
                  </div>
                </d-collapse>
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
  name: 'Menu',
  data () {
    return {
      collapse1: false,
      collapse2: false,
      collapse3: false
    }
  },
  created () {

  },
  methods: {
    handlerCollapse: function (collapse) {
      if(collapse == 1) {
        this.collapse2 = false
        this.collapse3 = false
        this.collapse1 = !this.collapse1
      } else if (collapse == 2) {
        this.collapse1 = false
        this.collapse3 = false
        this.collapse2 = !this.collapse2
      } else {
        this.collapse1 = false
        this.collapse2 = false
        this.collapse3 = !this.collapse3
      }
    }
  }
}
</script>