<script setup>
import { useTemplateStore } from "@/stores/template";

import BaseLayout from "@/layouts/BaseLayout.vue";
import BaseNavigation from "@/components/BaseNavigation.vue";
import { useRouter } from "vue-router";

const store = useTemplateStore();

const router = useRouter();
// const authService = new AuthService();
// function logout() {
// authService.logout().then((res) => {
//   router.push({ name: "auth-login" });
// });
// }

store.setLayout({
  sidebar: true,
});

store.headerStyle({ mode: "light" });
store.mainContent({ mode: "narrow" });
</script>

<template>
  <BaseLayout>
    <template #sidebar-content>
      <div class="content-side custom-sidebar-color">
        <BaseNavigation
          :nodes="[
            {
              name: 'Profil',
              to: 'backend-component-profilepage',
              icon: 'si si-people',
            },
            {
              name: 'Permohonan Surat',
              to: 'backend-indexpengajuansuratuser',
              icon: 'si si-note',
            },
            {
              name: 'Webinar untuk user',
              to: 'backend-indexlistwebinaruser',
              icon: 'si si-calendar',
            },

            {
              name: 'Dashboard',
              to: 'backend-index-dashboardmanager',
              icon: 'si si-chart',
            },
            {
              name: 'Verifikasi',
              to: 'backend-verifikasi-operator',
              icon: 'si si-list',
            },
            {
              name: 'Kelola Webinar',
              to: 'backend-index-webinarop',
              icon: 'si si-calendar',
            },
            {
              name: 'Kelola Akun',
              to: 'backend-index-kelolaakun',
              icon: 'si si-people',
            },
            {
              name: 'Approval',
              to: 'backend-component-listapproval',
              icon: 'si si-note',
            },
          ]"
        />
      </div>
      <!-- <div class="content-side custom-sidebar-color">
        <ul class="nav-main">
          <li class="nav-main-item">
            <div>
              <a class="nav-main-link" @click="logout">
                <i :class="`nav-main-link-icon si si-logout`"></i>
                <span class="nav-main-link-name"> Logout </span>
              </a>
            </div>
          </li>
        </ul>
      </div> -->
    </template>

    <!-- Header Content Left -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header-content-left>
      <!-- Toggle Sidebar -->
      <button
        type="button"
        class="btn btn-sm btn-alt-secondary me-2 d-lg-none"
        @click="store.sidebar({ mode: 'toggle' })"
      >
        <i class="fa fa-fw fa-bars"></i>
      </button>
      <!-- END Toggle Sidebar -->

      <!-- Toggle Mini Sidebar -->
      <button
        type="button"
        class="btn btn-sm btn-alt-secondary me-2 d-none d-lg-inline-block"
        @click="store.sidebarMini({ mode: 'toggle' })"
      >
        <i class="fa fa-fw fa-ellipsis-v"></i>
      </button>
      <!-- END Toggle Mini Sidebar -->
    </template>
    <!-- END Header Content Left -->

    <!-- Header Content Right -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header-content-right>
      <!-- Toggle Side Overlay -->
      <button
        type="button"
        class="btn btn-sm btn-alt-secondary ms-2"
        @click="store.sideOverlay({ mode: 'toggle' })"
      >
        <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
      </button>
      <!-- END Toggle Side Overlay -->
    </template>
    <!-- END Header Content Right -->

    <!-- Footer Content Left -->
    <!-- Using the available v-slot, we can override the default Footer content from layouts/partials/Footer.vue -->
    <template #footer-content-left>
      <strong>My App</strong>
      &copy; {{ store.app.copyright }}
    </template>
    <!-- END Footer Content Left -->
  </BaseLayout>
</template>
