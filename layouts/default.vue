<template>
  <div class="width-responsive-desktop">
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
  background-color: #12083a;
  background-image: url("@/assets/img/Hudel Gradient Background PNG.png");
  background-repeat: no-repeat;
  font-family: "Inter";
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
  padding-left: 244px;
  padding-right: 244px;
  background: linear-gradient(180deg, #261a59 0%, #12083a 100%);
}

@media only screen and (max-width: 430px) {
  .navbar-wrapper {
    margin-left: 25px;
    margin-right: 25px;
  }
  .main-wrapper {
    margin-left: 25px;
    margin-right: 25px;
  }
  .footer-wrapper {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .navbar-wrapper {
    margin-left: 60px;
    margin-right: 60px;
  }
  .main-wrapper {
    margin-left: 50px;
    margin-right: 50px;
  }

  .footer-wrapper {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  .navbar-wrapper {
    margin-left: 60px;
    margin-right: 60px;
  }
  .main-wrapper {
    margin-left: 90px;
    margin-right: 90px;
  }

  .footer-wrapper {
    padding-left: 70px;
    padding-right: 70px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1180px) {
  .navbar-wrapper {
    margin-left: 50px;
    margin-right: 50px;
  }
  .main-wrapper {
    margin-left: 80px;
    margin-right: 80px;
  }

  .footer-wrapper {
    padding-left: 60px;
    padding-right: 60px;
  }
}
</style>
