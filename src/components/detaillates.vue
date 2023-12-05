<template>
  <div class="home-3">
    <!-- Start Navbar -->
    <navigation />
    <!-- End Navbar -->

    <div ref="carSingleWrapper" class="car-item-single bg py-120">
      <div class="container">
        <div class="car-single-wrapper" style="padding-top: 5%">
          <div class="row">
            <!-- Start column gambar -->
            <div class="col-lg-8">
              <div class="car-single-details">
                <!-- Start Tampilan Image dan judul produk -->
                <div class="car-single-widget">
                  <div class="car-single-top">
                    <v-chip
                      class="ma-2"
                      closable
                      color="#DEF3FF"
                      text-color="#207ACE"
                      label
                    >
                      {{ carDetail[0].merek }}
                    </v-chip>
                    <div class="judul">
                      <h3 style="color: black" class="car-single-title">
                        {{ carDetail[0].name }} | {{ selectedType }}
                      </h3>
                    </div>
                    <div class="car-single-meta">
                      <li>
                        <i class="far fa-clock"></i> Dibuat:
                        {{ carDetail[0].date_created }}
                      </li>
                      <li>
                        <i class="far fa-eye"></i> Dilihat:
                        {{ carDetail[0].viewed }}
                      </li>

                      <div class="share-buttons">
                        <!-- Tombol Utama Share -->
                        <button
                          @click="toggleShareOptions"
                          class="main-share-btn"
                        >
                          <i class="fas fa-share"></i>
                        </button>

                        <!-- Pilihan Share yang Muncul Setelah Tombol Utama Diklik -->
                        <div v-if="showShareOptions" class="share-options">
                          <!-- Tombol Share untuk WhatsApp -->
                          <button @click="shareWhatsApp" class="whatsapp-btn">
                            <i class="fab fa-whatsapp"></i>
                          </button>

                          <!-- Tombol Share untuk Facebook -->
                          <button @click="shareFacebook" class="facebook-btn">
                            <i class="fab fa-facebook"></i>
                          </button>

                          <!-- Tombol Copy Link -->
                          <button @click="copyLink" class="copy-link-btn">
                            <i class="fas fa-copy"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="car-single-slider">
                    <div class="item-gallery">
                      <div class="flexslider-thumbnails">
                        <div class="" data-flickity>
                          <div class="carousel-cell">
                            <!-- responsive -->
                            <center>
                              <img
                                :src="currentImagePath"
                                style="height: 380px; image-fit: cover"
                                alt="Selected Image"
                              />
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Tampilan Image dan judul produk -->

                <!-- Start Tampilan Spesifikasi dan Deskripsi Produk -->
                <div class="car-single-widget">
                  <h4 class="mb-4">Spesifikasi</h4>
                  <hr />
                  <div class="car-key-info">
                    <div class="row">
                      <div class="col-lg-3 col-md-4 col-6">
                        <div class="car-key-item">
                          <div class="car-key-icon">
                            <i class="flaticon-settings"></i>
                          </div>
                          <div class="car-key-content">
                            <span>Body Type</span>
                            <h6>{{ type }}</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-6">
                        <div class="car-key-item">
                          <div class="car-key-icon">
                            <i class="flaticon-speedometer"></i>
                          </div>
                          <div class="car-key-content">
                            <span>CC</span>
                            <h6>{{ spesifikasi }}</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-6">
                        <div class="car-key-item">
                          <div class="car-key-icon">
                            <i class="flaticon-gas-station"></i>
                          </div>
                          <div class="car-key-content">
                            <span>Mileage</span>
                            <h6>{{ listrikNonListrik }}/ {{ bbm }}</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-6">
                        <div class="car-key-item">
                          <div class="car-key-icon">
                            <i class="flaticon-drive"></i>
                          </div>
                          <div class="car-key-content" ref="resultsContainer">
                            <span>Seat</span>
                            <h6>{{ seat }}</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-6">
                        <div class="car-key-item">
                          <div class="car-key-icon">
                            <i class="flaticon-drive"></i>
                          </div>
                          <div class="car-key-content" ref="resultsContainer">
                            <span>Jenis</span>
                            <h6>{{ carDetail[0].jenis_name }}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <h4 class="mb-3">Deskripsi</h4>
                  <hr />
                  <div class="mb-4" v-if="selectedType">
                    <!-- <div v-html="carDetail[0].deskripsi"></div> -->
                    <!-- <span>{{carDetail[0].deskripsi}}</span> -->
                    <div>
                      <div
                        v-html="truncateText(carDetail[0].deskripsi)"
                        style="white-space: pre-line"
                      ></div>
                      <span
                        v-if="isTextTooLong && !showFullText"
                        @click="showFullText = true"
                        style="cursor: pointer; color: blue"
                        >... Baca Selengkapnya</span
                      >
                    </div>
                  </div>
                </div>
                <!-- End Tampilan Spesifikasi dan Deskripsi Produk -->
              </div>
            </div>
            <!-- End column gambar -->

            <!-- Start column Harga -->
            <div class="col-lg-4">
              <div class="car-single-widget">
                <!-- Start Tampilan Harga Produk -->
                <div class="hargaotr">
                  <h5 class="car-single-price">Harga OTR</h5>
                  <span
                    class="mt-5"
                    style="
                      color: #1f1c1c;
                      font-size: 34px;
                      font-weight: bold;
                      padding: 0px 10px 0px 0px;
                    "
                    v-if="selectedType"
                  >
                    Rp {{ formatPrice(harga) }}
                  </span>
                </div>
                <!-- End Tampilan Harga Produk -->

                <!-- Start Tampilan Warna Mobil -->
                <div class="form-group mt-5">
                  <h5 class="car-single-price">Warna</h5>
                  <v-card flat>
                    <v-radio-group v-model="selectedColor" inline>
                      <v-row>
                        <v-col
                          v-for="(image, index) in carWarna"
                          :key="index"
                          cols="2"
                        >
                          <div class="chip-container">
                            <div
                              :style="{
                                backgroundColor: image.hexColorCode,
                                color: 'white',
                                border: '2px solid #4F4E4E',
                                outline:
                                  selectedChipIndex === index
                                    ? '3px solid #207ace'
                                    : 'none',
                                outlineOffset: '-2px',
                                width: '50px',
                                height: '50px',
                                borderRadius: '10%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                              }"
                              @click="
                                changeImage(image.imagePath, image.id, index)
                              "
                            >
                              <v-icon
                                v-if="
                                  index === selectedChipIndex &&
                                  (selectedColor !== null ||
                                    selectedSeatIndex !== null)
                                "
                                class="check-icon"
                                style="
                                  float: right;
                                  color: #207ace;
                                  bottom: -40px;
                                  right: -25px;
                                "
                              >
                                mdi mdi-checkbox-marked-circle-outline
                              </v-icon>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-radio-group>
                  </v-card>
                </div>

                <!-- Fungsi untuk Seat Mobil -->
                <div v-if="carSeat.length > 0" class="form-group mt-5">
                  <h5 class="car-single-price">Interior</h5>
                  <v-card flat>
                    <v-radio-group v-model="selectedSeat" inline>
                      <v-row>
                        <v-col
                          v-for="(seat, index) in carSeat"
                          :key="index"
                          cols="2"
                        >
                          <div class="chip-container">
                            <div
                              :style="{
                                backgroundColor: seat.hexColorCode,
                                color: 'white',
                                border: '2px solid #4F4E4E',
                                outline:
                                  selectedSeatIndex === index
                                    ? '3px solid #207ace'
                                    : 'none',
                                outlineOffset: '-2px',
                                width: '50px',
                                height: '50px',
                                borderRadius: '10%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                              }"
                              @click="
                                changeSeatImage(seat.imagePath, seat.id, index)
                              "
                            >
                              <v-icon
                                v-if="
                                  index === selectedSeatIndex &&
                                  (selectedColor !== null ||
                                    selectedSeatIndex !== null)
                                "
                                class="check-icon"
                                style="
                                  float: right;
                                  color: #207ace;
                                  bottom: -40px;
                                  right: -25px;
                                "
                              >
                                mdi mdi-checkbox-marked-circle-outline
                              </v-icon>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-radio-group>
                  </v-card>
                </div>
                <!-- Fungsi untuk Pilihan Velg Mobil Lengkap -->
                <div v-if="carVelg.length > 0" class="form-group mt-5">
                  <h5 class="car-single-price">Velg</h5>
                  <v-card flat>
                    <v-radio-group v-model="selectedVelg" inline>
                      <v-row>
                        <v-col
                          v-for="(velg, index) in filteredCarVelg"
                          :key="index"
                          cols="2"
                        >
                          <div
                            @click="
                              changeVelgImage(velg.imagePath, velg.id, index)
                            "
                            :class="{
                              'selected-option': index === selectedVelgIndex,
                            }"
                          >
                            <img
                              :src="velg.colorName"
                              style="
                                width: 105px;
                                height: auto;
                                border-radius: 50%;
                              "
                              alt="Velg Image"
                            />
                            <v-icon
                              v-if="index === selectedVelgIndex && bothSelected"
                              class="check-icon"
                              style="float: right; color: #207ace"
                            >
                              mdi mdi-checkbox-marked-circle-outline
                            </v-icon>
                          </div>
                        </v-col>
                      </v-row>
                    </v-radio-group>
                  </v-card>
                </div>

                <hr />
                <!-- End Tampilan Warna Mobil -->

                <!-- Tampilan Tabs Angsuran dan Sewa -->
                <v-tabs
                  v-model="activeTab"
                  fixed-tabs
                  bg-color=""
                  color="deep-purple-accent-4"
                  align-tabs="center"
                  style="color: #0c5eaa"
                >
                  <v-tab style="color: #0c5eaa"> Angsuran </v-tab>
                  <v-tab style="color: #0c5eaa"> Sewa </v-tab>

                  <!-- Start Tampilan Angsuran -->
                  <v-tab-item>
                    <v-card>
                      <v-card-text>
                        <div class="form-group mt-5">
                          <div class="form-group mt-5">
                            <!-- Start Tampilan Tipe, DP, MITRA, WILAYAH -->
                            <div class="tipe">
                              <v-row class="mt-5">
                                <v-col cols="12">
                                  <h5 class="car-single-price">Tipe Mobil</h5>
                                  <div class="custom-select-wrapper">
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="selectedType"
                                      @change="updateHarga"
                                    >
                                      <option value="">Pilihan Tipe</option>
                                      <option
                                        v-for="grade in carType"
                                        :key="grade.id"
                                        :value="grade.type"
                                      >
                                        {{ grade.type }}
                                      </option>
                                    </select>

                                    <div class="custom-select-arrow"></div>
                                  </div>
                                </v-col>
                              </v-row>

                              <v-row class="mt-5">
                                <v-col cols="8">
                                  <h5 class="car-single-price">DP (Rp)</h5>
                                  <input
                                    type="text"
                                    class="nice-input"
                                    style="width: 100%"
                                    v-model="dp"
                                    @input="handleRpInput"
                                    placeholder="Masukkan dalam Rp"
                                  />
                                </v-col>
                                <v-col cols="4">
                                  <h5 class="car-single-price">%</h5>
                                  <input
                                    type="text"
                                    class="nice-input"
                                    style="width: 100%"
                                    v-model="uangMukaPersentase"
                                    @input="handlePersentaseInput"
                                    placeholder=" Min 20%"
                                  />
                                </v-col>
                              </v-row>

                              <v-row class="mt-5">
                                <v-col cols="12">
                                  <h5 class="car-single-price">Mitra</h5>
                                  <div class="custom-select-wrapper">
                                    <select
                                      class="nice-select"
                                      v-model="selectedMitra"
                                      @change="fetchData"
                                    >
                                      <option
                                        v-for="bank in banks"
                                        :key="bank.id_bank"
                                        :value="bank.id_bank"
                                      >
                                        {{ bank.nama_bank }}
                                      </option>
                                    </select>
                                    <div class="custom-select-arrow"></div>
                                  </div>
                                </v-col>
                              </v-row>

                              <v-row class="mt-5">
                                <v-col cols="12">
                                  <h5 class="car-single-price">Wilayah</h5>
                                  <div class="custom-select-wrapper">
                                    <select
                                      class="nice-select"
                                      v-model="selectedWilayah"
                                      @change="fetchData"
                                    >
                                      <option
                                        v-for="area in wilayah"
                                        :key="area.id_wilayah"
                                        :value="area.id_wilayah"
                                      >
                                        {{ area.nama_wilayah }}
                                      </option>
                                    </select>
                                    <div class="custom-select-arrow"></div>
                                  </div>
                                </v-col>
                              </v-row>
                            </div>
                            <!-- End Tampilan Tipe, DP, MITRA, WILAYAH -->

                            <!-- Start Tampilan Button Hitung Angsuran -->
                            <v-row class="mt-5">
                              <v-col cols="12">
                                <div>
                                  <button
                                    @click="fetchSimulasi"
                                    type="submit"
                                    class="button-angsuran"
                                  >
                                    <span v-if="isLoading">
                                      <i class="fas fa-spinner fa-spin"></i>
                                      Loading...
                                    </span>
                                    <span v-else>Hitung Angsuran</span>
                                  </button>
                                </div>
                              </v-col>
                            </v-row>
                            <!-- End Tampilan Button Hitung Angsuran -->
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <!-- End Tampilan Angsuran -->

                  <!-- Start Tampilan Sewa -->
                  <v-tab-item>
                    <v-card>
                      <v-card-text>
                        <div class="form-group mt-5">
                          <div class="form-group mt-5">
                            <div class="tipe">
                              <v-row class="mt-5">
                                <v-col cols="12">
                                  <h5 class="car-single-price">Tipe Mobil</h5>
                                  <div class="custom-select-wrapper">
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="selectedType"
                                      @change="updateHarga"
                                    >
                                      <option value="">Pilihan Tipe</option>
                                      <option
                                        v-for="grade in carType"
                                        :key="grade.id"
                                        :value="grade.type"
                                      >
                                        {{ grade.type }}
                                      </option>
                                    </select>

                                    <div class="custom-select-arrow"></div>
                                  </div>
                                </v-col>
                              </v-row>

                              <!-- Elemen HTML untuk Menampilkan Hasil Simulasi -->
                            </div>
                            <v-row class="mt-5">
                              <v-col cols="12">
                                <div>
                                  <button
                                    type="submit"
                                    @click="klikButton"
                                    class="button-angsuran"
                                  >
                                    Ajukan Sewa
                                  </button>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <!-- End Tampilan Sewa -->
                </v-tabs>
              </div>
            </div>
          </div>

          <!-- Start tampilan rekomondasi produk -->
          <div class="container">
            <div class="d-flex justify-content-between">
              <h3 style="color: #207ace" class="car-single-title">
                Rekomendasi
              </h3>
            </div>
            <div class="container">
              <div class="row">
                <div
                  v-for="c in filteredRelatedCars"
                  :key="c.id"
                  class="col-xl"
                >
                  <div
                    class="wow fadeInUp"
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
                      <center>
                        <img
                          :src="c.imagePath"
                          style="width: 150px; height: 100px"
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
                              max-width: 100%;
                            "
                            href="#"
                            >{{ c.name }}</a
                          >
                        </h4>
                        <span style="color: #207ace" class="car-price">
                          Rp {{ formatPrice(c.rangeHarga) }}
                        </span>
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
                </div>
              </div>
            </div>
          </div>
          <!-- End tampilan rekomondasi produk -->
        </div>
      </div>
    </div>

    <foote />
  </div>
</template>

<script>
import navigation from "../components/backup.vue";
import foote from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { Head } from "vue-head";
export default {
  name: "DetailLates",
  components: {
    navigation,
    foote,
    Head,
  },
  data() {
    return {
      relatedCars: [],
      savedSlug: localStorage.getItem("slug"),
      whatsappNumber: "6281990181108", //number untuk redirect ke whatsapp
      isLoading: false, //loading pada fungsi
      showShareOptions: false,
      // Warna dan image terbaru

      selectedChipIndex: 0,
      carWarna: [],
      currentImagePath: "",
      bothSelected: false,
      selectedSeat: null,
      selectedVelgOption: null,
      selectedVelg: null,
      selectedSeatIndex: 0,
      selectedColor: null,
      selectedSeatIndex: null,
      selectedVelgIndex: null,
      carSeat: [],
      carVelgOption: [],
      carVelg: [],
      filteredCarVelg: [],
      showFullText: false,
      maxTextLength: 370,
      slug: "",
      carDetail: [],
      carType: [],
      relatedCars: [], // Data mobil terkait akan disimpan di sini
      limit: 5, // Jumlah batasan data yang ingin ditampilkan
      dp: "",
      uangMukaPersentase: "",
      selectedMitra: null,
      selectedWilayah: null,
      selectedMitraText: "",
      selectedWilayahText: "",
      banks: [], // Untuk menyimpan data bank dari API
      wilayah: [], // Untuk menyimpan data wilayah dari API
      selectedType: "", // Menyimpan tipe yang dipilih
      harga: "", // Menyimpan harga
      typeCode: "",
      type: "",
      spesifikasi: "",
      transmisi: "",
      warna: "",
      bbm: "",
      typeseatCode: "",
      year: "",
      keterangan: "",
      transmisActiveisi: "",
      listrikNonListrik: "",
      seat: "",
      id: "",
      id_jauto_produk: "",
    };
  },
  computed: {
    isTextTooLong() {
      return this.carDetail[0].deskripsi.length > this.maxTextLength;
    },
    filteredCarVelg() {
      if (this.selectedColor) {
        return this.carVelg.filter(
          (velg) => velg.hexColorCode === this.selectedColor
        );
      } else {
        return this.carVelg;
      }
    },
    filteredRelatedCars() {
      // Adjust the condition based on your requirements
      return this.relatedCars.slice(0, 4);
    },
    productLink() {
      return `http://localhost:8080/detaillates/${this.savedSlug}`;
    },
    // Menghasilkan link untuk dibagikan melalui WhatsApp
    whatsappLink() {
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(
        this.productLink
      )}`;
    },
    // Menghasilkan link untuk dibagikan melalui Facebook
    facebookLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.productLink
      )}`;
    },
    // Menghasilkan link untuk dibagikan melalui Twitter
    twitterLink() {
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        this.productLink
      )}&text=Check%20out%20this%20awesome%20product!`;
    },
    cleanedDescription() {
      return this.extractCVT(this.carDetail[0].deskripsi);
    },
    pageTitle() {
      return this.carDetail[0].name + " | " + this.selectedType;
    },
    pageDescription() {
      return this.carDetail[0].deskripsi;
    },
  },
  mounted() {
    // Mengambil slug dari localStorage
    const savedSlug = localStorage.getItem("slug");
    const currentSlug = this.$route.params.slug; //Ini Ambil Link tapi yg belakangnya aja
    const lengkap = this.$route?.fullPath; //Ini Ambil Link tapi yg belakangnya aja depannya tinggal tambahin https://auto.jaja.id/
    console.log(`lengkap`, lengkap);
    localStorage.setItem("slug", currentSlug);
    console.log("saat Refresh:", currentSlug);

    if (!savedSlug) {
      console.log(`gamasuk slugnya`);
      const slug = localStorage.setItem("slug", currentSlug);
      console.log(`dari gamasuk`, currentSlug);
      this.getCarDetail(currentSlug);
      this.getRelatedCars(currentSlug);
      this.fetchData();
      this.fetchBunga();
      localStorage.removeItem("slug");
    }

    if (savedSlug) {
      // Menggunakan slug yang disimpan untuk mengambil detail mobil
      this.getCarDetail(savedSlug);
      this.getRelatedCars(savedSlug);
      this.fetchData();
      this.fetchBunga();
      localStorage.removeItem("slug");
    }
  },
  created() {
    // Cek apakah ada data yang tersimpan di localStorage untuk selectedMitraText dan selectedWilayahText
    const savedMitraText = localStorage.getItem("selectedMitraText");
    const savedWilayahText = localStorage.getItem("selectedWilayahText");

    if (savedMitraText && savedWilayahText) {
      this.selectedMitraText = savedMitraText;
      this.selectedWilayahText = savedWilayahText;
    }

    // Panggil fetchData untuk mengisi data banks dan wilayah
    this.selectFirstChip();
    this.fetchData();
    this.getCarDetail(); // Panggil metode getCarDetail saat komponen dibuat

    // Setelah data diambil, periksa apakah ada data dalam carType
    if (this.carType.length > 0) {
      // Ambil data pertama dari carType
      const firstType = this.carType[0];
      this.selectedType = firstType.typeauto; // Atur pemilihan awal pada select
      this.updateHarga(); // Panggil metode updateHarga untuk menampilkan harga sesuai dengan data pertama
    }
  },
  methods: {
    // sanitizeHTML(html) {
    //   var doc = new DOMParser().parseFromString(html, "text/html");
    //   var sanitizedHTML = doc.body.textContent || "";
    //   return sanitizedHTML;
    // },
    truncateText(html) {
      let cleanedHTML = this.sanitizeHTML(html);

      if (!this.showFullText && this.isTextTooLong) {
        cleanedHTML = cleanedHTML.slice(0, this.maxTextLength) + "...";
      }

      return cleanedHTML.trim();
    },
    sanitizeHTML(html) {
      // Replace every occurrence of '&nbsp;' with a space
      var cleanedHTML = html.replace(/&nbsp;/g, " ");

      // Replace every occurrence of 'n' with an empty string
      cleanedHTML = cleanedHTML.replace(/n/g, "");

      // Replace multiple consecutive spaces with a single space
      cleanedHTML = cleanedHTML.replace(/\s+/g, " ");

      return cleanedHTML.trim(); // Trim any leading or trailing whitespaces
      // Trim any leading or trailing whitespaces
    },
    shareWhatsApp() {
      const link = this.generateShareLink();
      const productDescription = encodeURIComponent(
        "Temukan keseruan baru dengan Mobil impian anda di Auto.jaja.id!"
      );
      const whatsappLink = `https://wa.me/?text=${productDescription}%0A${encodeURIComponent(
        link
      )}`;
      window.open(whatsappLink, "_blank");
    },
    shareFacebook() {
      const link = this.generateShareLink();
      const productDescription = encodeURIComponent(
        "Temukan keseruan baru dengan Mobil impian anda di Auto.jaja.id!"
      );
      const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        link
      )}&quote=${productDescription}`;
      window.open(facebookLink, "_blank");
    },
    copyLink() {
      const link = this.generateShareLink();
      const el = document.createElement("textarea");
      el.value = link;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("Link telah disalin!");
    },
    generateShareLink() {
      return `https://auto.jaja.id${this.$route?.fullPath}`;
    },
    toggleShareOptions() {
      this.showShareOptions = !this.showShareOptions;
    },
    extractCVT(input) {
      // Extract only the text "CVT"
      const match = input.match(/CVT/i);
      return match ? match[0] : "";
    },
    klikButton() {
      const message = `Halooo Admin Jaja Auto, 

Pilihan Produk : ${this.carDetail[0].name}
Pilihan Merk : ${this.carDetail[0].brand}
Pilihan Tipe: ${this.selectedType}

Saya berharap dapat mendiskusikan penawaran sewa ini lebih lanjut. Mohon petunjuk selanjutnya.

Terima kasih,`;

      const encodedMessage = encodeURIComponent(message);
      window.location.href = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    },
    // Fungsi Titik Pada Harga
    formatPrice(price) {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(price);
    },

    selectFirstChip() {
      this.selectedChipIndex = 0;
      const firstImage = this.carWarna[0].images[0]; // Sesuaikan dengan struktur data Anda
      this.changeImage(firstImage.imagePath, firstImage.id, 0);
    },
    changeImage(imagePath, productImageId, index) {
      this.selectedChipIndex = index;
      this.loadImage(imagePath);
      this.selectedColor = this.carWarna[index].hexColorCode;

      // Filter velg berdasarkan warna yang dipilih
      this.filteredCarVelg = this.carVelg.filter(
        (velg) => velg.hexColorCode === this.selectedColor
      );

      this.updateBothSelected();
    },

    changeSeatImage(imagePath, productImageId, index) {
      this.selectedSeatIndex = index;
      this.loadImage(imagePath);
      this.updateBothSelected();
    },
    // Fungsi untuk opsi velg (carVelgOption)
    changeVelgOptionImage(imagePath, productImageId, index) {
      this.selectedVelgOptionIndex = index;
      this.loadImage(imagePath);
    },
    // Fungsi untuk velg (carVelg)
    changeVelgImage(imagePath, id, index) {
      // Cek apakah velg yang dipilih sudah sama dengan yang sebelumnya
      if (index === this.selectedVelgIndex) {
        // Jika ya, hapus pemilihan
        this.selectedVelgIndex = null;
      } else {
        // Jika tidak, pilih velg baru
        this.selectedVelgIndex = index;
        this.loadImage(imagePath);
      }

      this.updateBothSelected();
    },
    updateBothSelected() {
      this.bothSelected =
        this.selectedColor !== null ||
        this.selectedSeatIndex !== null ||
        this.selectedVelgIndex !== null;
    },

    loadImage(imagePath) {
      const image = new Image();
      image.src = imagePath;
      image.onload = () => {
        this.currentImagePath = imagePath;
      };
      image.onerror = () => {
        console.error("Error loading default image:", imagePath);
        this.currentImagePath = require("../assets/img/kosong/1.png");
      };
    },
    formatPriceAsRupiah(priceString) {
      const price = parseInt(priceString, 10); // Convert the string to an integer
      if (isNaN(price)) {
        return priceString; // Return the original string if it's not a valid number
      }

      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(price);
    },
    selectedMitraText() {
      const selectedMitraId = this.selectedMitra;
      const selectedMitra = this.data.bank.find(
        (mitra) => mitra.id_bank === selectedMitraId
      );
      const mitraText = selectedMitra ? selectedMitra.nama_bank : "";

      // Simpan nilai ke localStorage
      localStorage.setItem("selectedMitraText", mitraText);

      // Tampilkan nilai yang disimpan di console
      console.log("Nilai mitra yang disimpan:", mitraText);

      return mitraText; // Mengembalikan nama bank yang dipilih
    },
    selectedWilayahText() {
      const selectedWilayahId = this.selectedWilayah;
      const selectedWilayah = this.data.wilayah.find(
        (wilayah) => wilayah.id_wilayah === selectedWilayahId
      );
      const wilayahText = selectedWilayah ? selectedWilayah.nama_wilayah : "";

      // Simpan nilai ke localStorage
      localStorage.setItem("selectedWilayahText", wilayahText);

      return wilayahText; // Mengembalikan nama wilayah yang dipilih
    },
    async hitungAngsuran() {
      this.isLoading = true; // Mengaktifkan animasi loading

      // Validasi semua field form sebelum mengirimkan permintaan
      if (
        this.selectedTipe &&
        this.dp &&
        this.uangMukaPersentase &&
        this.selectedBank &&
        this.selectedWilayah
      ) {
        // Pemeriksaan input persentase
        const persentaseValue = parseFloat(
          this.uangMukaPersentase.replace(/\D/g, "")
        );

        if (persentaseValue < 20 || persentaseValue > 100) {
          Swal.fire({
            icon: "error",
            title: "Persentase Tidak Valid",
            text: "Persentase harus di antara 20% hingga 100%.",
          });
          return; // Menghentikan eksekusi jika persentase tidak valid
        }

        const dpWithoutRp = this.dp.replace(/[^\d]/g, "");

        const dpValue = parseFloat(dpWithoutRp.replace(/\D/g, ""));
        const price = this.datadetail[0].price;

        try {
          // Simulasikan penundaan selama 2 detik
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Lakukan permintaan API menggunakan axios atau fetch API
          const response = await axios.get(
            `https://api.jaja.id/jauto/produk/count?otr=${price}&dp=${dpWithoutRp}&bank=${this.selectedBank}&wilayah=${this.selectedWilayah}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
              },
            }
          );

          if (response.data.success) {
            this.angsuranData = response.data.data;
            this.showModal = true;
          } else {
            console.error("Gagal mengambil data perhitungan angsuran");
          }
        } catch (error) {
          console.error(
            "Terjadi kesalahan saat mengambil data dari API",
            error
          );
        } finally {
          // Menonaktifkan animasi loading setelah 2 detik
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Harap Lengkapi Semua Field",
          text: "Harap isi semua field sebelum melakukan perhitungan.",
        });
      }
    },
    handlePersentaseInput() {
      // Menghitung nominal (Rp) dari persentase (%)
      if (this.harga > 0) {
        const price = parseFloat(this.harga.toString().replace(/\D/g, ""));
        const persentase = parseFloat(
          this.uangMukaPersentase.replace(/\D/g, "")
        );

        const nominal = ((persentase / 100) * price).toFixed(0); // Menggunakan 0 desimal

        // Format nominal dalam format rupiah dengan tanda ribuan yang sesuai
        this.dp = `Rp ${nominal
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      } else {
        this.dp = "Rp 0";
      }
    },
    handleRpInput() {
      if (this.harga > 0) {
        const price = parseFloat(this.harga.toString().replace(/\D/g, "")); // Menghilangkan semua karakter non-digit, termasuk tanda ribuan
        let nominal = parseFloat(this.dp.replace(/\D/g, "")); // Menghilangkan semua karakter non-digit, termasuk tanda ribuan

        // Jika nominal lebih besar dari harga, maka atur nominal ke harga
        if (nominal > price) {
          nominal = price;
        }

        // Format nominal dalam format rupiah dengan tanda ribuan yang sesuai
        this.dp = `Rp ${nominal.toLocaleString("id-ID")}`;

        const persentase = ((nominal / price) * 100).toFixed(1); // 1 desimal

        this.uangMukaPersentase = !isNaN(persentase)
          ? persentase + "%" // Tanpa menggunakan .toLocaleString()
          : "0%";

        if (persentase > 100) {
          // Menampilkan alert jika persentase melebihi 100%
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Persentase  100%.",
          });
        }
      } else {
        this.dp = "Rp 0";
        this.uangMukaPersentase = "0%";
      }
    },
    async getCarDetail(slug) {
      let id = this.$route.params.slug;
      try {
        const response = await fetch(
          `https://api.jaja.id/jauto/produk/get_produk_detail?slug=${slug}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          this.carDetail = data.data;
          this.carWarna = data.data[0].images;
          this.carSeat = data.data[0].seat;
          this.carVelgOption = data.data[0].velg_opt;
          this.carVelg = data.data[0].velg;

          if (this.carWarna.length > 0) {
            const firstColor = this.carWarna[0];
            this.selectedColor = firstColor.hexColorCode; // Atur pemilihan awal pada v-chip
            this.currentImagePath = firstColor.imagePath;

            // Set filteredCarVelg langsung tanpa memerlukan aksi pemilihan warna
            this.filteredCarVelg = this.carVelg.filter(
              (velg) => velg.hexColorCode === this.selectedColor
            );
          }

          this.carType = data.data[0].grades;
          console.log("ini tipe cok", this.carType);

          // Simpan data detail mobil dalam localStorage
          localStorage.setItem("carDetail", JSON.stringify(this.carDetail));

          // Cek apakah ada data dalam carType
          if (this.carType.length > 0) {
            // Ambil data pertama dari carType
            const firstCarType = this.carType[0];
            this.selectedType = firstCarType.type; // Atur selectedType ke data pertama
            this.harga = firstCarType.rangeHarga; // Atur harga ke data pertama
            this.typeCode = firstCarType.typeCode;
            this.type = firstCarType.type;
            this.spesifikasi = firstCarType.spesifikasi;
            this.transmisi = firstCarType.transmisi;
            this.warna = firstCarType.warna;
            this.bbm = firstCarType.bbm;
            this.seat = firstCarType.seat;
            this.typeseatCode = firstCarType.seat;
            this.year = firstCarType.year;
            this.keterangan = firstCarType.keterangan;
            this.transmisActiveisi = firstCarType.isActive;
            this.listrikNonListrik = firstCarType.listrikNonListrik;
            this.id = firstCarType.id;
            this.id_jauto_produk = firstCarType.id_jauto_produk;
          }
          localStorage.removeItem("slug");
        } else {
          console.error("Failed to fetch car details.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    getRelatedCars(slug) {
      // Membuat permintaan API untuk mendapatkan mobil terkait
      axios
        .get(`https://api.jaja.id/jauto/produk/get_related?slug=${slug}`, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          this.relatedCars = response.data.data; // Menyimpan data mobil terkait dari respons API
          console.log("ini rekomen", this.relatedCars);
          if (!Array.isArray(this.relatedCars)) {
            this.relatedCars = []; // Inisialisasi sebagai array kosong jika tidak
          } else {
            // Batasi jumlah produk menjadi 4
            this.relatedCars = this.relatedCars.slice(0, 4);
          }
        })
        .catch((error) => {
          console.error("Gagal mengambil mobil terkait:", error);
        });
    },
    handledetaillates(carslug) {
      console.log("slugss", carslug);

      // Ambil slug yang lama dari local storage
      const oldSlug = localStorage.getItem("slug");

      // Simpan c.slug yang baru di local storage
      localStorage.setItem("slug", carslug);

      // Hapus data detail mobil yang terkait dengan slug lama dari local storage
      localStorage.removeItem(`carDetail_${oldSlug}`);

      // Cetak informasi URL saat ini ke console log
      console.log("Current URL:", this.$route.fullPath);

      // Redirect ke halaman "detaillates" dengan slug dalam URL
      localStorage.removeItem("slug");
      console.log(`berhasil di remove`);
      this.$router.push(`/detaillates/${carslug}`);
      // Me-refresh halaman
      // window.location.reload();
    },

    updateHarga() {
      // Simpan tipe yang dipilih ke Local Storage
      localStorage.setItem("selectedType", this.selectedType);

      // Cari harga yang sesuai berdasarkan tipe yang dipilih
      if (this.selectedType) {
        const selectedGrade = this.carDetail[0].grades.find(
          (grade) => grade.type === this.selectedType
        );
        if (selectedGrade) {
          this.harga = selectedGrade.rangeHarga;
          this.typeCode = selectedGrade.typeCode;
          this.type = selectedGrade.type;
          this.spesifikasi = selectedGrade.spesifikasi;
          this.transmisi = selectedGrade.transmisi;
          this.warna = selectedGrade.warna;
          this.bbm = selectedGrade.bbm;
          this.seat = selectedGrade.seat;
          this.typeseatCode = selectedGrade.seat;
          this.year = selectedGrade.year;
          this.keterangan = selectedGrade.keterangan;
          this.transmisActiveisi = selectedGrade.isActive;
          this.listrikNonListrik = selectedGrade.listrikNonListrik;
          this.id = selectedGrade.id;
          this.id_jauto_produk = selectedGrade.id_jauto_produk;
        } else {
          this.harga = "Tipe tidak valid";
          this.typeCode = "Tipe tidak valid";
          this.type = "Tipe tidak valid";
          this.spesifikasi = "Tipe tidak valid";
          this.transmisi = "Tipe tidak valid";
          this.warna = "Tipe tidak valid";
          this.bbm = "Tipe tidak valid";
          this.typeseatCode = "Tipe tidak valid";
          this.year = "Tipe tidak valid";
          this.keterangan = "Tipe tidak valid";
          this.transmisActiveisi = "Tipe tidak valid";
          this.listrikNonListrik = "Tipe tidak valid";
        }
      } else {
        this.harga = "Pilih Tipe";
      }
    },
    fetchData() {
      // Melakukan permintaan HTTP GET ke API
      axios
        .get("https://api.jaja.id/jauto/produk/option")
        .then((response) => {
          this.banks = response.data.data.bank;
          this.wilayah = response.data.data.wilayah;

          // Setel nilai awal selectedMitraText dan selectedWilayahText di sini
          if (!this.selectedMitra && this.banks.length > 0) {
            this.selectedMitra = this.banks[0].id_bank;
          }
          if (!this.selectedWilayah && this.wilayah.length > 0) {
            this.selectedWilayah = this.wilayah[0].id_wilayah;
          }

          const selectedMitra = this.banks.find(
            (mitra) => mitra.id_bank === this.selectedMitra
          );
          const selectedWilayah = this.wilayah.find(
            (wilayah) => wilayah.id_wilayah === this.selectedWilayah
          );

          this.selectedMitraText = selectedMitra ? selectedMitra.nama_bank : "";
          this.selectedWilayahText = selectedWilayah
            ? selectedWilayah.nama_wilayah
            : "";

          // Simpan selectedMitraText dan selectedWilayahText di localStorage
          localStorage.setItem("selectedMitraText", this.selectedMitraText);
          localStorage.setItem("selectedWilayahText", this.selectedWilayahText);
        })
        .catch((error) => {
          console.error("Gagal mengambil data:", error);
        });
    },

    isFormValid() {
      return (
        this.selectedType &&
        this.dp &&
        this.uangMukaPersentase &&
        this.selectedMitra &&
        this.selectedWilayah
      );
    },
    async fetchSimulasi() {
      this.isLoading = true;
      if (!this.isFormValid()) {
        // Show an alert if any of the required fields is empty
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Semua form harus diisi.",
        });
        this.isLoading = false; // Menghentikan animasi loading
        return;
      }

      // Validasi persentase di sini
      const persentase = parseFloat(
        this.uangMukaPersentase.replace(/[^\d.]/g, "")
      );
      if (persentase < 20) {
        // Menampilkan alert jika persentase kurang dari 20%
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Harga Down Payment tidak boleh kurang dari 20%",
        });
        this.isLoading = false; // Menghentikan animasi loading
        return;
      }
      if (persentase > 100) {
        // Menampilkan alert jika persentase lebih dari 100%
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Persentase harus kurang dari atau sama dengan 100%.",
        });
        this.isLoading = false; // Menghentikan animasi loading
        return;
      }

      // Lanjutkan dengan kode pengambilan data simulasi
      // Hapus "Rp" dari nilai dp jika ada
      const dpWithoutRp = this.dp.replace(/[^\d]/g, "");

      // Get the id_produk_grades from your source (replace 'id_jauto_produk' with the actual variable or value)
      const id_produk_grades = this.id;

      // Modify the apiUrl to include id_produk_grades
      const apiUrl = `https://api.jaja.id/jauto/produk/count?otr=${this.harga}&dp=${dpWithoutRp}&bank=${this.selectedMitra}&wilayah=${this.selectedWilayah}&id_produk_grades=${id_produk_grades}`;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        });
        const data = response.data;
        if (data.success) {
          // Data simulasi sukses diambil, Anda dapat memprosesnya di sini
          console.log(data.data); // Tampilkan hasil pada konsol

          // Simpan hasil simulasi ke localStorage
          localStorage.setItem("simulasiData", JSON.stringify(data.data));
          localStorage.setItem("simulasiPertama", JSON.stringify(data));

          // Navigasi ke halaman HasilAngsuran
          this.$router.push({ name: "HasilAngsuran" });
        } else {
          // Menampilkan pesan jika terjadi kesalahan
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Gagal mengambil data simulasi.",
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Menampilkan pesan jika terjadi kesalahan
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Gagal mengambil data simulasi.",
        });
      } finally {
        this.isLoading = false; // Menghentikan animasi loading
      }
    },
  },
  watch: {
    // Watch for changes in route parameters
    $route(to, from) {
      // Extract the slug from the new route
      const newSlug = to.params.slug;

      // Check if the slug has changed
      if (newSlug !== this.slug) {
        // Fetch the new data based on the updated slug
        this.getCarDetail(newSlug);
        this.getRelatedCars(newSlug);

        // Update the current slug in the component's data
        this.slug = newSlug;
      }
    },
  },
};
</script>

<head>
  <title>{{ pageTitle }}</title>
  <meta name="description" :content="pageDescription">
</head>
<style>
.selected-option {
  /* border: 2px solid #207ace;   */
  border-radius: 10%;
}

.share-buttons {
  display: flex;
  align-items: center;
}

button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  height: 41px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.main-share-btn {
  background-color: #3498db;
  color: #fff;
  border-radius: 55%;
}

.whatsapp-btn {
  background-color: #25d366;
  color: #fff;
  border-radius: 55%;
}

.facebook-btn {
  background-color: #3b5998;
  color: #fff;
  border-radius: 55%;
}

.copy-link-btn {
  background-color: #3498db;
  color: #fff;
  border-radius: 55%;
}

button:hover {
  filter: brightness(1.2);
}

i {
  margin-right: 0px;
}

.share-options {
  display: flex;
}
/* CSS untuk input */
.nice-input {
  border: 1px solid black; /* Warna garis tepi input */
  padding: 10px; /* Ruang dalam input */
  border-radius: 10px; /* Sudut sudut input */
  font-size: 16px; /* Ukuran font teks dalam input */
  width: 100%; /* Lebar input 100% dari wadahnya */
  height: 50px;
  color: black;
}
.button-angsuran {
  font-size: 16px;
  color: var(--color-white);
  padding: 12px 20px;
  transition: all 0.5s;
  text-transform: capitalize;
  position: relative;
  border-radius: 13px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  border: none;
  background: var(--theme-color);
  box-shadow: var(--box-shadow);
  z-index: 1;
  width: 100%;
}
.button-angsuran:hover {
  background: #fbab44;
  color: black;
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
