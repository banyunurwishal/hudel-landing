<template>
  <div>
    <b-row style="margin-top: 100px">
      <b-col class="text-center">
        <img src="@/assets/img/Explore Events (Compressed).gif" height="600" />
      </b-col>
      <b-col align-self="center">
        <div style="font-size: 57px; margin-bottom: 44px">
          <div class="d-flex flex-row">
            <div class="scrolling-words-container">
              <span class="text-white">Find</span>
              <div class="scrolling-words-box">
                <ul v-if="scroll1">
                  <li style="color: transparent">Athletics</li>
                  <li style="color: #ea4335">Athletics</li>
                  <li style="color: #4285f4">Basketball Pick-Up</li>
                  <li style="color: #4285f4">Crew</li>
                  <li style="color: #34a853">Soccer Fanatics</li>
                  <li style="color: #fbbc04">Martial Arts Meetup</li>
                  <li style="color: #4285f4">Badminton Club</li>
                </ul>
                <ul v-if="scroll2">
                  <li style="color: transparent">Athletics</li>
                  <li style="color: #ea4335">Academics</li>
                  <li style="color: #4285f4">Study Buddies</li>
                  <li style="color: #34a853">Startup Enthusiasts</li>
                  <li style="color: #fbbc04">Course Explorers</li>
                  <li style="color: #4285f4">Physics Study</li>
                  <li style="color: #4285f4">Groups</li>
                </ul>
                <ul v-if="scroll3">
                  <li style="color: transparent">Athletics</li>
                  <li style="color: #ea4335">Cultural</li>
                  <li style="color: #4285f4">International</li>
                  <li style="color: #4285f4">Students Community</li>
                  <li style="color: #34a853">Housing Community</li>
                  <li style="color: #fbbc04">Arts & Creativity</li>
                  <li style="color: #4285f4">Kpop Enthusiasts</li>
                </ul>
                <ul v-if="scroll4">
                  <li style="color: transparent">Athletics</li>
                  <li style="color: #ea4335">Dance Groups</li>
                  <li style="color: #4285f4">Fun Groups</li>
                  <li style="color: #34a853">Gaming Enthusiasts</li>
                  <li style="color: #fbbc04">Movie Buffs</li>
                  <li style="color: #4285f4">Foodie Adventures</li>
                  <li style="color: #ea4335">Travel Explorers</li>
                </ul>
                <ul v-if="scroll5">
                  <li style="color: transparent">Athletics</li>
                  <li style="color: #4285f4">Board Game Nights</li>
                  <li style="color: #34a853">Dating Adventures</li>
                  <li style="color: #fbbc04">Fellow Commuters</li>
                  <li style="color: #4285f4">Class Groups</li>
                </ul>
              </div>
            </div>
          </div>
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
      scroll1: false,
      scroll2: false,
      scroll3: false,
      scroll4: false,
      scroll5: false,
    };
  },
  async created() {
    await this.handleScroll();
  },
  computed: {},
  methods: {
    handleScroll() {
      this.scroll1 = true;
      setTimeout(async () => {
        this.scroll1 = false;
        await this.handleScroll2();
      }, 10000);
    },
    handleScroll2() {
      this.scroll2 = true;
      setTimeout(async () => {
        this.scroll2 = false;
        await this.handleScroll3();
      }, 10000);
    },
    handleScroll3() {
      this.scroll3 = true;
      setTimeout(async () => {
        this.scroll3 = false;
        await this.handleScroll4();
      }, 10000);
    },
    handleScroll4() {
      this.scroll4 = true;
      setTimeout(async () => {
        this.scroll4 = false;
        await this.handleScroll();
      }, 10000);
    },
  },
};
</script>

<style>
.scrolling-words-container {
  display: flex;
  align-items: center;
  font-weight: 600;
}
.scrolling-words-box {
  height: 5rem;
  margin: auto;
  overflow: hidden;
}
.scrolling-words-box ul {
  margin: 0 0.625rem;
  padding: 0;
  animation: scrollUp 10s infinite;
}
.scrolling-words-box ul li {
  display: flex;
  align-items: center;
  height: 5rem;
  list-style: none;
}

@keyframes scrollUp {
  7%,
  17% {
    transform: translateY(-14.2857142857%);
  }
  24%,
  34% {
    transform: translateY(-28.5714285714%);
  }
  41%,
  51% {
    transform: translateY(-42.8571428571%);
  }
  58%,
  68% {
    transform: translateY(-57.1428571429%);
  }
  75%,
  85% {
    transform: translateY(-71.4285714286%);
  }
  92%,
  100% {
    transform: translateY(-85.7142857143%);
  }
}
</style>
