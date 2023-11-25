<template>
  <div class="home-3">
    <!-- header area -->
    <navigation />
    <main class="main">
      <div class="about-area pb-120 padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-right wow fadeInRight" data-wow-delay=".25s">
                <div class="site-heading mb-3">
                  <span class="site-title-tagline justify-content-start">
                    <i class="flaticon-drive"></i> Tentang Kami
                  </span>

                  <h1 style="font-size: 40px;" class="site-title">
               Be Fast
                  </h1>
                 
                </div>
                <p
                  style="color: #000;
                  display: flex;"
                >
                Menjadi yang tercepat baik dalam Kecepatan untuk Menanggapi, Efisiensi dalam Memberikan Pelayanan, dan Responsivitas dalam bekerja. 
                </p>

                <div class="site-heading mb-3">
               
                  <h1 style="font-size: 40px;" class="site-title">
                    Be Accurate
                  </h1>
                 
                </div>
                <p
                  style="color: #000;
                  display: flex;"
                >
                Bertanggung jawab untuk memberikan Informasi yang benar, hasil yang tepat dan layanan yang akurat. Baik dalam pengukuran atau perhitungan, dan kecermatan dalam setiap aspek pekerjaan atau layanan yang diberikan.
                </p>

                
                <div class="site-heading mb-3">
               
               <h1 style="font-size: 40px;" class="site-title">
                Be The Best
               </h1>
              
             </div>
             <p
               style="color: #000;
               display: flex;"
             >
             Kami selalu Menetapkan standar kualitas yang tinggi untuk produk atau layanan dan berkomitmen untuk memenuhi atau melebihi kebutuhan konsumen, dan memberikan pelayanan yang sebaik baiknya untuk konsumen
             </p>

                
                <button class="button-1 mt-4 mr-3">
                  <router-link to="/kategori">Cari Mobil</router-link>
                </button>
                <button
                  to="/kategori"
                  class="button-2 mt-4"
                  @click="redirectWhatsapp"
                >
                  Kontak Kami
                </button>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-left wow fadeInLeft" data-wow-delay=".25s">
                <div class="about-img">
                  <img style="width: 100%; border-radius: 10%;" src="../assets/img/about/haha.jpg" alt="" />
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

.carousel {
  background: #fafafa;
  margin-bottom: 40px;
}

.button-1 {
  font-size: 16px;
  color: var(--color-white);
  padding: 6px 10px;
  transition: all 0.5s;
  text-transform: capitalize;
  position: relative;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  border: 2px solid var(--theme-color); /* Ubah warna outline menjadi biru */
  background: var(--theme-color);
  box-shadow: var(--box-shadow);
  z-index: 1;
}
.button-2 {
  font-size: 16px;
  color: var(--theme-color);
  padding: 6px 10px;
  transition: all 0.5s;
  text-transform: capitalize;
  position: relative;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  border: 2px solid var(--theme-color); /* Ubah warna outline menjadi biru */
  box-shadow: var(--box-shadow);
  z-index: 1;
}
.carousel-cell {
  width: 200%;
  height: auto;
  margin-right: 10px;
  /* background-color: #eee; */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  /* content: counter(carousel-cell); */
  line-height: 200px;
  font-size: 80px;
  color: white;
}

.carousel-nav .carousel-cell {
  height: 80px;
  width: 100px;
}

.carousel-nav .carousel-cell:before {
  font-size: 50px;
  line-height: 80px;
}

.carousel-nav .carousel-cell.is-nav-selected {
  background: #ed2;
}
</style>
<script scope>
import navigation from "../components/backup.vue";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import foote from "../components/Footer";

export default {
  name: "About",
  methods: {
    redirectWhatsapp() {
      const phoneNumber = "+6281990181108"; // Nomor WhatsApp dengan kode negara +62
      const message =
        "Halo, saya perlu bantuan nih, apakah bisa bantu saya untuk menjelaskan tentang jaja auto?";
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.location.href = url;
    },
  },
  components: {
    navigation,
    foote,
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
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .padding {
    margin-top: 35%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .padding {
    margin-top: 30%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .padding {
    margin-top: 25%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .padding {
    margin-top: 20%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .padding {
    margin-top: 20%;
  }
}
</style>
