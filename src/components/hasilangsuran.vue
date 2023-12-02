<template>
  <div style="background-color:#F8F8F8;">
    <!-- Tampilan Navbar -->
    <navigation />
    <div style="padding:5%; padding-top:12%;">
      <div>
        <div
          style="
padding: 40px 20px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 60px; ; 
 border-radius: 20px;
background: var(--color-neutral-neutral-00, #FFF);;"
        >
          <div>
            <span
              style="color: var(--color-blue-blue-06, #0F5392);
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.32px;"
              >Detail Pengajuan Anda</span
            >
            <br />
            <br />
            <div class="mt-5">
              
              <v-row>
  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">Merk</p>
    <span class="title-angsuran">{{ simulasiPertama.name_brand }}</span>
  </v-col>
  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">Model</p>
    <span class="title-angsuran">{{simulasiPertama.name_produk }}</span>
  </v-col>
  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">Tipe</p>
    <span class="title-angsuran">{{ simulasiPertama.name_produk_grades }}</span>
  </v-col>
  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">Jenis</p>
    <span class="title-angsuran">{{ simulasiPertama.name_jenis }}</span>
  </v-col>
</v-row>

<v-row>
  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">Harga</p>
  </li>
    <span class="title-angsuran">{{ formatPriceAsRupiah(simulasiData[0].otr) }}</span>
  </v-col>
  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">DP</p>
    <span class="title-angsuran">{{ formatPriceAsRupiah(simulasiData[0].dp) }}</span>
  </v-col>

  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">Mitra</p>
    <span class="title-angsuran">{{ selectedMitraText }}</span>
  </v-col>
  <v-col xs="12" sm="6" md="3">
    <p class="title-judul-angsuran">Wilayah</p>
    <span class="title-angsuran">{{ selectedWilayahText }}</span>
  </v-col>
</v-row>

            </div>
            <br />
            <div class="mt-5">
              <span
                style="color: var(--color-blue-blue-06, #0F5392);
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.48px;"
              >
                Pilih Tenor yang sesuai dengan budget anda dan lengkapi data
                pengajuan
              </span>
            </div>
          </div>


          <v-row class="mt-3">
  <v-col>
    <div class="d-flex flex-column align-items-center">
      <div class="ca" style="border-radius: 10px 10px 0 0;">
        <span class="text-card">Tenor</span>
      </div>
      <div class="cb">
        <span class="text-card text-center">Total Pembayaran Pertama</span>
      </div>
      <div class="ca">
        <span class="text-card">Suku Bunga</span>
      </div>
      <div class="cb" style="border-radius: 0 0 10px 10px;">
        <span class="text-card text-center">Angsuran/bulan</span>
      </div>
    </div>
  </v-col>
  <v-col v-for="(item, index) in simulasiData" :key="index" class="mb-3">
    <div class="card-tenor mr-1">
      <div class="ca1">
        <span class="ta1">{{ item.tenorTahun }} Thn / {{ item.tenorBulan }} Bln</span>
      </div>
      <div class="ca1">
        <span class="ta2">Rp {{ formatPrice(item.angsuranPertama) }}</span>
      </div>
      <div class="ca1">
        <span class="ta1">{{ item.bunga }}%</span>
      </div>
      <div class="ca1">
        <span class="ta2">
          Rp {{ formatPrice(item.angsuran_bulanan).toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }}
        </span>
      </div>
      <div style="padding: 5px; width: 100%;   padding-right: 15px;">
        <button type="submit" @click="selectTenor(index)" class="button">
          <span v-if="isLoading">
            <i class="fas fa-spinner fa-spin"></i>
            Loading...
          </span>
          <span v-else>Pilih Tenor</span>
        </button>
      </div>
    </div>
  </v-col>
</v-row>

          <br />
          <div>
            <ol>
              <li class="text-ketentuan">
                1. Pricing ini berlaku khusus payroll Bank Mandiri dan Nasabah
                Bank Mandiri sesuai ketentuan MUF
              </li>
              <li class="text-ketentuan">
                2. Perhitungan simulasi di atas tidak mengikat dan dapat berubah
                sewaktu-waktu
              </li>
              <li class="text-ketentuan">
                3. Skema pembayaran Angsuran pertama Dibayarkan di Muka (ADDM)
              </li>
              <li  ref="scrollToElement" class="text-ketentuan">
                4. Sudah termasuk asuransi kombinasi 
              </li>
            
              <li  class="text-ketentuan">
                5. Total Pembayaran Pertama terdiri atas Down Payment (DP) Nett,
                Biaya Admin, Provisi, Biaya Asuransi, dan Biaya Fidusia
              </li>
            </ol>
          </div>
          <br  />
        </div>
        <br/>
        <div
          v-if="showForm"
         
          style="border-radius: 20px;
background: var(--color-neutral-neutral-00, #FFF);
padding: 40px; "
        >
        <p style="color: var(--color-yellow-yellow-06, #E79B39);
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.32px;">Form Pengajuan Angsuran Anda</p>
         <span style="color: var(--color-yellow-yellow-04, #FCB963);
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.27px;">Mohon diisi dengan sebenar-benarnya</span>
<br/>
<br/>
<v-row class="mt-5" no-gutters v-if="selectedTenorData">
  <div class="col-md-3 col-sm-6">
    <h5 class="car-single-price">Harga OTR</h5>
    <v-chip
      class="ma-2"
      closable
      color="#DEF3FF"
      text-color="#207ACE"
      label
    >
      {{ formatPriceAsRupiah(selectedTenorData.otr) }}
    </v-chip>
  </div>
  <div class="col-md-3 col-sm-6">
    <h5 class="car-single-price">Angsuran Pertama</h5>
    <v-chip
      class="ma-2"
      closable
      color="#DEF3FF"
      text-color="#207ACE"
      label
    >
      Rp {{
        formatPrice(selectedTenorData.angsuranPertama).toLocaleString(
          "id-ID",
          {
            style: "currency",
            currency: "IDR",
          }
        )
      }}
    </v-chip>
  </div>
  <div class="col-md-3 col-sm-6">
    <h5 class="car-single-price">Tenor</h5>
    <v-chip
      class="ma-2"
      closable
      color="#DEF3FF"
      text-color="#207ACE"
      label
    >
      {{ selectedTenorData.tenorTahun }} Tahun /
      {{ selectedTenorData.tenorBulan }} Bulan
    </v-chip>
  </div>
  <div class="col-md-3 col-sm-6">
    <h5 class="car-single-price">Angsuran Per Bulan</h5>
    <v-chip
      class="ma-2"
      closable
      color="#DEF3FF"
      text-color="#207ACE"
      label
    >
      Rp {{
        formatPrice(selectedTenorData.angsuran_bulanan).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })
      }}
    </v-chip>
  </div>
</v-row>

<br/>
          <form class="mt-3" @submit.prevent="submitAngsuran">
            <v-row>
      <v-col cols="12" md="6">
        <div class="form-group">
          <label class="label-form">Nama Lengkap</label>
          <input
            type="text"
            class="form-control"
            v-model="displayedProfile.name"
            placeholder="Nama Anda"
            id="inputName"
            required
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="form-group">
          <label class="label-form">WhatsApp</label>
          <input
            type="tel"
            class="form-control"
            v-model="displayedProfile.phoneNumber"
            placeholder="+62"
            id="inputNumber"
            required
          />
        </div>
      </v-col>
    </v-row>
    <br/>
    <v-row>
      <v-col cols="12" md="6">
        <div class="form-group">
          <label class="label-form">Alamat Email</label>
          <input
            type="email"
            class="form-control"
            v-model="displayedProfile.email"
            placeholder="Email Anda"
            id="inputEmail"
            required
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="form-group">
          <label class="label-form">Domisili</label>
          <input
            class="form-control"
            v-model="displayedProfile.alamat_lengkap"
            placeholder="Jakarta"
            id="inputAlamat"
            required
          />
        </div>
      </v-col>
    </v-row>
            <br/>
            <div class="mt-3 form-group">
              <button
        type="submit"
        class="btn-ajukan-angsuran"
        :disabled="loadingAngsuran"
      >
        {{ loadingAngsuran ? 'Sedang memproses data...' : 'Ajukan Angsuran' }}
      </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
    <foote />
  </div>
</template>
<script>
import navigation from "../components/backup";
import foote from "../components/Footer";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "HasilAngsuran",
  components: {
    navigation, //Navbar
    foote, // Footer
  },
  data() {
    return {
      loadingAngsuran: false,
      isLoading: false,
      simulasiData: null,
      simulasiPertama: null,
      carDetail: null,
      selectedMitraText: localStorage.getItem("selectedMitraText") || "",
      selectedWilayahText: localStorage.getItem("selectedWilayahText") || "",
      showForm: false, // Data ini mengendalikan visibilitas form
      selectedTenorData: null, // Data untuk menyimpan informasi tenor yang dipilih
      displayedProfile: {
        name: "",
        phoneNumber: "",
        email: "",
        alamat_lengkap: "",
      },
    };
  },
  mounted() {
    this.simulasiData = JSON.parse(localStorage.getItem("simulasiData"));
    this.simulasiPertama = JSON.parse(localStorage.getItem("simulasiPertama"));
    this.carDetail = JSON.parse(localStorage.getItem("carDetail"));
  },

  methods: {
    formatPriceAsRupiah(priceString) {
      const price = parseInt(priceString, 10); // Konversi string menjadi bilangan bulat
      if (isNaN(price)) {
        return priceString; // Kembalikan string asli jika bukan angka yang valid
      }

      const formattedPrice = price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });

      return formattedPrice;
    },
    formatRupiah(angka) {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(angka);
    },

    submitAngsuran() {
      this.loadingAngsuran = true;
      const uangMukaCleaned = this.selectedTenorData.uangMuka.replace(
        /\D/g,
        ""
      );
      const selectedBankId = this.selectedBankId; // Anda harus mengatur nilai ini sesuai dengan pilihan pengguna
      const selectedWilayahId = this.selectedWilayahId; // Anda harus mengatur nilai ini sesuai dengan pilihan pengguna

      // Data untuk dikirim ke API
      const requestData = {
        id_produk_grades: this.simulasiPertama.id_produk_grades,
        name: this.displayedProfile.name,
        contactNumber: this.displayedProfile.phoneNumber,
        email: this.displayedProfile.email,
        domisili: this.displayedProfile.alamat_lengkap,
        rentOrCredit: "credit",
        tenorTahun: this.selectedTenorData.tenorTahun, // Ambil tenor tahun dari hasil simulasi pertama
        tenorBulan: this.selectedTenorData.tenorBulan, // Ambil tenor bulan dari hasil simulasi pertama
        otr: this.selectedTenorData.otr, // Ambil harga otr dari hasil simulasi pertama
        dp: this.selectedTenorData.dp, // Ambil dp dari hasil simulasi pertama
        uangMuka: uangMukaCleaned, // Ambil uang muka dari hasil simulasi pertama
        pokokHutangAwal: this.selectedTenorData.pokokHutangAwal, // Pokok Hutang Awal mungkin perlu disesuaikan sesuai kebutuhan
        bunga: this.selectedTenorData.bunga, // Bunga mungkin perlu disesuaikan sesuai kebutuhan
        angsuran_pokok: this.selectedTenorData.angsuran_pokok, // Angsuran Pokok mungkin perlu disesuaikan sesuai kebutuhan
        angsuran_bunga: this.selectedTenorData.angsuran_bunga, // Angsuran Bunga mungkin perlu disesuaikan sesuai kebutuhan
        angsuran_bulanan: this.selectedTenorData.angsuran_bulanan, // Angsuran Bulanan mungkin perlu disesuaikan sesuai kebutuhan
        biayaAdministrasi: this.selectedTenorData.biayaAdministrasi, // Biaya Administrasi mungkin perlu disesuaikan sesuai kebutuhan
        angsuranPertama: this.selectedTenorData.angsuranPertama,
        id_bank: this.selectedTenorData.bank, // Gunakan nilai yang telah dipilih oleh pengguna
        id_wilayah: this.selectedTenorData.wilayah,
      };

      // Format harga produk, dp, dan angsuran pertama sebagai rupiah
      const formattedOtr = this.formatRupiah(requestData.otr);
      const formattedDp = this.formatRupiah(requestData.uangMuka);
      const formattedAngsuranPertama = this.formatRupiah(
        requestData.angsuranPertama
      );
      const selectedType = localStorage.getItem("selectedType");

      // Buat pesan WhatsApp dengan data yang dikirim
      const message = `
    Halooo Admin Jaja Auto,
    Perkenalkan, Nama saya ${requestData.name}. Saya tertarik untuk mengetahui lebih lanjut tentang penawaran sewa di Jaja Auto.

    Berikut detail mobil yang saya minati:
    Pilihan Tipe: ${selectedType}
    Pilihan Tenor: ${requestData.tenorBulan} Bulan / ${requestData.tenorTahun} Tahun
    Harga Product : Rp ${formattedOtr}
    Uang Muka: Rp ${formattedDp}
    Angsuran Pertama: Rp ${formattedAngsuranPertama}

    Saya berharap dapat mendiskusikan penawaran ini lebih lanjut. Mohon petunjuk selanjutnya.

    Terima kasih, ${requestData.name}
  `;

      // Lakukan permintaan HTTP POST ke API dengan token header
      axios
        .post("https://api.jaja.id/jauto/order/submit", requestData, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          this.loadingAngsuran = false;
          // Berhasil, tampilkan Sweet Alert
          Swal.fire({
            title: "Sukses!",
            text: "Data berhasil disubmit. Klik OK untuk menghubungi kami via WhatsApp.",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            // Arahkan pengguna ke WhatsApp saat OK diklik
            if (result.isConfirmed) {
              const whatsappNumber = "6285211220046";
              const formattedphonecipto = whatsappNumber.replace(/^0/, "");
              window.open(
                `https://api.whatsapp.com/send?phone=${formattedphonecipto}&text=${encodeURIComponent(
                  message
                )}`
              );
            }
          });
        })
        .catch((error) => {
          this.loadingAngsuran = false;
          // Terjadi kesalahan, tanggapi error di sini jika diperlukan
          console.error("Error submitting data:", error);
        });
    },

    selectTenor(index) {
      this.isLoading = true;
      this.showForm = true;

      // Scroll ke elemen yang sesuai
      this.$nextTick(() => {
        const element = this.$refs.scrollToElement;
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        this.selectedTenorData = this.simulasiData[index];
      });

      // Menonaktifkan animasi loading setelah 2 detik
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    formatPrice(price) {
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(price);
    },
  },
};
</script>
<style scoped>
.btn-ajukan-angsuran {
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
.btn-ajukan-angsuran:hover {
  background: #fbab44;
  color: black;
}
.card-tenor {
  border-radius: 10px;
  border: 1px solid var(--color-blue-blue-06, #0f5392);
  background: var(--color-neutral-neutral-00, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
.text-ketentuan {
  color: var(--color-neutral-neutral-06, #706d6d);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.text-jdl-otr {
  color: var(--color-neutral-neutral-06, #706d6d);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.48px;
}
.label-form {
  color: var(--color-neutral-neutral-08, #1f1c1c);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.48px;
}
.button {
  /* margin-right: 12px; */
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
  background: var(--color-yellow-yellow-05, #fbab44);
  box-shadow: var(--box-shadow);
  z-index: 1;
  width: 100%;
}
.button:hover {
  background: #207ace; /* Change the background color on hover */
  color: white; /* Change the text color on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a box shadow on hover */
}
</style>
