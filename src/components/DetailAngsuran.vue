<template>
  <div class="home-3">
    <!-- Tampilan Navbar -->
    <navigation />
    <main class="main">
      <div class="car-item-single bg py-120">
        <div class="container">
          <div class="car-single-wrapper" style="padding-top: 12%">
            <div class="row">
              <div class="col-lg-8">
                <div class="car-single-details">
                  <!-- Tampilan Gambar dan Nama Porduk -->
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
                        <h3 style="color: black" class="car-single-title">
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
                              <img :src="currentImagePath" class="img" alt="" />
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
                  <!-- Tampilan Spesifikasi dan Deskripsi Produk -->
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
                              <!-- <h6>{{ datadetail[0].grades[0].typeCode }}</h6> -->
                              <h6>G0195</h6>
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
                              <h6>10000-50000 KM/Tahun</h6>
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
                              <h6>Black/ White/ Silver</h6>
                              <!-- <h6>{{ datadetail[0].images[0].colorName }}</h6> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />

                    <h4 class="mb-3">Deskripsi</h4>
                    <hr />
                    <div
                      class="mb-4"
                      v-if="datadetail && datadetail[0].deskripsi"
                    >
                      <p>
                        {{ datadetail[0].deskripsi }}
                      </p>
                    </div>
                    <div class="mb-4" v-else>
                      <p>Maaf, belum ada deskripsi.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="car-single-widget">
                  <!-- Tampilan Harga Produk -->
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
                    >
                      Rp.{{
                        formatPrice(datadetail[0].price).toLocaleString(
                          "id-ID",
                          { style: "currency", currency: "IDR" }
                        )
                      }}
                    </span>
                  </div>

                  <!-- Tampilan Warna Mobil -->
                  <div class="form-group mt-5">
                    <h5 class="car-single-price">Warna Mobil</h5>
                    <v-card flat>
                      <v-radio-group v-model="selectedChipIndex" inline>
                        <v-row>
                          <v-col
                            v-for="(image, index) in datadetail[0].images"
                            :key="index"
                            cols="3"
                          >
                            <v-chip
                              :style="{
                                backgroundColor:
                                  selectedColor === image.productImageId
                                    ? image.hexColorCode
                                    : image.hexColorCode,
                                color: 'white',
                                border: '2px solid #4F4E4E',
                                outline:
                                  selectedChipIndex === index
                                    ? '2px solid #207ace'
                                    : 'none',
                                outlineOffset: '-2px',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                              }"
                              @click="
                                changeImage(
                                  image.imagePath,
                                  image.productImageId,
                                  index
                                )
                              "
                            >
                            </v-chip>
                            <span style="font-size: 12px">
                              {{ image.colorName }}</span
                            >
                          </v-col>
                        </v-row>
                      </v-radio-group>
                    </v-card>
                  </div>
                  <hr />
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
                    <!-- Tampilan Angsuran -->
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
                                      placeholder=" %"
                                    />
                                  </v-col>
                                </v-row>
                                <v-row class="mt-5">
                                  <v-col cols="12">
                                    <h5 class="car-single-price">Mitra</h5>
                                    <div class="custom-select-wrapper">
                                      <select
                                        class="nice-select"
                                        v-model="selectedBank"
                                      >
                                        <option value="">Pilih Mitra</option>
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
                                      >
                                        <option value="">Pilih Wilayah</option>
                                        <option
                                          v-for="wilayah in wilayahs"
                                          :key="wilayah.id_wilayah"
                                          :value="wilayah.id_wilayah"
                                        >
                                          {{ wilayah.nama_wilayah }}
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
                                      @click="hitungAngsuran"
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

                              <div
                                class="modal"
                                tabindex="-1"
                                role="dialog"
                                :class="{ 'd-block': showModal }"
                              >
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <span
                                        style="
                                          color: var(
                                            --color-blue-blue-06,
                                            #0f5392
                                          );

                                          /* Title 1 */
                                          font-family: Inter;
                                          font-size: 32px;
                                          font-style: normal;
                                          font-weight: 600;
                                          line-height: normal;
                                          letter-spacing: -0.32px;
                                        "
                                      >
                                        Detail Pengajuan
                                      </span>
                                      <button
                                        type="button"
                                        class="close"
                                        @click="closeModal"
                                      >
                                        <span
                                          aria-hidden="true"
                                          style="
                                            width: 30px;
                                            height: 30px;
                                            font-size: 30px;
                                          "
                                          >&times;</span
                                        >
                                      </button>
                                    </div>
                                    <div class="modal-body" style="padding: 5%">
                                      <div>
                                        <v-row>
                                          <v-col cols="4">
                                            <p class="title-judul-angsuran">
                                              Merk Mobil
                                            </p>
                                            <span class="title-angsuran">
                                              {{ datadetail[0].brand }}</span
                                            >
                                          </v-col>
                                          <v-col cols="4">
                                            <p class="title-judul-angsuran">
                                              Model
                                            </p>
                                            <span class="title-angsuran">
                                              {{ datadetail[0].model }}</span
                                            >
                                          </v-col>
                                          <v-col cols="4">
                                            <p class="title-judul-angsuran">
                                              Tipe
                                            </p>
                                            <span class="title-angsuran">
                                              {{ selectedTipe }}</span
                                            >
                                          </v-col>
                                        </v-row>
                                        <v-row>
                                          <v-col cols="4">
                                            <p class="title-judul-angsuran">
                                              Mitra
                                            </p>
                                            <span class="title-angsuran">
                                              {{ selectedBankText }}
                                            </span>
                                          </v-col>
                                          <v-col cols="4">
                                            <p class="title-judul-angsuran">
                                              Harga
                                            </p>
                                            <span class="title-angsuran">
                                              {{
                                                formatPrice(
                                                  datadetail[0].price
                                                ).toLocaleString("id-ID", {
                                                  style: "currency",
                                                  currency: "IDR",
                                                })
                                              }}
                                            </span>
                                          </v-col>
                                          <v-col cols="4">
                                            <p class="title-judul-angsuran">
                                              Uang Muka
                                            </p>
                                            <span class="title-angsuran">
                                              {{
                                                formatPrice(dp).toLocaleString(
                                                  "id-ID",
                                                  {
                                                    style: "currency",
                                                    currency: "IDR",
                                                  }
                                                )
                                              }}
                                            </span>
                                          </v-col>
                                        </v-row>

                                        <v-row
                                          ><v-col
                                            ><div
                                              style="
                                                display: flex;
                                                width: 100%;
                                                padding: 5px;
                                                flex-direction: column;
                                                justify-content: center;
                                                align-items: center;
                                              "
                                            >
                                              <div
                                                class="ca"
                                                style="
                                                  border-radius: 10px 10px 0px
                                                    0px;
                                                "
                                              >
                                                <span class="text-card">
                                                  Tenor</span
                                                >
                                              </div>
                                              <div class="cb">
                                                <span class="text-card">
                                                  <center>DP</center>
                                                </span>
                                              </div>
                                              <div class="ca">
                                                <span class="text-card">
                                                  Suku Bunga</span
                                                >
                                              </div>
                                              <!-- <div class="ca">
                                                  <span class="text-card">
                                                    Suku Bunga</span
                                                  >
                                                </div> -->
                                              <div
                                                class="cb"
                                                style="
                                                  border-radius: 0px 0px 10px
                                                    10px;
                                                "
                                              >
                                                <span class="text-card">
                                                  <center>
                                                    Angsuran/bulan
                                                  </center></span
                                                >
                                              </div>
                                            </div>

                                            <br />
                                          </v-col>
                                          <v-col
                                            v-for="data in angsuranData"
                                            :key="data.tenorTahun"
                                            ><div
                                              style="
                                                display: flex;
                                                width: 100%;
                                                flex-direction: column;
                                                justify-content: center;
                                                align-items: center;
                                                border-radius: 10px;
                                                border: 1px solid
                                                  var(
                                                    --color-blue-blue-06,
                                                    #0f5392
                                                  );
                                                background: var(
                                                  --color-neutral-neutral-00,
                                                  #fff
                                                );
                                              "
                                            >
                                              <div class="ca1">
                                                <span class="ta1">
                                                  {{ data.tenorTahun }} Thn /
                                                  {{ data.tenorBulan }}
                                                  Bln</span
                                                >
                                              </div>
                                              <div class="ca1">
                                                <span class="ta2">
                                                  Rp.{{
                                                    formatPrice(
                                                      data.angsuranPertama
                                                    ).toLocaleString("id-ID", {
                                                      style: "currency",
                                                      currency: "IDR",
                                                    })
                                                  }}
                                                </span>
                                              </div>
                                              <div class="ca1">
                                                <span class="ta1">
                                                  {{ data.bunga }}%
                                                </span>
                                              </div>
                                              <div class="ca1">
                                                <span class="ta2">
                                                  Rp.{{
                                                    formatPrice(
                                                      data.angsuran_bulanan
                                                    ).toLocaleString("id-ID", {
                                                      style: "currency",
                                                      currency: "IDR",
                                                    })
                                                  }}
                                                </span>
                                              </div>

                                              <div
                                                style="
                                                  padding: 5px;
                                                  width: 100%;
                                                "
                                              >
                                                <button
                                                  type="submit"
                                                  @click="selectTenor(data)"
                                                  :disabled="loading"
                                                  style="
                                                    font-size: 16px;
                                                    color: black;
                                                    padding: 12px 20px;
                                                    transition: all 0.5s;
                                                    text-transform: capitalize;
                                                    position: relative;
                                                    border-radius: 5px;
                                                    font-weight: 500;
                                                    cursor: pointer;
                                                    text-align: center;
                                                    overflow: hidden;
                                                    border: none;
                                                    background: var(
                                                      --color-yellow-yellow-05,
                                                      #fbab44
                                                    );
                                                    box-shadow: var(
                                                      --box-shadow
                                                    );
                                                    z-index: 1;
                                                    width: 100%;
                                                  "
                                                >
                                                  <span v-if="loading"
                                                    >Loading...</span
                                                  >
                                                  <span v-else
                                                    >Pilih Tenor</span
                                                  >
                                                </button>
                                              </div>
                                            </div>
                                          </v-col>
                                          <br />
                                          <br />
                                        </v-row>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="modal"
                                tabindex="-1"
                                role="dialog"
                                :class="{ 'd-block': showSecondModal }"
                              >
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h4 class="modal-title">
                                        Pilihan Paket Angsuran Anda
                                      </h4>
                                      <button
                                        type="button"
                                        class="close"
                                        @click="closeSecondModal"
                                      >
                                        <span
                                          aria-hidden="true"
                                          style="
                                            width: 30px;
                                            height: 30px;
                                            font-size: 30px;
                                          "
                                          >&times;</span
                                        >
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <div class="car-single-widget">
                                        <div class="car-single-form">
                                          <div class="row">
                                            <div class="col-md-3 col-sm-6">
                                              <h5 class="car-single-price">
                                                Harga OTR
                                              </h5>
                                              <v-chip
                                                class="ma-2"
                                                closable
                                                color="#DEF3FF"
                                                text-color="#207ACE"
                                                label
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
                                            </div>
                                            <div class="col-md-3 col-sm-12">
                                              <h5 class="car-single-price">
                                                Angsuran Pertama
                                              </h5>
                                              <v-chip
                                                class="ma-2"
                                                closable
                                                color="#DEF3FF"
                                                text-color="#207ACE"
                                                label
                                              >
                                                Rp.
                                                {{
                                                  formatPrice(
                                                    selectedTenor
                                                      ? selectedTenor.angsuranPertama +
                                                          " "
                                                      : "Angsuranbulanan"
                                                  ).toLocaleString("id-ID", {
                                                    style: "currency",
                                                    currency: "IDR",
                                                  })
                                                }}
                                              </v-chip>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                              <h5 class="car-single-price">
                                                Tenor
                                              </h5>
                                              <v-chip
                                                class="ma-2"
                                                closable
                                                color="#DEF3FF"
                                                text-color="#207ACE"
                                                label
                                              >
                                                {{
                                                  selectedTenor
                                                    ? selectedTenor.tenorTahun +
                                                      " Tahun / " +
                                                      selectedTenor.tenorBulan +
                                                      " Bulan"
                                                    : "Pilih Tenor"
                                                }}
                                              </v-chip>
                                            </div>
                                            <div class="col-md-3 col-sm-12">
                                              <h5 class="car-single-price">
                                                Angsuran Per Bulan
                                              </h5>
                                              <v-chip
                                                class="ma-2"
                                                closable
                                                color="#DEF3FF"
                                                text-color="#207ACE"
                                                label
                                              >
                                                Rp.
                                                {{
                                                  formatPrice(
                                                    selectedTenor
                                                      ? selectedTenor.angsuran_bulanan +
                                                          "/Bulan"
                                                      : "Angsuranbulanan"
                                                  ).toLocaleString("id-ID", {
                                                    style: "currency",
                                                    currency: "IDR",
                                                  })
                                                }}
                                              </v-chip>
                                            </div>
                                          </div>

                                          <hr />
                                          <h5 class="mb-3 mt-2">
                                            Form Pengajuan Kredit
                                          </h5>
                                          <form
                                            @submit.prevent="submitAngsuran"
                                          >
                                            <v-row no-gutters>
                                              <v-col>
                                                <div class="form-group mr-2">
                                                  <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="
                                                      displayedProfile.name
                                                    "
                                                    placeholder=""
                                                    id="inputName"
                                                  />
                                                  <label for="inputName"
                                                    >Nama Lengkap</label
                                                  >
                                                </div>
                                              </v-col>
                                              <v-col>
                                                <div class="form-group">
                                                  <input
                                                    type="number"
                                                    class="form-control"
                                                    v-model="
                                                      displayedProfile.phoneNumber
                                                    "
                                                    placeholder=""
                                                    id="inputNumber"
                                                  />
                                                  <label for="inputNumber"
                                                    >WhatsApp</label
                                                  >
                                                </div>
                                              </v-col>
                                            </v-row>

                                            <v-row no-gutters class="mt-1">
                                              <v-col>
                                                <div class="form-group mr-2">
                                                  <input
                                                    type="email"
                                                    class="form-control"
                                                    v-model="
                                                      displayedProfile.email
                                                    "
                                                    placeholder=""
                                                    id="inputEmail"
                                                  />
                                                  <label for="inputEmail"
                                                    >Alamat Email</label
                                                  >
                                                </div>
                                              </v-col>
                                              <v-col>
                                                <div class="form-group">
                                                  <input
                                                    class="form-control"
                                                    v-model="
                                                      displayedProfile.alamat_lengkap
                                                    "
                                                    placeholder=""
                                                    id="inputAlamat"
                                                  />
                                                  <label for="inputAlamat"
                                                    >Domisili</label
                                                  >
                                                </div>
                                              </v-col>
                                            </v-row>

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
                                                  background: var(
                                                    --theme-color
                                                  );
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <!-- Tampilan Sewa -->
                    <v-tab-item>
                      <v-card>
                        <v-card-text>
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
                          <v-row class="mt-5">
                            <v-col cols="6">
                              <!-- <h5 class="car-single-price">
                                  DURASI BERLANGGANAN
                                </h5> -->
                              <h5 class="car-single-price">Tenor</h5>
                              <select
                                class="nice-select"
                                style="width: 100%"
                                id="durationId"
                                v-model="selectedDuration"
                                @change="getTypeDataDuration()"
                              >
                                <option value="">Pilih Tenor</option>
                                <option value="60">60 Bulan</option>
                                <option value="48">48 Bulan</option>
                                <option value="36">36 Bulan</option>
                              </select>
                            </v-col>
                            <v-col cols="6" v-if="selectedDuration">
                              <h5 class="car-single-price">Paket</h5>
                              <select
                                class="nice-select"
                                style="width: 100%"
                                id="id_jauto_produk_grades"
                                v-model="selectedPackage"
                                @change="getTypeDataPackage()"
                              >
                                <option value="">Pilih Paket</option>
                                <option
                                  v-for="(pkg, index) in filteredPackages"
                                  :key="index"
                                  :value="pkg"
                                >
                                  {{ pkg.drivingOption }} KM/Tahun
                                </option>
                              </select>
                            </v-col>
                          </v-row>
                          <br />
                          <div class="form-group mt-5">
                            <h5 class="car-single-price">MOBIL PENGGANTI</h5>
                            <v-card flat>
                              <v-radio-group
                                inline
                                style="display: flex; flex-direction: row"
                                v-model="mobilPengganti"
                                @change="getTypeDataPackage()"
                              >
                                <v-row>
                                  <v-col cols="6">
                                    <v-radio
                                      label="Ya"
                                      color="#0c5eaa"
                                      value="ya"
                                    ></v-radio>
                                  </v-col>
                                  <v-col cols="6">
                                    <v-radio
                                      label="Tidak"
                                      color="#0c5eaa"
                                      value="tidak"
                                    ></v-radio>
                                  </v-col>
                                </v-row>
                              </v-radio-group>
                            </v-card>
                          </div>
                          <br />
                          <div
                            style="
                              display: flex;
                              justify-content: space-between;
                            "
                          >
                            <div style="margin-right: 20px; width: 49%">
                              <div style="font-size: 16px">
                                <span style="font-size: 14px"
                                  >Biaya Berlangganan</span
                                >
                              </div>
                              <div style="font-size: 18px">
                                <span
                                  class="fonsizeAmount"
                                  style="
                                    color: #207ace;
                                    font-size: 20px;
                                    font-weight: bold;
                                    padding: 0px;
                                  "
                                  >Jumlah</span
                                >
                              </div>
                            </div>
                            <div style="padding-left: 13px">
                              <div>
                                <span
                                  style="
                                    color: #8e8e8e;
                                    font-size: 14px;
                                    font-weight: 300;
                                    line-height: 16px;
                                  "
                                  >RP</span
                                >
                              </div>
                              <div
                                style="
                                  color: #8e8e8e;
                                  font-size: 14px;
                                  font-weight: 300;
                                  line-height: 16px;
                                "
                              >
                                <span
                                  style="
                                    color: #1f1c1c;
                                    font-size: 24px;
                                    font-weight: bold;
                                    padding: 0px 10px 0px 0px;
                                  "
                                  id="priceProduct"
                                >
                                  {{ formatHargaTotal() }}
                                </span>
                              </div>
                              <div style="width: 91.5%">
                                <div
                                  style="
                                    color: #8e8e8e;
                                    font-size: 14px;
                                    font-weight: 300;
                                    line-height: 16px;
                                    text-align: right;
                                  "
                                >
                                  /bulan
                                </div>
                                <div
                                  style="
                                    color: #8e8e8e;
                                    font-size: 12px;
                                    font-weight: 300;
                                    line-height: 16px;
                                    text-align: right;
                                  "
                                >
                                  Termasuk Pajak 11%
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <v-row class="mt-5">
                            <v-col cols="12">
                              <div>
                                <button
                                  type="submit"
                                  @click="sewaModal"
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
                                  <div style="position: relative">
                                    <span v-if="isLoading" class="loading-text"
                                      ><i
                                        class="fa-solid fa-spinner fa-spin-pulse"
                                      ></i
                                    ></span>

                                    <span v-else>Isi form pengajuan sewa</span>
                                  </div>
                                </button>
                              </div>
                            </v-col>
                          </v-row>
                          <div
                            class="modal"
                            tabindex="-1"
                            role="dialog"
                            :class="{ 'd-block': showTigaModal }"
                          >
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h4 class="modal-title">
                                    Pilihan Paket Sewa Anda
                                  </h4>
                                  <button
                                    type="button"
                                    class="close"
                                    @click="closeTigaModal"
                                  >
                                    <span
                                      aria-hidden="true"
                                      style="
                                        width: 30px;
                                        height: 30px;
                                        font-size: 30px;
                                      "
                                      >&times;</span
                                    >
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="car-single-widget">
                                    <div class="car-single-form">
                                      <v-row>
                                        <v-col cols="12" sm="6" md="3">
                                          <h5 class="car-single-price">
                                            Pilihan Tipe
                                          </h5>
                                          <v-chip
                                            class="ma-2"
                                            closable
                                            color="#DEF3FF"
                                            text-color="#207ACE"
                                            label
                                          >
                                            {{ selectedTipe }}
                                          </v-chip>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="3">
                                          <h5 class="car-single-price">
                                            Pilihan Tenor
                                          </h5>
                                          <v-chip
                                            class="ma-2"
                                            closable
                                            color="#DEF3FF"
                                            text-color="#207ACE"
                                            label
                                          >
                                            {{ selectedDuration }} Bulan
                                          </v-chip>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="3">
                                          <h5 class="car-single-price">
                                            Pilihan Paket
                                          </h5>
                                          <v-chip
                                            class="ma-2"
                                            closable
                                            color="#DEF3FF"
                                            text-color="#207ACE"
                                            label
                                          >
                                            {{ selectedPackage.drivingOption }}
                                            KM/Tahun
                                          </v-chip>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="3" class="">
                                          <h5 class="car-single-price">
                                            Biaya Sewa
                                          </h5>
                                          <v-chip
                                            class="ma-2"
                                            closable
                                            color="#DEF3FF"
                                            text-color="#207ACE"
                                            id="priceProduct"
                                            label
                                          >
                                            Rp. {{ formatHargaTotal() }} /Bln
                                          </v-chip>
                                        </v-col>
                                      </v-row>

                                      <hr />
                                      <h5 class="mb-3 mt-2">
                                        Form Pengajuan Sewa
                                      </h5>
                                      <form @submit.prevent="submitOrder">
                                        <v-row no-gutters>
                                          <v-col>
                                            <div class="form-group mr-2">
                                              <input
                                                type="text"
                                                class="form-control"
                                                v-model="displayedProfile.name"
                                                placeholder=""
                                                id="inputName"
                                              />
                                              <label for="inputName"
                                                >Nama Lengkap</label
                                              >
                                            </div>
                                          </v-col>
                                          <v-col>
                                            <div class="form-group">
                                              <input
                                                type="number"
                                                class="form-control"
                                                v-model="
                                                  displayedProfile.phoneNumber
                                                "
                                                placeholder=""
                                                id="inputNumber"
                                              />
                                              <label for="inputNumber"
                                                >WhatsApp</label
                                              >
                                            </div>
                                          </v-col>
                                        </v-row>

                                        <v-row no-gutters class="mt-1">
                                          <v-col>
                                            <div class="form-group mr-2">
                                              <input
                                                type="email"
                                                class="form-control"
                                                v-model="displayedProfile.email"
                                                placeholder=""
                                                id="inputEmail"
                                              />
                                              <label for="inputEmail"
                                                >Alamat Email</label
                                              >
                                            </div>
                                          </v-col>
                                          <v-col>
                                            <div class="form-group">
                                              <input
                                                class="form-control"
                                                v-model="
                                                  displayedProfile.alamat_lengkap
                                                "
                                                placeholder=""
                                                id="inputAlamat"
                                              />
                                              <label for="inputAlamat"
                                                >Domisili</label
                                              >
                                            </div>
                                          </v-col>
                                        </v-row>

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
                                            Ajukan Sewa
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </div>
              </div>
            </div>
            <!-- Tampilan Rekomondasi -->
            <rekomondasi />
          </div>
        </div>
      </div>
    </main>
    <!-- Tampilan Footer -->
    <foote />
  </div>
</template>
<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "jspdf-autotable";
import navigation from "../components/backup";
import foote from "../components/Footer";
import Flickity from "vue-flickity";
import { Carousel3d, Slide } from "vue-carousel-3d";
import VLazyImage from "v-lazy-image/v2";
import axios from "axios";
import Swal from "sweetalert2";
import Rekomondasi from "./rekomondasi.vue";

export default {
  data() {
    return {
      loading: false,
      selectedTenor: null,
      angsuranData: [],
      dp: "", // Harga DP
      uangMukaPersentase: "",
      detailprice: [],
      bunga: 0, // Hasil perhitungan
      // Data yang tetap
      tenorTahun: "",
      tenorBulan: "", // Tenor per bulan
      otr: "", // Harga otr
      uangMuka: "",
      pokokHutangAwal: "",
      bunga: "",
      angsuran_pokok: "",
      angsuran_bunga: "",
      angsuran_bulanan: "",
      biayaAdministrasi: "",
      angsuranPertama: "",
      selectedChipIndex: null,
      tab: null,
      activeTab: 0,
      showModal: false,
      showSecondModal: false,
      showTigaModal: false,
      result: null,
      simulasiResult: {},
      packageId: 19897, // Packageid pada Angsuran
      cicilankredit: "credit",
      cicilansewa: "rent",
      selectedTenor: "",
      selectedBank: "",
      selectedWilayah: "",
      banks: [], // Anda perlu menginisialisasi banks dan wilayahs sebagai array kosong
      wilayahs: [],
      apiResponse: "",
      /* SELECT PADA KREDIT */
      jangkaWaktu: "",
      bunga: "",
      awalbulan: "",
      awaltahun: "",
      optionbunga: "",
      jeniscicilan: "",
      cicilan: "",
      isLoading: false,
      isSubmitted: false,
      angsuranPerBulan: "",
      akhir: "",
      hasilAwal: "",
      angsuranBungaPerBulan: "",
      totalangsuranperbulan: "",
      fullName: "",
      whatsapp: "",
      email: "",
      domisili: "",
      carItems: [],
      headers: [
        { text: "Periode", value: "periode" },
        { text: "Angsuran Bunga", value: "angsuranBunga" },
        { text: "Angsuran Pokok", value: "angsuranPokok" },
        { text: "Total Angsuran", value: "totalAngsuran" },
        { text: "Sisa Pinjaman", value: "sisaPinjaman" },
      ],
      tableData: [],
      totalAngsuranBunga: 0,
      totalAngsuranPokok: 0,
      totalTotalAngsuran: 0,
      search: "",
      switchStatus: false,
      profile: {
        name: "",
        phoneNumber: "",
        email: "",
        alamat_lengkap: "",
      },
      mobilPengganti: null,
      selectedTipe: "",
      selectedPackage: "", // Menyimpan paket yang dipilih
      selectedDuration: "", // Menyimpan durasi berlangganan yang dipilih
      hargaTotal: "",
      datadetail: [],
      selectedColor: null,
      currentImagePath: "",
      idproduct: "",
      showAlertImage: true,
      slides: 7,
      slide: 0,
      sliding: null,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: "left",
        wrapAround: false,
        freeScroll: false,
      },
      flickityOptionsKategory: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        cellAlign: "left",
        wrapAround: false,
        freeScroll: false,
      },
    };
  },

  computed: {
    formattedDp() {
      return this.dp.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, // Tidak ada digit desimal
      });
    },
    selectedWilayahText() {
      const selectedWilayahId = this.selectedWilayah;
      const selectedWilayah = this.wilayahs.find(
        (wilayah) => wilayah.id_wilayah === selectedWilayahId
      );
      return selectedWilayah ? selectedWilayah.nama_wilayah : ""; // Mengembalikan nama wilayah yang dipilih
    },

    selectedBankText() {
      const selectedBankId = this.selectedBank;
      const selectedBank = this.banks.find(
        (bank) => bank.id_bank === selectedBankId
      );
      return selectedBank ? selectedBank.nama_bank : ""; // Mengembalikan nama bank yang dipilih
    },

    // Fungsi data paket pada sewa agar tidak duplicate
    filteredPackages() {
      return this.selectedPackages.filter(
        (pkg) => pkg.duration === this.selectedDuration
      );
    },
    // Fungsi mengambil data dai profile user
    displayedProfile() {
      if (this.switchStatus) {
        return this.profile;
      } else {
        return {
          name: "",
          phoneNumber: "",
          email: "",
          alamat_lengkap: "",
        };
      }
    },
    // Fungsi jika data kosong
    isFormValid() {
      return (
        this.jangkaWaktu !== "" &&
        this.bunga !== "" &&
        this.awalbulan !== "" &&
        this.awaltahun !== "" &&
        this.optionbunga !== "" &&
        this.jeniscicilan !== ""
      );
    },
    // Fungsi Angsuran Kredit dari Front end
    calculateTotals() {
      this.totalAngsuranBunga = this.tableData.reduce(
        (total, item) => total + item.angsuranBunga,
        0
      );
      this.totalAngsuranPokok = this.tableData.reduce(
        (total, item) => total + item.angsuranPokok,
        0
      );
      this.totalTotalAngsuran = this.tableData.reduce(
        (total, item) => total + item.totalAngsuran,
        0
      );
    },
    // Fungsi Angsuran Kredit dari Front end
    calculateHeight() {
      return `${(9 / 29) * this.$vuetify.breakpoint.width}px`;
    },
    // Fungsi mengambil packaged id
    selectedPackages() {
      const selectedGrades = this.datadetail[0].grades.find(
        (grades) => grades.type === this.selectedTipe
      );
      return selectedGrades ? selectedGrades.packages : [];
    },
    //Fungsi Format Harga
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
    axios
      .get("https://api.jaja.id/produk/get")
      .then((response) => {
        this.carItems = response.data.data;
        console.log("iniiii", response.data.data);
        console.log("iniiii carss", this.carItems);
      })
      .catch((error) => console.log(error));
    this.slug = localStorage.getItem("idcar"); //Fungsi id product ke detail
    console.log("idcars", this.idproduct);
    this.fetchData();
    this.fetchBunga();
    this.getdetail(); // Fungsi detail produk
    this.getUser(); // Fungsi User
    this.calculateTotals(); // Fungsi perhitungan angsuran
    this.getTypeData(); // Fungsi Untuk tipe mobil
  },
  created() {
    this.selectFirstChip();
  },
  watch: {
    value: {
      handler(after) {
        this.dp = this.format(after);
      },
      immediate: true,
    },
    dp: {
      handler: function (newVal) {
        this.uangMukaPersentase = this.calculatePersentase();
      },
      immediate: true, // Memastikan perhitungan awal saat halaman dimuat
    },
    selectedTenor: function () {
      // Panggil fetchData saat nilai selectedTenor berubah
      this.fetchData();
    },
    apiResponse: function () {
      // Panggil fetchData saat nilai apiResponse berubah
      this.fetchData();
    },
    dp: "calculateBunga",
    // Fungsi switch profile
    switchStatus: {
      immediate: true,
      handler: (newValue) => {
        if (newValue) {
          this.$router.push("/loginaca");
        }
      },
    },
  },
  methods: {
    submitAngsuran() {
      const id_jauto_produk_grades =
        this.selectedPackage.id_jauto_produk_grades;
      const fullName = this.displayedProfile.name;
      const whatsapp = this.displayedProfile.phoneNumber;
      const email = this.displayedProfile.email;
      const domisili = this.displayedProfile.alamat_lengkap;
      const cicilansewa = this.$data.cicilansewa;
      const tenorTahun = this.selectedTenor.tenorTahun;
      const tenorBulan = this.selectedTenor.tenorBulan;
      const otr = this.selectedTenor.otr;
      const dp = this.selectedTenor.dp;
      const uangMuka = this.selectedTenor.uangMuka;
      const pokokHutangAwal = this.selectedTenor.pokokHutangAwal;
      const bunga = this.selectedTenor.bunga;
      const angsuran_pokok = this.selectedTenor.angsuran_pokok;
      const angsuran_bunga = this.selectedTenor.angsuran_bunga;
      const angsuran_bulanan = this.selectedTenor.angsuran_bulanan;
      const biayaAdministrasi = this.selectedTenor.biayaAdministrasi;
      const angsuranPertama = this.selectedTenor.angsuranPertama;

      // Validasi form tidak boleh kosong
      if (
        fullName === "" ||
        whatsapp === "" ||
        email === "" ||
        domisili === ""
      ) {
        this.showSecondModal = false;
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
        this.showSecondModal = false;
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
        this.showSecondModal = false;
        Swal.fire({
          title: "Pengajuan Gagal!",
          text: "Nomor harus terdiri dari 12 digit.",
          icon: "error",
        });
        return;
      }

      const body = {
        packageId: 1234, // Ganti dengan ID paket yang sesuai
        name: fullName,
        contactNumber: whatsapp,
        email: email,
        domisili: domisili,
        rentOrCredit: cicilansewa,
        tenorTahun: this.selectedTenor.tenorTahun,
        tenorBulan: this.selectedTenor.tenorBulan,
        otr: this.selectedTenor.otr,
        dp: this.selectedTenor.dp,
        uangMuka: this.selectedTenor.uangMuka,
        pokokHutangAwal: this.selectedTenor.pokokHutangAwal,
        bunga: this.selectedTenor.bunga,
        angsuran_pokok: this.selectedTenor.angsuran_pokok,
        angsuran_bunga: this.selectedTenor.angsuran_bunga,
        angsuran_bulanan: this.selectedTenor.angsuran_bulanan,
        biayaAdministrasi: this.selectedTenor.biayaAdministrasi,
        angsuranPertama: this.selectedTenor.angsuranPertama,
      };

      // Kirim permintaan POST ke API
      fetch("https://api.jaja.id/order/submit", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.showSecondModal = false;
          if (data.success) {
            Swal.fire({
              title: "Pengajuan Berhasil!",
              text: "Terima kasih pengajuan Anda akan kami proses dan admin kami akan menghubungi Anda dalam 1 x 24 jam",
              icon: "success",
              confirmButtonColor: "#0C5EAA",
            }).then(() => {
              this.showTigaModal = false;

              // Open WhatsApp with a prefilled chat message
              const phoneCountryCode = "+62";
              const phoneNumber = body.contactNumber;

              // Remove any special characters (e.g., "-", "(", ")", and whitespace) from the phone number
              const phoneWithoutSpecialChars = phoneNumber.replace(
                /[-()\s]/g,
                ""
              );

              // Add the country code if it's not already present
              const formattedPhoneNumber = phoneWithoutSpecialChars.startsWith(
                phoneCountryCode
              )
                ? phoneWithoutSpecialChars
                : phoneCountryCode + phoneWithoutSpecialChars;

              // Construct the message
              const message = `Halooo Admin Jaja Auto,
  Perkenalkan, Nama saya ${fullName}. Saya tertarik untuk mengetahui lebih lanjut tentang penawaran sewa di Jaja Auto.
  
  Berikut detail mobil yang saya minati:
  Pilihan Tipe: ${this.selectedTipe}
  Pilihan Tenor: ${this.selectedTenor.tenorBulan} Bulan / ${
                this.selectedTenor.tenorTahun
              } Tahun
  Uang Muka: Rp. ${this.formatPrice(this.selectedTenor.dp)}
  Angsuran Bulanan: Rp. ${this.formatPrice(this.selectedTenor.angsuran_bulanan)}
  
  Saya berharap dapat mendiskusikan penawaran ini lebih lanjut. Mohon petunjuk selanjutnya.
  
  Terima kasih, ${fullName}`;

              //Nomor admin
              const phonecipto = "6281990181108";
              const formattedphonecipto = phonecipto.replace(/^0/, "");
              const url = `https://wa.me/${formattedphonecipto}?text=${encodeURIComponent(
                message
              )}`;

              // Open WhatsApp in a new tab or window
              window.open(url, "_blank");

              // Refresh the page after WhatsApp is opened
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
          this.showTigaModal = false;
          Swal.fire({
            title: "Terjadi kesalahan.",
            text: "Silakan coba lagi.",
            confirmButtonColor: "#0C5EAA",
            icon: "error",
          });
          console.error(error);
        });
    },
    selectTenor(data) {
      this.loading = true; // Aktifkan efek loading

      this.showModal = false;
      setTimeout(() => {
        this.showSecondModal = true;
        this.loading = false; // Matikan efek loading setelah modal selanjutnya muncul
      }, 2000);
      this.selectedTenor = data;
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
        const dpWithoutRp = this.dp.replace("Rp", "");
        const dpValue = parseFloat(dpWithoutRp.replace(/\D/g, ""));
        const price = this.datadetail[0].price;

        try {
          // Simulasikan penundaan selama 2 detik
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Lakukan permintaan API menggunakan axios atau fetch API
          const response = await axios.get(
            `https://api.jaja.id/jauto/produk/count?otr=${price}&dp=${dpValue}&bank=${this.selectedBank}&wilayah=${this.selectedWilayah}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
              },
            }
          );

          if (response.data.success) {
            this.angsuranData = response.data.data;
            localStorage.setItem(
              "angsuranData",
              JSON.stringify(this.angsuranData)
            );
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
      if (this.datadetail.length > 0 && this.datadetail[0].price > 0) {
        const price = parseFloat(this.datadetail[0].price.replace(/\D/g, ""));
        const persentase = parseFloat(
          this.uangMukaPersentase.replace(/\D/g, "")
        );

        // Pastikan persentase tidak melebihi 100%
        if (persentase > 100) {
          this.uangMukaPersentase = "100%";
        } else {
          const nominal = ((persentase / 100) * price).toFixed(0);
          this.dp = `Rp ${nominal
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        }
      } else {
        this.dp = "Rp 0";
      }
    },
    handleRpInput() {
      if (this.datadetail.length > 0 && this.datadetail[0].price > 0) {
        const price = parseFloat(this.datadetail[0].price.replace(/\D/g, ""));
        const nominal = parseFloat(this.dp.replace(/\D/g, ""));

        // Pastikan nominal dalam Rupiah tidak melebihi harga
        if (nominal > price) {
          this.dp = `Rp ${price.toLocaleString("id-ID")}`;
          this.uangMukaPersentase = "100%";
        } else {
          const persentase = ((nominal / price) * 100).toFixed(1);
          this.dp = `Rp ${nominal.toLocaleString("id-ID")}`;
          this.uangMukaPersentase = persentase.toLocaleString("id-ID") + "%";
        }
      } else {
        this.dp = "Rp 0";
        this.uangMukaPersentase = "0%";
      }
    },
    fetchData() {
      // Lakukan permintaan untuk mengambil data bank dan wilayah dari API
      // Gantilah URL berikut dengan URL API yang sesuai
      const apiUrl = "https://api.jaja.id/jauto/produk/option";

      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data.data;
          this.banks = data.bank;
          this.wilayahs = data.wilayah;
        })
        .catch((error) => {
          console.error("Gagal mengambil data dari API", error);
        });
    },
    // Metode untuk mengambil data dari API
    fetchBunga() {
      const apiUrl = `https://api.jaja.id/jauto/produk/bunga?bank=${this.selectedBank}&wilayah=${this.selectedWilayah}&tenor=${this.selectedTenor}`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          this.apiResponse = response.data.data;
          // Panggil metode simulasiCount setelah mendapatkan respons dari API
          this.simulasiCount();
        })
        .catch((error) => {
          console.error("Error fetching data from API: ", error);
        });
    },
    // Metode untuk melakukan simulasi perhitungan berdasarkan data yang diterima
    simulasiCount() {
      const otr = parseFloat(this.datadetail[0].price.replace(/\./g, ""));

      const dp = this.dp;
      const tenor = this.selectedTenor;
      const bunga = this.apiResponse;

      const apiUrl = `https://api.jaja.id/jauto/produk/count_new?otr=${otr}&dp=${dp}&tenor=${tenor}&bunga=${bunga}`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          // Mengisi data simulasiResult dengan respons dari API
          this.simulasiResult = response.data.data;
          // this.showModal = true;
          console.log(this.simulasiResult);
        })
        .catch((error) => {
          console.error("Error fetching data from API: ", error);
        });
    },

    // Fungsi Hasil Simulasi
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
          Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
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
    // Fungsi close modal Hasil Simulasi
    closeModal() {
      this.showModal = false;
    },
    // Fungsi Modal Form Pengajuan Angsuran
    toggleSecondModal() {
      // this.simulasiCount();
      this.showModal = false;
      setTimeout(() => {
        this.isLoading = false;
        this.showSecondModal = true;
      }, 2000);
    },
    // Fungsi Modal Form Pengajuan Sewa
    sewaModal() {
      this.isLoading = true;
      this.showModal = false;
      setTimeout(() => {
        this.isLoading = false; // Set isLoading back to false after the loading period
        this.showTigaModal = true; // Show the second modal
      }, 2000);
    },
    // Fungsi close modal Form Pengajuan Angsuran
    closeSecondModal() {
      this.showSecondModal = false;
    },
    // Fungsi close modal Form Pengajuan Angsuran Sewa
    closeTigaModal() {
      this.showTigaModal = false;
    },
    // Fungsi Angsuran Kredit dari Front end
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
    // Fungsi Print Halaman
    printContent() {
      var printContent = document.querySelector(".print").outerHTML;
      var originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent;

      // Tunggu beberapa saat sebelum mencetak
      setTimeout(function () {
        window.print();
        document.body.innerHTML = originalContent;

        // Refresh halaman setelah mencetak
        setTimeout(function () {
          location.reload();
        }, 1000); // Ubah waktu penundaan sesuai kebutuhan (dalam milidetik)
      }, 1000); // Ubah waktu penundaan sesuai kebutuhan (dalam milidetik)
    },
    // Fungsi download PDF
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
      tableElements.forEach(function (tableElement, index) {
        // Konversi elemen tabel menjadi gambar menggunakan html2canvas
        html2canvas(tableElement).then(function (canvas) {
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
    // Fungsi Refresh Halaman
    refreshData() {
      this.isDownloading = false;
    },
    angsuranBulanan() {
      const price = this.datadetail[0].price;
      const jangkaWaktu = parseInt(this.jangkaWaktu);
      const angsuranpokok = price / jangkaWaktu;
      this.angsuranpokok = angsuranpokok;
      console.log("hasil angsuran pokok: " + angsuranpokok);
    },
    // Fungsi Loading saat memuat data
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
    // Fungsi Simulasi Angsuran by front end
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
      this.totalAngsuranPokok = (hasilAwal * jangkaWaktu).toLocaleString(
        "id-ID",
        { style: "currency", currency: "IDR" }
      );

      // Menggunakan toLocaleString() pada variabel this.totalTotalAngsuran
      this.totalTotalAngsuran = (
        totalangsuranperbulan * jangkaWaktu
      ).toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    },
    // Fungsi Format Harga
    formatPrice(value) {
      if (typeof value === "undefined") {
        return "";
      }
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // Fungsi Submit Form Pengajuan pada sewa
    submitOrder() {
      const id_jauto_produk_grades =
        this.selectedPackage.id_jauto_produk_grades;
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
        this.showTigaModal = false;
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
        this.showTigaModal = false;
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
        this.showTigaModal = false;
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
          this.showTigaModal = false;
          if (data.success) {
            Swal.fire({
              title: "Pengajuan Berhasil!",
              text: "Terima kasih pengajuan Anda akan kami proses dan admin kami akan menghubungi Anda dalam 1 x 24 jam",
              icon: "success",
              confirmButtonColor: "#0C5EAA",
            }).then(() => {
              this.showTigaModal = false;
              // Open WhatsApp with a prefilled chat message
              const phoneCountryCode = "+62";
              const phoneNumber = body.contactNumber;

              // Remove any special characters (e.g., "-", "(", ")", and whitespace) from the phone number
              const phoneWithoutSpecialChars = phoneNumber.replace(
                /[-()\s]/g,
                ""
              );

              // Add the country code if it's not already present
              const formattedPhoneNumber = phoneWithoutSpecialChars.startsWith(
                phoneCountryCode
              )
                ? phoneWithoutSpecialChars
                : phoneCountryCode + phoneWithoutSpecialChars;

              // Construct the message
              const message = `Halooo Admin Jaja Auto,
  Perkenalkan, Nama saya ${fullName}. Saya tertarik untuk mengetahui lebih lanjut tentang penawaran sewa di Jaja Auto.
  
  Berikut detail mobil yang saya minati:
  Pilihan Tipe: ${this.selectedTipe}
  Pilihan Tenor: ${this.selectedDuration} Bulan
  Pilihan Paket: ${this.selectedPackage.drivingOption} KM/Tahun
  Biaya Sewa: Rp. ${this.formatHargaTotal()}
  
  Saya berharap dapat mendiskusikan penawaran ini lebih lanjut. Mohon petunjuk selanjutnya.
  
  Terima kasih, ${fullName}`;

              //Nomor yang dituju yang di input saat isi form pengajuan
              // const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(
              //   message
              // )}`;

              //Nomor admin
              const phonecipto = "6281990181108";
              const formattedphonecipto = phonecipto.replace(/^0/, "");
              const url = `https://wa.me/${formattedphonecipto}?text=${encodeURIComponent(
                message
              )}`;

              // Open WhatsApp in a new tab or window
              window.open(url, "_blank");

              // Refresh the page after WhatsApp is opened
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
          this.showTigaModal = false;
          Swal.fire({
            title: "Terjadi kesalahan.",
            text: "Silakan coba lagi.",
            confirmButtonColor: "#0C5EAA",
            icon: "error",
          });
          console.error(error);
        });
    },

    // Fungsi Select Color
    radioColor(productImageId) {
      return this.selectedColor === productImageId
        ? "#" + this.hexColorCode
        : "#207ACE";
    },
    selectFirstChip() {
      this.selectedChipIndex = 0;
      const firstImage = this.datadetail[0].images[0];
      this.changeImage(firstImage.imagePath, firstImage.productImageId, 0);
    },
    // Fungsi Image berubah sesuai select color
    changeImage(imagePath, productImageId, index) {
      this.selectedChipIndex = index;
      this.currentImagePath = imagePath;
    },
    // Fungsi jika image dari API kosong
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

    // Fungsi  API detail
    getdetail() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
        },
      };

      fetch("https://api.jaja.id/produk/get?slug=" + this.slug, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.datadetail = result.data;
          this.detailprice = result.data[0].price;
          localStorage.setItem("datadetail", JSON.stringify(datadetail));
          console.log("ini price", this.detailprice);
          console.log("iniiii detaill", this.datadetail);

          this.selectedColor = this.datadetail[0].images[0].productImageId;
          this.loadImage(this.datadetail[0].images[0].imagePath);
        })
        .catch((error) => console.log("error", error));
    },
    // Fungsi get user dari jajaID
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
    // Fungsi Tipe Produk
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
    // Fungsi agar data tidak duplicate pada pilihan paket sewa
    removeDuplicates(arr, prop) {
      return arr.filter(
        (obj, index, self) =>
          index === self.findIndex((o) => o[prop] === obj[prop])
      );
    },
    // Fungsi Pilih Paket dalam Sewa
    getTypeDataPackage() {
      if (this.selectedDuration === "") {
        console.log("Pilih Durasi Terlebih Dahulu");
      } else {
        // Filter out options with priceExclReplaceCarVat equal to 0
        this.selectedPackages = this.selectedPackages.filter(
          (pkg) => pkg.priceExclReplaceCarVat !== 0
        );

        // Remove duplicates based on the drivingOption property
        this.filteredPackages = this.removeDuplicates(
          this.selectedPackages,
          "drivingOption"
        );

        // Rest of your code...
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
    },
    // Fungsi Format pada harga
    formatHargaTotal() {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(this.hargaTotal);
    },
    // Fungsi Pilih tenor dalam Sewa
    getTypeDataDuration() {
      if (this.selectedDuration === "") {
        console.log("Pilih Durasi Terlebih Dahulu");
      } else {
        console.log("Durasi berlangganan yang dipilih:", this.selectedDuration);
      }
      // Lakukan tindakan yang diperlukan dengan data pilihan durasi berlangganan
    },
    // Fungsi Mobil Pengganti
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
    // Fungsi Format pada harga
    formatHarga(harga) {
      return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // Fungsi slide pada tab
    onSlideStart(slide) {
      this.sliding = true;
    },
    // Fungsi slide pada tab
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  components: {
    navigation, //Navbar
    Flickity, // Slider
    foote, // Footer
    Carousel3d, //Slider
    Slide, //Slider
    VLazyImage, //Slider
    Rekomondasi, // Rekomondasi
  },
};
</script>
<style scoped>
.title-judul-angsuran {
  color: var(--color-neutral-neutral-08, #1f1c1c);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
}
.title-angsuran {
  color: var(--color-blue-blue-06, #0f5392);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
}
.ca {
  display: flex;
  padding: 24px 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  background: #e9f7ff;
}
.cb {
  display: flex;
  padding: 24px 12px;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-self: stretch;
  background: #c3eaff;
}
.text-card {
  color: var(--color-blue-blue-06, #0f5392);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
}
.ca1 {
  display: flex;
  width: 100%;
  padding: 24px 12px;
  justify-content: center;
  align-items: center;

  align-self: stretch;
  border-radius: 10px 10px 0px 0px;
}
.ta1 {
  color: var(--color-blue-blue-05, #207ace);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
}
.ta2 {
  color: var(--color-blue-blue-06, #0f5392);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.4px;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.exchange-tenor_heading {
  background-color: #207ace;
  color: white;
}

.exchange-tenor {
  background-color: white;
  color: #021736;
  border: 2px solid #faaa43;
}

.exchange-tenor_card {
  border-radius: 16px;
  font-weight: bold;
  text-align: center;
  font-size: 0.8rem;
}
.nice-input::placeholder {
  color: black; /* Ganti dengan warna hitam yang Anda inginkan */
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

/* CSS untuk memodifikasi input saat digunakan */
.nice-input:focus {
  border-color: #0c5eaa; /* Warna garis tepi input saat digunakan */
  outline: none; /* Menghilangkan garis tanda fokus */
  box-shadow: 0 0 5px #0c5eaa; /* Efek bayangan saat input digunakan */
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .modal-dialog {
    width: 90%;
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    top: 40%;
    transform: translateY(-17%);
  }
  .img {
    width: 100%;
    height: auto;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .modal-dialog {
    width: 90%;
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    top: 30%;
    transform: translateY(-17%);
  }
  .img {
    width: 100%;
    height: auto;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .modal-dialog {
    width: 100%;
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    top: 30%;
    transform: translateY(-17%);
  }
  .img {
    width: 500px;
    height: 300px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .modal-dialog {
    width: 100%;
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    top: 25%;
    transform: translateY(-17%);
  }
  .img {
    width: 500px;
    height: 300px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .modal-dialog {
    width: 100%;
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    top: 20%;
    transform: translateY(-17%);
  }
  .img {
    width: 500px;
    height: 300px;
  }
}
* {
  box-sizing: border-box;
}
.form-group {
  position: relative;
}

.form-group label {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  padding: 8px;
  transition: 0.2s;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label {
  transform: translateY(-100%);
  font-size: 12px;
  background-color: white;
  color: #707070;
  border-radius: 4px;
  padding: 0 4px;
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
/* .modal-dialog {
    width: 50%; 
    max-width: 70%;
    height: auto;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
  } */

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
