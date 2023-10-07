<template>
  <div class="fade-in-right">
    <!-- Your content goes here -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    scrollThreshold: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    const element = this.$el;

    window.addEventListener("scroll", () => {
      if (!element.classList.contains("fade-in-right-active")) {
        const rect = element.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const scrollHeight = window.scrollY;

        // Check if the element is in the viewport and the scroll height is greater than or equal to the scrollThreshold
        if (rect.top < viewportHeight && scrollHeight >= this.scrollThreshold) {
          element.classList.add("fade-in-right-active");
        }
      }
    });
  },
};
</script>

<style scoped>
.fade-in-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 4s ease, transform 4s ease;
}

.fade-in-right-active {
  opacity: 1;
  transform: translateX(0);
}
</style>
