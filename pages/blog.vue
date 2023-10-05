<template>
  <div class="blog-wrapper">
    <b-row class="space-blog-nav" style="">
      <b-col class="text-center">
        <img src="@/assets/img/Excited.png" class="image-blog" />
        <div class="space-blog-top">
          <span class="text-white text-blog">Hang Tight, We're </span>
          <br />
          <span class="text-white desc-blog">
            <span style="color: #6638ff !important">Upgrading</span>!
          </span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.space-blog-top {
  margin-top: 34px;
  margin-bottom: 34px;
}
.text-blog {
  font-size: 48px;
}
.desc-blog {
  font-size: 48px;
}
.blog-wrapper {
  margin-left: 100px;
  margin-right: 100px;
}
.space-blog-nav {
  margin-top: 150px;
  margin-bottom: 150px;
}
@media only screen and (max-width: 430px) {
  .blog-wrapper {
    margin-left: 100px;
    margin-right: 100px;
  }
  .space-blog-nav {
    margin-top: 250px;
    margin-bottom: 250px;
  }
  .image-blog {
    height: 200px;
  }
  .text-blog {
    font-size: 32px;
  }
  .desc-blog {
    font-size: 32px;
  }
}
</style>
