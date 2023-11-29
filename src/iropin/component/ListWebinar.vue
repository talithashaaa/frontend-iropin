<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Helper variables
let popoverTriggerList = [];
let popoverList = [];

// Data
const currentPage = ref(1);
const cardsPerPage = 8;
const cards = []; // Isi dengan data kartu Anda

// Fungsi untuk menghitung jumlah halaman
const pageCount = computed(() => Math.ceil(cards.length / cardsPerPage));

// Init popovers on content loaded
onMounted(() => {
  // Grab all popover containers...
  popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );

  // ...and init them
  popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    const container = popoverTriggerEl.dataset.bsContainer || "#page-container";

    return new window.bootstrap.Popover(popoverTriggerEl, {
      container: container,
      animation:
        popoverTriggerEl.dataset.bsAnimation &&
        popoverTriggerEl.dataset.bsAnimation.toLowerCase() == "true"
          ? true
          : false,
      trigger: popoverTriggerEl.dataset.bsTrigger || "hover focus",
    });
  });
});

// Dispose popovers on unMounted
onUnmounted(() => {
  popoverList.forEach((popover) => popover.dispose());
});

// Fungsi untuk mengubah halaman
const changePage = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="content">
    <BaseBlock title="" style="background-color: #edfcf0">
      <div class="row items-push">
        <div class="col-md-12">
          <div class="row">
            <div class="content">
              <div class="row">
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                        data-bs-toggle="popover"
                        data-bs-trigger="click"
                        data-bs-placement="top"
                        title="Top Popover"
                        data-bs-content="This is example content. You can put a description or more info here."
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <div class="col-lg-3">
                  <BaseBlock tag="a" link-pop class="overflow-hidden">
                    <template #content>
                      <img
                        class="img-fluid"
                        src="src/assets/photo/webinar2.png"
                        alt=""
                      />
                      <div class="block-content">
                        <h4 class="mb-1">Seminar Gad</h4>
                        <p class="fs-sm fw-medium mb-2">
                          <span class="text-primary">Jesse Fisher</span>
                          on July 16, 2021 ·
                          <span class="text-muted">10 min</span>
                        </p>
                        <p class="fs-sm text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas ultrices, justo vel imperdiet
                          gravida...
                        </p>
                      </div>
                    </template>
                  </BaseBlock>
                </div>
                <nav aria-label="Page navigation">
                  <ul class="pagination justify-content-center push">
                    <li
                      v-for="page in pageCount"
                      :key="page"
                      class="page-item"
                      :class="{ active: page === currentPage }"
                    >
                      <a class="page-link" @click="changePage(page)">{{
                        page
                      }}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseBlock>
  </div>
</template>
