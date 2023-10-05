<template>
  <div>
    <b-row class="space-top">
      <b-col class="align-image-top">
        <img src="@/assets/img/Top_Section_Mobile_App.png" class="image-find" />
      </b-col>
      <b-col align-self="center">
        <div class="text-tittle-find">
          <span class="text-white find-responsive2">Find</span>
          <div class="d-flex flex-row">
            <div class="scrolling-words-container">
              <span class="text-white find-responsive">Find</span>
              <div class="responsive-text-startup1-animation">
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
                    <li style="color: #4285f4">Board Game Nights</li>
                    <li style="color: #34a853">Dating Adventures</li>
                  </ul>
                </div>
              </div>
              <div class="responsive-text-startup2-animation">
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
                    <li style="color: #34a853">Startup</li>
                    <li style="color: #34a853">Enthusiasts</li>
                    <li style="color: #fbbc04">Course Explorers</li>
                    <li style="color: #4285f4">Physics Study</li>
                  </ul>
                  <ul v-if="scroll3">
                    <li style="color: transparent">Athletics</li>
                    <li style="color: #4285f4">Groups</li>
                    <li style="color: #ea4335">Cultural</li>
                    <li style="color: #4285f4">International</li>
                    <li style="color: #4285f4">Students Comm</li>
                    <li style="color: #34a853">Housing Comm</li>
                    <li style="color: #fbbc04">Arts & Creativity</li>
                  </ul>
                  <ul v-if="scroll4">
                    <li style="color: transparent">Athletics</li>
                    <li style="color: #4285f4">Kpop Enthusiasts</li>
                    <li style="color: #ea4335">Dance Groups</li>
                    <li style="color: #4285f4">Fun Groups</li>
                    <li style="color: #fbbc04">Movie Buffs</li>
                    <li style="color: #4285f4">Foodie Adventures</li>
                    <li style="color: #ea4335">Travel Explorers</li>
                  </ul>
                  <ul v-if="scroll5">
                    <li style="color: transparent">Athletics</li>
                    <li style="color: #34a853">Gaming</li>
                    <li style="color: #34a853">Enthusiasts</li>
                    <li style="color: #4285f4">Board Game</li>
                    <li style="color: #34a853">Dating Adventures</li>
                    <li style="color: #fbbc04">Fellow Commuters</li>
                    <li style="color: #4285f4">Class Groups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span class="text-white">in your School!</span>
        </div>
        <div class="space-school">
          <label for="" class="text-white text-form-label"
            >Receive an instant download link in your inbox!</label
          >
          <form class="form-inline">
            <input
              class="form-control mr-sm-3 form-univ"
              placeholder="Insert your University email"
            />
            <button class="btn text-white btn-univ">
              <b>Send Link</b>
            </button>
          </form>
        </div>
        <div class="desc-univ">
          <span>
            We'll just need your school email for a quick verification to
            confirm </span
          ><br />
          <span>your enrollment in the university. 📧</span>
        </div>
        <div class="desc-univ2">
          <span>
            We'll just need your school email for a quick verification to
            confirm your enrollment in the university. 📧</span
          >
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-content">
      <b-col class="align-image-content">
        <img
          src="@/assets/img/Build Your Community (Compressed).gif"
          class="image-content"
        />
      </b-col>
      <b-col align-self="center">
        <div class="text-tittle text-white">
          <span>Discover Communities in your School</span>
        </div>
        <div class="desc-content">
          <span>
            May it be crypto, hockey, or mistery novels, there are always fellow
            enthusiasts out there, and we help you find them and everything you
            would want to know before you take the leap.
          </span>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-content reverse">
      <b-col align-self="center">
        <div class="text-tittle text-white">
          <span class="text-white">Build your Community</span>
        </div>
        <div class="desc-content">
          <span>
            Reaching the right people is what makes a great community. Hudel
            does the groundwork for you by directing people with shared
            interests you way.
          </span>
        </div>
      </b-col>
      <b-col class="align-image-content">
        <img
          src="@/assets/img/Build Your Community (Compressed).gif"
          class="image-content"
        />
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-content">
      <b-col class="align-image-content">
        <img
          src="@/assets/img/Chat and Announcement (Compressed).gif"
          class="image-content"
        />
      </b-col>
      <b-col align-self="center">
        <div class="text-tittle text-white">
          <span class="text-white"
            >Stay in the loop with Chat, Announcement</span
          >
        </div>
        <div class="desc-content">
          <span>
            Check out what your communities are up to from the announcements,
            and get to know your fellow compadres once you join a community.
          </span>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-content reverse">
      <b-col align-self="center">
        <div class="text-tittle text-white">
          <span class="text-white">Need for Feed</span>
        </div>
        <div class="desc-content">
          <span>
            Digging more obout what creates that spark in you made easy - choose
            your interests, and Hudel gets you closer to what you're looking
            for, may they be clubs, communities, or groups.
          </span>
        </div>
      </b-col>
      <b-col class="align-image-content">
        <img
          src="@/assets/img/Build Your Community (Compressed).gif"
          class="image-content"
        />
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-content">
      <b-col class="align-image-content">
        <img
          src="@/assets/img/Explore Events (Compressed).gif"
          class="image-content"
        />
      </b-col>
      <b-col align-self="center">
        <div class="text-tittle text-white">
          <span class="text-white">Explore Events</span>
        </div>
        <div class="desc-content">
          <span>
            Whether it's pickup basketball on a Friday or an afternoon park
            meetup with international students, Hudel keeps you in he loop with
            events, and yes, that includes which of your friends who are already
            in for it.
          </span>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-button">
      <b-col class="text-center">
        <button class="btn text-white btn-exclusive">
          <span class="text-btn-exclusive"><b>Get Exclusive Beta</b></span>
        </button>
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-btn">
      <b-col class="text-center">
        <div class="text-hudel-ing">
          <span class="text-white">Hudel-ing to Your</span><br />
          <span class="text-white"
            ><span style="color: #6638ff !important">University</span>
            Soon!</span
          >
        </div>
        <div class="text-hudel-ing-rally">
          <span>As we rally up to get Hudel to more universities, stay</span
          ><br />
          <span>tuned for our updated list @thehudel on instagram.</span>
        </div>
      </b-col>
    </b-row>
    <b-row class="space-bottom">
      <b-col>
        <img src="@/assets/img/3 Phone.png" class="image-bottom" />
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
        await this.handleScroll5();
      }, 10000);
    },
    handleScroll5() {
      this.scroll5 = true;
      setTimeout(async () => {
        this.scroll5 = false;
        await this.handleScroll();
      }, 10000);
    },
  },
};
</script>

<style>
.image-bottom {
  width: 100%;
  height: 475px;
  object-fit: cover;
  object-position: -20% 0;
}

.btn-exclusive {
  padding: 20px !important;
  border-radius: 25px !important;
  gap: 10px !important;
  background: linear-gradient(94.73deg, #430bff 0%, #2b00bc 100%);
}

.text-btn-exclusive {
  font-size: 32px !important;
}

.text-form-label {
  font-size: 21px;
}

.text-tittle {
  font-size: 65px;
  font-weight: 700;
  line-height: 81px;
  letter-spacing: -1.6164875030517578px;
  margin-bottom: 50px;
}

.desc-univ {
  color: #bdbdbd !important;
}

.desc-univ2 {
  color: #bdbdbd !important;
}

.desc-content {
  font-size: 32px;
  font-family: Poppins;
  color: #bdbdbd !important;
  font-weight: 500;
}

.text-hudel-ing {
  font-size: 74px;
  font-weight: 700;
  line-height: 93px;
  margin-top: 34px;
  margin-bottom: 34px;
}

.text-hudel-ing-rally {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 500;
  line-height: 53px;
  letter-spacing: -1.0443679094314575px;
  text-align: center;
  color: #bdbdbd;
}

.text-tittle-find {
  font-size: 57px;
  font-weight: 600;
  margin-bottom: 44px;
}

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

.image-find {
  width: 600px;
}

.space-top {
  margin-top: 100px;
}
.space-school {
  margin-bottom: 24px;
}

.space-button {
  margin-top: 150px;
  margin-bottom: 48px;
  margin-left: 74px;
  margin-right: 74px;
}

.space-bottom {
  margin-top: 300px;
}

.form-univ {
  width: 62.5% !important;
  border-radius: 16px !important;
  height: 50px !important;
}

.btn-univ {
  background-color: #430bff;
  border-radius: 16px !important;
  height: 50px !important;
  padding-left: 1rem;
  padding-right: 1rem;
}

.align-image-top {
  text-align: center;
}

.align-image-content {
  text-align: center;
}

.space-content {
  margin-top: 300px;
  margin-bottom: 300px;
  margin-left: 74px;
  margin-right: 74px;
}

.image-content {
  height: 600px;
}

.image-mascot-content-build {
  height: 200px;
}

.align-image-mascot1 {
  text-align: right;
}

@media only screen and (min-width: 501px) {
  .responsive-text-startup2-animation {
    display: none;
  }
  .desc-univ2 {
    display: none;
  }
  .find-responsive2 {
    display: none;
  }
}

@media only screen and (max-width: 430px) {
  .text-form-label {
    font-size: 16px;
  }
  .scrolling-words-box {
    height: 3rem;
  }
  .scrolling-words-box ul {
    margin: 0;
  }
  .scrolling-words-box ul li {
    height: 3rem;
  }
  .image-mascot-content-build {
    height: 80px;
  }

  .find-responsive {
    display: none;
  }

  .align-image-mascot1 {
    margin-top: 30px;
    text-align: center;
  }
  .image-find {
    width: 250px;
  }
  .image-content {
    height: 350px;
  }
  .text-tittle-find {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .responsive-text-startup1-animation {
    display: none;
  }
  .space-top {
    margin-top: 45px;
  }
  .space-school {
    margin-bottom: 20px;
  }
  .form-univ {
    width: 100% !important;
    margin-right: 0.5rem;
    margin-bottom: 10px;
  }
  .desc-univ {
    display: none;
  }
  .align-image-top {
    text-align: center;
  }
  .space-content {
    margin-top: 200px;
    margin-bottom: 200px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .text-tittle {
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -1.6164875030517578px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .desc-content {
    font-size: 16px;
    font-family: Poppins;
    color: #bdbdbd !important;
    font-weight: 500;
  }

  .reverse {
    flex-wrap: wrap-reverse;
  }

  .space-button {
    margin-top: 200px;
    margin-bottom: 48px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .space-btn {
    margin-bottom: 200px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .btn-exclusive {
    padding: 20px !important;
    border-radius: 25px !important;
    gap: 10px !important;
  }

  .text-btn-exclusive {
    font-size: 16px !important;
  }

  .text-hudel-ing {
    font-size: 32px;
    line-height: 54px;
  }

  .text-hudel-ing-rally {
    font-size: 16px;
    line-height: 32px;
  }

  .image-bottom {
    height: 250px;
    object-fit: cover;
    object-position: -60px 100px;
  }

  .space-bottom {
    margin-top: 150px;
  }
}
</style>
