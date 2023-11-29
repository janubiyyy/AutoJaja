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
          <div class="find-car-form" style="box-shadow: 100%">
            <h4 class="find-car-title" style="color: #207ACE; !important">
              Cari Mobil Impian Anda
            </h4>
            <form action="#">
              <div>
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
                      <!-- Update the button click event to call the renamed method -->
                      <form action="#">
                        <div class="form-group">
                          <input
                            v-model="searchTerm"
                            type="text"
                            class="form-control"
                            placeholder="Search"
                          />
                          <!-- Only update the click event for the button -->
                          <button type="button" @click="performSearch">
                            <i class="far fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-3 col-12">
                    <!-- Merek Select -->
                    <div class="form-group">
                      <label>Merk</label>
                      <v-select
                        v-model="selectedMerek"
                        :options="merekOptions"
                        label="label"
                        value="value"
                        placeholder="Pilih Merk"
                        multiple
                      ></v-select>
                    </div>
                  </div>

                  <div class="col-md-3 col-12">
                    <div class="form-group">
                      <label>Transmisi</label>
                      <!-- Transmisi Select -->
                      <v-select
                        v-model="selectedTransmisi"
                        :options="transmisiOptions"
                        label="label"
                        value="value"
                        placeholder="Pilih Transmisi"
                        multiple
                      ></v-select>
                    </div>
                  </div>

                  <div class="col-md-3 col-12">
                    <div class="form-group">
                      <label style="color: white">Transmisi</label>
                      <button
                        @click="searchCars"
                        type="button"
                        class="btn-find"
                      >
                        <span class="far fa-search"></span> Cari Mobil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div class="car-area bg py-60">
          <div class="container">
            <div class="d-flex justify-content-center mt-5">
              <h2 class="site-title">Merk <span>Mobil</span></h2>
            </div>
            <br />
            <!-- Tampilan Skeleton Latest Listing -->
            <div class="container" v-if="isLoading || carBrands.length === 0">
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
                  v-for="brand in carBrands.slice(0, limit)"
                  :key="brand.id_merek"
                  class="mr-5"
                >
                </v-slide-item>
                <v-skeleton-loader
                  class="mx-auto borde mr-4"
                  width="230px"
                  type="image, article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  class="mx-auto border mr-4"
                  width="230px"
                  type="image, article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  class="mx-auto border mr-4"
                  width="230px"
                  type="image, article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  class="mx-auto border mr-4"
                  width="230px"
                  type="image, article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  class="mx-auto border mr-4"
                  width="230px"
                  type="image, article"
                ></v-skeleton-loader>
              </v-slide-group>
            </div>
            <!-- Tampilan Produk Latest Listing -->
            <div class="container" v-else>
              <div class="test">
                <v-slide-group
                  mobile-break-point="1000"
                  show-arrows
                  center-active
                >
                  <!-- Loop through car brand data and display in slide items -->
                  <v-slide-item
                    v-for="brand in carBrands.slice(0, limit)"
                    :key="brand.id_merek"
                    class="mr-5 category-item wow fadeInUp"
                    style="max-width: 170px"
                  >
                    <!-- Tampilan data mobil -->
                    <div
                      @click="selectBrand(brand)"
                      data-wow-delay=".25s"
                      style="
                        box-shadow: 20px;
                        background: white;
                        border-radius: 10px;
                        padding: 10px;
                        width: 270px;
                        cursor: pointer;
                        height: auto;
                        margin-bottom: 25px;
                        margin-top: 25px;
                        box-shadow: -1px 0 5px 0 rgb(0, 0, 0, 0.15);
                        transition: var(--transition);
                      "
                    >
                      <div class="car-img">
                        <center>
                          <img
                            @click="selectBrand(brand)"
                            :src="brand.logo"
                            style="
                              max-width: 100px;
                              max-height: 70px;
                              padding-top: 35px;
                              object-fit: cover;
                              justify-content: center;
                              align-items: center;
                              border-radius: 0;
                            "
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
                          <!-- <h4 style="text-align: center">
                            <a
                              style="
                                color: black;
                                display: inline-block;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                max-width: 100%;
                              "
                              href="#"
                              @click="selectBrand(brand)"
                              >{{ brand.nama_merek }}</a
                            >
                          </h4> -->
                        </div>
                      </div>
                    </div>
                  </v-slide-item>
                </v-slide-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tampilan Card Produk Jaja Auto Latest Listing -->
      <div>
        <div class="car-area bg py-60">
          <div class="container">
            <div class="d-flex justify-content-center mt-5">
              <h2 class="site-title">Mobil <span>Terbaru</span></h2>
            </div>
            <br />
            <!-- Tampilan Skeleton Latest Listing -->
            <div class="container" v-if="isLoading">
              <v-slide-group
                mobile-break-point="1000"
                show-arrows
                center-active
              >
                <!-- ... -->
                <!-- Pastikan jumlah v-skeleton-loader sesuai dengan limit -->
                <v-skeleton-loader
                  v-for="i in limit"
                  :key="i"
                  class="mx-auto border mr-4"
                  width="230px"
                  type="image, article"
                ></v-skeleton-loader>
              </v-slide-group>
            </div>

            <!-- Tampilan Produk Latest Listing -->
            <div class="container" v-else>
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
                    v-for="c in filteredCarData.slice(0, limit)"
                    :key="c.id"
                    class="mr-5"
                  >
                    <!-- Tampilan data mobil -->
                    <div
                      class="wow fadeInUp car-item"
                      data-wow-delay=".25s"
                      style="
                        box-shadow: 20px;
                        background: white;
                        border-radius: 10px;
                        padding: 10px;
                        width: 270px;
                        height: auto;
                        margin-top: 25px;
                        margin-bottom: 25px;
                        box-shadow: -1px 0 5px 0 rgb(0, 0, 0, 0.15);
                        transition: var(--transition);
                      "
                    >
                      <div class="car-img">
                        <center>
                          <img
                            :src="c.imagePath"
                            class="img-card"
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
                                max-width: 100%;
                              "
                              href="#"
                              >{{ c.name }}</a
                            >
                          </h4>
                          <span style="color: #207ace" class="car-price"
                            >Rp {{ formatPrice(c.rangeHarga) }}</span
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
                                  src="https://auto.jaja.id/img/jajaauto.2391e51f.png"
                                  style="width: 70px"
                                  alt="" /></router-link
                            ></v-chip>
                          </v-col>
                          <v-col
                            style="
                              display: flex;
                              align-items: center;
                              justify-content: flex-end;
                            "
                          >
                            <div>
                              <li></li>
                            </div>
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
                  </v-slide-item>
                </v-slide-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tampilan Kategori  -->
      <div>
        <div class="car-category py-100" style="background-color: #f9f9f9">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mx-auto">
                <div class="site-heading text-center mt-5">
                  <h2 class="site-title">Jenis <span>Mobil</span></h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-6 col-md-4 col-lg-2"
                v-for="type in carJenis.slice(0, limit)"
                :key="type.jenis_id"
              >
                <a
                  href="#"
                  class="category-item wow fadeInUp"
                  style="
                    padding: 0;
                    box-shadow: -1px 0 5px 0 rgb(0, 0, 0, 0.15);
                  "
                  data-wow-delay=".25s"
                  @click.prevent="selectType(type)"
                >
                  <div>
                    <img style="border-radius: 10px" :src="type.image" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tampilan Total -->
      <div class="counter-area pt-30 pb-30 mt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <i class="flaticon-car-rental"></i>
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="30"
                    data-speed="3000"
                    >{{ totalLatestCars }}</span
                  >
                  <h6 class="title">Mobil Terbaru</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <i class="flaticon-review"></i>
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="30"
                    data-speed="3000"
                    >{{ totalPopularCars }}</span
                  >
                  <h6 class="title">Mobil Popular</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <i class="flaticon-screwdriver"></i>
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="1500"
                    data-speed="3000"
                    >{{ totalCarJenis }}</span
                  >
                  <h6 class="title">Jenis Mobil</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="counter-box">
                <div class="icon">
                  <i class="flaticon-car-key"></i>
                </div>
                <div>
                  <span
                    class="counter"
                    data-count="+"
                    data-to="30"
                    data-speed="3000"
                    >{{ totalCarBrands }}</span
                  >
                  <h6 class="title">Merk Mobil</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tampilan Card Produk Jaja Auto Popular Listing -->
      <div
        style="padding-top: 2%; background-color: #f9f9f9"
        ref="resultsContainer"
      >
        <div class="car-area bg py-60">
          <div class="container">
            <div class="d-flex justify-content-center mt-5">
              <h2 class="site-title">Mobil <span>Populer</span></h2>
            </div>
            <br />
            <!-- Tampilan Skeleton Popular Listing  -->
            <div class="container" v-if="isLoading">
              <v-slide-group
                mobile-break-point="1000"
                show-arrows
                center-active
              >
                <!-- ... -->
                <v-skeleton-loader
                  v-for="i in limit"
                  :key="i"
                  class="mx-auto border mr-4"
                  width="230px"
                  type="image, article"
                ></v-skeleton-loader>
              </v-slide-group>
            </div>
            <!-- Tampilan Produk opular Listing -->
            <div class="container" v-else>
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
                    v-for="c in filteredCarPopular.slice(0, limit)"
                    :key="c.id"
                    class="mr-5"
                  >
                    <!-- Tampilan data mobil -->
                    <div
                      class="wow fadeInUp car-item"
                      data-wow-delay=".25s"
                      style="
                        box-shadow: 20px;
                        background: white;
                        border-radius: 10px;
                        padding: 10px;
                        width: 270px;
                        height: auto;
                        margin-bottom: 25px;
                        margin-top: 25px;
                        box-shadow: -1px 0 5px 0 rgb(0, 0, 0, 0.15);
                        transition: var(--transition);
                      "
                    >
                      <div class="car-img">
                        <center>
                          <img
                            :src="c.imagePath"
                            class="img-card"
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
                                max-width: 100%;
                              "
                              href="#"
                              >{{ c.name }}</a
                            >
                          </h4>
                          <span style="color: #207ace" class="car-price"
                            >Rp {{ formatPrice(c.rangeHarga) }}</span
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
                                  src="https://auto.jaja.id/img/jajaauto.2391e51f.png"
                                  style="width: 70px"
                                  alt="" /></router-link
                            ></v-chip>
                          </v-col>
                          <v-col
                            style="
                              display: flex;
                              align-items: center;
                              justify-content: flex-end;
                            "
                          >
                            <div>
                              <li></li>
                            </div>
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
                  </v-slide-item>
                </v-slide-group>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="about-area pb-120">
          <section>
            <div style="position: relative">
              <img
                src="../assets/img/faq/1.png"
                style="width: 100%; height: 300px"
                alt=""
              />

              <div
                style="
                  display: inline-flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 10px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  text-align: center;
                  padding-top: 100px;
                "
              >
                <span
                  style="
                    color: var(--color-neutral-neutral-00, #fff);

                    /* Headline */
                    font-family: Inter;
                    font-size: 48px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                  "
                >
                  FAQ</span
                >
                <div
                  style="
                    color: var(--color-neutral-neutral-00, #fff);
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                  "
                >
                  Frequently
                  <span
                    style="
                      color: var(--color-neutral-neutral-00, #fff);
                      font-size: 40px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                    "
                    >Asked Question</span
                  >
                </div>
              </div>
            </div>
          </section>

          <div class="container">
            <div v-for="(item, index) in items" :key="index">
              <div
                class="row justify-content-between accordion-header mt-5"
                @click="toggleAccordion(index)"
              >
                <div class="col-10">
                  {{ item.title }}
                </div>
                <div class="col-2 d-flex justify-content-end">
                  <span
                    class="arrow"
                    :class="{ 'arrow-up': item.open, 'arrow-down': !item.open }"
                  >
                    <svg
                      v-if="item.open"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="14"
                      viewBox="0 0 24 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.439336 13.5537C1.02513 14.1488 1.97487 14.1488 2.56067 13.5537L12 3.96447L21.4394 13.5537C22.0251 14.1488 22.9749 14.1488 23.5607 13.5537C24.1464 12.9586 24.1464 11.9938 23.5607 11.3987L13.0607 0.732001C12.4749 0.136952 11.5251 0.136952 10.9394 0.732001L0.439336 11.3987C-0.146445 11.9938 -0.146445 12.9586 0.439336 13.5537Z"
                        fill="#0F5392"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="14"
                      viewBox="0 0 24 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.439336 0.731954C1.02513 0.136875 1.97487 0.136875 2.56067 0.731954L12 10.3212L21.4394 0.731954C22.0251 0.136875 22.9749 0.136875 23.5607 0.731954C24.1464 1.32705 24.1464 2.29187 23.5607 2.88696L13.0607 13.5536C12.4749 14.1487 11.5251 14.1487 10.9394 13.5536L0.439336 2.88696C-0.146445 2.29187 -0.146445 1.32705 0.439336 0.731954Z"
                        fill="#0F5392"
                      />
                    </svg>
                  </span>
                </div>

                <div class="accordion-content" v-if="item.open">
                  <div class="mt-3"></div>
                  <div
                    style="width: 100%; height: 2px; background: #fbab44"
                  ></div>
                  {{ item.content }}
                </div>
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
import VueFaqAccordion from "vue-faq-accordion";
import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css"; // Import the CSS file for vue-select

export default {
  data() {
    return {
      carPopular: [],
      carData: [],
      carBrands: [],
      carJenis: [],
      limit: 10,
      searchTerm: "",
      selectedMerek: "",
      selectedTransmisi: "",
      selectedBbm: "",
      selectedSeat: "",
      // selectedListrik: "",
      selectedJenis: "",
      selectedSortBy: "",
      selectedSortOrder: "",
      merekOptions: [],
      transmisiOptions: [],
      bbmOptions: [],
      seatOptions: [],
      // listrikOptions: [],
      jenisOptions: [],
      sortByOptions: [],
      sortOrderOptions: [],

      searchResults: [], // Store search results
      carItems: [], // Daftar mobil dari response API
      filteredCarItems: [], // Daftar mobil yang sudah difilter
      uniqueCarTypes: [], // Fungsi Pencarian Berdasarkan Brand
      filteredCarModels: [], // Fungsi Pencarian Berdasarkan Model
      selectedCarType: "", // Opsi yang dipilih untuk Car Brand
      selectedCarModel: "", // Opsi yang dipilih untuk Car Models
      selectedPriceRange: "", // Opsi yang dipilih untuk Price Range
      isLoading: false, // Loading pada filter
      slides: [
        { src: require("../assets/img/homepage/bj1.jpg") },
        { src: "https://auto.jaja.id/img/bj2.fb94b8ca.jpg" },
        // { src: require("../assets/img/homepage/b3.png") },
      ], //Gambar pada banner
      idcar: "", // ID detail produk
      slug: "",
      carModelSearch: "",
      items: [
        {
          title: "Apa itu Jaja Auto?",
          content:
            "Jaja Auto merupakan layanan berlangganan mobil pertama di Indonesia dengan fasilitas Full Service yang memberikan solusi bebas ribet dalam berkendara baik untuk kebutuhan pribadi maupun perusahaan.",
          open: false,
        },
        {
          title: "Apa Keuntungan Memakai Jaja Auto?",
          content:
            "Solusi All-in-One, Customer akan mendapatkan fasilitas Full Service (Service berkala, Perpanjang STNK, Asuransi, Pergantian aki dan Ban) selama masa berlangganan. Customer memiliki pilihan untuk mengganti mobil dengan versi / model baru saat masa berlangganan habis",
          open: false,
        },
        {
          title: "Apakah Layanan Jaja Auto Tersedia di Indonesia?",
          content:
            "Layanan Kinto untuk saat ini baru tersedia pada wilayah Jabodetabek, Bandung, Surabaya dan akan berkembang ke kota-kota lain nantinya.",
          open: false,
        },
        {
          title: "Apa Model Dan Warna Yang Bisa Dipilih Untuk Mobil Jaja Auto?",
          content:
            "Customer dapat bebas memilih model maupun warna dari kendaraannya sesuai yang tersedia di website Jaja Auto.",
          open: false,
        },
        {
          title:
            "Apakah Mobil Jaja Auto Dapat Dimodifikasi Sesuai Kemauan Customer?",
          content:
            "Customer dapat menghubungi Hotline Kinto untuk informasi lebih lanjut mengenai modifikasi mobil tersebut.",
          open: false,
        },
      ],
    };
  },
  created() {
    this.fetchCarBrands();
    this.fetchCarJenis();
    this.fetchSearchOptions();
  },
  computed: {
    filteredCarData() {
      return this.carData.filter((car) =>
        car.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    filteredCarPopular() {
      return this.carPopular.filter((car) =>
        car.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    filteredCarTypes() {
      // Return filtered car types based on the search input
      const searchTerm = this.selectedCarType.toLowerCase();
      return this.uniqueCarTypes.filter((c) =>
        c.toLowerCase().includes(searchTerm)
      );
    },
    uniqueCarTypes() {
      return Array.from(new Set(this.carItems.map((item) => item.brand)));
    },
    filteredCarModels() {
      if (!this.selectedCarType) return [];
      return this.carItems
        .filter((car) => car.brand === this.selectedCarType)
        .map((car) => car.model);
    },
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
    this.fetchPopularCars();
    this.fetchLatestCars();
    // this.fetchCarItems(); //Fungsi Produk
    this.handledetail(slug); //Fungsi Memanggil ID detail produk

    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener("input", this.filterCars); //Fungsi Pencarian berdasarkan keyword
  },
  methods: {
    performSearch() {
      this.isLoading = true;

      // Fetch data based on the search term for both carData and carPopular
      this.fetchLatestCars(this.searchTerm);
      this.fetchPopularCars(this.searchTerm);
    },
    fetchLatestCars(searchTerm = "") {
      axios
        .get("https://api.jaja.id/jauto/produk/get_latest", {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          this.carData = response.data.data; // Save car data from API response
          this.totalLatestCars = this.carPopular.length; // Calculate total popular cars
          this.isLoading = false; // Set isLoading to false when data is loaded
        })
        .catch((error) => {
          console.error("Failed to fetch latest cars data:", error);
          this.isLoading = false; // Set isLoading to false in case of an error
        });
    },
    fetchPopularCars(searchTerm = "") {
      this.isLoading = true; // Set isLoading to true before fetching data
      axios
        .get("https://api.jaja.id/jauto/produk/get_popular", {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          this.carPopular = response.data.data; // Save car data from API response
          this.totalPopularCars = this.carPopular.length; // Calculate total popular cars
          this.isLoading = false; // Set isLoading to false after data is loaded
        })
        .catch((error) => {
          console.error("Failed to fetch popular cars data:", error);
          this.isLoading = false; // Set isLoading to false in case of an error
        });
    },

    selectBrand(brand) {
      this.selectedMerek = [
        { value: brand.nama_merek, label: brand.nama_merek },
      ];
      this.searchCars();
    },
    selectType(type) {
      this.selectedJenis = [{ value: type.jenis_name, label: type.jenis_name }];
      this.searchCarsAndUpdateURL();
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
        // jenis_name: this.selectedJenis ? this.selectedJenis[0].value : "",
      };

      this.$router.replace({
        path: "/search",
        query: params,
      });

      await this.searchCars();
    },
    async fetchCarJenis() {
      try {
        const response = await axios.get(
          "https://api.jaja.id/jauto/produk/get_jenis",
          {
            headers: {
              Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
            },
          }
        );

        // Assuming the response structure matches the provided result
        this.carJenis = response.data.data;
        this.totalCarJenis = this.carJenis.length; // Calculate total car jenis
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching car jenis:", error);
        // Handle error appropriately
      }
    },
    async fetchCarBrands() {
      try {
        const response = await axios.get(
          "https://api.jaja.id/jauto/produk/get_merek",
          {
            headers: {
              Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
            },
          }
        );

        // Assuming the response structure matches the provided result
        this.carBrands = response.data.data;
        this.totalCarBrands = this.carBrands.length; // Calculate total car brands
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching car brands:", error);
        // Handle error appropriately
      }
    },
    toggleAccordion(index) {
      this.items[index].open = !this.items[index].open;
    },
    filterCars() {
      const searchTerm = this.carModelSearch.toLowerCase();
      this.items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(searchTerm) ||
          item.content.toLowerCase().includes(searchTerm)
        ) {
          item.open = true; // Tampilkan item jika cocok dengan pencarian
        } else {
          item.open = false; // Sembunyikan item jika tidak cocok dengan pencarian
        }
      });
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
        bbm: this.selectedBbm ? this.selectedBbm.value : "",
        seat: this.selectedSeat ? this.selectedSeat.value : "",
        // listrik: this.selectedListrik ? this.selectedListrik.value : "",
        sort_by: this.selectedSortBy ? this.selectedSortBy.value : "",
        sort_order: this.selectedSortOrder ? this.selectedSortOrder.value : "",
        jenis_name: this.selectedJenis ? this.selectedJenis[0].value : "", // Add this line
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
          this.merekOptions = data.data.merek;
          this.transmisiOptions = data.data.transmisi;
          this.bbmOptions = data.data.bbm;
          this.seatOptions = data.data.seat;
          // this.listrikOptions = data.data.listrik;
          this.jenisOptions = data.data.jenis;
          this.sortByOptions = data.data.sort_by;
          this.sortOrderOptions = data.data.sort_order;
        } else {
          console.error("Gagal mengambil data dari API");
        }
      } catch (error) {
        console.error("Terjadi kesalahan dalam mengambil data:", error);
      }
    },
    onDropdownOpen() {
      this.$nextTick(() => {
        const dropdown = document.querySelector(".v-select .vue-dropdown");
        if (dropdown) {
          dropdown.style.maxHeight = "200px"; // Set the maximum height of the dropdown
          dropdown.style.overflowY = "auto"; // Add scrollbar if options overflow
        }
      });
    },
    onDropdownOpenModel() {
      this.$nextTick(() => {
        const dropdown = document.querySelector(
          ".v-select .vue-dropdown .dropdown-content"
        );
        if (dropdown) {
          dropdown.style.maxHeight = "200px"; // Set the maximum height of the dropdown
          dropdown.style.overflowY = "auto"; // Add scrollbar if options overflow
        }
      });
    },
    scrollToTop() {
      // Scroll to the top of the dropdown when it opens
      this.$refs.merkSelect.$el.querySelector(".v-select-list").scrollTop = 0;
      this.$refs.modelSelect.$el.querySelector(".v-select-list").scrollTop = 0;
    },
    // Fungsi Jika Image Eror
    handleImageError(event) {
      event.target.src = require("../assets/img/kosong/1.png");
    },
    // Fungsi Produk Jaja Auto
    fetchCarItems() {
      this.isLoading = true;
      axios
        .get("https://api.jaja.id/produk/get", {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          console.log("API Response:", response.data.data); // Add this line to check the API response

          const uniqueCarItems = this.removeDuplicateItems(response.data.data);
          this.carItems = uniqueCarItems;
          this.filteredCarItems = [...this.carItems];
          this.updateUniqueCarTypes();

          // Calculate brand and model counts
          const brandSet = new Set();
          const modelSet = new Set();
          this.carItems.forEach((item) => {
            brandSet.add(item.brand);
            modelSet.add(item.model);
          });

          console.log("Brand Set:", brandSet); // Add this line to check the brandSet

          const brandCount = brandSet.size;
          const modelCount = modelSet.size;

          const brandCounter = document.getElementById("brandCounter");
          const modelCounter = document.getElementById("modelCounter");
          brandCounter.textContent = brandCount;
          modelCounter.textContent = modelCount;

          console.log("Ini responsenya:", response.data.data);
          console.log("Ini isinya:", this.carItems);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          this.isLoading = false;
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
      this.filteredCarModels = this.carItems
        .filter((car) => car.brand === this.selectedCarType)
        .map((car) => car.model);
      this.selectedCarModel = ""; // Reset the selectedCarModel when the brand is changed
    },
    onSearchCarType(search, loading) {
      loading(true);
      // Simulate async search (replace with your actual search logic)
      setTimeout(() => {
        this.searchResults = this.uniqueCarTypes.filter((carType) =>
          carType.toLowerCase().includes(search.toLowerCase())
        );
        loading(false);
      }, 500);
    },
    // Fungsi Filter
    filterCars() {
      const uniqueCarTypes = new Set();

      this.filteredCarItems = this.carItems.filter((car) => {
        const isBrandMatched =
          this.selectedCarType === "" || car.brand === this.selectedCarType;
        const isModelMatched =
          this.selectedCarModel === "" || car.model === this.selectedCarModel;
        const isPriceRangeMatched =
          this.selectedPriceRange === "" ||
          car.code === this.selectedPriceRange;
        const isSearchMatched =
          !this.carModelSearch ||
          car.model.toLowerCase().includes(this.carModelSearch.toLowerCase());

        if (
          isBrandMatched &&
          isModelMatched &&
          isPriceRangeMatched &&
          isSearchMatched
        ) {
          if (!uniqueCarTypes.has(car.brand)) {
            uniqueCarTypes.add(car.brand);
          }
          return true;
        }

        return false;
      });

      this.$nextTick(() => {
        // Scroll ke elemen dengan ref "resultsContainer"
        const resultsContainer = this.$refs.resultsContainer;
        if (resultsContainer) {
          const topOffset = resultsContainer.offsetTop;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      });
      // ...
    },
    // Fungsi Titik Pada Harga
    formatPrice(price) {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(price);
    },
    handledetaillates(carslug) {
      this.slug = carslug;
      console.log("slugss", this.slug);
      // Simpan c.slug di local storage
      localStorage.setItem("slug", carslug);

      // Redirect ke halaman "detaillates" dengan slug dalam URL
      this.$router.push(`/detaillates/${carslug}`);
      localStorage.removeItem("slug");
      console.log(`berhasil di remove`);
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
    VueFaqAccordion,
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
.btn-detail:hover {
  background-color: #207ace; /* Warna latar belakang berubah menjadi biru saat dihover */
  color: white; /* Warna teks berubah menjadi putih saat dihover */
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
.btn-find {
  font-size: 16px;
  color: var(--color-white);
  padding: 5px 5px;
  transition: all 0.5s;
  text-transform: capitalize;
  height: 51px;
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
