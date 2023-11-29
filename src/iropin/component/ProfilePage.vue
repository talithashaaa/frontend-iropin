<script setup>
import AuthService from "../../services/AuthService";
import { useRouter } from "vue-router";
const router = useRouter();

const authService = new AuthService();
function logout() {
  authService.logout().then((res) => {
    router.push({ name: "auth-login" });
  });
}
</script>

<template>
  <div class="content">
    <BaseBlock title="" style="background-color: #edfcf0">
      <div class="row items-push">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <h3 style="color: #006d32">Data Diri</h3>
              <img
                src="src/assets/photo/pasfoto.jpg"
                style="
                  max-width: 50%;
                  height: auto;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                "
              />
            </div>
            <div class="col-md-6">
              <h1></h1>
              <h6 style="opacity: 0.5">Nama</h6>
              <h6></h6>
              <h5>Talitha Padmarini Shafira</h5>
              <h6 style="opacity: 0.5">No KTP</h6>
              <h5>1234567890123456</h5>
              <h6 style="opacity: 0.5">Tempat lahir</h6>
              <h5>Kota Semarang</h5>
              <h6 style="opacity: 0.5">Tanggal Lahir</h6>
              <h5>23 Juni 2002</h5>
            </div>
            <div class="col-md-6">
              <h3></h3>
              <h3 style="color: #006d32">Alamat Tinggal</h3>
              <h6 style="opacity: 0.5">Alamat</h6>
              <h5>
                Jalan Ketileng Indah Blok K no 215, RT 4 RW 12, Sendangmulyo,
                Tembalang, Kota Semarang, Provinsi Jawa Tengah
              </h5>
              <h6 style="opacity: 0.5">Kota</h6>
              <h5>Kota Semarang</h5>
              <h6 style="opacity: 0.5">Kode Pos</h6>
              <h5>50272</h5>
              <h6 style="opacity: 0.5">Telepon</h6>
              <h5>024343434</h5>
              <h6 style="opacity: 0.5">Mobile Phone</h6>
              <h5>08976299926</h5>
            </div>
            <div class="col-md-6">
              <h3></h3>
              <h3 style="color: #006d32">Pendidikan</h3>
              <h6 style="opacity: 0.5">Universitas / Institusi</h6>
              <h5>Politeknik Negeri Semarang</h5>
              <h6 style="opacity: 0.5">Peminatan</h6>
              <h5>Teknik Informatika</h5>
              <h3>Keanggotaan</h3>
              <h6 style="opacity: 0.5">Anggota Daerah</h6>
              <h5>Jawa Tengah</h5>
              <h6 style="opacity: 0.5">Anggota Cabang</h6>
              <h5>Kota Semarang</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <a href="#" @click="logout" class="ui-link">Logout</a>
          <h2>Dokumen</h2>
          <p>dokumen dll</p>
        </div>
      </div>
    </BaseBlock>

    <!-- END Paragraphs in Grid -->
  </div>
  <!-- END Page Content -->
</template>
