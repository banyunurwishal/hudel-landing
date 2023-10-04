<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#">
      <a
        class="navbar-brand pointer"
        @click="handleChangePage('/')"
        style="font-size: 33px; font-family: 'Inter', sans-serif"
      >
        <img
          src="@/assets/img/logo.jpeg"
          class="d-inline-block align-top rounded-pill style-logo"
          height="54"
          width="54"
          alt=""
        />
        <span class="align-middle"><b>Hudel</b></span>
      </a>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <ul class="horizontal-list">
          <li class="pointer" @click="handleChangePage('/')">
            <a
              :style="
                this.$route.path == '/' ? 'color:#430BFF !important;' : ''
              "
              class="text-decoration-none text-light px-3 text-list"
              >Home</a
            >
          </li>
          <li class="pointer" @click="handleChangePage('/legal')">
            <a
              :style="
                this.$route.path == '/legal' ? 'color:#430BFF !important;' : ''
              "
              class="text-decoration-none text-light px-3 text-list"
              >Legal</a
            >
          </li>
          <li class="pointer" @click="handleChangePage('/blog')">
            <a
              :style="
                this.$route.path == '/blog' ? 'color:#430BFF !important;' : ''
              "
              class="text-decoration-none text-light px-3 text-list"
              >Blog</a
            >
          </li>
          <li class="pointer" @click="handleChangePage('/community')">
            <a
              :style="
                this.$route.path == '/community'
                  ? 'color:#430BFF !important;'
                  : ''
              "
              class="text-decoration-none text-light px-3 text-list"
              >Community</a
            >
          </li>
        </ul>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handleChangePage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
/* Style for the horizontal ul */
ul.horizontal-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Hide overflowing content */
}

/* Style for the list items (li) */
ul.horizontal-list li {
  float: left; /* Float the list items to make them horizontal */
  margin-right: 10px; /* Add some spacing between list items */
}

.pointer {
  cursor: pointer;
}

.text-list {
  font-size: 24px;
  font-family: "Inter", sans-serif;
}

.style-logo {
  box-shadow: -11.23265266418457px 12.636734008789062px 9.126530647277832px 0px
    rgba(0, 0, 0, 0.35);

  box-shadow: -2.8081631660461426px 4.212244987487793px 9.126530647277832px 0px
    rgba(0, 0, 0, 0.25);
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1440px) {
}
</style>
