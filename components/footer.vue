<template>
  <div class="space-footer">
    <b-row class="text-center footer-nav" align-h="center">
      <b-col class="width-footer" sm="1">
        <a
          @click="handleChangePage('/')"
          :style="
            this.$route.path == '/'
              ? 'color:#430BFF !important;font-weight: bold;'
              : ''
          "
          class="pointer text-decoration-none text-light text-footer-mobile"
          >Home</a
        >
      </b-col>
      <b-col class="width-footer" sm="1">
        <a
          @click="handleChangePage('/legal')"
          :style="
            this.$route.path == '/legal'
              ? 'color:#430BFF !important;font-weight: bold;'
              : ''
          "
          class="pointer text-decoration-none text-light text-footer-mobile"
          >Legal</a
        >
      </b-col>
      <b-col class="width-footer" sm="1">
        <a
          @click="handleChangePage('/blog')"
          :style="
            this.$route.path == '/blog'
              ? 'color:#430BFF !important;font-weight: bold;'
              : ''
          "
          class="pointer text-decoration-none text-light text-footer-mobile"
          >Blog</a
        ></b-col
      >
      <b-col class="width-footer" sm="1">
        <a
          @click="handleChangePage('/community')"
          :style="
            this.$route.path == '/community'
              ? 'color:#430BFF !important;font-weight: bold;'
              : ''
          "
          class="pointer text-decoration-none text-light text-footer-mobile"
          >Community</a
        ></b-col
      >
    </b-row>
    <b-row class="text-white wrapper-footer-desc">
      <b-col class="width-mobile-footer" cols="12" md="12" xl="9">
        <b-row class="footer-desc">
          <b-col cols="12" md="12" lg="6">
            <div class="space-content-footer">
              <span class="text-cr"
                ><img src="@/assets/icons/mail.svg" />
                loremipsum@gmail.com</span
              >
            </div>

            <div class="space-content-footer">
              <span class="text-cr"
                ><img src="@/assets/icons/tag.svg" /> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit,</span
              >
            </div>
          </b-col>
          <b-col cols="12" md="12" lg="6">
            <div class="space-content-footer">
              <span class="text-cr"
                ><img src="@/assets/icons/phone.svg" /> +1 123 123 123 123</span
              >
            </div>
            <div class="space-content-footer">
              <span class="text-cr"
                ><img src="@/assets/icons/insta.svg" /> @thehudel</span
              >
            </div>
            <div class="space-content-footer">
              <span class="text-cr"
                ><img src="@/assets/icons/fb.svg" /> Hudel</span
              >
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <div class="space-content-footer">
          <span class="text-cr"
            ><img src="@/assets/icons/cr.svg" /> Lorrem ipsum dolor sit</span
          >
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "footer",
  methods: {
    handleChangePage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
.space-footer {
  padding-top: 60px;
  padding-bottom: 122px;
}

.space-content-footer {
  margin-bottom: 24px;
}

.text-cr {
  font-size: 24px;
  font-weight: 500;
  line-height: 62px;
  text-align: center;
}
.text-cr img {
  margin-bottom: 5px;
  margin-right: 4px;
}
.footer-nav {
  margin-bottom: 60px;
}

.text-footer-mobile {
  font-size: 24px;
}

@media only screen and (max-width: 430px) {
  .space-footer {
    padding-top: 30px;
    padding-bottom: 61px;
  }

  .space-content-footer {
    margin-bottom: 16px;
  }

  .width-footer {
    width: fit-content;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .text-footer-mobile {
    font-size: 16px;
  }

  .text-cr {
    font-size: 16px;
  }
  .text-cr img {
    height: 22px;
    width: 22px;
    margin-bottom: 5px;
    margin-right: 4px;
  }

  .footer-nav {
    justify-content: space-between !important;
    margin-bottom: 32px;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .wrapper-footer-desc {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media only screen and (min-width: 1280px) and (max-width: 1290px) {
}

@media only screen and (min-width: 768px) and (max-width: 850px) {
  .width-footer {
    width: fit-content !important;
    flex: fit-content !important;
    max-width: fit-content !important;
  }

  .text-cr {
    font-size: 16px;
  }
  .text-cr img {
    height: 24px;
    margin-bottom: 5px;
    margin-right: 4px;
  }

  .text-footer-mobile {
    font-size: 24px;
  }
  .space-footer {
    padding-top: 30px;
    padding-bottom: 60px;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  .width-footer {
    width: fit-content !important;
    flex: fit-content !important;
    max-width: fit-content !important;
  }

  .text-footer-mobile {
    font-size: 24px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1180px) {
  .space-footer {
    padding-top: 30px;
    padding-bottom: 60px;
  }
  .width-footer {
    width: fit-content !important;
    flex: fit-content !important;
    max-width: fit-content !important;
  }

  .text-footer-mobile {
    font-size: 24px;
  }
}
</style>
