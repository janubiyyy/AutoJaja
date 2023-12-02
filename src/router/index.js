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
      meta: { title: 'Home | Jaja Auto' }
    },

    {
      path: "/tentang",
      name: "Tentang",
      component: Tentang,
      meta: { title: 'Tentang | Jaja Auto' }
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq,
      meta: { title: 'FAQ | Jaja Auto' }
    },

    {
      path: "/rekomondasi",
      name: "Rekomondasi",
      component: Rekomondasi,
      meta: { title: 'Rekomondasi Produk | Jaja Auto' }
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
      meta: { title: 'Detail Produk | Jaja Auto' }
    },
    {
      path: "/detaillates/:slug",
      name: "DetailLates",
      component: DetailLates,
      meta: { title: 'Detail Produk | Jaja Auto' }
    },
    {
      path: "/hasilangsuran/",
      name: "HasilAngsuran",
      component: HasilAngsuran,
      meta: { title: 'Hasil Angsuran | Jaja Auto' }
    },
    {
      path: "/DetailAngsuran",
      name: "DetailAngsuran",
      component: DetailAngsuran,
      meta: { title: 'Detail Angsuran | Jaja Auto' }
      
    },
    {
      path: "/list",
      name: "List",
      component: List,
      meta: { title: 'List Produk | Jaja Auto' }
    },
    {
      path: "/kebijakanprivasi",
      name: "KebijakanPrivasi",
      component: KebijakanPrivasi,
      meta: { title: 'Kebijakan Privasi | Jaja Auto' }
    },
    {
      path: "/kategori",
      name: "Kategori",
      component: Kategori,
      meta: { title: 'Kategori | Jaja Auto' }
    },
    {
      path: "/product",
      name: "Product",
      component: Product,
      meta: { title: 'Produk | Jaja Auto' }
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
      meta: { title: 'Pencarian | Jaja Auto' }
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
      meta: { title: 'Home | Jaja Auto' }
    },
    {
      path: "/loginaca",
      name: "loginaca",
      component: loginaca,
      meta: { title: 'Login | Jaja Auto' }
    },
    {
      path: "/registeraca",
      name: "registeraca",
      component: registeraca,
      meta: { title: 'Registrasi | Jaja Auto' }
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
// Navigation guard to update the title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Jaja Auto'; // Set the title from the route's meta or a default value
  next();
});


export default router;
