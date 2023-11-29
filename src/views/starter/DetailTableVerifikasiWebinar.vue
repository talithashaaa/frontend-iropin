<script setup></script>

<template>
  <div class="content">
    <BaseBlock title="">
      <div class="row items-push">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <h1 style="color: #006d32">Verifikasi Pendaftaran Webinar</h1>
              <hr style="border: 2px solid #006d32" />
            </div>

            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12 space-y-5">
                  <!-- Form Horizontal - Default Style -->
                  <form class="space-y-4" @sumbit.prevent>
                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-email"
                        >Tanggal Pendaftaran</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="example-hf-email"
                          name="example-hf-email"
                          placeholder=""
                          value="24 November 2023"
                          readonly
                          style="
                            background-color: #cdced0;
                            border: 2px solid #9197b3;
                          "
                        />
                      </div>
                    </div>
                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-password"
                        >Nama Lengkap</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="example-hf-password"
                          name="example-hf-password"
                          placeholder=""
                          value="Talitha Padmarini Shafira"
                          readonly
                          style="
                            background-color: #cdced0;
                            border: 2px solid #9197b3;
                          "
                        />
                      </div>
                    </div>

                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-password"
                        >Judul Webinar</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="integer"
                          class="form-control"
                          id="example-hf-password"
                          name="example-hf-password"
                          placeholder=""
                          value="Sosialisasi Gadget"
                          readonly
                          style="
                            background-color: #cdced0;
                            border: 2px solid #9197b3;
                          "
                        />
                      </div>
                    </div>

                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-password"
                        >Tanggal Webinar</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="example-hf-password"
                          name="example-hf-password"
                          placeholder=""
                          value="1 Desember 2023"
                          readonly
                          style="
                            background-color: #cdced0;
                            border: 2px solid #9197b3;
                          "
                        />
                      </div>
                    </div>

                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-password"
                        >Files User</label
                      >
                      <div class="col-sm-8">
                        <div class="form-group">
                          <a href="#" class="d-block mb-2"
                            >Bukti Pembayaran <input type="checkbox" enabled
                          /></a>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-password"
                        >Pesan apabila tidak disetujui</label
                      >
                      <div class="col-sm-8">
                        <textarea
                          type="integer"
                          class="form-control"
                          id="example-hf-password"
                          name="example-hf-password"
                          placeholder=""
                          style="border: 2px solid #9197b3"
                        >
                        </textarea>
                      </div>
                    </div>
                    <!-- <div class="mb-4"> -->

                    <div class="row">
                      <!-- <div class="col-md-4"> -->
                      <button type="button" class="col-md-2 btn btn-success">
                        Proses
                      </button>
                      <div class="col-sm-8">
                        <button type="button" class="col-md-2 btn btn-warning">
                          Tolak
                        </button>
                      </div>
                      <!-- </div> -->
                    </div>

                    <!-- <div class="row">
                      <div class="col md-8">
                        <button type="button" class="btn btn-success">
                          Proses
                        </button>
                        <div class="col sm-4">
                          <button type="button" class="btn btn-warning">
                            Tolak
                          </button>
                        </div>
                      </div>
                    </div> -->

                    <div class="mt-2"></div>
                    <!-- </div> -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseBlock>
  </div>
</template>
