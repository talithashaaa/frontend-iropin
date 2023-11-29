<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useTemplateStore } from "@/stores/template";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

import AuthService from "../../services/AuthService";
const authService = new AuthService();

const store = useTemplateStore();
const router = useRouter();

const state = reactive({
  email: null,
  password: null,
});

const rules = computed(() => {
  return {
    email: {
      required,
      minLength: minLength(3),
    },
    password: {
      required,
      minLength: minLength(5),
    },
  };
});

const v$ = useVuelidate(rules, state);

async function onSubmit() {
  const result = await v$.value.$validate();

  if (!result) {
    return;
  }

  console.log(state);
  signin(state.email, state.password);
}

function signin(_email, _password, _remember_me = true) {
  let data = {
    email: _email,
    password: _password,
    remember_me: _remember_me,
  };
  authService
    .login(data)
    .then((res) => {
      // console.log(res);
      router.push({ name: "backend-component-profilepage" });
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<template>
  <BaseBackground>
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
              <h1 class="fw-bold mb-2">Masuk</h1>
              <p class="fw-medium text-muted">
                Jika belum menjadi anggota, silahkan lakukan
                <RouterLink :to="{ name: 'auth-regist' }"
                  >PENDAFTARAN</RouterLink
                >
              </p>
            </div>
            <div class="row g-0 justify-content-center">
              <div class="col-sm-8 col-xl-4">
                <form @submit.prevent="onSubmit">
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg form-control-alt py-3"
                      id="login-email"
                      name="login-email"
                      placeholder="Email"
                      :class="{
                        'is-invalid': v$.email.$errors.length,
                      }"
                      v-model="state.email"
                      @blur="v$.email.$touch"
                    />
                    <div
                      v-if="v$.email.$errors.length"
                      class="invalid-feedback animated fadeIn"
                    >
                      Mohon inputkan email Anda
                    </div>
                  </div>
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control form-control-lg form-control-alt py-3"
                      id="login-password"
                      name="login-password"
                      placeholder="Kata Sandi"
                      :class="{
                        'is-invalid': v$.password.$errors.length,
                      }"
                      v-model="state.password"
                      @blur="v$.password.$touch"
                    />
                    <div
                      v-if="v$.password.$errors.length"
                      class="invalid-feedback animated fadeIn"
                    >
                      Mohon inputkan kata sandi Anda
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mb-4"
                  >
                    <div>
                      <RouterLink
                        :to="{ name: 'auth-forget' }"
                        class="text-muted fs-sm fw-medium d-block d-lg-inline-block mb-1"
                      >
                        Lupa Kata Sandi?
                      </RouterLink>
                    </div>
                    <div>
                      <button type="submit" class="btn btn-lg btn-alt-primary">
                        <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>
                        Masuk
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseBackground>
</template>
