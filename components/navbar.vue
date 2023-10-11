<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand>
      <a
        class="navbar-brand pointer text-navbar animate__fadeInUp animate__animated animate__slow"
        @click="handleChangePage('/')"
      >
        <img
          src="@/assets/img/logo.jpeg"
          class="d-inline-block align-top rounded-pill style-logo"
        />
        <span class="align-middle ml-2"><b>Hudel</b></span>
      </a>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <ul class="horizontal-list">
          <li
            class="pointer animate__fadeIn animate__animated animate__slow"
            @click="handleChangePage('/')"
          >
            <a
              :style="
                this.$route.path == '/'
                  ? 'color:#430BFF !important;font-weight: bold;'
                  : ''
              "
              class="text-decoration-none text-light px-3 text-list"
              >Home</a
            >
          </li>
          <li
            class="pointer animate__fadeIn animate__animated animate__slow"
            @click="handleChangePage('/legal')"
          >
            <a
              :style="
                this.$route.path == '/legal'
                  ? 'color:#430BFF !important;font-weight: bold;'
                  : ''
              "
              class="text-decoration-none text-light px-3 text-list"
              >Legal</a
            >
          </li>
          <li
            class="pointer animate__fadeIn animate__animated animate__slow"
            @click="handleChangePage('/blog')"
          >
            <a
              :style="
                this.$route.path == '/blog'
                  ? 'color:#430BFF !important;font-weight: bold;'
                  : ''
              "
              class="text-decoration-none text-light px-3 text-list"
              >Blog</a
            >
          </li>
          <li
            class="pointer animate__fadeIn animate__animated animate__slow"
            @click="handleChangePage('/community')"
          >
            <a
              :style="
                this.$route.path == '/community'
                  ? 'color:#430BFF !important;font-weight: bold;'
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
  width: 54px;
  height: 54px;
}

.text-navbar {
  font-size: 33px;
  font-family: "Inter", sans-serif;
}

@media only screen and (max-width: 500px) {
  .style-logo {
    width: 48px;
    height: 48px;
  }

  .text-navbar {
    font-size: 32px;
  }

  ul.horizontal-list {
    list-style-type: none;
    overflow: visible;
  }

  /* Style for the list items (li) */
  ul.horizontal-list li {
    float: none;
    text-align: center;
  }

  .text-list {
    font-size: 16px;
  }
}

@media only screen and (max-width: 430px) {
  .style-logo {
    width: 48px;
    height: 48px;
  }

  .text-navbar {
    font-size: 32px;
  }

  ul.horizontal-list {
    margin-bottom: 8px;
  }

  /* Style for the list items (li) */
  ul.horizontal-list li {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .text-list {
    font-size: 24px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 820px) {
  .style-logo {
    width: 48px;
    height: 48px;
  }

  .text-navbar {
    font-size: 32px;
  }

  ul.horizontal-list {
    list-style-type: none;
    overflow: visible;
    margin-bottom: 8px;
  }

  /* Style for the list items (li) */
  ul.horizontal-list li {
    float: none;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .text-list {
    font-size: 30px;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  .style-logo {
    width: 48px;
    height: 48px;
  }

  .text-navbar {
    font-size: 32px;
  }

  ul.horizontal-list {
    margin-bottom: 8px;
  }

  /* Style for the list items (li) */
  ul.horizontal-list li {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .text-list {
    font-size: 24px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1180px) {
  .style-logo {
    width: 48px;
    height: 48px;
  }

  .text-navbar {
    font-size: 32px;
  }

  ul.horizontal-list {
    margin-bottom: 8px;
  }

  /* Style for the list items (li) */
  ul.horizontal-list li {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  .text-list {
    font-size: 24px;
  }
}
</style>
