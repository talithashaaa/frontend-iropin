<script setup>
import { reactive, computed, onMounted, ref } from "vue";

import {
  Dataset,
  DatasetItem,
  DatasetInfo,
  DatasetPager,
  DatasetSearch,
  DatasetShow,
} from "vue-dataset";

const dataset = {
  members: [
    {
      id: 1,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 2,
      username: "talitafira@",
      level: "Manajer",
      aksi: "Detail, hapus",
    },
    {
      id: 3,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 4,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 5,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 6,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 7,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 8,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 9,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
    {
      id: 10,
      username: "talitafira@",
      level: "Super Admin",
      aksi: "Detail, hapus",
    },
  ],
};
const tables = [
  {
    name: "Username",
    field: "username",
    sort: "",
  },
  {
    name: "Level",
    field: "level",
    sort: "",
  },
  {
    name: "Aksi",
    field: "aksi",
    sort: "",
  },
];

// Sort by functionality
const sortBy = computed(() => {
  return tables.reduce((acc, o) => {
    if (o.sort) {
      o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
    }
    return acc;
  }, []);
});

// On sort th click
function onSort(event, i) {
  let toset;
  const sortEl = tables[i];

  if (!event.shiftKey) {
    tables.forEach((o) => {
      if (o.field !== sortEl.field) {
        o.sort = "";
      }
    });
  }

  if (!sortEl.sort) {
    toset = "asc";
  }

  if (sortEl.sort === "desc") {
    toset = event.shiftKey ? "" : "asc";
  }

  if (sortEl.sort === "asc") {
    toset = "desc";
  }

  sortEl.sort = toset;
}

// Apply a few Bootstrap 5 optimizations
onMounted(() => {
  // Remove labels from
  document.querySelectorAll("#datasetLength label").forEach((el) => {
    el.remove();
  });

  // Replace select classes
  let selectLength = document.querySelector("#datasetLength select");

  selectLength.classList = "";
  selectLength.classList.add("form-select");
  selectLength.style.width = "80px";
});

const users = ref(dataset.members);
const row = ref(null);
const rowIndex = ref(null);

function showDetail(row) {
  // Implementasi logika yang ingin Anda lakukan ketika tombol "Detail" ditekan
  console.log("Detail button clicked for row:", row);
  // Anda dapat menambahkan logika untuk menampilkan informasi detail atau navigasi ke halaman detail
}
</script>

<style lang="scss" scoped>
.gg-select {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 22px;
  height: 22px;
}
.gg-select::after,
.gg-select::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 7px;
  transform: rotate(-45deg);
}
.gg-select::before {
  border-left: 2px solid;
  border-bottom: 2px solid;
  bottom: 4px;
  opacity: 0.3;
}
.gg-select::after {
  border-right: 2px solid;
  border-top: 2px solid;
  top: 4px;
  opacity: 0.3;
}
th.sort {
  cursor: pointer;
  user-select: none;
  &.asc {
    .gg-select::after {
      opacity: 1;
    }
  }
  &.desc {
    .gg-select::before {
      opacity: 1;
    }
  }
}
</style>

<template>
  <!-- Hero -->
  <BasePageHeading title="Kelola Akun"> </BasePageHeading>
  <!-- END Hero -->

  <!-- Page Content -->
  <div class="content">
    <BaseBlock title="" content-full>
      <Dataset
        v-slot="{ ds }"
        :ds-data="users"
        :ds-sortby="sortBy"
        :ds-search-in="['id', 'username', 'level', 'aksi']"
      >
        <div class="row" :data-page-count="ds.dsPagecount">
          <div id="datasetLength" class="col-md-8 py-2">
            <DatasetShow />
          </div>
          <div class="col-md-4 py-2">
            <DatasetSearch ds-search-placeholder="Search..." />
          </div>
        </div>

        <hr />
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="table">No</th>
                    <th
                      v-for="(th, index) in tables"
                      :key="th.field"
                      :class="['sort', th.sort]"
                      @click="onSort($event, index)"
                    >
                      {{ th.name }} <i class="gg-select float-end"></i>
                    </th>
                  </tr>
                </thead>
                <DatasetItem tag="tbody" class="fs-sm">
                  <template #default="{ row, rowIndex }">
                    <tr>
                      <th scope="row">{{ rowIndex + 1 }}</th>
                      <td>{{ row.username }}</td>
                      <td>{{ row.level }}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-success"
                          @click="editUser(row)"
                        >
                          Ubah
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning"
                          @click="deleteUser(row)"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  </template>
                </DatasetItem>
              </table>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-md-row flex-column justify-content-between align-items-center"
        >
          <DatasetInfo class="py-3 fs-sm" />
          <DatasetPager class="flex-wrap py-3 fs-sm" />
        </div>
      </Dataset>
    </BaseBlock>
  </div>
  <!-- END Page Content -->
</template>
