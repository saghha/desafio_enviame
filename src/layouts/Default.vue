<template>
  <d-container fluid>
    <loading :active.sync="loading"
      :can-cancel="false"
      :is-full-page="true">
      <template slot="default">
        <div class="d-flex rounded bg-white p-2">
          <div class="">
            <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" :width="64" :height="64" :stroke="'#000'">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                  <circle stroke-opacity=".25" cx="18" cy="18" r="18"/>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.8s"
                      repeatCount="indefinite"/>
                  </path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </template>
    </loading>
    <d-row>
      <!-- Main Sidebar -->
      <main-sidebar :items="sidebarItems" />

      <d-col class="main-content offset-lg-2 offset-md-3 p-0" tag="main" lg="10" md="9" sm="12">

        <!-- Main Navbar -->


        <!-- Content -->
        <slot />

      </d-col>

    </d-row>
  </d-container>
</template>

<script>
import getSidebarItems from '@/data/sidebar-nav-items';
import Loading from 'vue-loading-overlay'
// Main layout components
// import MainNavbar from '@/components/layout/MainNavbar/MainNavbar.vue';
import MainSidebar from '@/components/layout/MainSidebar/MainSidebar.vue';
import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

export default {
  name: 'analytics',
  components: {
    MainSidebar,
    MainFooter,
    Loading
  },
  data() {
    return {
      sidebarItems: getSidebarItems(),
    };
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
};
</script>
<style>
.vld-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  overflow: hidden;
  z-index: 1
}

.vld-overlay.is-active {
  display: flex
}

.vld-overlay.is-full-page {
  z-index: 999999999;
  position: fixed
}

.vld-overlay .vld-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  opacity: 0.15   !important;
}

.vld-overlay .vld-icon, .vld-parent {
  position: relative
}

.badge-floating {
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  border: 3px solid;
}

</style>