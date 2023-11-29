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
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Diverifikasi",
    },
    {
      id: 2,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Perpanjangan STR",
      aksi: "Detail",
      status: "Ditolak",
    },
    {
      id: 3,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Ditolak",
    },
    {
      id: 4,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Ditolak",
    },
    {
      id: 5,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Diverifikasi",
    },
    {
      id: 6,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Diverifikasi",
    },
    {
      id: 7,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Diverifikasi",
    },
    {
      id: 8,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Diverifikasi",
    },
    {
      id: 9,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Diverifikasi",
    },
    {
      id: 10,
      tanggal: "23 Juni 2023",
      nama: "Talitha Padmarini",
      jenispengajuan: "Permohonan SIP-RO",
      aksi: "Detail",
      status: "Diverifikasi",
    },
  ],
};
const tables = [
  {
    name: "Tanggal",
    field: "tanggal",
    sort: "",
  },
  {
    name: "Nama",
    field: "nama",
    sort: "",
  },
  {
    name: "Jenis Pengajuan",
    field: "jenispengajuan",
    sort: "",
  },
  {
    name: "Aksi",
    field: "aksi",
    sort: "",
  },
  {
    name: "Status Registrasi",
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
  switch (status.toLowerCase()) {
    case "diverifikasi":
      return "Diverifikasi";
    case "ditolak":
      return "Ditolak";
    // Tambahkan kasus untuk nilai status lainnya
    default:
      return "Unknown";
  }
};
const users = ref(dataset.members);
const row = ref(null);
const rowIndex = ref(null);
const selectedTanggal = ref(null);
const selectedStatus = ref(null);
function selectTanggal(tanggal) {
  selectedTanggal.value = tanggal;
}
function selectStatus(status) {
  selectedStatus.value = status;
}
const filteredUsers = computed(() => {
  if (!selectedTanggal.value && !selectedStatus.value) {
    return users.value;
  }

  let filteredData = users.value;

  if (selectedTanggal.value) {
    filteredData = filteredData.filter(
      (user) => user.tanggal === selectedTanggal.value
    );
  }

  if (selectedStatus.value) {
    filteredData = filteredData.filter(
      (user) => user.status === selectedStatus.value
    );
  }

  return filteredData;
});
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
  <BasePageHeading title="Surat Permohonan"> </BasePageHeading>
  <!-- END Hero -->

  <!-- Page Content -->
  <div class="content">
    <BaseBlock title="" content-full>
      <Dataset
        v-slot="{ ds }"
        :ds-data="filteredUsers"
        :ds-sortby="sortBy"
        :ds-search-in="[
          'id',
          'tanggal',
          'nama',
          'jenispengajuan',
          'action',
          'status',
        ]"
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
                Tanggal
              </button>
              <div
                class="dropdown-menu fs-sm"
                aria-labelledby="dropdown-default-alt-secondary"
              >
                <a class="dropdown-item" @click="selectStatus(null)">Semua</a>
                <a class="dropdown-item" @click="selectTanggal('Kota Semarang')"
                  >Kota Semarang</a
                >
                <a
                  class="dropdown-item"
                  @click="selectTanggal('Kabupaten Semarang')"
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
                Status Registrasi
              </button>
              <div
                class="dropdown-menu fs-sm"
                aria-labelledby="dropdown-default-alt-secondary"
              >
                <a class="dropdown-item" @click="selectStatus(null)">Semua</a>
                <a class="dropdown-item" @click="selectStatus('Diverifikasi')"
                  >Diverifikasi</a
                >
                <a class="dropdown-item" @click="selectStatus('Ditolak')"
                  >Ditolak</a
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
                      <td>{{ row.tanggal }}</td>
                      <td>{{ row.nama }}</td>
                      <td>{{ row.jenispengajuan }}</td>
                      <td>
                        <button type="button" class="btn btn-alt-secondary">
                          Lihat Detail
                        </button>
                      </td>
                      <td>
                        <span
                          :class="[
                            'fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill',
                            {
                              'bg-success-light text-success':
                                row.status === 'Diverifikasi',
                              'bg-danger-light text-danger':
                                row.status === 'Ditolak',
                              // Add more conditons for other status values
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
