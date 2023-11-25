<template>
  <div class="login-area py-120">
    <div class="container">
      <div class="col-md-5 mx-auto">
        <div class="login-form">
          <div class="login-header">
            <img src="../assets/img/logo/logoauto.png" alt="" />
          </div>
          <div class="text-subtitle-1 text-medium-emphasis"><b>Daftar</b></div>
          <span>Isikan dengan lengkap</span>
          <hr />
          <form id="registerForm" @submit="register">
            <div class="form-group">
              <label>Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Your Name"
              />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="phoneNumber"
                placeholder="Your Phone Number"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Your Password"
              />
            </div>
            <div class="d-flex align-items-center">
              <button
                type="submit"
                id="registerButton"
                style="
                  font-size: 16px;
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
                  z-index: 1;
                "
              >
                <i class="far fa-paper-plane"></i> Register
              </button>
            </div>
          </form>
          <div class="login-footer">
            <p>
              Already have an account?
              <router-link to="/loginaca">Login.</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    register(event) {
      event.preventDefault();

      var fullName = document.getElementById("fullName").value;
      var email = document.getElementById("email").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var password = document.getElementById("password").value;

      var requestBody = {
        email: email,
        password: password,
        fullName: fullName,
        phoneNumber: phoneNumber,
      };

      axios
        .post("https://jaja.id/backend/user/register", requestBody)
        .then(function(response) {
          if (response.data.status.code === 200) {
            alert("Registrasi berhasil!");
            console.log(response.data.data);
          } else {
            alert("Registrasi gagal: " + response.data.status.message);
          }
        })
        .catch(function(error) {
          alert("Terjadi kesalahan saat menghubungi server.");
        });
    },
  },
};
</script>
