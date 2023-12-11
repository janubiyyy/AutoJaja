<template>
  <section>
    <div>
      <navigation />
      <main class="main">
        <div class="car-area grid bg py-120">
          <div class="container">
            <div class="row" style="padding-top: 6%">
              <div class="row">
                <div class="col-lg-12">
                  <div class="car-widget" style="width: 102%">
                    <div class="row">
                      <div class="col-md-3 car-sort-box">
                        <div class="car-search-form">
                          <span
                            style="
                              color: var(--color-blue-blue-06, #0f5392);

                              /* Body 1 */
                              font-family: Inter;
                              font-size: 20px;
                              font-style: normal;
                              font-weight: 600;
                              line-height: normal;
                              letter-spacing: 0.4px;
                            "
                            >Search
                          </span>
                          <form action="#">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                                v-model="searchKey"
                              />
                              <button
                                type="search"
                                @click="searchCarsAndUpdateURL"
                              >
                                <i class="far fa-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div class="col-md-3 car-sort-box">
                        <span
                          style="
                            color: var(--color-blue-blue-06, #0f5392);

                            /* Body 1 */
                            font-family: Inter;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: normal;
                            letter-spacing: 0.4px;
                          "
                          >Sort By
                        </span>
                        <v-select
                          v-model="selectedSortBy"
                          :options="sortByOptions"
                          label="label"
                          value="value"
                          placeholder="Pilih Urutan"
                        ></v-select>
                      </div>
                      <div class="col-md-3 car-sort-box">
                        <span
                          style="
                            color: var(--color-blue-blue-06, #0f5392);

                            /* Body 1 */
                            font-family: Inter;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: normal;
                            letter-spacing: 0.4px;
                          "
                          >Sort By Harga</span
                        >
                        <v-select
                          v-model="selectedSortOrder"
                          :options="sortOrderOptions"
                          label="label"
                          value="value"
                          placeholder="Pilih Urutan"
                        ></v-select>
                      </div>

                      <div
                        class="col-md-3 car-sort-box"
                        style="margin-top: -5px"
                      >
                        <span
                          style="
                            color: white;

                            /* Body 1 */
                            font-family: Inter;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: normal;
                            letter-spacing: 0.4px;
                          "
                          >Sort By</span
                        >
                        <button
                          @click="searchCarsAndUpdateURL"
                          type="button"
                          class="btn-find"
                        >
                          <span class="far fa-search"></span> Cari Mobil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="car-sidebar" style="padding-top: 0%">
                  <!-- Pencarian Bedasarkan Keyword -->

                  <!-- Pencarian Berdasarkan Brand -->
                  <div class="car-widget" style="background-color: #207ace">
                    <h4 class="car-widget-title" style="color: white">
                      Brand Mobil
                    </h4>
                    <div>
                      <v-select
                        v-model="selectedMerek"
                        :options="merekOptions"
                        label="label"
                        value="value"
                        placeholder="Pilih Merek"
                        multiple
                      ></v-select>
                    </div>
                    <div class="mt-5">
                      <v-select
                        v-model="selectedTransmisi"
                        :options="transmisiOptions"
                        label="label"
                        value="value"
                        placeholder="Pilih Transmisi"
                        multiple
                      ></v-select>
                    </div>
                    <div class="mt-5">
                      <v-select
                        v-model="selectedBbm"
                        :options="bbmOptions"
                        label="label"
                        value="value"
                        placeholder="Pilih BBM"
                        multiple
                      ></v-select>
                    </div>
                  </div>
                  <!-- Pencarian Berdasarkan Model -->
                  <div class="car-widget" style="background-color: #fbab44">
                    <h4 class="title-brand" style="color: white">Model</h4>
                    <div>
                      <v-select
                        v-model="selectedSeat"
                        :options="seatOptions"
                        label="label"
                        value="value"
                        placeholder="Pilih Kapasitas"
                        multiple
                      ></v-select>
                    </div>
                    <div class="mt-5">
                      <v-select
                        v-model="selectedJenis"
                        :options="jenisOptions"
                        label="label"
                        value="value"
                        placeholder="Pilih Jenis Kendaraan"
                        multiple
                        :key="someUniqueKey"
                      ></v-select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="row" v-if="isLoading">
                  <div class="col">
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                  </div>
                  <div class="col">
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                  </div>
                  <div class="col">
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      class="mx-auto border mt-3"
                      width="270px"
                      type="image, article"
                    ></v-skeleton-loader>
                  </div>
                </div>
                <!-- Produk Jaja Auto -->
                <div class="row" v-else-if="searchResults.length > 0">
                  <div
                    v-for="car in displayedResults"
                    :key="car.id"
                    class="col-md-6 col-lg-4 col-xl-4"
                  >
                    <div
                      class="wow fadeInUp car-item"
                      data-wow-delay=".25s"
                      style="
                        box-shadow: 20px;
                        background: white;
                        border-radius: 10px;
                        padding: 10px;
                        height: auto;
                        margin-bottom: 25px;
                        box-shadow: var(--box-shadow);
                        transition: var(--transition);
                      "
                    >
                      <div class="car-img">
                        <!-- <span class="car-status status-1">Used</span> -->
                        <center>
                          <img
                            :src="car.imagePath"
                            style="
                              height: 130px;
                              object-fit: cover;
                              padding: 20px;
                            "
                            alt=""
                          />
                        </center>

                        <div class="car-btns">
                          <a href="#"><i class="far fa-heart"></i></a>
                          <a href="#"><i class="far fa-arrows-repeat"></i></a>
                        </div>
                      </div>

                      <div class="car-content">
                        <div class="car-top">
                          <h4>
                            <a
                              style="
                                color: black;
                                display: inline-block;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                max-width: 100%; /* Ubah sesuai kebutuhan */
                              "
                              href="#"
                              >{{ car.name }}</a
                            >
                          </h4>
                          <span style="color: #207ace" class="car-price"
                            >Rp {{ formatPrice(car.rangeHarga) }}</span
                          >
                        </div>

                        <v-row no-gutters>
                          <v-col>
                            <v-chip
                              class="mt-2"
                              closable
                              style="padding: 5px"
                              color="#FBAB44"
                              text-color="#207ACE"
                              label
                            >
                              <router-link :to="'/'">
                                <img
                                  src="../assets/img/homepage/badge.png"
                                  style="width: 80px"
                                  alt=""
                              /></router-link>
                              <span
                                style="
                                  color: white;
                                  font-weight: 500;
                                  font-size: 14px;
                                  margin-right: 5px;
                                "
                                >Jaja Auto</span
                              ></v-chip
                            >
                          </v-col>
                          <v-col
                            style="
                              display: flex;
                              align-items: center;
                              justify-content: flex-end;
                            "
                          >
                            <div>
                              <!-- <li>{{ car.name }}</li> -->
                            </div>
                          </v-col>
                        </v-row>

                        <button
                          @click="handledetaillates(car.slug)"
                          class="btn-detail"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagination-area">
                <div aria-label="Page navigation example">
                  <ul class="pagination">
                    <li
                      class="page-item"
                      :class="{ disabled: this.currentPage === 1 }"
                    >
                      <a
                        class="page-link"
                        href="#"
                        aria-label="Previous"
                        @click="prevPage"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li
                      v-for="page in totalPages"
                      :key="page"
                      :class="{ active: page === currentPage }"
                    >
                      <a class="page-link" href="#" @click="changePage(page)">{{
                        page
                      }}</a>
                    </li>
                    <li
                      class="page-item"
                      :class="{ disabled: this.currentPage === totalPages }"
                    >
                      <a
                        class="page-link"
                        href="#"
                        aria-label="Next"
                        @click="nextPage"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <foote />
  </section>
</template>
<script>
import navigation from "../components/backup";
import foote from "../components/Footer";
import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css"; // Import the CSS file for vue-select

export default {
  data() {
    return {
      searchKey: "",
      currentPage: 1,
      itemsPerPage: 6,
      searchKeyword: "", // Parameter pencarian
      selectedMerek: [],
      selectedJenis: [],
      selectedTransmisi: [],
      selectedBbm: "", // Parameter bbm
      selectedSeat: "", // Parameter seat
      selectedjenis: "", // Parameter listrik
      selectedSortBy: "", // Parameter sort_by
      selectedSortOrder: "", // Parameter sort_order
      merekOptions: [],
      transmisiOptions: [],
      bbmOptions: [],
      seatOptions: [],
      jenisOptions: [],
      sortByOptions: [],
      sortOrderOptions: [],
      isLoading: true,

      searchResults: [], // Store search results

      slides: [
        { src: require("../assets/img/homepage/bj1.jpg") },
        { src: require("../assets/img/homepage/bj2.jpg") },
        // { src: require("../assets/img/homepage/b3.png") },
      ], //Gambar pada banner
      idcar: "", // ID detail produk
    };
  },
  created() {
    const selectedMerek = JSON.parse(localStorage.getItem("selectedMerek"));
    const selectedTransmisi = JSON.parse(
      localStorage.getItem("selectedTransmisi")
    );

    // Gunakan nilai yang diambil dari localStorage
    if (selectedMerek) {
      this.selectedMerek = selectedMerek;
    }
    if (selectedTransmisi) {
      this.selectedTransmisi = selectedTransmisi;
    }
    this.fetchSearchOptions();
    // Ambil data hasil pencarian dari local storage jika tersedia
    const searchResults = localStorage.getItem("searchResults");
    if (searchResults) {
      this.searchResults = JSON.parse(searchResults);
      console.log("iniii hasilnya", this.searchResults);
    }
  },
  computed: {
    totalItems() {
      return this.searchResults.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedResults() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.searchResults.slice(start, end);
    },
    // Fungsi Ukuran Banner
    calculateHeight() {
      return `${(9 / 27) * this.$vuetify.bfilterCarsreakpoint.width}px`;
    },
    // Fungsi Skeleton Pada Card Produk
    skeletonCount() {
      return this.limit;
    },
  },
  mounted() {
    // this.isLoggedIn = localStorage.getItem("token"); //Fungsi Halaman ini Harus Login
    this.fetchCarItems(); //Fungsi Produk
    this.handledetail(slug); //Fungsi Memanggil ID detail produk

    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener("input", this.filterCars); //Fungsi Pencarian berdasarkan keyword
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
    filterCars() {
      // Menggunakan JavaScript filter untuk mencari mobil berdasarkan kata kunci
      this.searchResults = this.searchResults.filter((car) => {
        return car.name
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase());
      });
    },
    async searchCarsAndUpdateURL() {
      await localStorage.setItem(
        "selectedMerek",
        JSON.stringify(this.selectedMerek)
      );
      await localStorage.setItem(
        "selectedTransmisi",
        JSON.stringify(this.selectedTransmisi)
      );
      await localStorage.setItem(
        "selectedJenis",
        JSON.stringify(this.selectedJenis)
      );

      const params = {
        merek: this.selectedMerek
          ? this.selectedMerek.map((item) => item.value).join(",")
          : "",
        transmisi: this.selectedTransmisi
          ? this.selectedTransmisi.map((item) => item.value).join(",")
          : "",
        bbm: this.selectedBbm
          ? this.selectedBbm.map((item) => item.value).join(",")
          : "",
        seat: this.selectedSeat
          ? this.selectedSeat.map((item) => item.value).join(",")
          : "",
        // listrik: this.selectedListrik
        //   ? this.selectedListrik.map((item) => item.value).join(",")
        //   : "",

        sort_by: this.selectedSortBy ? this.selectedSortBy.value : "",
        sort_order: this.selectedSortOrder ? this.selectedSortOrder.value : "",
        jenis_name: this.selectedJenis
          ? this.selectedJenis.map((item) => item.label).join(",")
          : "",
        search: this.searchKey,
        //  length: 100,
        // jenis_name: this.selectedJenis ? this.selectedJenis[0].value : "",
      };

      this.$router.replace({
        path: "/search",
        query: params,
      });

      await this.searchCars();
    },

    async searchCars() {
      // Inisialisasi parameter yang akan dikirim ke API
      const params = {
        merek: this.selectedMerek
          ? this.selectedMerek.map((item) => item.value).join(",")
          : "",
        transmisi: this.selectedTransmisi
          ? this.selectedTransmisi.map((item) => item.value).join(",")
          : "",
        bbm: this.selectedBbm
          ? this.selectedBbm.map((item) => item.value).join(",")
          : "",
        seat: this.selectedSeat
          ? this.selectedSeat.map((item) => item.value).join(",")
          : "",
        // listrik: this.selectedListrik
        //   ? this.selectedListrik.map((item) => item.value).join(",")
        //   : "",
        sort_by: this.selectedSortBy ? this.selectedSortBy.value : "",
        sort_order: this.selectedSortOrder ? this.selectedSortOrder.value : "",
        jenis_name: this.selectedJenis
          ? this.selectedJenis.map((item) => item.label).join(",")
          : "",
        search: this.searchKey,
        // length: 100,
        // jenis_name: this.selectedJenis ? this.selectedJenis[0].value : "", // Add this line
      };

      // Buat URL API dengan parameter yang telah dicek
      const apiUrl = `https://api.jaja.id/jauto/produk/get_search_result?${new URLSearchParams(
        params
      )}`;

      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
      };

      try {
        const response = await fetch(apiUrl, { headers });
        const data = await response.json();

        if (data.success) {
          this.searchResults = data.data;

          // console.log("iniiiihasil cari", this.searchResults);

          // Simpan hasil pencarian ke dalam Local Storage
          localStorage.setItem(
            "searchResults",
            JSON.stringify(this.searchResults)
          );
          localStorage.setItem(
            "selectedMerek",
            JSON.stringify(this.selectedMerek)
          );
          localStorage.setItem(
            "selectedTransmisi",
            JSON.stringify(this.selectedTransmisi)
          );

          // Redirect ke halaman /search
          this.$router.push({
            path: "/search",
            query: params,
          });
        } else {
          console.error("Gagal mengambil hasil pencarian dari API");
        }
      } catch (error) {
        console.error(
          "Terjadi kesalahan dalam mengambil hasil pencarian:",
          error
        );
      }
    },

    async fetchSearchOptions() {
      const apiUrl = "https://api.jaja.id/jauto/produk/get_search_option";
      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
      };

      try {
        const response = await fetch(apiUrl, { headers });
        const data = await response.json();

        if (data.success) {
          // Atur isLoading ke false setelah menerima data
          setTimeout(() => {
            this.merekOptions = data.data.merek;
            this.transmisiOptions = data.data.transmisi;
            this.bbmOptions = data.data.bbm;
            this.seatOptions = data.data.seat;
            this.jenisOptions = data.data.jenis;
            this.sortByOptions = data.data.sort_by;
            this.sortOrderOptions = data.data.sort_order;
            this.isLoading = false; // Setelah data diterima, isLoading disetel ke false
          }, 2000); // Timeout selama 2 detik
        } else {
          console.error("Gagal mengambil data dari API");
        }
      } catch (error) {
        console.error("Terjadi kesalahan dalam mengambil data:", error);
      }
    },

    // Fungsi Titik Pada Harga
    formatPrice(price) {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(price);
    },
    // Fungsi Mengambil ID detail
    handledetaillates(carslug) {
      this.slug = carslug;
      console.log("slugss", this.slug);
      // Simpan c.slug di local storage
      localStorage.setItem("slug", carslug);

      // Redirect ke halaman "detaillates" dengan slug dalam URL
      this.$router.push(`/detaillates/${carslug}`);
    },
  },

  components: {
    navigation,
    foote,
    vSelect,
  },
};
</script>

<style>
.vs--searchable .vs__dropdown-toggle {
  height: 50px;
}
.custom-dropdown .dropdown-menu {
  max-height: 60px; /* Sesuaikan tinggi maksimal yang Anda inginkan */
  overflow-y: auto;
}
.col-lg-4 .form-group .v-select .dropdown-toggle::after {
  transform: scaleY(0.5); /* Sesuaikan skala sesuai keinginan Anda */
}

.v-select-list {
  max-height: 200px; /* Set the maximum height for the dropdown */
  overflow-y: auto; /* Enable vertical scrolling */
}

.btn-detail {
  margin-top: 10px;
  font-size: 16px;
  width: 100%;
  height: auto;
  color: #207ace;
  padding: 7px 10px;
  transition: all 0.5s;
  text-transform: capitalize;
  position: relative;
  border-radius: 7px;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  text-align: center;
  overflow: hidden;
  z-index: 1;
  border: 2px solid #207ace; /* Menambahkan border dengan warna biru yang sama */
}
.btn-detail:hover {
  background-color: #207ace; /* Warna latar belakang berubah menjadi biru saat dihover */
  color: white; /* Warna teks berubah menjadi putih saat dihover */
}
.btn-find {
  font-size: 16px;
  color: var(--color-white);
  padding: 5px 5px;
  transition: all 0.5s;
  text-transform: capitalize;
  height: 49px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  border: none;
  background: var(--theme-color);
  box-shadow: var(--box-shadow);
  z-index: 1;
}
.btn-find:hover {
  background: #fbab44;
  color: black;
}
.title-brand {
  margin-bottom: 25px;
  padding-bottom: 10px;
  font-size: 20px;
  position: relative;
  color: FBAB44;
}
</style>
