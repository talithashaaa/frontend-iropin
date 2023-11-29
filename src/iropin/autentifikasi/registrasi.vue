<template>
  <div class="row g-0">
    <div
      class="hero-static col-lg-4 flex-column justify-content-start"
      :style="{ backgroundColor: '#006D32' }"
    >
      <div
        class="p-4 p-xl-5 flex-grow-1 d-flex flex-column"
        style="text-align: center"
      >
        <div class="w-100 d-flex align-items-center">
          <img
            src="@/assets/photo/logo.png"
            alt="IROPIN Logo"
            class="logo-image"
            style="max-width: 20%; height: auto; margin-right: 10px"
          />
          <h1 class="text-white-75 me-xl-8 mt-2">IROPIN</h1>
        </div>
      </div>
    </div>

    <div
      class="hero-static col-lg-8 col-md-8 col-12 d-flex flex-column align-items-center bg-body-extra-light"
    >
      <div class="p-4 w-100 flex-grow-1 d-flex align-items-top">
        <div class="w-100 position-relative">
          <div
            style="
              position: sticky;
              top: 20px;
              z-index: 1;
              background-color: white;
            "
          >
            <form-wizard @on-complete="onComplete" step-size="xs">
              <tab-content title="Keanggotaan">
                <form @submit.prevent="onSubmit">
                  <div class="row push">
                    <div class="col-lg-12 col-xl-12">
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Anggota Daerah</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                          value="Jawa Tengah"
                          readonly
                          style="
                            background-color: #cdced0;
                            border: 2px solid #9197b3;
                          "
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="branch-select"
                          >Anggota Cabang<span class="text-danger"
                            >*</span
                          ></label
                        >
                        <select
                          id="branch-select"
                          class="form-select"
                          :class="{
                            'is-invalid': v$.selectBranch.$errors.length,
                          }"
                          v-model="state.selectBranch"
                          @blur="v$.selectBranch.$touch"
                          name="selectBranch"
                        >
                          <option
                            v-for="(option, index) in options"
                            :value="option.value"
                            :key="'option-${index}'"
                          >
                            {{ option.text }}
                          </option>
                        </select>
                        <div
                          v-if="v$.selectBranch.$errors.length || errorMessage"
                          class="invalid-feedback animated fadeIn"
                        >
                          Pilih salah satu!
                          {{ v$.selectBranch.$errors[0] || errorMessage }}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </tab-content>
              <tab-content title="Data Pribadi">
                <form @submit.prevent="onSubmit">
                  <div class="row push">
                    <div class="col-lg-12 col-xl-12">
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Nama Lengkap (tanpa gelar)</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Nomor KTP</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="example-flatpickr-custom"
                          >Tanggal Lahir</label
                        >
                        <FlatPickr
                          id="example-flatpickr-custom"
                          class="form-control"
                          placeholder=""
                          v-model="flatPickrState.dateCustom"
                          :config="flatPickrState.configCustom"
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Tempat Lahir</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-select"
                          >Jenis Kelamin</label
                        >
                        <select
                          class="form-select"
                          id="example-select"
                          name="example-select"
                        >
                          <option selected>Pilih Jenis Kelamin</option>
                          <option value="lakilaki">Laki-laki</option>
                          <option value="perempuan">Perempuan</option>
                        </select>
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-select"
                          >Agama</label
                        >
                        <select
                          class="form-select"
                          id="example-select"
                          name="example-select"
                        >
                          <option selected>Pilih Agama</option>
                          <option value="islam">Islam</option>
                          <option value="kristen">Kristen</option>
                          <option value="katolik">Katolik</option>
                          <option value="hindu">Hindu</option>
                          <option value="buddha">Buddha</option>
                          <option value="konghucu">Konghucu</option>
                        </select>
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Gelar Depan</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-email-input"
                          >Gelar Belakang</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="example-email-input"
                          name="example-email-input"
                          placeholder=""
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Email</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Password</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="example-file-input"
                          >Upload KTP</label
                        >
                        <input
                          class="form-control"
                          type="file"
                          id="example-file-input"
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-file-input"
                          >Upload Pas Foto</label
                        >
                        <input
                          class="form-control"
                          type="file"
                          id="example-file-input"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </tab-content>
              <tab-content title="Alamat Tinggal">
                <form @submit.prevent="onSubmit">
                  <div class="row push">
                    <div class="col-lg-12 col-xl-12">
                      <div class="mb-4">
                        <label class="form-label" for="example-textarea-input"
                          >Alamat Lengkap</label
                        >
                        <textarea
                          class="form-control"
                          id="example-textarea-input"
                          name="example-textarea-input"
                          rows="4"
                          placeholder="Ketikkan alamat lengkap"
                        ></textarea>
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-select"
                          >Kota</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Kode Pos</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Nomor Telepon</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Nomor HP</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </tab-content>
              <tab-content title="Pendidikan">
                <form @submit.prevent="onSubmit">
                  <div class="row push">
                    <div class="col-lg-12 col-xl-12">
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Universitas / Institusi</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Peminatan (jika ada)</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="example-file-input"
                          >Upload Ijazah</label
                        >
                        <input
                          class="form-control"
                          type="file"
                          id="example-file-input"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </tab-content>
              <tab-content title="Registrasi">
                <form @submit.prevent="onSubmit">
                  <div class="row push">
                    <div class="col-lg-12 col-xl-12">
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >No STR</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-flatpickr-custom"
                          >Tanggal Terbit</label
                        >
                        <FlatPickr
                          id="example-flatpickr-custom"
                          class="form-control"
                          placeholder=""
                          v-model="flatPickrState.dateCustom"
                          :config="flatPickrState.configCustom"
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-flatpickr-custom"
                          >Tanggal Kadaluarsa</label
                        >
                        <FlatPickr
                          id="example-flatpickr-custom"
                          class="form-control"
                          placeholder=""
                          v-model="flatPickrState.dateCustom"
                          :config="flatPickrState.configCustom"
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-file-input"
                          >Upload STR</label
                        >
                        <input
                          class="form-control"
                          type="file"
                          id="example-file-input"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </tab-content>
              <tab-content title="Alamat Kantor">
                <form @submit.prevent="onSubmit">
                  <div class="row push">
                    <div class="col-lg-12 col-xl-12">
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Nama Kantor</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-textarea-input"
                          >Alamat Kantor Lengkap</label
                        >
                        <textarea
                          class="form-control"
                          id="example-textarea-input"
                          name="example-textarea-input"
                          rows="4"
                          placeholder="Ketikkan alamat lengkap"
                        ></textarea>
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Kota</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Status Kepegawaian</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Jabatan</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>
                      <div class="mb-4">
                        <label class="form-label" for="example-text-input"
                          >Telepon Kantor</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="example-text-input"
                          name="example-text-input"
                          placeholder=""
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="example-file-input"
                          >Upload SIP / Surat Keterangan Bekerja</label
                        >
                        <input
                          class="form-control"
                          type="file"
                          id="example-file-input"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </tab-content>
            </form-wizard>
            <div
              class="d-flex justify-content-center align-items-center logo-overlay"
            >
              <img
                src="@/assets/photo/logo.png"
                alt="IROPIN Logo"
                class="logo-image"
                style="max-width: 20%; height: auto; opacity: 0.5"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- END FORM -->
    </div>
  </div>
  <div
    class="px-4 py-3 w-100 d-lg-none d-flex flex-column flex-sm-row justify-content-between fs-sm text-center text-sm-start"
  ></div>

  <div
    class="modal fade"
    id="one-signup-terms"
    tabindex="-1"
    role="dialog"
    aria-labelledby="one-signup-terms"
    aria-hidden="true"
  ></div>
</template>

<script>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from "vue";
import FlatPickr from "vue-flatpickr-component";
import { useRouter } from "vue-router";
import { useTemplateStore } from "@/stores/template";
import useVuelidate from "@vuelidate/core";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import "flatpickr/dist/flatpickr.css";
import {
  required,
  minLength,
  between,
  email,
  decimal,
  integer,
  url,
  sameAs,
} from "@vuelidate/validators";
import {
  Chrome,
  Photoshop,
  Sketch,
  Slider,
  Swatches,
  Material,
  Compact,
} from "@ckpack/vue-color";

const flatPickrState = reactive({
  dateCustom: null,
  configCustom: { dateFormat: "d-m-Y" },
});

const vueColorState = reactive({
  colors: "#5c80d1",
});

const errorMessage = ref("");
const options = reactive([
  { value: null, text: "Pilih Kota/Kabupaten" },
  { value: "kabbanjarnegara", text: "Kabupaten Banjarnegara" },
  { value: "kabbanyumas", text: "Kabupaten Banyumas" },
  { value: "kabbatang", text: "Kabupaten Batang" },
  { value: "kabblora", text: "Kabupaten Blora" },
  { value: "kabboyolali", text: "Kabupaten Boyolali" },
  { value: "kabbrebes", text: "Kabupaten Brebes" },
  { value: "kabcilacap", text: "Kabupaten Cilacap" },
  { value: "kabdemak", text: "Kabupaten Demak" },
  { value: "kabgrobogan", text: "Kabupaten Grobogan" },
  { value: "kabjepara", text: "Kabupaten Jepara" },
  { value: "kabkaranganyar", text: "Kabupaten Karanganyar" },
  { value: "kabkebumen", text: "Kabupaten Kebumen" },
  { value: "kabkendal", text: "Kabupaten Kendal" },
  { value: "kabklaten", text: "Kabupaten Klaten" },
  { value: "kabkudus", text: "Kabupaten Kudus" },
  { value: "kabmagelang", text: "Kabupaten Magelang" },
  { value: "kabpati", text: "Kabupaten Pati" },
  { value: "kabpekalongan", text: "Kabupaten Pekalongan" },
  { value: "kabpemalang", text: "Kabupaten Pemalang" },
  { value: "kabpurbalingga", text: "Kabupaten Purbalingga" },
  { value: "kabpurworejo", text: "Kabupaten Purworejo" },
  { value: "kabrembang", text: "Kabupaten Rembang" },
  { value: "kabsemarang", text: "Kabupaten Semarang" },
  { value: "kabsragen", text: "Kabupaten Sragen" },
  { value: "kabsukoharjo", text: "Kabupaten Sukoharjo" },
  { value: "kabtegal", text: "Kabupaten Tegal" },
  { value: "kabtemanggung", text: "Kabupaten Temanggung" },
  { value: "kabwonogiri", text: "Kabupaten Wonogiri" },
  { value: "kabwonosobo", text: "Kabupaten Wonosobo" },
  { value: "kotamagelang", text: "Kota Magelang" },
  { value: "kotapekalongan", text: "Kota Pekalongan" },
  { value: "kotasalatiga", text: "Kota Salatiga" },
  { value: "kotasemarang", text: "Kota Semarang" },
  { value: "kotasurakarta", text: "Kota Surakarta" },
  { value: "kotategal", text: "Kota Tegal" },
]);
const state = reactive({
  selectBranch: null,
});
const rules = computed(() => {
  return {
    selectBranch: { required: errorMessage },
  };
});
const v$ = useVuelidate(rules, state);
const onComplete = () => {
  alert("Pendaftaran berhasil, silahkan tunggu verifikasi.");
  console.log("Form wizard completed!");
};
async function onSubmit() {
  errorMessage.value = ""; // Reset error message
  const result = await v$.value.$validate();

  if (!result) {
    // Set the error message
    errorMessage.value = "Pilih salah satu!";
    return;
  }

  // perform async actions
}
export default {
  components: {
    FormWizard,
    TabContent,
    FlatPickr,
  },
  setup() {
    return {
      state,
      v$,
      onComplete,
      onSubmit,
      options,
      flatPickrState,
      ref,
      errorMessage,
    };
  },
};
</script>

<style lang="scss">
// Flatpickr + Custom overrides
@import "flatpickr/dist/flatpickr.css";
@import "@/assets/scss/vendor/flatpickr";

// Vue Color Custom overrides
@import "@/assets/scss/vendor/vue-color";

.logo-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
