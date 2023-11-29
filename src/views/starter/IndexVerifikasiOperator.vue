<script setup>
import { ref } from "vue";

const activeTab = ref("Registrasi");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style>
.nav-pills .nav-link {
  color: #006d32; /* Warna default untuk tautan */
}

.nav-link.active {
  background-color: #006d32;
  color: #fff;
}
</style>

<template>
  <div class="content" style="background-color: #edfcf0">
    <h2>Halo Talitha!</h2>
    <div class="col-md-12">
      <!-- Justified -->
      <BaseBlock title="" class="h-100 mb-0">
        <ul class="nav nav-pills nav-justified push">
          <li class="nav-item me-1">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'Registrasi' }"
              @click="setActiveTab('Registrasi')"
              href="javascript:void(0)"
              >Registrasi</a
            >
          </li>
          <li class="nav-item me-1">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'SuratPermohonan' }"
              @click="setActiveTab('SuratPermohonan')"
              href="javascript:void(0)"
              >Surat Permohonan</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeTab === 'PendaftaranWebinar' }"
              @click="setActiveTab('PendaftaranWebinar')"
              href="javascript:void(0)"
              >Pendaftaran Webinar</a
            >
          </li>
        </ul>
      </BaseBlock>
    </div>
    <BaseBlock style="margin-top: 20px">
      <div class="row items-push">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <h3 style="color: #006d32">FRAME</h3>
            </div>
          </div>
        </div>
      </div>
    </BaseBlock>
  </div>
</template>
