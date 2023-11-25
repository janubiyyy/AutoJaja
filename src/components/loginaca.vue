<template>
  <div class="login-area py-120">
    <div class="container">
      <div class="col-md-5 mx-auto">
        <div class="login-form">
          <div class="login-header">
            <img src="../assets/img/logo/logoauto.png" alt="" />
          </div>
          <div class="text-subtitle-1 text-medium-emphasis"><b>Masuk</b></div>
          <span>Isikan email dan kata sandi anda untuk memulai</span>
          <hr />
          <form action="#">
            <div class="form-group">
              <label>Email Address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Your Password"
                v-model="password"
              />
            </div>
            <div class="d-flex align-items-center">
              <button
                type="submit"
                @click="login"
                style=" font-size: 16px;
  color: var(--color-white);
  padding: 12px 20px;
  transition: all 0.5s;
  text-transform: capitalize;
  position: relative;
  width: 100%;
  border-radius: 13px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  border: none;
  background: var(--theme-color);
  box-shadow: var(--box-shadow);
  z-index: 1;"
              >
                <i class="far fa-sign-in"></i> Login
              </button>
            </div>
          </form>
          <div class="login-footer">
            <p>
              Don't have an account?
              <router-link to="/registeraca">Register.</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  data: () => ({
    visible: false,
    email: "",
    password: "",
  }),
  methods: {
    login() {
      const requestBody = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("https://jaja.id/backend/user/login", requestBody)
        .then((response) => {
          const data = response.data;
          // Lakukan sesuatu dengan respons data
          if (
            data.status.code === 200 &&
            data.status.message === "login success"
          ) {
            localStorage.setItem("token", data.data);

            // Mengganti alert dengan SweetAlert
            Swal.fire({
              icon: "success",
              title: "Login berhasil!",
              text: "Berhasil Login pada Jaja Auto",
              showConfirmButton: true,
              confirmButtonColor: "#0C5EAA",
              timer: 1000,
            }).then(() => {
              // Redirect ke halaman lain setelah SweetAlert ditutup
              this.$router.push("/detail");
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Login gagal",
              text: "Pesan kesalahan login",
              confirmButtonColor: "#0C5EAA",
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Terjadi kesalahan",
            text: "Terjadi kesalahan saat melakukan login",
          });
        });
    },
  },
};
</script>
