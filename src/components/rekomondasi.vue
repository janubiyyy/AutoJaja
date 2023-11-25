<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <h3 style="color: #207ACE;" class="car-single-title">
        Rekomendasi
      </h3>
      <!-- <router-link
        :to="'/kategori'"
        href="#"
        style="color: #207ACE"
        class="mt-5"
        >View More</router-link
      > -->
    </div>
    <div class="container">
      <div class="row">
        <div
          v-for="c in filteredCarItems.slice(0, limit)"
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
              <!-- <span class="car-status status-1">Used</span> -->
              <center>
                <img
                  :src="c.images[0].imagePath"
                  style="width: 150px; height: 100px"
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
                  >Rp.{{ formatPrice(c.price) }}</span
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
                  <div><li>10.000/Km</li></div>
                </v-col>
              </v-row>

              <button
                style="
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
                        "
                @click="handledetail(c.slug)"
                class=""
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navigation from "../components/backup";
import foote from "../components/Footer";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import axios from "axios";

export default {
  data() {
    return {
      carItems: [], // Daftar mobil dari response API
      filteredCarItems: [], // Daftar mobil yang sudah difilter
      limit: 4, // Batasan jumlah mobil yang ditampilkan
      selectedCarType: "1", // Opsi yang dipilih untuk Car Brand
      selectedCarModel: "1", // Opsi yang dipilih untuk Car Models
      selectedPriceRange: "1", // Opsi yang dipilih untuk Price Range
      idcar: "",
    };
  },
  computed: {
    calculateHeight() {
      // calculate the height of the carousel based on the aspect ratio of the slides
      return `${(9 / 29) * this.$vuetify.breakpoint.width}px`;
    },
  },
  mounted() {
    this.fetchCarItems();
    this.handledetail(slug);
  },
  methods: {
    handleImageError(event) {
      event.target.src = require("../assets/img/kosong/1.png");
    },
    fetchCarItems() {
      axios
        .get("https://api.jaja.id/produk/get", {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          this.carItems = response.data.data;
          this.filteredCarItems = [...this.carItems];
          console.log("Ini responsenya:", response.data.data);
          console.log("Ini isinya:", this.carItems);
        })
        .catch((error) => console.log(error));
    },
    formatPrice(price) {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(price);
    },
    handledetail(slug) {
      this.idcar = slug;
      console.log("idcars", this.idcar);
      localStorage.setItem("idcar", this.idcar);
      this.$router.push({ path: "/detail", query: { id: this.idcar } });

      // Refresh halaman dan gulirkan ke bagian paling atas
      window.location.reload();
      window.scrollTo(0, 0);
    },
  },

  components: {
    navigation,
    foote,
  },
};
</script>
