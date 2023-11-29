<template>
  <div class="home-3">
    <!-- footer area -->
    <footer style="background: #0f5392; position: relative; z-index: 1">
      <div class="footer-widget">
        <div class="container">
          <div class="row footer-widget-wrapper pt-100 pb-70">
            <a href="#" class="footer-logo">
              <img
                src='../assets/img/homepage/jaja-footer.png'
                alt=""
                style="max-width: 200px"
              />
            </a>
            <!-- <li>
                    <router-link :to="'/faq'" style="font-size: 16px"
                      ><i class="fas fa-caret-right"></i> Jaja Auto merupakan Perusahaan di bidang Penjualan Otomotif yang memfasilitasi New Car, Used Car, Trade in. Kami berupaya untuk memberikan Pelayanan dengan Kualitas terbaik, dengan Berbagai Macam Pilihan Mobil Berkualitas untuk Kalian</router-link
                    >
                  </li> -->
            <!-- <div class="col-md-6 col-lg-4">
              <div class="footer-widget-box about-us">
                <a href="#" class="footer-logo">
                  <img src="../assets/img/foot/jajaauto.png" alt="" />
                </a>
                <p class="mb-3">
                  We are many variations of passages available but the majority
                  have suffered alteration in some form by injected humour words
                  believable.
                </p>
                <div class="footer-contact"
                  <li>
                    <a href="tel:+21236547898"
                      ><i class="far fa-phone"></i>+2 123 654 7898</a
                    >
                  </li>
                  <li>
                    <i class="far fa-map-marker-alt"></i>Jl.H. Baping Raya No.
                    100 Gedung S, Ciracas Jakarta Timur, 13740
                  </li>
                  <li>
                    <a href="mailto:info@example.com"
                      ><i class="far fa-envelope"></i>jajadeveloper@gmail.com</a
                    >
                  </li>
                </div>
              </div>
            </div> -->
            <div class="col-md-6 col-lg-3">
              <!-- <h4 class="judul">Jaja Auto</h4> -->
              <div class="">
                <!-- <li>
                    <router-link :to="'/tentang'" style="font-size: 16px"
                      ><i class="fas fa-caret-right"></i> About us</router-link
                    >
                  </li> -->
                <span>
                  <router-link :to="'/faq'" style="font-size: 16px"
                    ><i class="fas fa-caret-right"></i> Jaja Auto merupakan
                    Perusahaan di bidang Penjualan Otomotif yang memfasilitasi
                    New Car, Used Car, Trade in. Kami berupaya untuk memberikan
                    Pelayanan dengan Kualitas terbaik, dengan Berbagai Macam
                    Pilihan Mobil Berkualitas untuk Kalian</router-link
                  >
                </span>
                <!-- <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=6287888337555"
                      style="font-size: 16px"
                      ><i class="fas fa-caret-right"></i> Contact Us</a
                    >
                  </li> -->
              </div>
            </div>
            <div class="col-md-6 col-lg-2">
              <div class="footer-widget-box list">
                <h4 class="judul">Layanan</h4>
                <div class="">
                  <li>
                    <router-link :to="'/search'" style="font-size: 16px"
                      ><i class="fas fa-caret-right"></i> Beli
                      Mobil</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="'/search'" style="font-size: 16px"
                      ><i class="fas fa-caret-right"></i> Jual
                      Mobil</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="'/search'" style="font-size: 16px"
                      ><i class="fas fa-caret-right"></i> Tukar
                      Tambah</router-link
                    >
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2">
              <div class="footer-widget-box list">
                <h4 class="judul">Bantuan</h4>
                <div class="">
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=6287888337555"
                      style="font-size: 16px"
                      ><i class="fas fa-caret-right"></i> Hubungi Kami</a
                    >
                  </li>
                  <li>
                    <a href="https://jsonx.jaja.id/tentang-jaja-id"
                      style="font-size: 16px" ><i
                        class="fas fa-caret-right"
                      ></i>
                      Lokasi</a
                    >
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="footer-widget-box list">
                <div style="display: flex; justify-content: center">
                  <h4
                    style="
                      color: var(--color-white);
                      font-size: 20px;
                      padding-bottom: 20px;
                      margin-bottom: 30px;
                      z-index: 1;
                    "
                  >
                    Partners
                  </h4>
                </div>

                <div class="footer-newsletter">
                  <span class="d-flex">
                    <card class="perusahaan">
                      <a href="https://masterdiskon.com/">
                        <img
                          src="../assets/img/foot/masdis.png"
                          class="image-perusahaan"
                          alt=""
                      /></a> </card
                    >&emsp;
                    <card class="perusahaan">
                      <a href="https://jaja.id/">
                        <img
                          src="../assets/img/foot/jajaid.png"
                          class="image-perusahaan"
                          alt=""
                        />
                      </a> </card
                    >&emsp;
                    <card class="perusahaan">
                      <a href="https://rajacepat.com/">
                        <img
                          src="../assets/img/foot/race.png"
                          class="image-perusahaan"
                          alt=""
                      /></a> </card
                    >&emsp;
                  </span>
                  <span class="d-flex mt-3">
                    <card class="perusahaan">
                      <a href="https://eurekalogistics.co.id/">
                        <img
                          src="../assets/img/foot/elogs.png"
                          class="image-perusahaan"
                          alt=""
                      /></a> </card
                    >&emsp;
                    <card class="perusahaan">
                      <a href="https://siplah.kemdikbud.go.id/">
                        <img
                          src="../assets/img/foot/siplah.png"
                          class="image-perusahaan"
                          alt=""
                      /></a> </card
                    >&emsp;
                    <card class="perusahaan">
                      <a href="https://www.eurekabookhouse.co.id/">
                        <img
                          src="../assets/img/foot/eurekabook.png"
                          class="image-perusahaan"
                          alt=""
                      /></a> </card
                    >&emsp;
                  </span>
                </div>
                <br />
              </div>
            </div>

            <div class="col-md-6 col-lg-2">
              <div class="footer-widget-box list">
                <div style="display: flex; justify-content: center">
                  <h4
                    style="
                      color: var(--color-white);
                      font-size: 20px;
                      padding-bottom: 20px;
                      margin-bottom: 30px;
                      z-index: 1;
                    "
                  >
                    Download
                  </h4>
                </div>

                <div class="d-flex">
                  <img
                    src="../assets/img/foot/appplay.png"
                    width="199px"
                    height="133px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 align-self-center">
              <p class="copyright-text">
                &copy; Copyright <span id="date"></span>
                <a href="#"> JajaAuto </a> All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 align-self-center">
              <div class="footer-social">
                <li>
                  <a
                    href="https://www.facebook.com/Jajaid-Marketplace-101914401806448/"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@jaja_auto?_t=8hlHN51KqPK&_r=1"
                    ><i class="fa-brands fa-tiktok"></i
                  ></a>
                </li>
                <li>
                  <a href="https://instagram.com/jaja.auto?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=6287888337555"
                    ><i class="fab fa-whatsapp"></i
                  ></a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer area end -->
  </div>
</template>

<style scoped>
.perusahaan {
  display: flex;
  height: 50px;
  padding: 10px;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  background: var(--kata-rasa-background-light, #fbfbfb);
}
.img-perusahaan {
  width: 92.556px;
  height: 35px;
  flex-shrink: 0;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}
.judul {
  color: #fcb963;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 30px;
  font-size: 20px;
  z-index: 1;
}
.isi {
  color: white;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 30px;
  font-size: 10px;
  z-index: 1;
}
</style>
<style scoped>
/* @import "../assets/css/all-fontawesome.min.css"; */
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
