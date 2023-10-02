<template>
  <div style="margin-top: 60px; margin-bottom: 122px">
    <b-row style="margin-bottom: 60px" align-h="center">
      <b-col cols="1">
        <a href="" class="text-decoration-none text-light text-list">Home</a>
      </b-col>
      <b-col cols="1">
        <a href="" class="text-decoration-none text-light text-list">Legal</a>
      </b-col>
      <b-col cols="1">
        <a href="" class="text-decoration-none text-light text-list"
          >Blog</a
        ></b-col
      >
      <b-col cols="1">
        <a href="" class="text-decoration-none text-light text-list"
          >Community</a
        ></b-col
      >
    </b-row>
    <b-row class="text-white">
      <b-col cols="12" md="10" xl="9">
        <b-row>
          <b-col>
            <div style="margin-bottom: 15px">
              <span>loremipsum@gmail.com</span>
            </div>

            <div style="margin-bottom: 15px">
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span
              >
            </div>
          </b-col>
          <b-col>
            <div style="margin-bottom: 15px">
              <span>+1 123 123 123 123</span>
            </div>
            <div style="margin-bottom: 15px"><span>@thehudel</span></div>
            <div style="margin-bottom: 15px"><span>Hudel</span></div>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <div>
          <span>Lorrem ipsum dolor sit</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "footer",
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
</style>
