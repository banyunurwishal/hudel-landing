<template>
  <div>
    <div class="navbar-wrapper">
      <navbar />
    </div>
    <Main />
    <div class="footer-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import Main from "../components/Main.vue";
export default {
  name: "default",
  created() {},
  components: {
    navbar,
    Main,
    Footer,
  },
};
</script>

<style>
body {
  /* background-image: url("@/assets/img/background-compress.png"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #12083a 0%, #241853 100%);
}

.navbar-wrapper {
  margin-left: 120px;
  margin-right: 120px;
}

.main-wrapper {
  margin-left: 222px;
  margin-right: 222px;
}

.footer-wrapper {
  margin-left: 244px;
  margin-right: 244px;
}
</style>
