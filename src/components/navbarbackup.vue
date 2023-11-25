<template>
  <div>
    <!-- Tampilan drawer saat responsive -->
    <v-navigation-drawer v-model="drawer" app temporary white>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="../assets/img/logo/Auto-Jaja.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">JajaAuto</v-list-item-title>=
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <div>
        <v-list>
          <v-list-item
            v-for="([icon, text, link], i) in items"
            :key="i"
            :to="link"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <router-view></router-view>
      </div>
    </v-navigation-drawer>
    <!-- Tampilan Navabar -->
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      class="px-15"
      :class="{ expand: flat }"
      :style="{
        'background-image': `url(${backgroundImage})`,
        'background-size': 'cover',
        'background-color': '#FBAB44 ',
      }"
      style="background-color: black  max-height: 100px; height: 100px; "
    >
      <v-toolbar-title>
        <router-link to="/" style="text-decoration: none">
          <v-img src="../assets/img/logo/Auto-Jaja.png" class="logo" />
        </router-link>
      </v-toolbar-title>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
        style="margin-top: 20px; margin-left: 50px"
      />
      <div v-else style="margin-top: 30px; width: 100%" class="ms-5">
        <v-row style="display: flex; justify-content: space-between">
          <v-col cols="6">
            <v-hover v-slot="{ hover }">
              <v-btn
                text
                @click="goToKategori"
                @mouseover="hover = true"
                @mouseleave="hover = false"
                class="mr-5"
                :style="{
                  'background-color': hover ? '#white' : '#white',
                  'border-bottom':
                    isButtonClicked || hover ? '3px solid #207ACE' : '',
                }"
              >
                <span
                  style="
                    color: #207ace;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 0.2px;
                  "
                >
                  PRODUCT
                </span>
              </v-btn>
            </v-hover>
            <v-hover v-slot="{ hover }">
              <v-btn
                text
                @click="goToTentang"
                class="mr-5"
                :style="{
                  'background-color': hover ? '#white' : '#white',
                  'border-bottom':
                    isButtonClicked || hover ? '3px solid #207ACE' : '',
                }"
              >
                <span
                  class="font-katarasa text-none px-2 __btn-Home-text"
                  style="
                    color: #207ace;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 0.2px;
                  "
                >
                  Tentang Kami</span
                ></v-btn
              >
            </v-hover>
            <v-hover v-slot="{ hover }">
              <v-btn
                text
                @click="goToList"
                class="mr-5"
                :style="{
                  'background-color': hover ? '#white' : '#white',
                  'border-bottom':
                    isButtonClicked || hover ? '3px solid #207ACE' : '',
                }"
              >
                <span
                  class="font-katarasa text-none px-2 __btn-Home-text"
                  style="
                    color: #207ace;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    letter-spacing: 0.2px;
                  "
                  >FAQ</span
                ></v-btn
              >
            </v-hover></v-col
          >

          <v-col cols="6">
            <!-- <div
              style="
                display: flex;
                justify-content: flex-end;
                margin-bottom: -20px;
              "
            >
              <v-hover v-slot="{ hover }">
                <v-btn
                  v-if="isLoggedIn !== ''"
                  text
                  @click="goToLogin"
                  class="mr-2"
                  :style="{ 'background-color': hover ? '#FBAB44' : '#207ACE' }"
                >
                  <span
                    class="font-katarasa text-none px-2 __btn-Promo-text"
                    style="color: white"
                  >
                    Login
                  </span>
                </v-btn>
                <template v-else>
                  <v-btn
                    text
                    @click="logout"
                    class="mr-2"
                    :style="{
                      'background-color': hover ? '#FBAB44' : '#207ACE',
                      'border-radius': '25px',
                    }"
                  >
                    <span
                      class="font-katarasa text-none px-2 __btn-Promo-text"
                      style="color: white"
                    >
                      Logout
                    </span>
                  </v-btn>
                </template>
              </v-hover>
            </div> -->
          </v-col>
        </v-row>
        <!-- <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
                  <span class="mr-2">Contate-nos</span>
              </v-btn> -->
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
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
      ["mdi-ballot", "FAQ", "/faq"],
    ], //tampilan yang muncul pada drawer
  }),
  props: {
    color: String, //untuk mengatur warna komponen
    flat: Boolean, //untuk mengatur apakah komponen memiliki tampilan datar atau tidak
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("token"); //megambil token
    this.checkLoginStatus(); // Cek status login saat komponen dimuat
  },
  methods: {
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

    // Fungsi untuk memanggil halaman lain
    goToHome() {
      this.$router.push("/");
    },
    goToTentang() {
      this.$router.push("/tentang");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToMenu() {
      this.$router.push("/Menu");
    },
    goToProduct() {
      this.$router.push("/Product");
    },
    goToKategori() {
      this.$router.push("/kategori");
      this.isButtonClicked = true;
    },
    goToList() {
      this.$router.push("/faq");
    },
    goToLogin() {
      this.$router.push("/loginaca");
    },
    goToDaftar() {
      this.$router.push("/Daftar");
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
