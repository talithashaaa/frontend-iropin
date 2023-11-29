<script setup></script>

<template>
  <div class="content">
    <BaseBlock title="">
      <div class="row items-push">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <h1 style="color: #006d32">Tambah Akun</h1>
              <hr style="border: 2px solid #006d32" />
            </div>

            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12 space-y-5">
                  <form class="space-y-4" @sumbit.prevent>
                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-email"
                        >Username</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="example-hf-email"
                          name="example-hf-email"
                          placeholder=""
                          style="border: 2px solid #9197b3"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-password"
                        >Level</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="integer"
                          class="form-control"
                          id="example-hf-password"
                          name="example-hf-password"
                          placeholder=""
                          style="border: 2px solid #9197b3"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <label
                        class="col-sm-4 col-form-label"
                        for="example-hf-password"
                        >Password</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          id="example-hf-password"
                          name="example-hf-password"
                          placeholder=""
                          style="border: 2px solid #9197b3"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <button type="button" class="col-md-2 btn btn-success">
                        Buat Akun
                      </button>
                    </div>

                    <div class="mt-2"></div>
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
