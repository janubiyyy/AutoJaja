<template>
  <div class="home-3">
    <!-- header area -->
    <navigation />

    <main class="main">
      <div class="car-area list bg py-120 padding-atas">
        <div class="container">
          <div class="row">
            <div class="row">
              <div class="col-lg-8">
                <div class="car-widget">
                  <span
                    style="color: var(--color-blue-blue-06, #0F5392);

/* Body 1 */
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 10px;
letter-spacing: 0.4px;"
                    >Search Your Car</span
                  >
                  <div class="car-search-form mt-3">
                    <form action="#">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                          v-model="carModelSearch"
                          @input="filterKeyword"
                        />
                        <button type="search">
                          <i class="far fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="car-sort">
                  <div class="col-md-9 car-sort-box">
                    <span
                      style="color: var(--color-blue-blue-06, #0F5392);

/* Body 1 */
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.4px;"
                      >Sort By</span
                    >
                    <select style="width:100%;" class="nice-select mt-3">
                      <option value="1">Sort By Default</option>
                      <option value="5">Sort By Featured</option>
                      <option value="2">Sort By Latest</option>
                      <option value="3">Sort By Low Price</option>
                      <option value="4">Sort By High Price</option>
                    </select>
                  </div>
                  <div class="car-sort-list-grid button-list">
                    <router-link
                      :to="'/kategori'"
                      class="car-sort-list active mr-2"
                      style="color: #0c5eaa"
                      href="listing-grid.html"
                      ><i style="color: #0c5eaa" class="far fa-grid-2"></i
                    ></router-link>
                    <router-link
                      :to="'/list'"
                      class="car-sort-list active"
                      href="listing-list.html"
                      ><i style="color: #0c5eaa" class="far fa-list-ul"></i
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="car-sidebar" style="padding-top: 0%">
                <!-- Pencarian Bedasarkan Keyword -->

                <!-- Pencarian Berdasarkan Brand -->
                <div class="car-widget" style="background-color: #207ACE;">
                  <h4 class="car-widget-title" style="color: white;">
                    Brand Mobil
                  </h4>

                  <div>
                    <li>
                      <div
                        v-for="c in uniqueCarTypes"
                        :key="c"
                        class="form-check"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input mr-2"
                          :id="c"
                          :value="c"
                          v-model="selectedCarTypes"
                          @change="
                            updateCarModels;
                            filterCars;
                          "
                        />
                        <label :for="c" style="color: white;">{{ c }}</label>
                      </div>
                    </li>
                  </div>
                </div>
                <!-- Pencarian Berdasarkan Model -->
                <div class="car-widget" style="background-color: #FBAB44;">
                  <h4 class="title-brand" style="color: white;">
                    Model
                  </h4>
                  <div>
                    <li>
                      <div v-for="model in filteredCarModels" :key="model">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          style="margin-right: 10px; color: #fbab44;"
                          :id="model"
                          :value="model"
                          v-model="selectedCarModels"
                          @change="filterCars"
                        />
                        <label :for="model" style="color: white; ">
                          {{ model }}</label
                        >
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <!-- Tampilan skeleton card produk -->
              <div class="" v-if="isLoading">
                <v-skeleton-loader
                  boilerplate
                  class="mx-auto mt-5"
                  elevation="2"
                  max-width="850"
                  type="article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  boilerplate
                  class="mx-auto mt-5"
                  elevation="2"
                  max-width="850"
                  type="article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  boilerplate
                  class="mx-auto mt-5"
                  elevation="2"
                  max-width="850"
                  type="article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  boilerplate
                  class="mx-auto mt-5"
                  elevation="2"
                  max-width="850"
                  type="article"
                ></v-skeleton-loader>
              </div>
              <!-- Tampilan card produk jaja auto -->
              <div class="row" v-else>
                <div
                  v-for="c in paginatedCarItems"
                  :key="c.id"
                  class="col-md-6 col-lg-12"
                >
                  <div class="car-item">
                    <div class="car-img">
                      <!-- <span class="car-status status-1">Used</span> -->
                      <img
                        :src="c.images[0].imagePath"
                        style="width: 500px; height: 200px"
                        alt=""
                        @error="handleImageError"
                      />
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
                            >{{ c.model }}</a
                          >
                        </h4>
                      </div>
                      <div class="row">
                        <div class="col-lg-6">
                          <v-chip
                            class=""
                            closable
                            style="padding: 5px;margin-right: 10%;"
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
                        </div>
                        <div
                          class="col-lg-6"
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                          "
                        >
                          <div><li>12.000/Km</li></div>
                        </div>
                      </div>
                      <v-row no-gutters>
                        <v-col class="car-rate mt-3">
                          <div>
                            <i class="fas fa-star"></i>
                            <b> 4.5/5</b>
                          </div>
                        </v-col>
                        <v-col
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                          "
                        >
                          <div>
                            <v-chip-group>
                              <v-chip
                                style="  background-color: black;
    color: white;
    border: 1px solid grey;
    outline-offset: -2px;
    width: 30px; /* Mengatur diameter chip */
    height: 40px; /* Mengatur diameter chip */
    border-radius: 50%; /* Mengatur bentuk lingkaran */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  "
                              ></v-chip>
                              <v-chip
                                style="  background-color: white;
    color: white;
    border: 1px solid grey;
    outline-offset: -2px;
    width: 30px; /* Mengatur diameter chip */
    height: 40px; /* Mengatur diameter chip */
    border-radius: 50%; /* Mengatur bentuk lingkaran */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  "
                              ></v-chip>
                              <v-chip
                                style="  background-color: gray;
    color: white;
    border: 1px solid grey;
    outline: 2px solid gray;
    outline-offset: -2px;
    width: 30px; /* Mengatur diameter chip */
    height: 40px; /* Mengatur diameter chip */
    border-radius: 50%; /* Mengatur bentuk lingkaran */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  "
                              ></v-chip>
                            </v-chip-group>
                          </div>
                        </v-col>
                      </v-row>

                      <p>
                        {{ c.deskripsi }}
                      </p>
                      <div class="car-footer">
                        <span class="car-price"
                          >Rp.{{ formatPrice(c.price) }}</span
                        >
                        <button @click="handledetail(c.slug)" class="theme-btn">
                          <span class="far fa-eye"></span>Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Pagination -->
              <div class="pagination-area">
                <div aria-label="Page navigation example">
                  <ul class="pagination">
                    <li
                      class="page-item"
                      :class="{ disabled: currentPage === 1 }"
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
                      class="page-item"
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
                      :class="{ disabled: currentPage === totalPages }"
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
      </div>
    </main>
    <foote />
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
.custom-skeleton {
  width: 800px;
  height: 400px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .padding-atas {
    padding-top: 60%;
  }
  .button-list {
    margin-top: 0%;
    color: #0c5eaa;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .padding-atas {
    padding-top: 40%;
  }
  .button-list {
    margin-top: 0%;
    color: #0c5eaa;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .padding-atas {
    padding-top: 25%;
  }
  .button-list {
    margin-top: 0%;
    color: #0c5eaa;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .padding-atas {
    padding-top: 20%;
  }
  .button-list {
    margin-top: 10%;
    color: #0c5eaa;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .padding-atas {
    padding-top: 20%;
  }
  .button-list {
    margin-top: 10%;
    color: #0c5eaa;
  }
}
</style>
<script>
import navigation from "../components/backup";
import foote from "../components/Footer";
import axios from "axios";

export default {
  data() {
    return {
      carItems: [], // Daftar mobil dari response API
      filteredCarItems: [], // Daftar mobil yang sudah difilter
      uniqueCarTypes: [], // Fungsi Pencarian Berdasarkan Brand
      filteredCarModels: [], // Fungsi Pencarian Berdasarkan Model
      selectedCarTypes: [], // Opsi yang dipilih untuk Car Brand
      selectedCarModels: [], // Opsi yang dipilih untuk Car Models
      carModelSearch: "", // Pencarian berdasarkan model mobil
      isLoading: false, // Loading pada filter
      currentPage: 1, // Halaman saat ini
      perPage: 3, // Jumlah item per halaman
    };
  },
  computed: {
    // Fungsi Pegination
    paginatedCarItems() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredCarItems.slice(startIndex, endIndex);
    },
    // Total perhalaman
    totalPages() {
      return Math.ceil(this.filteredCarItems.length / this.perPage);
    },
  },
  mounted() {
    this.fetchCarItems();
  },
  methods: {
    // Fungsi Jika Image Error
    handleImageError(event) {
      event.target.src = require("../assets/img/kosong/1.png");
    },
    // Fungsi Fetch API
    fetchCarItems() {
      this.isLoading = true; // Set isLoading to true before making the request
      axios
        .get("https://api.jaja.id/produk/get", {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          const uniqueCarItems = this.removeDuplicateItems(response.data.data);
          this.carItems = uniqueCarItems;
          this.filteredCarItems = [...this.carItems];
          this.updateUniqueCarTypes(); // call the method to update uniqueCarTypes
        })
        .catch((error) => console.log(error))
        .finally(() => {
          this.isLoading = false; // Set isLoading to false when the request is complete
        });
    },
    // Fungsi Hapus Data Duplikat
    removeDuplicateItems(items) {
      const uniqueItems = [];
      const seen = new Set();

      for (let item of items) {
        const key = `${item.brand}_${item.model}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueItems.push(item);
        }
      }

      return uniqueItems;
    },
    // Fungsi Pencarian Berdasarkan Brand
    updateUniqueCarTypes() {
      this.uniqueCarTypes = Array.from(
        new Set(this.carItems.map((item) => item.brand))
      );
    },
    // Fungsi Pencarian Berdasarkan Model
    updateCarModels() {
      if (this.selectedCarTypes.length > 0) {
        // Filter models based on selected brands
        this.filteredCarModels = this.carItems
          .filter((car) => this.selectedCarTypes.includes(car.brand))
          .map((car) => car.model);
      } else {
        // If no brand is selected, reset the filteredCarModels to an empty array
        this.filteredCarModels = [];
      }
      this.selectedCarModels = []; // Reset selected models when the brand is changed
      this.filterCars(); // Perform filtering when the brand is changed
    },
    // Fungsi Pencarian Bedasarkan Keyword
    filterKeyword() {
      const keyword = this.carModelSearch.toLowerCase();
      this.filteredCarItems = this.carItems.filter((car) => {
        const modelContainsKeyword = car.model.toLowerCase().includes(keyword);
        const brandContainsKeyword = car.brand.toLowerCase().includes(keyword);
        return modelContainsKeyword || brandContainsKeyword;
      });
      this.currentPage = 1;
    },
    // Fungsi Pencarian Berdasarkan Brand dan Model
    filterCars() {
      this.filteredCarItems = this.carItems.filter((car) => {
        const brandMatch =
          this.selectedCarTypes.length === 0 ||
          this.selectedCarTypes.includes(car.brand);
        const modelMatch =
          this.selectedCarModels.length === 0 ||
          this.selectedCarModels.includes(car.model);
        const searchMatch =
          car.model.toLowerCase().includes(this.carModelSearch.toLowerCase()) ||
          car.brand.toLowerCase().includes(this.carModelSearch.toLowerCase());
        return brandMatch && modelMatch && searchMatch;
      });
      this.currentPage = 1; // Reset the current page to 1 when the filtering is performed
    },
    // Fungsi Format . pada harga
    formatPrice(price) {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(price);
    },
    // Fungsi Mengambil ID pada detail
    handledetail(carsid) {
      this.idcar = carsid;
      console.log("idcars", this.idcar);
      localStorage.setItem("idcar", this.idcar);
      this.$router.push("/detail");
    },
    // Fungsi pada pagination prev page
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // Fungsi pada pagination next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // Fungsi pada pagination change page
    changePage(page) {
      this.currentPage = page;
    },
  },

  // Fungsi untuk merespons perubahan pengguna dengan memperbarui tampilan berdasarkan pilihan Car Brand dan Car Models
  watch: {
    selectedCarTypes() {
      this.updateCarModels();
    },
    currentPage() {
      this.paginate();
    },
  },
  components: {
    navigation,
    foote,
  },
};
</script>
