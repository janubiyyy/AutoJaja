<template>
  <header class="header fixed-navbar">
    <!-- top header -->
    <div class="header-top">
      <div class="container">
        <div class="header-top-wrapper">
          <div class="header-top-left">
            <div class="header-top-contact">
              <ul>
                <li>
                  <a href="jajabussdev@gmail.com"
                    ><i style="color: #fbab44" class="far fa-envelopes"></i>
                    jajabussdev@gmail.com</a
                  >
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=6282113840369"
                    ><i style="color: #fbab44" class="far fa-phone-volume"></i>
                    +62 878 8833 7555</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i style="color: #fbab44" class="far fa-alarm-clock"></i>
                    Mon - Fri (08AM - 04PM)</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="header-top-right">
            <div class="header-top-social">
              <span>Follow Us: </span>
              <a href="https://www.facebook.com/jajaidofficial"
                ><i class="fab fa-facebook"></i
              ></a>
              <a href="https://twitter.com/jajaid_"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="https://instagram.com/jaja.auto?igshid=MzRlODBiNWFlZA=="
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-navigation" style="background-color: white">
      <nav
        class="navbar navbar-expand-lg"
        style="
          background-color: white;
          position: fixed;
          width: 100%;
          z-index: 999;
          height: 80px;
        "
      >
        <div class="container position-relative">
          <router-link :to="'/'" class="navbar-brand" style="width: 130px">
            <img src="../assets/img/about/warna-logo.png" alt="logo" />
          </router-link>
          <div class="mobile-menu-right">
            <!-- <div class="search-btn">
              <button type="button" class="nav-right-link">
                <i class="far fa-search"></i>
              </button>
            </div> -->
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleMenu"
            >
              <span class="navbar-toggler-mobile-icon">
                <i class="far fa-bars"></i>
              </span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" data-bs-toggle="dropdown">
                  <i style="color: #0c5eaa" class="fa-duotone fa-car mr-1"></i>
                  <span class="mr-4">Dapatkan Aplikasi</span>|
                </a>
                <ul class="dropdown-menu fade-down">
                  <div
                    class="row"
                    style="
                      padding-right: 5%;
                      padding-top: 3%;
                      padding-bottom: 3%;
                    "
                  >
                    <div class="col-lg-7">
                      <img
                        src="../assets/img/navbar/download.png"
                        style="width: 230px; height: 230px"
                        alt="Blog Image"
                      />
                    </div>
                    <div class="col-lg-5">
                      <div class="get-app__content">
                        <p>
                          <b style="font-size: 18px"
                            >Dapatkan Aplikasi Jaja Auto!</b
                          >
                        </p>

                        <p style="font-size: small">
                          Gaperlu khawatir! Sekarang kamu bisa lakukan Transaksi
                          hanya dalam Genggaman!
                        </p>
                        <div class="row">
                          <div class="col-lg-5">
                            <img
                              src="../assets/img/foot/qr.jpeg"
                              alt="Blog Image"
                              style="width: 100%"
                            />
                          </div>
                          <div class="col-lg-7">
                            <img
                              src="../assets/img/foot/appplay.png"
                              alt="Blog Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="nav-item">
                <router-link :to="'/'" class="nav-link">
                  <span class="mr-4">Beranda</span
                  ><span class="garis">|</span></router-link
                >
              </li>

              <!-- <li class="nav-item">
                <router-link :to="'/kategori'" class="nav-link">
                  <span class="mr-4">Product</span
                  ><span class="garis">|</span></router-link
                >
              </li> -->
              <li class="nav-item">
                <router-link :to="'/tentang'" class="nav-link">
                  <span class="mr-4">Tentang Kami</span></router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link :to="'/faq'" class="nav-link" href="about.html">
                  <span class="mr-4">FAQ</span>
                </router-link>
              </li> -->
            </ul>
          </div>

          <!-- search area -->
          <div class="search-area">
            <form action="#">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Keyword..."
                />
                <button type="submit" class="search-icon-btn">
                  <i class="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <!-- search area end -->
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* CSS to set the height of the main-navigation */
.main-navigation {
  padding: 0px 0; /* Adjust the top and bottom padding as needed */
  background-color: white;
}

/* CSS to set the height of the navbar links (nav-link) */
/* Center the text vertically within the navbar links */
.main-navigation .navbar-nav .nav-link {
  display: flex;
  align-items: center;
  line-height: 35px; /* Adjust this value as needed */
  /* Other styles for the navbar links */
}

.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .logo {
    width: 100px;
    height: 20px;
    margin-top: 40px;
    margin-right: 10px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .logo {
    width: 110px;
    height: 25px;
    margin-top: 40px;
    margin-right: 10px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .logo {
    width: 150px;
    height: 40px;
    margin-top: 50px;
    margin-right: 40px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .logo {
    width: 180px;
    height: 45px;
    margin-top: 50px;
    margin-right: 40px;
  }
}
@media (max-width: 995px) {
  .nav-item.dropdown {
    display: none;
  }
  .garis {
    display: none;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .logo {
    width: 150px;
    height: 42px;
    margin-top: 50px;
    margin-right: 40px;
  }
}
</style>

<script>
import Swal from "sweetalert2";

export default {
  data: () => ({
    currentRoute: "",
    showSearch: false,
    isMenuActive: false,
    carItems: [], // Daftar mobil dari response API
    filteredCarItems: [], // Daftar mobil yang sudah difilter
    uniqueCarTypes: [], // Fungsi Pencarian Berdasarkan Brand
    filteredCarModels: [], // Fungsi Pencarian Berdasarkan Model
    selectedCarType: "", // Opsi yang dipilih untuk Car Brand
    selectedCarModel: "", // Opsi yang dipilih untuk Car Models
    selectedPriceRange: "", // Opsi yang dipilih untuk Price Range
    isLoading: false, // Loading pada filter
    backgroundImage: require("@/assets/img/homepage/white.jpg"), //Image pada background image navbar
    visible: false, //Fungsi untuk mengaktifkan/ menonaktifkan login dan logout
    email: "", //email pada body api login
    password: "", //password pada body api login
    isLoggedIn: "", //menerangkan bahwa sudah login
    drawer: null, //drawer untuk responsive navbar
    hover: false, //responsive navbar
    isButtonClicked: false,
    isXs: false, //ukuran pada drawer
    items: [
      ["mdi-home-outline", "Home", "/"],
      ["mdi-car", "Product", "/kategori"],
      ["mdi-ballot", "About Us", "/tentang"],
      // ["mdi-ballot", "FAQ", "/faq"],
    ], //tampilan yang muncul pada drawer
  }),
  props: {
    color: String, //untuk mengatur warna komponen
    flat: Boolean, //untuk mengatur apakah komponen memiliki tampilan datar atau tidak
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("token"); //megambil token
    this.checkLoginStatus(); // Cek status login saat komponen dimuat
    this.fetchCarItems(); //Fungsi Produk
  },
  created() {
    this.currentRoute = this.$route.path;
  },
  watch: {
    $route(to, from) {
      this.currentRoute = to.path;
    },
  },
  methods: {
    showSearchArea() {
      this.showSearch = true;
      $(".nav-right").hide();
    },
    hideSearchArea() {
      this.showSearch = false;
      $(".nav-right").show();
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      // Get the target menu element
      const targetMenu = document.getElementById("main_nav");

      // Toggle the 'show' class on the target menu to control its visibility
      targetMenu.classList.toggle("show");
    },
    // fungsi  untuk periksa apakah token tersedia dalam localStorage
    checkLoginStatus() {
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token;
    },
    // Fungsi integrasi API login
    login() {
      const loginData = {
        email: "naxxthathink@gmail.com",
        password: "eurekadev2020",
      };

      fetch("https://jaja.id/backend/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Login gagal");
          }
        })
        .then((data) => {
          // Menyimpan token ke localStorage
          localStorage.setItem("token", data.data);

          // Mengubah status login menjadi true
          this.isLoggedIn = true;
          this.checkLoginStatus();

          // Menampilkan pesan login berhasil
          alert("Login berhasil");
        })
        .catch((error) => {
          console.error(error);
          // Menampilkan pesan login gagal
          alert("Login gagal");
        });
    },
    // Fungsi logout
    logout() {
      Swal.fire({
        title: "Logout",
        text: "Apakah Anda yakin ingin logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0C5EAA",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          // Tindakan jika pengguna mengklik "Ya"
          localStorage.clear();
          Swal.fire({
            title: "Logout berhasil",
            icon: "success",
            text: "Berhasil logout kembali pada Jaja Auto",
            showConfirmButton: true,
            confirmButtonColor: "#0C5EAA",
            timer: 1500,
          }).then(() => {
            this.$router.push("/loginaca");
          });
        }
      });
    },
    // Fungsi Produk Jaja Auto
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
          console.log("Ini responsenya:", response.data.data);
          console.log("Ini isinya:", this.carItems);
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
      this.filteredCarModels = this.carItems
        .filter((car) => car.brand === this.selectedCarType)
        .map((car) => car.model);
      this.selectedCarModel = ""; // Reset the selectedCarModel when the brand is changed
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

    // fungsi ukuran drawer
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  // Berfungsi untuk perubahan pada properti tersebut dan menjalankan fungsi yang terkait ketika nilai berubah
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
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
