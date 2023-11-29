<script setup></script>

<template>
  <!-- Hero -->
  <BasePageHeading
    title="Pengajuan Surat Ijin Penyelenggaraan Optik"
    subtitle="Lengkapi formulir dibawah ini untuk mengajukan permohonan SIPO"
  >
    <!-- <template #extra>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Forms</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">Elements</li>
        </ol>
      </nav>
    </template> -->
  </BasePageHeading>
  <!-- END Hero -->

  <!-- Page Content -->
  <div class="content">
    <!-- Basic -->
    <div class="col-lg-8 col-xl-5">
      <BaseBlock title="Persyaratan untuk mengajukan permohonan SIPO:">
        <ol>
          <li>Sudah terdaftar di Cabang akan praktek bekerja</li>
          <li>Mengisi dan mengupload Surat Ijin Peyelenggaraan Optik</li>
          <li>
            Bukti transfer/kwitansi biaya administrasi rekomendasi SIP sebesar
            Rp.100.000,00 (seratus ribu rupiah)
          </li>
          <li>
            Murat Pernyataan Kesanggupan Bekerja atau Sebagai Penanggungjawab
            Optik, yang ditandatangani dengan materai Rp.6000,00
          </li>
          <li>
            Bagi refraksionis optisien/optometris yang lokasi sarana
            kesehatannya berbeda dengan alamat KTP (Beda Kabupaten/Kota) juga
            melampirkan:

            <ol>
              <li>Surat pindah anggota surat</li>
              <li>
                Keterangan domisili yang disahkan oleh kelurahan sesuai wilayah
                cabang lokasi sarana kesehatan
              </li>
            </ol>
          </li>
        </ol>
      </BaseBlock>
    </div>
    <BaseBlock title="">
      <form @submit.prevent>
        <div class="row push">
          <div class="col-lg-8 col-xl-5">
            <h3>FORMULIR PERMOHONAN</h3>
            <div class="mb-4">
              <label class="form-label" for="example-text-input"
                >Nomor Anggota</label
              >
              <input
                type="text"
                class="form-control"
                id="example-text-input"
                name="example-text-input"
                placeholder="Text Input"
              />
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-text-input"
                >Nama Lengkap</label
              >
              <input
                type="text"
                class="form-control"
                id="example-text-input"
                name="example-text-input"
                placeholder="Text Input"
              />
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-email-input">Email</label>
              <input
                type="email"
                class="form-control"
                id="example-email-input"
                name="example-email-input"
                placeholder="Emai Input"
              />
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-select"
                >Jenis Permohonan</label
              >
              <select
                class="form-select"
                id="example-select"
                name="example-select"
              >
                <option selected>Surat Permohonan SIPO</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Unggah Kwitansi Biaya Administrasi (Rp.100.000,00)</label
              >
              <input class="form-control" type="file" id="example-file-input" />
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Surat Pernyataan Kesanggupan Bekerja atau sebagai
                Penanggungjawab Optik (bermaterai Rp.6000,00)
              </label>
              <input class="form-control" type="file" id="example-file-input" />
            </div>

            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Surat Pindah Keanggotaan (bila Kabupaten/Kota berbeda)
              </label>
              <input class="form-control" type="file" id="example-file-input" />
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Surat Keterangan Domisili (bila Kabupaten/Kota berbeda)
              </label>
              <input class="form-control" type="file" id="example-file-input" />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <button type="button" class="btn btn-success">
            Ajukan Permohonan
          </button>
          <div class="mt-2"></div>
        </div>
      </form>
    </BaseBlock>
    <!-- END Basic -->
  </div>
  <!-- END Page Content -->
</template>
