<template>
  <div class="home-3">
    <!-- Tampilan Navbar -->
    <navigation />
    <main class="main">
      <!-- Tampilan Banner -->
      <div class="banner" style="margin-top: 17%">
        <v-carousel
          hide-delimiters
          :cycle="true"
          :interval="5000"
          :items-per-page="2"
          :hide-controls="true"
          :height="calculateHeight"
          style="margin-top: 190px"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-img :src="slide.src" :alt="slide.alt" max-width="100%"></v-img>
          </v-carousel-item>
        </v-carousel>
      </div>
      <!-- style="box-shadow: 100%; transform: translateY(-55px); z-index: 100 !important;" -->
      <!-- Tampilan Pencarian -->
      <div class="background">
        <div class="container">
          <div class="find-car-form" style="box-shadow: 100%;">
            <h4 class="find-car-title" style="color: #207ACE; !important">
              Let's Find Your Perfect Car
            </h4>
            <form action="#">
              <div>
                <div class="row">
                  <div class="col-4">
                    <!-- Merek Select -->
                    <v-select
                      v-model="selectedMerek"
                      :options="merekOptions"
                      label="label"
                      value="value"
                      placeholder="Pilih Merek"
                    ></v-select>
                  </div>

                  <div class="col-4">
                    <!-- Transmisi Select -->
                    <v-select
                      v-model="selectedTransmisi"
                      :options="transmisiOptions"
                      label="label"
                      value="value"
                      placeholder="Pilih Transmisi"
                    ></v-select>
                  </div>

                  <div class="col-4">
                    <!-- BBM Select -->
                    <v-select
                      v-model="selectedBbm"
                      :options="bbmOptions"
                      label="label"
                      value="value"
                      placeholder="Pilih BBM"
                    ></v-select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-3">
                    <!-- Seat Select -->
                    <v-select
                      v-model="selectedSeat"
                      :options="seatOptions"
                      label="label"
                      value="value"
                      placeholder="Pilih Kapasitas"
                    ></v-select>
                  </div>
                  <div class="col-3">
                    <!-- Listrik Select -->
                    <v-select
                      v-model="selectedListrik"
                      :options="listrikOptions"
                      label="label"
                      value="value"
                      placeholder="Pilih Jenis Listrik"
                    ></v-select>
                  </div>
                  <div class="col-3">
                    <!-- Sort By Select -->
                    <v-select
                      v-model="selectedSortBy"
                      :options="sortByOptions"
                      label="label"
                      value="value"
                      placeholder="Pilih Urutan"
                    ></v-select>
                  </div>
                  <div class="col-3">
                    <!-- Sort Order Select -->
                    <v-select
                      v-model="selectedSortOrder"
                      :options="sortOrderOptions"
                      label="label"
                      value="value"
                      placeholder="Pilih Urutan"
                    ></v-select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <button
                      @click="searchCars"
                      type="button"
                      style="
    font-size: 16px;
    color: var(--color-white);
    padding: 5px 5px;
    transition: all 0.5s;
    text-transform: capitalize;
    height: 35px;
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
  "
                    >
                      <span class="far fa-search"></span> Find Car
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Tampilan Card Produk Jaja Auto Latest Listing -->
      <div>
        <div class="car-area bg py-60">
          <div class="container">
            <div class="d-flex justify-content-center mt-5">
              <h2 class="site-title">Latest <span>Listing</span></h2>
            </div>
            <br />
            <!-- Tampilan Produk Latest Listing -->
            <div class="container" v-if="searchResults.length > 0">
              <div class="test">
                <v-slide-group
                  mobile-break-point="1000"
                  show-arrows
                  center-active
                >
                  <template v-slot:next>
                    <v-icon color="orange" large>mdi-chevron-right</v-icon>
                  </template>
                  <template v-slot:prev>
                    <v-icon color="orange" large>mdi-chevron-left</v-icon>
                  </template>
                  <v-slide-item
                    v-for="car in searchResults"
                    :key="car.id"
                    class="mr-5"
                  >
                    <div
                      class="wow fadeInUp car-item"
                      data-wow-delay=".25s"
                      style="box-shadow: 20px; background: white; border-radius: 10px; padding: 10px;  width: 270px; height: auto; margin-bottom: 25px; box-shadow: var(--box-shadow); transition: var(--transition);"
                    >
                      <div class="car-img">
                        <!-- <span class="car-status status-1">Used</span> -->
                        <!-- <img
                          :src="c.images[0].imagePath"
                          style="width: 300px; height: 150px"
                          alt=""
                          onerror="this.src='https://jsonx.jaja.id/asset/home/logo/jaja-logo.png'"
                        /> -->
                        <center>
                          <img :src="car.imagePath" class="img-card" alt="" />
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
                              style="color: black; display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%;"
                              href="#"
                              >{{ car.brand }}</a
                            >
                          </h4>
                          <span style="color: #207ACE" class="car-price"
                            >Rp.{{ formatPrice(car.rangeHarga) }}</span
                          >
                        </div>

                        <v-row no-gutters>
                          <v-col>
                            <v-chip
                              class="mt-2"
                              closable
                              style="padding: 5px;"
                              color="#207ace"
                              text-color="#207ACE"
                              label
                            >
                              <router-link :to="'/'">
                                <img
                                  src="../assets/img/foot/jajaauto.png"
                                  style="width: 70px;"
                                  alt=""/></router-link
                            ></v-chip>
                          </v-col>
                          <v-col
                            style="display: flex; align-items: center; justify-content: flex-end;"
                          >
                            <div><li>10.000 - 50.000/Km</li></div>
                          </v-col>
                        </v-row>

                        <button
                          @click="handledetail(car.slug)"
                          class="btn-detail"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </v-slide-item>
                </v-slide-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- scroll-top -->
    <a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>
    <!-- Tampilan Footer -->
    <foote />
  </div>
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
      selectedMerek: "",
      selectedTransmisi: "",
      selectedBbm: "",
      selectedSeat: "",
      selectedListrik: "",
      selectedSortBy: "",
      selectedSortOrder: "",
      merekOptions: [],
      transmisiOptions: [],
      bbmOptions: [],
      seatOptions: [],
      listrikOptions: [],
      sortByOptions: [],
      sortOrderOptions: [],

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
    this.fetchSearchOptions();
  },
  computed: {
    // Fungsi Ukuran Banner
    calculateHeight() {
      return `${(9 / 27) * this.$vuetify.breakpoint.width}px`;
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
    async searchCars() {
      // Inisialisasi parameter yang akan dikirim ke API
      const params = {
        merek: this.selectedMerek ? this.selectedMerek.value : "", // Jika tidak ada merek terpilih, gunakan string kosong
        transmisi: this.selectedTransmisi ? this.selectedTransmisi.value : "",
        bbm: this.selectedBbm ? this.selectedBbm.value : "",
        seat: this.selectedSeat ? this.selectedSeat.value : "",
        listrik: this.selectedListrik ? this.selectedListrik.value : "",
        sort_by: this.selectedSortBy ? this.selectedSortBy.value : "",
        sort_order: this.selectedSortOrder ? this.selectedSortOrder.value : "",
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
          this.merekOptions = data.data.merek;
          this.transmisiOptions = data.data.transmisi;
          this.bbmOptions = data.data.bbm;
          this.seatOptions = data.data.seat;
          this.listrikOptions = data.data.listrik;
          this.sortByOptions = data.data.sort_by;
          this.sortOrderOptions = data.data.sort_order;
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
    handledetail(carsid) {
      this.idcar = carsid;
      console.log("idcars", this.idcar);
      localStorage.setItem("idcar", this.idcar);
      this.$router.push("/detail");
    },
  },

  components: {
    navigation,
    foote,
    vSelect,
  },
};
</script>

<style scoped>
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

/* Style for "no options" message */
.no-options {
  padding: 8px;
}
.custom-select {
  height: 200px !important;
  max-height: none !important;
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
.custom-chip {
  background-color: white;
  color: black;
  border: 1px solid grey;
  outline: 2px solid grey; /* Menambahkan outline dengan ketebalan 2px */
  outline-offset: -2px; /* Menyesuaikan offset outline agar tidak mengubah ukuran chip */
}

.custom-group {
  border: 1px solid grey;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 4px;
  border-radius: 4px;
}
.mySlider {
  display: none;
}
.flickity-page-dots {
  display: none !important;
}
.carousel-cell {
  width: 200px;
  height: auto;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #ccc;
}
.background {
  /* width: 100%;
    height: 300px; */
  background-image: url("../assets/img/homepage/3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }

        30% {
          transform: translateX(-5px);
        }

        50% {
          transform: translateX(5px);
        }

        70% {
          transform: translateX(-2px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style scoped>
input::placeholder {
  color: #878787; /* Change this to the desired color */
}

@media (max-width: 600px) {
  .banner {
    width: 100%;
    height: auto;
    margin-top: 40%;
  }
  .img-card {
    width: 150px;
    height: 100px;
  }
  .color-black {
    background-color: black;
    color: white;
    border: 1px solid grey;
    outline: 2px solid black;
    outline-offset: -2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .color-white {
    background-color: white;
    color: white;
    border: 1px solid grey;
    outline: 2px solid black;
    outline-offset: -2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .color-gray {
    background-color: gray;
    color: white;
    border: 1px solid grey;
    outline: 2px solid gray;
    outline-offset: -2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .banner {
    width: 100%;
    height: auto;
  }
  .img-card {
    width: 200px;
    height: 120px;
  }
}

@media (min-width: 961px) {
  .banner {
    width: 100%;
    height: auto;
  }
  .img-card {
    width: 200px;
    height: 140px;
  }
}

@media only screen and (max-width: 600px) {
  .banner {
    width: 100%;
    height: auto;
    margin-top: 40%;
  }

  .img-card {
    width: 150px;
    height: 100px;
  }
}

@media only screen and (max-width: 768px) {
  .banner {
    width: 100%;
    height: auto;
    margin-top: 15%;
  }
  .img-card {
    width: 180px;
    height: 120px;
  }
}
section {
  position: relative;
}
#hero {
  z-index: 1;
}
</style>

<style scoped>
@import "../assets/css/all-fontawesome.min.css";
@import "../assets/css/animate.min.css";
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/flaticon.css";
@import "../assets/css/flex-slider.min.css";
@import "../assets/css/jquery-ui.min.css";
@import "../assets/css/magnific-popup.min.css";
@import "../assets/css/nice-select.min.css";
@import "../assets/css/owl.carousel.min.css";
@import "../assets/css/style.css";
</style>
