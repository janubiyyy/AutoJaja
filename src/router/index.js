import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/HomeSection.vue";
import BackUp from "../components/backup";
import HomeSection from "../components/Home";
import loginaca from "../components/loginaca";
import registeraca from "../components/registeraca.vue";
import Kategori from "../components/kategori";
import Product from "../components/product";
import Search from "../components/search";
import Detail from "../components/detail";
import DetailLates from "../components/detaillates";
import HasilAngsuran from "../components/hasilangsuran";
import DetailAngsuran from "../components/DetailAngsuran";
import Tentang from "../components/tentang";
import Faq from "../components/faq";
import List from "../components/list";
import KebijakanPrivasi from "../components/kebijakanprivasi";
import Rekomondasi from "../components/rekomondasi";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: "/tentang",
      name: "Tentang",
      component: Tentang,
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq,
    },

    {
      path: "/rekomondasi",
      name: "Rekomondasi",
      component: Rekomondasi,
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
    },
    {
      path: "/detaillates/:slug",
      name: "DetailLates",
      component: DetailLates,
    },
    {
      path: "/hasilangsuran/",
      name: "HasilAngsuran",
      component: HasilAngsuran,
    },
    {
      path: "/DetailAngsuran",
      name: "DetailAngsuran",
      component: DetailAngsuran,
    },
    {
      path: "/list",
      name: "List",
      component: List,
    },
    {
      path: "/kebijakanprivasi",
      name: "KebijakanPrivasi",
      component: KebijakanPrivasi,
    },
    {
      path: "/kategori",
      name: "Kategori",
      component: Kategori,
    },
    {
      path: "/product",
      name: "Product",
      component: Product,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },

    {
      path: "/backup",
      name: "BackUp",
      component: BackUp,
    },

    {
      path: "/home",
      name: "Home",
      component: HomeSection,
    },
    {
      path: "/loginaca",
      name: "loginaca",
      component: loginaca,
    },
    {
      path: "/registeraca",
      name: "registeraca",
      component: registeraca,
    },
  ],
});

// Fungsi middleware untuk memeriksa keberadaan token
const requireAuth = (to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    // Token ada, izinkan akses ke halaman yang diminta
    next();
  } else {
    // Token tidak ada, arahkan pengguna ke halaman login
    next("/loginaca");
  }
};

// Daftarkan middleware pada rute yang memerlukannya
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    // Halaman memerlukan autentikasi, jalankan middleware requireAuth
    requireAuth(to, from, next);
  } else {
    // Halaman tidak memerlukan autentikasi, izinkan akses
    next();
  }
});

export default router;
