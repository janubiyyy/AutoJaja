
<template>
  <div class="home-3">
    <navigation />
    <main class="main">
      <!-- car single -->
      <div class="car-item-single bg py-120">
        <div class="container">
          <div class="car-single-wrapper" style="padding-top: 10%">
            <div class="row">
              <div class="col-lg-8">
                <div class="car-single-details">
                  <div class="car-single-widget">
                    <div class="car-single-top">
                      <v-chip
                        class="ma-2"
                        closable
                        color="#DEF3FF"
                        text-color="#207ACE"
                        label
                      >
                        Brand New
                      </v-chip>
                      <div class="judul">
                        <h3 style="color: black;" class="car-single-title">
                          {{ datadetail[0].model }}
                        </h3>
                      </div>
                      <div class="car-single-meta">
                        <li>
                          <i class="far fa-clock"></i> Listed On: Sat, Jan 25,
                          2023
                        </li>
                        <li><i class="far fa-eye"></i> Views: 850</li>
                      </div>
                    </div>
                    <div class="car-single-slider">
                      <div class="item-gallery">
                        <div class="flexslider-thumbnails">
                          <div class="" data-flickity>
                            <div class="carousel-cell">
                              <img
                                :src="currentImagePath"
                                style="width: 800px; height: 500px"
                                alt=""
                              />
                              <!-- responsive -->
                              <!-- <img
                                :src="currentImagePath"
                                style="width: 100%; height: auto"
                                alt=""
                              /> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                              <h6>{{ datadetail[0].grades[0].type }}</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                          <div class="car-key-item">
                            <div class="car-key-icon">
                              <i class="flaticon-gas-station"></i>
                            </div>
                            <div class="car-key-content">
                              <span>Type Code</span>
                              <h6>{{ datadetail[0].grades[0].typeCode }}</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                          <div class="car-key-item">
                            <div class="car-key-icon">
                              <i class="flaticon-speedometer"></i>
                            </div>
                            <div class="car-key-content">
                              <span>Mileage</span>
                              <h6>
                                10000-50000 KM/Tahun
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6">
                          <div class="car-key-item">
                            <div class="car-key-icon">
                              <i class="flaticon-drive"></i>
                            </div>
                            <div class="car-key-content" ref="resultsContainer">
                              <span>Color</span>
                              <h6>{{ datadetail[0].images[0].colorName }}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />

                    <h4 class="mb-3">Deskripsi</h4>
                    <hr />
                    <div class="mb-4">
                      <p>
                        {{ datadetail[0].deskripsi }}
                      </p>
                    </div>
                  </div>
                  <div class="car-single-widget">
                    <h5 class="mb-3">
                      Dapatkan Pengajuan Kredit Terbaik Anda
                    </h5>

                  <div class="card">
                    <div class="card-body">
                      <div class="container mb-5 mt-3">
                        <div class="row">
                          <div class="col-auto me-auto">
                            <p style="color: #7e8d9f;font-size: 20px;">
                              ID Product >>
                              <strong>{{ datadetail[0].productId }}</strong>
                            </p>
                          </div>
                          <div class="col-auto">
                            <v-btn
                              text
                              @click="printContent"
                              class="btn btn-light text-capitalizevo"
                              data-mdb-ripple-color="dark"
                              ><i class="fa fa-download text-primary"></i>
                              Download
                            </v-btn>
                            <!-- <v-btn
                              text
                              @click="downloadAsPDF"
                              class="btn btn-light text-capitalize"
                              data-mdb-ripple-color="dark"
                              ><i class="far fa-file-pdf text-danger"></i>
                              Export
                            </v-btn> -->
                          </div>
                        </div>
                        <hr />
                        <div class="print">
                          <div class="container">
                            <div class="col-md-12">
                              <div class="">
                                <img
                                  src="../assets/img/logo/Auto-Jaja.png"
                                  style="width: 200px; height: 55px; margin-top: 10px; margin-right: 40px;"
                    <div class="car-single-form">
                      <form @submit.prevent="submitOrderKredit">
                        <v-row no-gutters>
                          <v-col>
                            <div class="form-group mr-2">
                              <input
                                type="text"
                                class="form-control"
                                v-model="displayedProfile.name"
                                placeholder="Nama Lengkap"
                              />
                            </div>
                            </div>
                            <br />
                            <br />
                            <div class="row">
                              <div class="col-6">
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div class="fw-bold">Jumlah Pinjaman</div>
                                  </div>
                                  <span style="color: #207ACE;">
                                    Rp.{{
                                      formatPrice(
                                        datadetail[0].price
                                      ).toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                      })
                                    }}</span
                                  >
                                </li>
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div
                                      class="font_pertama"
                                      style="font-family: Poppins, sans-serif; !important"
                                    >
                                      Angsuran Perbulan
                                    </div>
                                  </div>
                                  <span
                                    class="font_pertama"
                                    style="color: #207ACE;"
                                  >
                                    {{ formatPrice(hasilAwal) }}</span
                                  >
                                </li>
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div class="fw-bold">Bunga Perbulan</div>
                                  </div>
                                  <span
                                    style="color: #207ACE; font-family: Roboto, sans-serif !important;"
                                  >
                                    {{
                                      formatPrice(angsuranBungaPerBulan)
                                    }}</span
                                  >
                                </li>
                                <hr />
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div class="fw-bold">Total Angsuran</div>
                                  </div>
                                  <span style="color: #207ACE;">
                                    Rp.{{
                                      formatPrice(totalangsuranperbulan)
                                    }}</span
                                  >
                                </li>
                              </div>
                              <div class="col-6">
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div class="fw-bold">Model</div>
                                  </div>
                                  <span style="color: #207ACE;">{{
                                    datadetail[0].model
                                  }}</span>
                                </li>
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div class="fw-bold">Tipe</div>
                                  </div>
                                  <span style="color: #207ACE;">{{
                                    selectedTipe
                                  }}</span>
                                </li>
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div class="fw-bold">Jangka Waktu</div>
                                  </div>
                                  <span style="color: #207ACE;"
                                    >{{ jangkaWaktu }}/bulan</span
                                  >
                                </li>
                                <li
                                  class="list-group-item d-flex justify-content-between align-items-start"
                                >
                                  <div class="ms-2 me-auto">
                                    <div class="fw-bold">Bunga</div>
                                  </div>
                                  <span style="color: #207ACE;">
                                    {{ bunga }}%</span
                                  >
                                </li>
                              </div>
                            </div>
                            <br />
                            <hr />
                            <br />

                            <div class="row my-2 mx-1 justify-content-center">
                              <v-data-table
                                :headers="headers"
                                :items="tableData"
                                :search="search"
                                item-key="periode"
                                :footer-props="{
                                  'items-per-page-options': [
                                    12,
                                    24,
                                    36,
                                    48,
                                    60,
                                    -1,
                                  ],
                                  'items-per-page-text': 'Rows per page:',
                                  'show-current-page': false,
                                }"
                                :items-per-page="12"
                                class="car-single-overview"
                                :loading="isLoading"
                                loading-text="Loading... Please wait"
                              >
                                <!-- Slot untuk kolom periode -->
                                <template v-slot:item.periode="{ item }">
                                  Bulan {{ item.periode }}
                                </template>

                                <!-- Slot untuk kolom angsuranBunga -->
                                <template v-slot:item.angsuranBunga="{ item }">
                                  {{ item.angsuranBunga }}
                                </template>

                                <!-- Slot untuk kolom angsuranPokok -->
                                <template v-slot:item.angsuranPokok="{ item }">
                                  {{ item.angsuranPokok }}
                                </template>

                                <!-- Slot untuk kolom totalAngsuran -->
                                <template v-slot:item.totalAngsuran="{ item }">
                                  {{ item.totalAngsuran }}
                                </template>

                                <!-- Slot untuk kolom sisaPinjaman -->
                                <template v-slot:item.sisaPinjaman="{ item }">
                                  {{ item.sisaPinjaman }}
                                </template>

                                <!-- Footer -->
                                <template v-slot:footer>
                                  <v-row class="mb-6" no-gutters>
                                    <v-col>
                                      <b>Total</b>
                          </v-col>

                          <v-col>
                                      <b>{{ totalAngsuranBunga }}</b>
                            <div class="form-group">
                              <input
                                type="number"
                                class="form-control"
                                v-model="displayedProfile.phoneNumber"
                                placeholder="Whatsapp"
                              />
                            </div>
                          </v-col>

                        </v-row>
                        <v-row no-gutters>
                          <v-col>
                                      <b>{{ totalAngsuranPokok }}</b>
                            <div class="form-group mr-2">
                              <input
                                type="email"
                                class="form-control"
                                v-model="displayedProfile.email"
                                placeholder="Alamat Email"
                              />
                            </div>
                          </v-col>

                          <v-col>
                                      <b>{{ totalTotalAngsuran }}</b>
                            <div class="form-group">
                              <input
                                class="form-control"
                                v-model="displayedProfile.alamat_lengkap"
                                placeholder="Domisili"
                              />
                            </div>
                          </v-col>
                                    <v-col> </v-col>
                        </v-row>
                                </template>
                              </v-data-table>
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <button
                            type="submit"
                            style="
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
                  "
                          >
                            Ajukan Angsuran
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="car-single-widget">
                  <div class="hargaotr">
                    <h5 class="car-single-price">Harga OTR</h5>
                    <span
                      class="mt-5"
                      style="
                                  color: #1F1C1C;
                                  font-size: 34px;
                                  font-weight: bold;
                                  padding: 0px 10px 0px 0px;
                                "
                    >
                      Rp.{{
                        formatPrice(datadetail[0].price).toLocaleString(
                          "id-ID",
                          {
                            style: "currency",
                            currency: "IDR",
                          }
                        )
                      }}
                    </span>
                  </div>

                  <div class="form-group mt-5">
                    <h5 class="car-single-price">Tipe Mobil</h5>
                    <select
                      class="nice-select"
                      style="width: 100%"
                      id="typeId"
                      v-model="selectedTipe"
                      @change="getTypeData()"
                    >
                      <option value="">Pilihan Tipe</option>
                      <option
                        v-for="grades in datadetail[0].grades"
                        :key="grades.type"
                        :value="grades.type"
                      >
                        {{ grades.type }}
                      </option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div class="form-group mt-5">
                    <h5 class="car-single-price">Warna Mobil</h5>
                    <v-card flat>
                      <v-radio-group v-model="selectedColor" inline>
                        <v-row>
                          <v-col
                            v-for="(image, index) in datadetail[0].images"
                            :key="index"
                            cols="6"
                            cols="4"
                          >
                            <v-radio
                              :color="radioColor(image.productImageId)"
                              :label="image.colorName"
                              :value="image.productImageId"
                              @click="changeImage(image.imagePath)"
                            ></v-radio>
                          </v-col>
                        </v-row>
                      </v-radio-group>
                    </v-card>
                  </div>
                  <hr />
                  <v-tabs fixed-tabs bg-color="">
                    <v-tab style="color: #0c5eaa"> Angsuran </v-tab>
                    <v-tab style="color: #0c5eaa"> Sewa </v-tab>
                    <v-tab-item>
                      <v-card>
                        <v-card-text>
                          <div class="form-group mt-5">
                            <div class="form-group mt-5">
                              <div class="tipe">
                                <v-row class="mt-5">
                                  <v-col cols="6">
                                    <h5 class="car-single-price">
                                      Jangka Waktu
                                    </h5>
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="jangkaWaktu"
                                      v-model="tenorBulan"
                                    >
                                      <option value=""
                                        >Pilihan Jangka Waktu</option
                                      >
                                      <option value="">
                                        Pilihan Jangka Waktu
                                      </option>
                                      <option value="12">12 Bulan</option>
                                      <option value="24">24 Bulan</option>
                                      <option value="36">36 Bulan</option>
                                      <option value="48">48 Bulan</option>
                                      <option value="60">60 Bulan</option>
                                      <option value="72">72 Bulan</option>
                                    </select>
                                  </v-col>
                                  <v-col cols="6">
                                    <h5 class="car-single-price">
                                      Down Payment
                                    </h5>
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="bunga"
                                      v-model="dp"
                                    >
                                      <option value="">Pilihan Bunga</option>
                                      <option value="">Pilihan DP</option>
                                      <option value="10">10 %</option>
                                      <option value="20">20 %</option>
                                      <option value="30">30 %</option>
                                      <option value="40">40 %</option>
                                      <option value="50">50 %</option>
                                      <option value="60">60 %</option>
                                    </select>
                                  </v-col>
                                </v-row>
                                <v-row class="mt-5">
                                  <v-col cols="6">
                                    <h5 class="car-single-price">
                                      Mulai Bulan Pinjaman
                                    </h5>
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="awalbulan"
                                    >
                                      <option value="">
                                        Pilihan Bulan
                                      </option>
                                      <option value="Januari">Januari</option>
                                      <option value="Februari">Februari</option>
                                      <option value="Maret">Maret</option>
                                      <option value="April">April</option>
                                      <option value="Mei">Mei</option>
                                      <option value="Juni">Juni</option>
                                      <option value="Juli">Juli</option>
                                      <option value="Agustus">Agustus</option>
                                      <option value="September"
                                        >September</option
                                      >
                                      <option value="Oktober">Oktober</option>
                                      <option value="November">November</option>
                                      <option value="Desember">Desember</option>
                                    </select>
                                  </v-col>
                                  <v-col cols="6">
                                    <h5 class="car-single-price">
                                      Mulai Tahun Pinjaman
                                    </h5>
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="awaltahun"
                                    >
                                      <option value="">Pilihan Tahun</option>
                                      <option value="2023">2023</option>
                                      <option value="2024">2024</option>
                                      <option value="2025">2025</option>
                                      <option value="2026">2026</option>
                                      <option value="2027">2027</option>
                                      <option value="2028">2028</option>
                                    </select>
                                  </v-col>
                                </v-row>
                                <v-row class="mt-5">
                                  <v-col cols="6">
                                    <h5 class="car-single-price">
                                      Perhitungan Bunga
                                    </h5>
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="optionbunga"
                                    >
                                      <option value="">
                                        Pilihan Perhitungan Bunga
                                      </option>
                                      <option value="FLAT">FLAT</option>
                                      <!-- <option value="EFEKTIF">EFEKTIF</option>
                                      <option value="ANUITAS">ANUITAS</option> -->
                                    </select>
                                  </v-col>
                                  <v-col cols="6">
                                    <h5 class="car-single-price">
                                      Jenis Cicilan
                                    </h5>
                                    <select
                                      class="nice-select"
                                      style="width: 100%"
                                      v-model="jeniscicilan"
                                    >
                                      <option value=""
                                        >Pilihan Jenis Cicilan</option
                                      >
                                      <option value="Bulan">Bulanan</option>
                                      <!-- <option value="Tahun">Tahunan</option> -->
                                    </select>
                                  </v-col>
                                </v-row>
                              </div>
                              <v-row class="mt-5">
                                <v-col cols="12">
                                  <div>
                                    <button
                                      type="submit"
                                      @click="startLoading"
                                      :disabled="isLoading || !isFormValid"
                                      @click="calculateLoan"
                                      :disabled="isLoading"
                                      style="
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
              "
                                    >
                                      <div style="position: relative;">
                                        <span
                                          v-if="isLoading"
                                          class="loading-text"
                                          >Loading...</span
                                        >
                                        <span v-else
                                          >Hitung Simulasi Angsuran</span
                                        >
                                      </div>
                                    </button>
                                  </div>
                                </v-col>
                              </v-row>
                              <div class="form perhitungan">
                                <div class="rumus">
                              <div
                                class="modal"
                                tabindex="-1"
                                role="dialog"
                                :class="{ 'd-block': showModal }"
                              >
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h3 class="modal-title">
                                        Hasil Simulasi
                                      </h3>
                                      <button
                                        type="button"
                                        class="close"
                                        @click="closeModal"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <div v-if="result">
                                        <h5 class="mb-3">
                                          HASIL SIMULASI
                                        </h5>
                                        <v-row class="mt-5">
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              Merk Mobil
                                            </h5>
                                            <span>
                                              {{ datadetail[0].brand }}</span
                                            >
                                            <hr />
                                          </v-col>
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              Jenis Mobil
                                            </h5>
                                            <span>
                                              {{ datadetail[0].model }}</span
                                            >
                                            <hr />
                                          </v-col>
                                        </v-row>
                                        <v-row class="mt-5">
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              Harga OTR
                                            </h5>
                                            <span
                                              >Rp.
                                              {{
                                                formatPrice(result.otr)
                                              }}</span
                                            >
                                            <hr />
                                          </v-col>
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              Uang Muka
                                            </h5>
                                            <span>
                                              Rp.
                                              {{
                                                formatPrice(result.uangMuka)
                                              }}</span
                                            >
                                            <hr />
                                          </v-col>
                                        </v-row>
                                        <v-row class="mt-5">
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              Jumlah Pinjaman
                                            </h5>
                                            <span
                                              >Rp.
                                              {{
                                                formatPrice(
                                                  result.pokokHutangAwal
                                                )
                                              }}</span
                                            >
                                            <hr />
                                          </v-col>
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              Jangka Waktu
                                            </h5>
                                            <span>
                                              {{ result.tenorTahun }} Tahun /
                                              {{ result.tenorBulan }}
                                              Bulan</span
                                            >
                                            <hr />
                                          </v-col>
                                        </v-row>
                                        <v-row class="mt-5">
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              TDP
                                            </h5>
                                            <span>
                                              Rp.
                                              {{
                                                formatPrice(result.tdp)
                                              }}</span
                                            >
                                            <hr />
                                          </v-col>
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                              PH
                                            </h5>
                                            <span>
                                              Rp.
                                              {{
                                                formatPrice(
                                                  result.besaranTotalHutang
                                                )
                                              }}</span
                                            >
                                            <hr />
                                          </v-col>
                                        </v-row>
                                        <v-row class="mt-5">
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                        Angsuran Perbulan
                                              Suku Bunga
                                            </h5>
                                      <span
                                        style="color: var(--color-yellow-yellow-05, #1F1C1C); font-size: 24px; font-family: Roboto, sans-serif; font-weight: 700; letter-spacing: 0.48px;"
                                        class="car-single-price"
                                      >
                                        {{ formatPrice(hasilAwal) }}</span
                                            <span>
                                              {{ result.bungaFlatTenor }}</span
                                            >
                                            <hr />
                                          </v-col>
                                          <v-col cols="6">
                                            <h5 class="car-single-price">
                                        Bunga Perbulan
                                              Jumlah Angsuran
                                            </h5>
                                      <span
                                        style="color:  #1F1C1C; font-size: 24px; font-family: Roboto, sans-serif; font-weight: 700; letter-spacing: 0.48px;"
                                        class="car-single-price"
                                      >
                                            <span>
                                              Rp.
                                              {{
                                          formatPrice(angsuranBungaPerBulan)
                                                formatPrice(result.angsuran)
                                              }}</span
                                            >
                                            <hr />
                                          </v-col>
                                        </v-row>

                                  <br />
                                  <card
                                    style=" display: flex; padding: 20px 0px; flex-direction: column; justify-content: center; align-items: center; gap: 20px; align-self: stretch; border-radius: 5px; border: 1px solid var(--color-blue-blue-05, #207ACE);"
                                  >
                                    <span
                                      style="color: var(--color-blue-blue-05, #207ACE;font-size: 20px; font-family: Poppins; font-weight: 600; letter-spacing: 0.48px;"
                                    >
                                      Total Angsuran
                                    </span>
                                    <span
                                      class="mt-1"
                                      style="
                                  color: #1F1C1C;
                                  font-size: 34px;
                                  font-weight: bold;
                                  padding: 0px 5px 0px 0px;
                                "
                                    >
                                      Rp.{{
                                        formatPrice(totalangsuranperbulan)
                                      }}/Bln
                                    </span>
                                  </card>
                                </div>
                                <hr />
                                        <div
                                          class="choose-dealer-panel"
                                          style="
                                  margin-top: 10px;
                                  padding: 0px 0px 20px 0px;
                                  color: #8e8e8e;
                                  font-size: 12px;
                                "
                                        >
                                          <div
                                            class="duration-panel"
                                            style="
                                    padding: 10px 0px 0px 0px;
                                    color: #8e8e8e;
                                    font-size: 12px;
                                  "
                                          >
                                            <span class="text-ketentuanproduct"
                                      >* Harga yang ditampilkan untuk mobil ini
                                      berdasarkan OTR Jakarta</span
                                              >* Harga yang ditampilkan untuk
                                              mobil ini berdasarkan OTR
                                              Jakarta</span
                                            >
                                          </div>
                                          <div
@ -674,10 +542,11 @@
                                  "
                                          >
                                            <span class="text-ketentuanproduct"
                                      >* Semua gambar yang digunakan bertujuan
                                      untuk keperluan promosi. Warna asli dapat
                                      sedikit berbeda dari gambar bergantung
                                      pada resolusi device anda.</span
                                              >* Semua gambar yang digunakan
                                              bertujuan untuk keperluan promosi.
                                              Warna asli dapat sedikit berbeda
                                              dari gambar bergantung pada
                                              resolusi device anda.</span
                                            >
                                          </div>
                                          <div
@ -690,210 +559,203 @@
                                          >
                                            <span class="text-ketentuanproduct"
                                              >* Jaja Auto berhak untuk membuat
                                      perubahan pada model, warna, spesifikasi,
                                      dan aksesori kendaraan, tanpa
                                      pemberitahuan sebelumnya selama perubahan
                                              perubahan pada model, warna,
                                              spesifikasi, dan aksesori
                                              kendaraan, tanpa pemberitahuan
                                              sebelumnya selama perubahan
                                              dianggap masih sesuai.</span
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form perhitungan">
                                <br />
                                <hr />
                                <div class="car-single-widget">
                                  <div class="paket">
                                    <h5 class="mb-3">
                                      Pilihan Paket Angsuran Anda
                                <div v-if="result">
                                  <v-row class="mt-5">
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                        Merk Mobil
                                      </h5>
                                      <span> {{ datadetail[0].brand }}</span>
                                      <hr />
                                    </v-col>
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                        Jenis Mobil
                                      </h5>
                                      <span> {{ datadetail[0].model }}</span>
                                      <hr />
                                    </v-col>
                                  </v-row>
                                  <v-row class="mt-5">
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                          OTR
                                        Harga OTR
                                      </h5>
                                        <v-chip
                                          color="#0C5EAA"
                                          text-color="white"
                                          prepend-icon="mdi-account-circle"
                                      <span
                                        >Rp. {{ formatPrice(result.otr) }}</span
                                      >
                                          Rp.{{
                                            formatPrice(
                                              datadetail[0].price
                                            ).toLocaleString("id-ID", {
                                              style: "currency",
                                              currency: "IDR",
                                            })
                                          }}
                                        </v-chip>
                                      <hr />
                                    </v-col>
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                          Total Angsuran
                                        Uang Muka
                                      </h5>
                                        <v-chip
                                          color="#0C5EAA"
                                          text-color="white"
                                          prepend-icon="mdi-account-circle"
                                      <span>
                                        Rp.
                                        {{ formatPrice(result.uangMuka) }}</span
                                      >
                                          Rp.{{
                                            formatPrice(totalangsuranperbulan)
                                          }}
                                        </v-chip>
                                      <hr />
                                    </v-col>
                                  </v-row>

                                  <v-row class="mt-5">
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                          Mulai Meminjam
                                        Jumlah Pinjaman
                                      </h5>
                                        <v-chip
                                          color="#0C5EAA"
                                          text-color="white"
                                          prepend-icon="mdi-account-circle"
                                      <span
                                        >Rp.
                                        {{
                                          formatPrice(result.pokokHutangAwal)
                                        }}</span
                                      >
                                          {{ awalbulan }} {{ awaltahun }}
                                        </v-chip>
                                      <hr />
                                    </v-col>
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                          Tenor
                                        Jangka Waktu
                                      </h5>
                                        <v-chip
                                          color="#0C5EAA"
                                          text-color="white"
                                          prepend-icon="mdi-account-circle"
                                      <span>
                                        {{ result.tenorTahun }} Tahun /
                                        {{ result.tenorBulan }}
                                        Bulan</span
                                      >
                                          {{ jangkaWaktu }} Bulan
                                        </v-chip>
                                      <hr />
                                    </v-col>
                                  </v-row>

                                  <v-row class="mt-5">
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                          Perhitungan Bunga
                                        TDP
                                      </h5>
                                        <v-chip
                                          color="#0C5EAA"
                                          text-color="white"
                                          prepend-icon="mdi-account-circle"
                                      <span>
                                        Rp.
                                        {{ formatPrice(result.tdp) }}</span
                                      >
                                          {{ optionbunga }}
                                        </v-chip>
                                      <hr />
                                    </v-col>
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                          Jenis Cicilan
                                        PH
                                      </h5>
                                        <v-chip
                                          color="#0C5EAA"
                                          text-color="white"
                                          prepend-icon="mdi-account-circle"
                                      <span>
                                        Rp.
                                        {{
                                          formatPrice(result.besaranTotalHutang)
                                        }}</span
                                      >
                                          {{ jeniscicilan }}
                                        </v-chip>
                                      <hr />
                                    </v-col>
                                  </v-row>
                                    <hr />
                                  </div>
                                  <h5 class="mb-3">
                                    Dapatkan Pengajuan Kredit Terbaik Anda
                                  <v-row class="mt-5">
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                        Suku Bunga
                                      </h5>

                                  <div class="car-single-form">
                                    <form @submit.prevent="submitOrderKredit">
                                      <v-row no-gutters>
                                        <v-col>
                                          <div class="form-group mr-2">
                                            <input
                                              type="text"
                                              class="form-control"
                                              v-model="displayedProfile.name"
                                              placeholder="Nama Lengkap"
                                            />
                                          </div>
                                      <span> {{ result.bungaFlatTenor }}</span>
                                      <hr />
                                    </v-col>
                                        <v-col>
                                          <div class="form-group">
                                            <input
                                              type="number"
                                              class="form-control"
                                              v-model="
                                                displayedProfile.phoneNumber
                                              "
                                              placeholder="Whatsapp"
                                            />
                                          </div>
                                    <v-col cols="6">
                                      <h5 class="car-single-price">
                                        Jumlah Angsuran
                                      </h5>
                                      <span>
                                        Rp.
                                        {{ formatPrice(result.angsuran) }}</span
                                      >
                                      <hr />
                                    </v-col>
                                  </v-row>
                                      <v-row no-gutters>
                                        <v-col>
                                          <div class="form-group mr-2">
                                            <input
                                              type="email"
                                              class="form-control"
                                              v-model="displayedProfile.email"
                                              placeholder="Alamat Email"
                                            />

                                  <div
                                    class="choose-dealer-panel"
                                    style="
                                  margin-top: 10px;
                                  padding: 0px 0px 20px 0px;
                                  color: #8e8e8e;
                                  font-size: 12px;
                                "
                                  >
                                    <div
                                      class="duration-panel"
                                      style="
                                    padding: 10px 0px 0px 0px;
                                    color: #8e8e8e;
                                    font-size: 12px;
                                  "
                                    >
                                      <span class="text-ketentuanproduct"
                                        >* Harga yang ditampilkan untuk mobil
                                        ini berdasarkan OTR Jakarta</span
                                      >
                                    </div>
                                        </v-col>
                                        <v-col>
                                          <div class="form-group">
                                            <input
                                              class="form-control"
                                              v-model="
                                                displayedProfile.alamat_lengkap
                                    <div
                                      class="duration-panel"
                                      style="
                                    padding: 10px 0px 0px 0px;
                                    color: #8e8e8e;
                                    font-size: 12px;
                                  "
                                              placeholder="Domisili"
                                            />
                                    >
                                      <span class="text-ketentuanproduct"
                                        >* Semua gambar yang digunakan bertujuan
                                        untuk keperluan promosi. Warna asli
                                        dapat sedikit berbeda dari gambar
                                        bergantung pada resolusi device
                                        anda.</span
                                      >
                                    </div>
                                        </v-col>
                                      </v-row>

                                      <div class="form-group">
                                        <button
                                          type="submit"
                                    <div
                                      class="duration-panel"
                                      style="
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
                                    padding: 10px 0px 0px 0px;
                                    color: #8e8e8e;
                                    font-size: 12px;
                                  "
                                    >
                                          Ajukan Kredit
                                        </button>
                                      <span class="text-ketentuanproduct"
                                        >* Jaja Auto berhak untuk membuat
                                        perubahan pada model, warna,
                                        spesifikasi, dan aksesori kendaraan,
                                        tanpa pemberitahuan sebelumnya selama
                                        perubahan dianggap masih sesuai.</span
                                      >
                                    </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card>
                        <v-card-text>
                          <v-row class="mt-5">
                            <v-col cols="6">
                              <h5 class="car-single-price">
                                DURASI BERLANGGANAN
                              </h5>
                              <select
                                class="nice-select"
                                style="width: 100%"
                                id="durationId"
                                v-model="selectedDuration"
                                @change="getTypeDataDuration()"
                              >
@ -1237,6 +1099,12 @@ import Rekomondasi from "./rekomondasi.vue";
export default {
  data() {
    return {
      result: null,
      otr: "",
      dp: "",
      tenorBulan: "",
      showModal: false,

      tab: null,
      // limit: 4,
      packageId: 19897,
@ -1370,6 +1238,16 @@ export default {
      );
      return selectedGrades ? selectedGrades.packages : [];
    },
    formattedPrice() {
      if (this.datadetail.length > 0) {
        const price = this.datadetail[0].price;
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(price);
      }
      return "";
    },
  },
  mounted() {
    console.log("inii tokennnnn", localStorage.getItem("token"));
@ -1400,26 +1278,61 @@
    },
  },
  methods: {
    calculateLoan() {
      if (!this.tenorBulan || !this.dp) {
        return;
      }
      const otr = this.datadetail[0].price;
      const dppersen = this.dp;
      const tenor = this.tenorBulan;

      this.isLoading = true;

      const config = {
        headers: {
          Authorization: "Bearer qtUPRXyF8NsA3U37wcPNMw==",
        },
      };

      axios
        .get(
          `https://api.jaja.id/jauto/produk/count?otr=${otr}&dppersen=${dppersen}&tenor=${tenor}`,
          config
        )
        .then((response) => {
          const data = response.data.data;
          this.result = data;
          this.isLoading = false;
          this.showModal = true; // Menampilkan modal setelah menerima hasil perhitungan
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },
    closeModal() {
      this.showModal = false;
    },
    calculateTotal() {
      const tableData = this.tableData;
      let totalAngsuranBunga = 0;
      let totalAngsuranPokok = 0;
      let totalTotalAngsuran = 0;

      for (let i = 0; i < tableData.length; i++) {
        const row = tableData[i];
        totalAngsuranBunga += row.angsuranBunga;
        totalAngsuranPokok += row.angsuranPokok;
        totalTotalAngsuran += row.totalAngsuran;
      }

      this.totalAngsuranBunga = totalAngsuranBunga;
      this.totalAngsuranPokok = totalAngsuranPokok;
      this.totalTotalAngsuran = totalTotalAngsuran;
    },
    printContent() {
      var printContent = document.querySelector(".print").outerHTML;
      var originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent;

      // Tunggu beberapa saat sebelum mencetak
@ -1433,703 +1346,708 @@
        }, 1000); // Ubah waktu penundaan sesuai kebutuhan (dalam milidetik)
      }, 1000); // Ubah waktu penundaan sesuai kebutuhan (dalam milidetik)
    },

    downloadAsPDF() {
      // Inisialisasi objek jsPDF
      var doc = new jsPDF();

      // Ambil semua elemen tabel
      var tableElements = document.querySelectorAll(".print");

      // Menghitung jumlah elemen tabel yang sudah diproses
      var processedCount = 0;

      // Fungsi untuk menambahkan gambar ke dokumen PDF
      function addImageToPDF(imgData, index) {
        if (index > 0) {
          doc.addPage();
        }
        doc.addImage(imgData, "PNG", 10, 10, 190, 0);

        // Jika ini elemen terakhir, simpan dokumen PDF
        if (index === tableElements.length - 1) {
          doc.save("Angsuran.pdf");
        }
      }

      // Loop melalui setiap elemen tabel
      tableElements.forEach(function(tableElement, index) {
        // Konversi elemen tabel menjadi gambar menggunakan html2canvas
        html2canvas(tableElement).then(function(canvas) {
          var imgData = canvas.toDataURL("image/png");

          // Tambahkan gambar ke dokumen PDF
          addImageToPDF(imgData, index);

          // Tandai elemen tabel ini sudah diproses
          processedCount++;

          // Jika semua elemen tabel sudah diproses, lanjutkan ke langkah selanjutnya
          if (processedCount === tableElements.length) {
            // Setelah semua gambar ditambahkan ke dokumen PDF, simpan dokumen PDF
            doc.save("Angsuran.pdf");
          }
        });
      });
    },

    refreshData() {
      // Lakukan logika refresh data di sini
      // Contoh: Mengambil data terbaru dari server atau mereset state komponen

      // Setelah refresh selesai, ubah status pengunduhan menjadi false
      this.isDownloading = false;
    },
    angsuranBulanan() {
      const price = this.datadetail[0].price;
      const jangkaWaktu = parseInt(this.jangkaWaktu);
      const angsuranpokok = price / jangkaWaktu;
      this.angsuranpokok = angsuranpokok;
      console.log("hasil angsuran pokok: " + angsuranpokok);
    },
    startLoading() {
      if (this.isFormValid) {
        this.isLoading = true;

        setTimeout(() => {
          // Menjalankan hitungSimulasi setelah 2 detik
          this.hitungSimulasi();
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Harap isi semua select sebelum melanjutkan!",
        });
      }
      this.$nextTick(() => {
        // Scroll ke elemen dengan ref "resultsContainer"
        const resultsContainer = this.$refs.resultsContainer;
        if (resultsContainer) {
          const topOffset = resultsContainer.offsetTop;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      });
    },
    hitungSimulasi() {
      const price = parseFloat(this.datadetail[0].price.replace(/\./g, ""));
      const bunga = parseFloat(this.bunga) / 100;
      const jangkaWaktu = parseInt(this.jangkaWaktu);

      const totalBunga = price * bunga;
      const angsuranBungaPerBulan = totalBunga / 12;
      const hasilAwal = price / jangkaWaktu;
      const totalangsuranperbulan = hasilAwal + angsuranBungaPerBulan;
      const akhir = totalangsuranperbulan * jangkaWaktu;

      this.akhir = akhir;
      this.hasilAwal = hasilAwal.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      this.angsuranBungaPerBulan = angsuranBungaPerBulan.toLocaleString(
        "id-ID",
        { style: "currency", currency: "IDR" }
      );
      this.totalangsuranperbulan = totalangsuranperbulan
        .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
        .replace("Rp", "");

      console.log(
        "Angsuran Pokok per BULAN: Rp " +
          hasilAwal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      );
      console.log(
        "Angsuran Bunga per BULAN: Rp " +
          angsuranBungaPerBulan.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      );
      console.log(
        "Total Angsuran per BULAN: Rp " +
          totalangsuranperbulan.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      );

      let sisaPinjaman = price;

      // Menghitung dan menambahkan data ke dalam tabel
      this.tableData = []; // Mengosongkan data tabel sebelum menghitung ulang

      for (let i = 1; i <= jangkaWaktu; i++) {
        sisaPinjaman -= hasilAwal;

        this.tableData.push({
          periode: i,
          angsuranBunga: angsuranBungaPerBulan.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          }),
          angsuranPokok: hasilAwal.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          }),
          totalAngsuran: totalangsuranperbulan.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          }),
          sisaPinjaman: sisaPinjaman.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          }),
        });
      }
      this.isLoading = false;
      // Menghitung total dari kolom "Angsuran Bunga", "Angsuran Pokok", dan "Total Angsuran"
      // Menggunakan toLocaleString() pada variabel this.totalAngsuranBunga
      this.totalAngsuranBunga = (
        angsuranBungaPerBulan * jangkaWaktu
      ).toLocaleString("id-ID", { style: "currency", currency: "IDR" });

      // Menggunakan toLocaleString() pada variabel this.totalAngsuranPokok
      this.totalAngsuranPokok = (
        hasilAwal * jangkaWaktu
      ).toLocaleString("id-ID", { style: "currency", currency: "IDR" });

      // Menggunakan toLocaleString() pada variabel this.totalTotalAngsuran
      this.totalTotalAngsuran = (
        totalangsuranperbulan * jangkaWaktu
      ).toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    },
    formatPrice(value) {
      if (typeof value === "undefined") {
        return "";
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    submitOrder() {
      const id_jauto_produk_grades = this.selectedPackage
        .id_jauto_produk_grades;
      const fullName = this.displayedProfile.name;
      const whatsapp = this.displayedProfile.phoneNumber;
      const email = this.displayedProfile.email;
      const domisili = this.displayedProfile.alamat_lengkap;
      const cicilansewa = this.$data.cicilansewa;

      // Validasi form tidak boleh kosong
      if (
        fullName === "" ||
        whatsapp === "" ||
        email === "" ||
        domisili === ""
      ) {
        Swal.fire({
          title: "Pengajuan Gagal!",
          text: "Mohon lengkapi semua form anda",
          icon: "error",
          confirmButtonColor: "#0C5EAA",
        });
        return; // Menghentikan eksekusi fungsi jika ada yang kosong
      }

      // Validasi email dengan format @gmail.com
      if (!email.endsWith("@gmail.com")) {
        Swal.fire({
          title: "Pengajuan Gagal!",
          text: "Email harus menggunakan format @gmail.com.",
          icon: "error",
        });
        return;
      }

      // Validasi nomor dengan panjang 12 digit
      const phoneNumber = whatsapp.toString().trim();
      if (phoneNumber.length !== 12) {
        Swal.fire({
          title: "Pengajuan Gagal!",
          text: "Nomor harus terdiri dari 12 digit.",
          icon: "error",
        });
        return;
      }

      const body = {
        packageId: id_jauto_produk_grades,
        name: fullName,
        contactNumber: whatsapp,
        email: email,
        domisili: domisili,
        rentOrCredit: cicilansewa,
      };

      fetch("https://api.jaja.id/order/submit", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            Swal.fire({
              title: "Pengajuan Berhasil!",
              text:
                "Terima kasih pengajuan Anda akan kami proses dan admin kami akan menghubungi Anda dalam 1 x 24 jam",
              icon: "success",
              confirmButtonColor: "#0C5EAA",
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Gagal mengirim pesanan.",
              text: "Silakan coba lagi.",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Terjadi kesalahan.",
            text: "Silakan coba lagi.",
            confirmButtonColor: "#0C5EAA",
            icon: "error",
          });
          console.error(error);
        });
    },
    submitOrderKredit() {
      const packageId = this.$data.packageId;
      const fullName = this.displayedProfile.name;
      const whatsapp = this.displayedProfile.phoneNumber;
      const email = this.displayedProfile.email;
      const domisili = this.displayedProfile.alamat_lengkap;
      const cicilankredit = this.$data.cicilankredit;
      const jumlahPinjaman = this.datadetail[0].price;
      const lamaPinjaman = this.jangkawaktu;
      const bungaPerTahun = this.bunga;
      const angsuran = this.totalangsuranperbulan;
      const jenisCicilanWaktu = this.jeniscicilan;
      const mulaiPinjamanBulan = this.awalbulan;
      const mulaiPinjamanTahun = this.awaltahun;
      const perhitunganBunga = this.optionbunga;

      // Validasi form tidak boleh kosong
      if (
        fullName === "" ||
        whatsapp === "" ||
        email === "" ||
        domisili === "" ||
        jumlahPinjaman === "" ||
        lamaPinjaman === "" ||
        bungaPerTahun === "" ||
        angsuran === "" ||
        jenisCicilanWaktu === "" ||
        mulaiPinjamanBulan === "" ||
        mulaiPinjamanTahun === "" ||
        perhitunganBunga === ""
      ) {
        Swal.fire({
          title: "Pengajuan Gagal!",
          text: "Mohon lengkapi semua form anda",
          icon: "error",
          confirmButtonColor: "#0C5EAA",
        });
        return; // Menghentikan eksekusi fungsi jika ada yang kosong
      }

      // Validasi email dengan format @gmail.com
      if (!email.endsWith("@gmail.com")) {
        Swal.fire({
          title: "Pengajuan Gagal!",
          text: "Email harus menggunakan format @gmail.com.",
          icon: "error",
        });
        return;
      }

      // Validasi nomor dengan panjang 12 digit
      const phoneNumber = whatsapp.toString().trim();
      if (phoneNumber.length !== 12) {
        Swal.fire({
          title: "Pengajuan Gagal!",
          text: "Nomor harus terdiri dari 12 digit.",
          icon: "error",
        });
        return;
      }

      const body = {
        packageId: packageId,
        name: fullName,
        contactNumber: whatsapp,
        email: email,
        domisili: domisili,
        rentOrCredit: cicilankredit,
        jumlahPinjaman: this.datadetail[0].price,
        lamaPinjaman: this.jangkawaktu,
        bungaPerTahun: this.bunga,
        angsuran: this.totalangsuranperbulan,
        jenisCicilanWaktu: this.jeniscicilan,
        mulaiPinjamanBulan: this.awalbulan,
        mulaiPinjamanTahun: this.awaltahun,
        perhitunganBunga: this.optionbunga,
      };

      fetch("https://api.jaja.id/order/submit", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            Swal.fire({
              title: "Pengajuan Berhasil!",
              text:
                "Terima kasih pengajuan Anda akan kami proses dan admin kami akan menghubungi Anda dalam 1 x 24 jam",
              icon: "success",
              confirmButtonColor: "#0C5EAA",
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Gagal mengirim pesanan.",
              text: "Silakan coba lagi.",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Terjadi kesalahan.",
            text: "Silakan coba lagi.",
            confirmButtonColor: "#0C5EAA",
            icon: "error",
          });
          console.error(error);
        });
    },

    radioColor(productImageId) {
      return this.selectedColor === productImageId
        ? "#" + this.hexColorCode
        : "#207ACE";
    },
    changeImage(imagePath) {
      this.currentImagePath = imagePath;
    },

    loadImage(imagePath) {
      const image = new Image();
      image.src = imagePath;
      image.onload = () => {
        this.currentImagePath = imagePath;
      };
      image.onerror = () => {
        this.currentImagePath = require("../assets/img/kosong/1.png");
      };
    },

    getdetail() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: "Bearer qtUPRXyF8NsA3U37wcPNMw==",
        },
      };

      fetch("https://api.jaja.id/produk/get?slug=" + this.slug, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.datadetail = result.data;
          console.log("iniiii detaill", this.datadetail);

          this.selectedColor = this.datadetail[0].images[0].productImageId;
          this.loadImage(this.datadetail[0].images[0].imagePath);
        })
        .catch((error) => console.log("error", error));
    },

    getUser() {
      const token = localStorage.getItem("token");
      const myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      myHeaders.append("Cookie", "ci_session=rcim4p6h47e6ptvg301m75dsnl4ijr34");

      // const raw = "";

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        // body: raw,
        redirect: "follow",
      };

      fetch("https://jaja.id/backend/user/profile", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.profile.name = result.data.name;
          this.profile.email = result.data.email;
          this.profile.phoneNumber = result.data.phoneNumber;
          this.profile.alamat_lengkap = result.data.location[0].alamat_lengkap;
        })
        .catch((error) => console.log("error", error));
    },
    getTypeData() {
      const selectedTypeId = document.getElementById("typeId").value;

      // Cari data berdasarkan typeId
      const selectedType = this.datadetail[0].grades.find(
        (grade) => grade.typeId === selectedTypeId
      );

      // Lakukan apa yang perlu dilakukan dengan data terpilih
      console.log(selectedType);
      console.log(selectedType.type);
    },
    getTypeDataPackage() {
      if (this.selectedDuration === "") {
        console.log("Pilih Durasi Terlebih Dahulu");
      } else {
        if (this.selectedPackage.duration === this.selectedDuration) {
          if (this.mobilPengganti === "ya") {
            this.hargaTotal = this.selectedPackage.priceInclReplaceCarVat;
          } else {
            this.hargaTotal = this.selectedPackage.priceExclReplaceCarVat;
          }
        } else {
          this.hargaTotal = 0;
        }
        console.log(this.hargaTotal);
      }
      // Lakukan tindakan yang diperlukan dengan data pilihan paket
    },
    formatHargaTotal() {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(this.hargaTotal);
    },
    getTypeDataDuration() {
      if (this.selectedDuration === "") {
        console.log("Pilih Durasi Terlebih Dahulu");
      } else {
        console.log("Durasi berlangganan yang dipilih:", this.selectedDuration);
      }
      // Lakukan tindakan yang diperlukan dengan data pilihan durasi berlangganan
    },
    getHarga() {
      if (this.mobilPengganti === "tidak") {
        // Ambil harga priceExclReplaceCarVat/priceExclReplaceCar dari data API
        return this.datadetail[0].grades[0].packages[0].priceExclReplaceCarVat;
      } else if (this.mobilPengganti === "ya") {
        // Ambil harga priceInclReplaceCarVat/priceInclReplaceCar dari data API
        return this.datadetail[0].grades[0].packages[0].priceInclReplaceCarVat;
      } else {
        // Default jika tidak ada pilihan yang dipilih
        return 0;
      }
    },

    formatHarga(harga) {
      return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  components: {
    navigation,
    Flickity,
    foote,
    Carousel3d,
    Slide,
    VLazyImage,
    Rekomondasi,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: none;
  /* tambahkan properti lainnya sesuai kebutuhan Anda */
}

.d-block {
  display: block !important;
}
.font_pertana {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 54px;
}

body {
  font-family: sans-serif;
}
.responsive-padding {
  padding-left: 95px;
}

@media (max-width: 600px) {
  .responsive-padding {
    padding-left: 80px;
  }
}
.table-container {
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
}
.info-message {
  text-align: center;
  margin-top: 10px;
  color: red;
}

.loading-text {
  text-align: center;
}

.loading-text i {
  font-size: 24px;
  margin-right: 8px;
}

.loading-text span {
  font-size: 16px;
}

.carousel {
  background: #fafafa;
  margin-bottom: 40px;
}
.carousel-cell {
  width: 100%;
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
<style scoped>
.table-container {
  max-width: 1200px;
  margin: 0 auto;
}

.table-container table tr:last-child {
  position: sticky;
  bottom: 0;
  background-color: #fff;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #e6e6e6;
}

#table-container {
  margin-top: 20px;
  overflow-x: auto;
}

@media screen and (max-width: 600px) {
  th,
  td {
    font-size: 12px;
    padding: 8px;
  }
}

/* Gaya tambahan */
table th,
table td {
  min-width: 100px;
  white-space: nowrap;
}

table td:nth-child(1) {
  width: 10%;
}

table td:nth-child(2),
table td:nth-child(3),
table td:nth-child(4),
table td:nth-child(5) {
  width: 22%;
}

table td:last-child {
  width: 24%;
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
