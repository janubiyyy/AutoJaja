<template>
  <section>
    <div>
      <navigation :color="color" :flat="flat" />
      <main class="main">
        <div class="car-area grid bg py-120">
          <div class="container">
            <div class="row" style="padding-top: 6%">
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
                      <select style="width: 100%;" class="nice-select mt-3">
                        <option value="1">Sort By Default</option>
                        <option value="5">Sort By Featured</option>
                        <option value="2">Sort By Latest</option>
                        <option value="3">Sort By Low Price</option>
                        <option value="4">Sort By High Price</option>
                      </select>
                    </div>
                    <div
                      class="car-sort-list-grid"
                      style="color: #0c5eaa; margin-top: 10%;"
                    >
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
                <!-- Skeleton Card Produk -->
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
                <div class="row" v-else>
                  <div
                    v-for="c in paginatedCarItems"
                    :key="c.id"
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
                            :src="c.images[0].imagePath"
                            style="width: 200px; height: 140px"
                            alt=""
                            @error="handleImageError"
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
                              >{{ c.model }}</a
                            >
                          </h4>
                          <span style="color: #207ACE" class="car-price"
                            >Rp {{ formatPrice(c.price) }}</span
                          >
                        </div>

                        <v-row no-gutters>
                          <v-col>
                            <v-chip
                              class="mt-2"
                              closable
                              style="padding: 5px;"
                              color="#FBAB44"
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
                            <div><li></li></div>
                          </v-col>
                        </v-row>

                        <button
                          @click="handledetaillates(c.slug)"
                          class="btn-detail"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Pagination-->
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
                        <a
                          class="page-link"
                          href="#"
                          @click="changePage(page)"
                          >{{ page }}</a
                        >
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
    </div>
    <foote />
  </section>
</template>
<style>
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
.title-brand {
  margin-bottom: 25px;
  padding-bottom: 10px;
  font-size: 20px;
  position: relative;
  color: FBAB44;
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
      perPage: 6, // Jumlah item per halaman
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
    resetPage() {
      location.reload(); // Memperbarui (refresh) halaman
    },
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
    handledetaillates(carslug) {
      this.slug = carslug;
      console.log("slugss", this.slug);
      // Simpan c.slug di local storage
      localStorage.setItem("slug", carslug);

      // Redirect ke halaman "detaillates" dengan slug dalam URL
      this.$router.push(`/detaillates/${carslug}`);
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
