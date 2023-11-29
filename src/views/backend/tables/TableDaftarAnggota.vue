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

// Get example data
// import users from "@/data/usersDataset.json";

const dataset = {
  members: [
    {
      id: 1,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kabupaten Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 2,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "nonaktif",
    },
    {
      id: 3,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 4,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 5,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 6,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 7,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 8,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 9,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
    {
      id: 10,
      noanggota: "CBD - 20231122 - 1",
      nama: "Talitha Padmarini",
      cabang: "Kota Semarang",
      mitra: "Optik Metro",
      status: "aktif",
    },
  ],
};
const tables = [
  {
    name: "Nomor Anggota",
    field: "noanggota",
    sort: "",
  },
  {
    name: "Nama",
    field: "nama",
    sort: "",
  },
  {
    name: "Anggota Cabang",
    field: "cabang",
    sort: "",
  },
  {
    name: "Nama Mitra/Optik",
    field: "mitra",
    sort: "",
  },
  {
    name: "Status Keanggotaan",
    field: "status",
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
const getStatusLabelText = (status) => {
  switch (status) {
    case "aktif":
      return "Aktif";
    case "nonaktif":
      return "Kadaluwarsa";
    // Add more cases for other status values
    default:
      return "Unknown";
  }
};
const users = ref(dataset.members);
const row = ref(null);
const rowIndex = ref(null);
const selectedCabang = ref(null);
const selectedStatus = ref(null);
function selectCabang(cabang) {
  selectedCabang.value = cabang;
}
function selectStatus(status) {
  selectedStatus.value = status;
}
const filteredUsers = computed(() => {
  if (!selectedCabang.value && !selectedStatus.value) {
    return users.value;
  }

  let filteredData = users.value;

  if (selectedCabang.value) {
    filteredData = filteredData.filter(
      (user) => user.cabang === selectedCabang.value
    );
  }

  if (selectedStatus.value) {
    filteredData = filteredData.filter(
      (user) => user.status === selectedStatus.value
    );
  }

  return filteredData;
});
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
  <BasePageHeading
    title="Daftar Anggota"
    subtitle="Daftar Anggota Ikatan Profesi Optometris Indonesia Wilayah Jawa Tengah"
  >
    <!-- <template #extra>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Tables</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">Helpers</li>
        </ol>
      </nav>
    </template> -->
  </BasePageHeading>
  <!-- END Hero -->

  <!-- Page Content -->
  <div class="content">
    <BaseBlock title="" content-full>
      <Dataset
        v-slot="{ ds }"
        :ds-data="filteredUsers"
        :ds-sortby="sortBy"
        :ds-search-in="['id', 'noanggota', 'nama', 'cabang', 'mitra', 'status']"
      >
        <div class="row" :data-page-count="ds.dsPagecount">
          <div id="datasetLength" class="col-md-8 py-2">
            <DatasetShow />
          </div>
          <div class="col-md-4 py-2">
            <DatasetSearch ds-search-placeholder="Search..." />
          </div>
          <div
            class="col-sm-6 col-xl-4 d-flex justify-content-center align-items-center"
          >
            <div class="dropdown">
              <button
                type="button"
                class="btn btn-alt-secondary dropdown-toggle"
                id="dropdown-default-alt-secondary"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Anggota Cabang
              </button>
              <div
                class="dropdown-menu fs-sm"
                aria-labelledby="dropdown-default-alt-secondary"
              >
                <a class="dropdown-item" @click="selectStatus(null)">Semua</a>
                <a class="dropdown-item" @click="selectCabang('Kota Semarang')"
                  >Kota Semarang</a
                >
                <a
                  class="dropdown-item"
                  @click="selectCabang('Kabupaten Semarang')"
                  >Kabupaten Semarang</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 col-xl-4 d-flex justify-content-center align-items-center"
          >
            <div class="dropdown">
              <button
                type="button"
                class="btn btn-alt-secondary dropdown-toggle"
                id="dropdown-default-alt-secondary"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Status Anggota
              </button>
              <div
                class="dropdown-menu fs-sm"
                aria-labelledby="dropdown-default-alt-secondary"
              >
                <a class="dropdown-item" @click="selectStatus(null)">Semua</a>
                <a class="dropdown-item" @click="selectStatus('aktif')"
                  >Aktif</a
                >
                <a class="dropdown-item" @click="selectStatus('nonaktif')"
                  >Kadaluwarsa</a
                >
              </div>
            </div>
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
                      <td>{{ row.noanggota }}</td>
                      <td>{{ row.nama }}</td>
                      <td>{{ row.cabang }}</td>
                      <td>{{ row.mitra }}</td>
                      <td>
                        <span
                          :class="[
                            'fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill',
                            {
                              'bg-success-light text-success':
                                row.status === 'aktif',
                              'bg-danger-light text-danger':
                                row.status === 'nonaktif',
                              // Add more conditions for other status values
                            },
                          ]"
                        >
                          {{ getStatusLabelText(row.status) }}
                        </span>
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
