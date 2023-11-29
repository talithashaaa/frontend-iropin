<script setup>
import { ref, watch, onMounted } from "vue";
import { useTemplateStore } from "@/stores/template";

import BaseNavigation from "@/components/BaseNavigation.vue";

// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import SimpleBar from "simplebar";

// Grab menu navigation arrays
import menu from "@/data/menu";

const navigation = menu.main;

// Component properties
defineProps({
  withMiniNav: {
    type: Boolean,
    default: false,
    description: "If the sidebar is in Mini Nav Mode",
  },
});

// Main store
const store = useTemplateStore();

// Dark Mode preference helper for radios
const radioDarkMode = ref();

// Sets default dark mode preferences for radios
function setDarkModeRadioDefault() {
  if (store.settings.darkModeSystem) {
    radioDarkMode.value = "system";
  } else {
    if (store.settings.darkMode) {
      radioDarkMode.value = "dark";
    } else {
      radioDarkMode.value = "light";
    }
  }
}

// When the user sets dark mode preference through the radios
function onDarkModeRadioChange() {
  if (radioDarkMode.value === "system") {
    store.darkModeSystem({ mode: "on" });
  } else {
    store.darkModeSystem({ mode: "off" });

    if (radioDarkMode.value === "dark") {
      store.darkMode({ mode: "on" });
    } else {
      store.darkMode({ mode: "off" });
    }
  }
}

// Set dark mode preference radios default and watch for changes to store
setDarkModeRadioDefault();
watch(
  () => store.settings.darkModeSystem,
  () => {
    setDarkModeRadioDefault();
  }
);
watch(
  () => store.settings.darkMode,
  () => {
    setDarkModeRadioDefault();
  }
);

// Init SimpleBar (custom scrolling)
onMounted(() => {
  new SimpleBar(document.getElementById("simplebar-sidebar"));
});
</script>

<template>
  <nav
    id="sidebar"
    :class="{ 'with-mini-nav': withMiniNav }"
    aria-label="Main Navigation"
  >
    <slot>
      <!-- Side Header -->
      <div
        class="content-header"
        style="
          display: flex;
          align-items: center;
          background-color: #006d32;
          color: #ffffff;
          padding: 10px;
        "
      >
        <div class="row items-push">
          <slot name="header">
            <div class="col-md-4">
              <img
                src="src/assets/photo/logo.png"
                style="
                  max-width: 80%;
                  height: auto;
                  vertical-align: middle;
                  margin-right: 10px;
                "
              />
            </div>
            <div class="col-md-8">
              <h2 style="margin: 0; margin-left: 5px">IROPIN</h2>
            </div>
          </slot>
        </div>

        <!-- Extra -->

        <!-- END Extra -->
      </div>
      <!-- END Side Header -->

      <!-- Sidebar Scrolling -->
      <div
        id="simplebar-sidebar"
        class="js-sidebar-scroll"
        style="background-color: #006d32; color: #ffffff"
      >
        <slot name="content">
          <!-- Side Navigation -->
          <div
            class="content-side"
            style="background-color: #006d32; color: #ffffff"
          >
            <BaseNavigation :nodes="navigation" />
          </div>
          <!-- END Side Navigation -->
        </slot>
      </div>
      <!-- END Sidebar Scrolling -->
    </slot>
  </nav>
  <!-- END Sidebar -->
</template>
