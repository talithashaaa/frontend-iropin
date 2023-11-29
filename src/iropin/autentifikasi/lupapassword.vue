<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useTemplateStore } from "@/stores/template";

// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

// Main store and Router
const store = useTemplateStore();
const router = useRouter();

// Input state variables
const state = reactive({
  reminder: null,
});

// Validation rules
const rules = computed(() => {
  return {
    reminder: {
      required,
      minLength: minLength(3),
    },
  };
});

// Use vuelidate
const v$ = useVuelidate(rules, state);

// On form submission
async function onSubmit() {
  const result = await v$.value.$validate();

  if (!result) {
    // notify user form is invalid
    return;
  }

  // Go to dashboard
  router.push({ name: "backend-pages-auth" });
}
</script>

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
      <div class="p-4 w-100 flex-grow-1 d-flex align-items-center">
        <div class="w-100 position-relative">
          <div class="text-center mb-5">
            <h1 class="fw-bold mb-2">Lupa Kata Sandi</h1>
            <p class="fw-medium text-muted">
              Silahkan isikan email Anda. Kami akan mengirimkan kata sandi Anda.
            </p>
          </div>
          <div class="row g-0 justify-content-center">
            <div class="col-sm-8 col-xl-4">
              <form @submit.prevent="onSubmit">
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-alt py-3"
                    id="reminder-credential"
                    name="reminder-credential"
                    placeholder="Email"
                    :class="{
                      'is-invalid': v$.reminder.$errors.length,
                    }"
                    v-model="state.reminder"
                    @blur="v$.reminder.$touch"
                  />
                  <div
                    v-if="v$.reminder.$errors.length"
                    class="invalid-feedback animated fadeIn"
                  >
                    Masukkan email yang valid
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-lg btn-alt-primary">
                    <i class="fa fa-fw fa-envelope me-1 opacity-50"></i> Kirim
                    Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
