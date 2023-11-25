<template>
  <div class="home-3">
    <!-- header area -->
    <navigation />
    <main class="main">
      <div class="about-area pb-120" style="margin-top: 15%">
        <section>
          <div style="position: relative">
            <img
              src="../assets/img/faq/1.png"
              style="width: 100%; height: 400px"
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
                padding-top: 170px;
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
          <center>
            <input
              class="search"
              type="text"
              v-model="carModelSearch"
              @input="filterCars"
              placeholder="Search your question, service, and your needs..."
            />
          </center>
        </div>
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
    </main>
    <foote />
  </div>
</template>

<script scope>
import navigation from "../components/backup.vue";
import foote from "../components/Footer";
import VueFaqAccordion from "vue-faq-accordion";

export default {
  name: "About",

  components: {
    navigation,
    foote,
    VueFaqAccordion,
  },
  data() {
    return {
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
  methods: {
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
  },
};
</script>
<style>
.accordion-header {
  cursor: pointer;
  height: auto;
  border-radius: 10px;
  border: 2px solid var(--color-neutral-neutral-02, #e4e3e3);
  background: var(--color-neutral-neutral-00, #fff);
  padding: 15px;

  margin-bottom: 5px;
  transition: 0.5s ease-in-out;
  color: var(--color-blue-blue-06, #0f5392);

  /* Button Big */
  /* font-family: Inter; */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
}

.accordion-content {
  background-color: white;
  transition: 0.5s ease-in-out;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  color: var(--color-neutral-neutral-08, #1f1c1c);
  /* font-family: Inter; */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.27px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .search {
    display: flex;
    width: 300px;
    height: 54px;
    padding: 10px;
    gap: 10px;
    border-radius: 20px;
    border: 2px solid var(--color-yellow-yellow-06, #e79b39);
    background: var(--color-neutral-neutral-00, #fff);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(-45px);
    z-index: 100 !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .search {
    display: flex;
    width: 500px;
    height: 54px;
    padding: 10px;
    gap: 10px;
    border-radius: 20px;
    border: 2px solid var(--color-yellow-yellow-06, #e79b39);
    background: var(--color-neutral-neutral-00, #fff);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(-45px);
    z-index: 100 !important;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .search {
    display: flex;
    width: 500px;
    height: 54px;
    padding: 10px;
    gap: 10px;
    border-radius: 20px;
    border: 2px solid var(--color-yellow-yellow-06, #e79b39);
    background: var(--color-neutral-neutral-00, #fff);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(-45px);
    z-index: 100 !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .search {
    display: flex;
    width: 500px;
    height: 54px;
    padding: 10px;
    gap: 10px;
    border-radius: 20px;
    border: 2px solid var(--color-yellow-yellow-06, #e79b39);
    background: var(--color-neutral-neutral-00, #fff);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(-45px);
    z-index: 100 !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .search {
    display: flex;
    width: 500px;
    height: 54px;
    padding: 10px;
    gap: 10px;
    border-radius: 20px;
    border: 2px solid var(--color-yellow-yellow-06, #e79b39);
    background: var(--color-neutral-neutral-00, #fff);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(-45px);
    z-index: 100 !important;
  }
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
