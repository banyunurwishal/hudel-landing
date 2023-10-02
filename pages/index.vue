<template>
  <div>
    <div class="main-wrapper">
      <Content />
    </div>
  </div>
</template>

<script>
import Content from "../components/content.vue";
import navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: { navbar, Content, Footer },
  name: "IndexPage",
};
</script>

<style></style>
