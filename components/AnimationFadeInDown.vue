<template>
  <div class="fade-in-down">
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
      if (!element.classList.contains("fade-in-down-active")) {
        const rect = element.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const scrollHeight = window.scrollY;

        // Check if the element is in the viewport and the scroll height is greater than or equal to the scrollThreshold
        if (rect.top < viewportHeight && scrollHeight >= this.scrollThreshold) {
          element.classList.add("fade-in-down-active");
        }
      }
    });
  },
};
</script>

<style scoped>
.fade-in-down {
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 3s ease, transform 3s ease;
}

.fade-in-down-active {
  opacity: 1;
  transform: translateY(0);
}
</style>
