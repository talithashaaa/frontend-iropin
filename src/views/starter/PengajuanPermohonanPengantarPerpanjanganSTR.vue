<script setup></script>

<template>
  <!-- Hero -->
  <BasePageHeading
    title="Pengajuan Surat Pengantar Perpanjangan STR"
    subtitle="Lengkapi formulir dibawah ini untuk mengajukan pengantar perpanjangan STR"
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
      <BaseBlock
        title="Persyaratan untuk mengajukan pengantar perpanjangan STR:"
      >
        <ol>
          <li>Surat Pengantar dari Pengcab</li>
          <li>Surat Pernyataan Patuh Etika Profesi</li>
          <li>
            Bukti transfer/kwitansi biaya administrasi perpanjangan STR sebesar
            Rp.50.000,00 (lima puluh ribu rupiah)
          </li>
          <li>
            Kwitansi Lunas Iuran Anggota minimal dalam Masa Period STR atau
            Bukti Transfer Iuran PENGDA.
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
                <option selected>Surat Pengantar Perpanjangan STR</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Unggah Kwitansi Biaya Administrasi (Rp.50.000,00)</label
              >
              <input class="form-control" type="file" id="example-file-input" />
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Surat Pengantar dari Pengcab
              </label>
              <input class="form-control" type="file" id="example-file-input" />
            </div>

            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Surat Pernyataan Patuh Etika Profesi
              </label>
              <input class="form-control" type="file" id="example-file-input" />
            </div>
            <div class="mb-4">
              <label class="form-label" for="example-file-input"
                >Kwitansi Lunas Iuran Anggota minimal dalam Masa Period STR atau
                Bukti Transfer Iuran PENGDA.
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
