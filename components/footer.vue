<template>
  <div class="space-footer">
    <b-row class="text-center" style="margin-bottom: 60px" align-h="center">
      <b-col class="width-footer" sm="1">
        <a
          @click="handleChangePage('/')"
          :style="
            this.$route.path == '/'
              ? 'color:#430BFF !important;font-weight: bold;'
              : ''
          "
          class="pointer text-decoration-none text-light text-list"
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
          class="pointer text-decoration-none text-light text-list"
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
          class="pointer text-decoration-none text-light text-list"
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
          class="pointer text-decoration-none text-light text-list"
          >Community</a
        ></b-col
      >
    </b-row>
    <b-row class="text-white">
      <b-col cols="12" md="10" xl="9">
        <b-row>
          <b-col>
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
          <b-col>
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
ul.horizontal-footer {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Hide overflowing content */
}

/* Style for the list items (li) */
ul.horizontal-footer li {
  float: left; /* Float the list items to make them horizontal */
  margin-right: 10px; /* Add some spacing between list items */
}

.space-footer {
  padding-top: 60px;
  padding-bottom: 122px;
}

.space-content-footer {
  margin-bottom: 24px;
}

.text-cr {
  font-size: 24px;
}
.text-cr img {
  margin-bottom: 5px;
  margin-right: 4px;
}

@media only screen and (max-width: 500px) {
  .space-footer {
    padding-top: 30px;
    padding-bottom: 61px;
  }

  .space-content-footer {
    margin-bottom: 16px;
  }

  .width-footer {
    width: 50%;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .text-cr {
    font-size: 16px;
  }
  .text-cr img {
    height: 16px;
    margin-bottom: 5px;
    margin-right: 4px;
  }
}
</style>
