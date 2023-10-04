<template>
  <div>
    <b-row style="margin-top: 100px">
      <b-col class="text-center">
        <img src="@/assets/img/Explore Events (Compressed).gif" height="600" />
      </b-col>
      <b-col align-self="center">
        <div style="font-size: 57px; margin-bottom: 44px">
          <div class="d-flex flex-row">
            <div class="mr-sm-3 text-white">Find</div>
            <div class="word-container">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="animate__infinite animate__animated"
                :class="{
                  animated: item.animate,
                  animate__slideInUp: item.animate,
                  animate__slideOutUp: !item.animate,
                }"
                :style="{ color: item.color }"
                @animationend="animationEnd(index)"
                v-show="item.visible"
              >
                {{ item.content }}
              </div>
            </div>
            <!-- <div class="animate__animated animate__delay-3s animate__slideInUp">
              Soccer Fanatics
            </div> -->
          </div>
          <!-- <div class="scroller">
            <span>
              Cool<br />
              Art<br />
              Intruiging<br />
              Challenging
            </span>
          </div> -->
          <span class="text-white">in your School!</span>
        </div>
        <div style="margin-bottom: 44px">
          <label for="" class="text-white"
            >Receive an instant download link in your inbox!</label
          >
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              placeholder="Insert your University email"
              style="width: 48% !important; border-radius: 8px !important"
            />
            <button
              class="btn text-white"
              style="background-color: #430bff; border-radius: 8px !important"
            >
              <b>Send Link</b>
            </button>
          </form>
        </div>
        <div>
          <span class="text-white">
            We'll just need your school email for a quick verification to
            confirm </span
          ><br />
          <span class="text-white">your enrollment in the university. 📧</span>
        </div>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      style="
        margin-top: 300px;
        margin-bottom: 300px;
        margin-left: 74px;
        margin-right: 74px;
      "
    >
      <b-col class="text-center">
        <img
          src="@/assets/img/Build Your Community (Compressed).gif"
          height="600"
        />
      </b-col>
      <b-col align-self="center">
        <div style="font-size: 57px; margin-bottom: 50px">
          <span class="text-white">Discover Communities in your School</span>
        </div>
        <div style="font-size: 32px">
          <span class="text-white">
            May it be crypto, hockey, or mistery novels, there are always fellow
            enthusiasts out there, and we help you find them and everything you
            would want to know before you take the leap.
          </span>
        </div>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      style="
        margin-top: 300px;
        margin-bottom: 300px;
        margin-left: 74px;
        margin-right: 74px;
      "
    >
      <b-col align-self="center" class="text-right">
        <div style="font-size: 57px; margin-bottom: 50px">
          <span class="text-white">Build your Community</span>
        </div>
        <div style="font-size: 32px">
          <span class="text-white">
            Reaching the right people is what makes a great community. Hudel
            does the groundwork for you by directing people with shared
            interests you way.
          </span>
        </div>
      </b-col>
      <b-col class="text-center">
        <img
          src="@/assets/img/Build Your Community (Compressed).gif"
          height="600"
        />
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      style="
        margin-top: 300px;
        margin-bottom: 300px;
        margin-left: 74px;
        margin-right: 74px;
      "
    >
      <b-col class="text-center">
        <img
          src="@/assets/img/Chat and Announcement (Compressed).gif"
          height="600"
        />
      </b-col>
      <b-col align-self="center">
        <div style="font-size: 57px; margin-bottom: 50px">
          <span class="text-white"
            >Stay in the loop with Chat, Announcement</span
          >
        </div>
        <div style="font-size: 32px">
          <span class="text-white">
            Check out what your communities are up to from the announcements,
            and get to know your fellow compadres once you join a community.
          </span>
        </div>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      style="
        margin-top: 300px;
        margin-bottom: 300px;
        margin-left: 74px;
        margin-right: 74px;
      "
    >
      <b-col align-self="center" class="text-right">
        <div style="font-size: 57px; margin-bottom: 50px">
          <span class="text-white">Need for Feed</span>
        </div>
        <div style="font-size: 32px">
          <span class="text-white">
            Digging more obout what creates that spark in you made easy - choose
            your interests, and Hudel gets you closer to what you’re looking
            for, may they be clubs, communities, or groups.
          </span>
        </div>
      </b-col>
      <b-col class="text-center">
        <img
          src="@/assets/img/Build Your Community (Compressed).gif"
          height="600"
        />
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      style="
        margin-top: 300px;
        margin-bottom: 300px;
        margin-left: 74px;
        margin-right: 74px;
      "
    >
      <b-col class="text-center">
        <img src="@/assets/img/Explore Events (Compressed).gif" height="600" />
      </b-col>
      <b-col align-self="center">
        <div style="font-size: 57px; margin-bottom: 50px">
          <span class="text-white">Explore Events</span>
        </div>
        <div style="font-size: 32px">
          <span class="text-white">
            Whether it's pickup basketball on a Friday or an afternoon park
            meetup with international students, Hudel keeps you in he loop with
            events, and yes, that includes which of your friends who are already
            in for it.
          </span>
        </div>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      style="
        margin-top: 150px;
        margin-bottom: 150px;
        margin-left: 74px;
        margin-right: 74px;
      "
    >
      <b-col class="text-center">
        <button
          class="btn p-3 text-white"
          style="
            background: linear-gradient(94.73deg, #430bff 0%, #2b00bc 100%);
            border-radius: 16px;
          "
        >
          <span style="font-size: 24px"><b>Sign up for a demo</b></span>
        </button>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      style="
        margin-top: 150px;
        margin-bottom: 159px;
        margin-left: 74px;
        margin-right: 74px;
      "
    >
      <b-col class="text-center">
        <img src="@/assets/img/Excited.png" />
        <div style="margin-top: 34px; margin-bottom: 34px">
          <span class="text-white" style="font-size: 74px"
            >Hudel-ing to Your</span
          ><br />
          <span class="text-white" style="font-size: 74px"
            ><span style="color: #6638ff !important">University</span>
            Soon!</span
          >
        </div>
        <div>
          <span class="text-white" style="font-size: 32px"
            >As we rally up to get Hudel to more universities, stay</span
          ><br />
          <span class="text-white" style="font-size: 32px"
            >tuned for our updated list @thehudel on instagram.</span
          >
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <img src="@/assets/img/3 Phone.png" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      items: [
        {
          content: "Soccer Fanatics",
          animate: false,
          visible: false,
          color: "linear-gradient(180deg, #12083a 0%, #241853 100%);",
        },
        { content: "Startup Enthusiast", animate: false, visible: false },
        {
          content: "Housing Community",
          animate: false,
          visible: false,
          color: "linear-gradient(180deg, #12083a 0%, #241853 100%);",
        },
        {
          content: "Kpop Enthusiast",
          animate: false,
          visible: false,
          color: "linear-gradient(180deg, #12083a 0%, #241853 100%);",
        },
        {
          content: "Movie Buffs",
          animate: false,
          visible: false,
          color: "linear-gradient(180deg, #12083a 0%, #241853 100%);",
        },
        // Add more elements as needed
      ],
      currentIndex: 0,
    };
  },
  created() {
    this.startScrolling();
  },
  methods: {
    startScrolling() {
      // Reset animation and visibility for all items
      this.items.forEach((item) => {
        item.animate = false;
        item.visible = false;
      });

      // Start the animation for the current element
      const currentItem = this.items[this.currentIndex];
      currentItem.animate = true;
      currentItem.visible = true;

      // Move to the next element after a delay
      setTimeout(() => {
        currentItem.animate = false;
        currentItem.visible = false;

        // Increment currentIndex and loop back to the first element if necessary
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        const nextItem = this.items[this.currentIndex];
        nextItem.animate = true;
        nextItem.visible = true;
      }, 3000); // Adjust the delay as needed
    },
    animationEnd(index) {
      // This method will be called when the slideOutLeft animation ends for an item
      // You can perform any necessary actions here
      console.log(`Animation for Element ${index + 1} ended`);
    },
  },
};
</script>

<style>
.animated {
  animation-duration: 2s;
}
.word-container {
  position: relative;
  overflow: hidden;
}

/* Scroller styling */
.scroller {
  height: 1.2em;
  line-height: 1.2em;
  position: relative;
  overflow: hidden;
  width: 10em;
}
.scroller > span {
  position: absolute;
  top: 0;
  animation: slide 5s infinite;
  font-weight: bold;
}

@keyframes slide {
  0% {
    top: 0;
    animation-duration: 20s;
  }
  25% {
    top: -1.2em;
    animation-delay: 10s;
  }
  50% {
    top: -2.4em;
    animation-delay: 10s;
  }
  75% {
    top: -3.6em;
    animation-delay: 10s;
  }
}
</style>
