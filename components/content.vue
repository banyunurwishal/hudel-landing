<template>
  <div>
    <b-row class="space-top">
      <b-col class="align-image-top">
        <img
          src="@/assets/img/Top_Section_Mobile_App.png"
          class="image-find animate__rotateInUpRight animate__animated animate__slower"
        />
      </b-col>
      <b-col align-self="center">
        <div class="animate__fadeInUp animate__animated animate__slower">
          <div class="text-tittle-find">
            <span class="text-white find-responsive2">Find</span>
            <div class="d-flex flex-row">
              <div class="scrolling-words-container">
                <span class="text-white find-responsive">Find</span>
                <div class="responsive-text-startup1-animation">
                  <div class="scrolling-words-box">
                    <ul v-if="scroll1">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-green">Athletics</li>
                      <li class="gradient-text-blue">Basketball Pick-Up</li>
                      <li class="gradient-text-blue">Crew</li>
                      <li class="gradient-text-yellow">Soccer Fanatics</li>
                      <li class="gradient-text-purple">Martial Arts Meetup</li>
                      <li class="gradient-text-red">Badminton Club</li>
                    </ul>
                    <ul v-if="scroll2">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-green">Academics</li>
                      <li class="gradient-text-blue">Study Buddies</li>
                      <li class="gradient-text-yellow">Startup Enthusiasts</li>
                      <li class="gradient-text-purple">Course Explorers</li>
                      <li class="gradient-text-red">Physics Study</li>
                      <li class="gradient-text-red">Groups</li>
                    </ul>
                    <ul v-if="scroll3">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-green">Cultural</li>
                      <li class="gradient-text-blue">International</li>
                      <li class="gradient-text-blue">Students Community</li>
                      <li class="gradient-text-yellow">Housing Community</li>
                      <li class="gradient-text-purple">Arts & Creativity</li>
                      <li class="gradient-text-red">Kpop Enthusiasts</li>
                    </ul>
                    <ul v-if="scroll4">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-green">Dance Groups</li>
                      <li class="gradient-text-blue">Fun Groups</li>
                      <li class="gradient-text-yellow">Gaming Enthusiasts</li>
                      <li class="gradient-text-purple">Movie Buffs</li>
                      <li class="gradient-text-red">Foodie Adventures</li>
                      <li class="gradient-text-yellow">Travel Explorers</li>
                    </ul>
                    <ul v-if="scroll5">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-blue">Board Game Nights</li>
                      <li class="gradient-text-green">Dating Adventures</li>
                      <li class="gradient-text-yellow">Fellow Commuters</li>
                      <li class="gradient-text-purple">Class Groups</li>
                      <li class="gradient-text-blue">Board Game Nights</li>
                      <li class="gradient-text-green">Dating Adventures</li>
                    </ul>
                  </div>
                </div>
                <div class="responsive-text-startup2-animation">
                  <div class="scrolling-words-box">
                    <ul v-if="scroll1">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-green">Athletics</li>
                      <li class="gradient-text-blue">Basketball Pick-Up</li>
                      <li class="gradient-text-blue">Crew</li>
                      <li class="gradient-text-yellow">Soccer Fanatics</li>
                      <li class="gradient-text-purple">Martial Arts Meetup</li>
                      <li class="gradient-text-red">Badminton Club</li>
                    </ul>
                    <ul v-if="scroll2">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-green">Academics</li>
                      <li class="gradient-text-blue">Study Buddies</li>
                      <li class="gradient-text-yellow">Startup</li>
                      <li class="gradient-text-yellow">Enthusiasts</li>
                      <li class="gradient-text-purple">Course Explorers</li>
                      <li class="gradient-text-red">Physics Study</li>
                    </ul>
                    <ul v-if="scroll3">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-green">Groups</li>
                      <li class="gradient-text-blue">Cultural</li>
                      <li class="gradient-text-blue">International</li>
                      <li class="gradient-text-yellow">Students Comm</li>
                      <li class="gradient-text-purple">Housing Comm</li>
                      <li class="gradient-text-red">Arts & Creativity</li>
                    </ul>
                    <ul v-if="scroll4">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-blue">Kpop Enthusiasts</li>
                      <li class="gradient-text-green">Dance Groups</li>
                      <li class="gradient-text-yellow">Fun Groups</li>
                      <li class="gradient-text-purple">Movie Buffs</li>
                      <li class="gradient-text-red">Foodie Adventures</li>
                      <li class="gradient-text-green">Travel Explorers</li>
                    </ul>
                    <ul v-if="scroll5">
                      <li style="color: transparent">Athletics</li>
                      <li class="gradient-text-blue">Gaming</li>
                      <li class="gradient-text-blue">Enthusiasts</li>
                      <li class="gradient-text-yellow">Board Game</li>
                      <li class="gradient-text-purple">Dating Adventures</li>
                      <li class="gradient-text-red">Fellow Commuters</li>
                      <li class="gradient-text-blue">Class Groups</li>
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
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center" class="space-content">
      <b-col class="align-image-content">
        <FadeInLeft scrollThreshold="900">
          <img
            src="@/assets/img/Discover Communities.gif"
            class="image-content"
          />
        </FadeInLeft>
      </b-col>
      <b-col align-self="center">
        <FadeInUp scrollThreshold="900">
          <div class="text-tittle text-white">
            <span>Discover Communities in your School</span>
          </div>
          <div class="desc-content">
            <span>
              May it be crypto, hockey, or mistery novels, there are always
              fellow enthusiasts out there, and we help you find them and
              everything you would want to know before you take the leap.
            </span>
          </div>
        </FadeInUp>
      </b-col>
    </b-row>

    <b-row align-h="center" class="space-content reverse">
      <b-col align-self="center">
        <FadeInUp scrollThreshold="1800">
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
        </FadeInUp>
      </b-col>
      <b-col class="align-image-content">
        <FadeInRight scrollThreshold="1800">
          <img
            src="@/assets/img/Build Your Community (Compressed).gif"
            class="image-content"
          />
        </FadeInRight>
      </b-col>
    </b-row>

    <b-row align-h="center" class="space-content">
      <b-col class="align-image-content">
        <FadeInLeft scrollThreshold="2600">
          <img
            src="@/assets/img/Chat and Announcement (Compressed).gif"
            class="image-content"
          />
        </FadeInLeft>
      </b-col>
      <b-col align-self="center">
        <FadeInUp scrollThreshold="2600">
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
        </FadeInUp>
      </b-col>
    </b-row>

    <b-row align-h="center" class="space-content reverse">
      <b-col align-self="center">
        <FadeInUp scrollThreshold="3400">
          <div class="text-tittle text-white">
            <span class="text-white">Need for Feed</span>
          </div>
          <div class="desc-content">
            <span>
              Digging more obout what creates that spark in you made easy -
              choose your interests, and Hudel gets you closer to what you're
              looking for, may they be clubs, communities, or groups.
            </span>
          </div>
        </FadeInUp>
      </b-col>
      <b-col class="align-image-content">
        <FadeInRight scrollThreshold="3400">
          <img
            src="@/assets/img/Build Your Community (Compressed).gif"
            class="image-content"
          />
        </FadeInRight>
      </b-col>
    </b-row>

    <b-row align-h="center" class="space-content">
      <b-col class="align-image-content">
        <FadeInLeft scrollThreshold="4200">
          <img
            src="@/assets/img/Explore Events (Compressed).gif"
            class="image-content"
          />
        </FadeInLeft>
      </b-col>
      <b-col align-self="center">
        <FadeInUp scrollThreshold="4200">
          <div class="text-tittle text-white">
            <span class="text-white">Explore Events</span>
          </div>
          <div class="desc-content">
            <span>
              Whether it's pickup basketball on a Friday or an afternoon park
              meetup with international students, Hudel keeps you in he loop
              with events, and yes, that includes which of your friends who are
              already in for it.
            </span>
          </div>
        </FadeInUp>
      </b-col>
    </b-row>

    <FadeInDown rollThreshold="5000">
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
    </FadeInDown>
    <b-row class="space-bottom">
      <b-col>
        <FadeInUpBottom scrollThreshold="5800">
          <img src="@/assets/img/3 Phone.png" class="image-bottom" />
          <img
            src="@/assets/img/footer-mobile.png"
            class="image-bottom-mobile"
          />
        </FadeInUpBottom>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FadeInLeft from "@/components/AnimationFadeLeft.vue";
import FadeInRight from "@/components/AnimationFadeRight.vue";
import FadeInUp from "@/components/AnimationFadeInUp.vue";
import FadeInDown from "@/components/AnimationFadeInDown.vue";
import FadeInUpBottom from "@/components/AnimationFadeUp.vue";

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
  components: {
    FadeInLeft,
    FadeInRight,
    FadeInUp,
    FadeInDown,
    FadeInUpBottom,
  },
  async created() {
    await this.handleScroll();
  },
  mounted() {
    // Add a scroll event listener to trigger the animation on the first scroll
    const element = this.$el;

    window.addEventListener("scroll", () => {
      if (!element.classList.contains("fade-in-left-active")) {
        const rect = element.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;

        // Check if the element is in the viewport and not already animated
        if (rect.top < viewportHeight) {
          element.classList.add("fade-in-left-active");
        }
      }
    });
  },
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
.gradient-text-green {
  background-image: linear-gradient(to right, #16ff20, #009206);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Other text styling properties */
}

.gradient-text-blue {
  background-image: linear-gradient(to right, #3971ff, #67008b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Other text styling properties */
}

.gradient-text-yellow {
  background-image: linear-gradient(to right, #ffc700, #ff3d00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Other text styling properties */
}

.gradient-text-purple {
  background-image: linear-gradient(to right, #b10bff, #55007c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Other text styling properties */
}

.gradient-text-red {
  background-image: linear-gradient(to right, #ff922e, #7e0000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* Other text styling properties */
}

.image-bottom {
  width: 100%;
  height: 475px;
  object-fit: cover;
  object-position: -20% 0;
}
.image-bottom-mobile {
  display: none;
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
  font-weight: 700;
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

.fade-in-left {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in-left-active {
  opacity: 1;
  transform: translateX(0);
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
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 74px;
  margin-right: 74px;
}

.image-content {
  height: 1250px;
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
    height: 600px;
    object-position: -5px 150px;
  }
  .text-tittle-find {
    font-size: 32px;
    font-weight: 700;
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
    margin-top: 50px;
    margin-bottom: 50px;
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
    margin-top: 250px;
    margin-bottom: 48px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .space-btn {
    margin-bottom: 250px;
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
    display: none;
  }
  .image-bottom-mobile {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: 50% 30px;
  }

  .space-bottom {
    margin-top: 150px;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  .text-form-label {
    font-size: 18px;
  }
  .scrolling-words-box {
    height: 5rem;
  }
  .scrolling-words-box ul {
    margin: 0 0.625rem;
  }
  .scrolling-words-box ul li {
    height: 5rem;
  }
  .image-mascot-content-build {
    height: 200px;
  }

  .align-image-mascot1 {
    margin-top: 30px;
    text-align: center;
  }
  .image-find {
    width: 500px;
  }
  .image-content {
    height: 1000px;
  }
  .text-tittle-find {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 44px;
  }
  .space-top {
    margin-top: 100px;
  }
  .space-school {
    margin-bottom: 24px;
  }
  .form-univ {
    width: 62.5% !important;
    border-radius: 16px !important;
    height: 50px !important;
  }
  .align-image-top {
    text-align: center;
  }
  .space-content {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 74px;
    margin-right: 74px;
  }
  .text-tittle {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: -1.6164875030517578px;
    margin-bottom: 50px;
  }

  .desc-content {
    font-size: 24px;
    font-family: Poppins;
    color: #bdbdbd !important;
    font-weight: 500;
  }

  .reverse {
    flex-wrap: wrap-reverse;
  }

  .space-button {
    margin-top: 150px;
    margin-bottom: 48px;
    margin-left: 74px;
    margin-right: 74px;
  }
  .space-btn {
    margin-bottom: 250px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .btn-exclusive {
    padding: 20px !important;
    border-radius: 25px !important;
    gap: 10px !important;
  }

  .text-btn-exclusive {
    font-size: 24px !important;
  }

  .text-hudel-ing {
    font-size: 54px;
    font-weight: 700;
    line-height: 80px;
  }

  .text-hudel-ing-rally {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: -1.0443679094314575px;
    text-align: center;
    color: #bdbdbd;
  }

  .image-bottom {
    width: 100%;
    height: 475px;
    object-fit: cover;
    object-position: -20% -60%;
  }

  .space-bottom {
    margin-top: 150px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1180px) {
  .desc-univ2 {
    display: block;
  }
  .desc-univ {
    display: none;
  }
  .text-form-label {
    font-size: 16px;
  }
  .scrolling-words-box {
    height: 5rem;
  }
  .scrolling-words-box ul {
    margin: 0 0.625rem;
  }
  .scrolling-words-box ul li {
    height: 5rem;
  }
  .image-mascot-content-build {
    height: 200px;
  }

  .align-image-mascot1 {
    margin-top: 30px;
    text-align: center;
  }
  .image-find {
    width: 300px;
  }
  .image-content {
    height: 700px;
  }
  .text-tittle-find {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  .space-top {
    margin-top: 100px;
  }
  .space-school {
    margin-bottom: 24px;
  }
  .form-univ {
    width: 62.5% !important;
    border-radius: 16px !important;
    height: 50px !important;
  }
  .align-image-top {
    text-align: center;
  }
  .space-content {
    margin-top: 300px;
    margin-bottom: 300px;
    margin-left: 74px;
    margin-right: 74px;
  }
  .text-tittle {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -1.6164875030517578px;
    margin-bottom: 50px;
  }

  .desc-content {
    font-size: 18px;
    font-family: Poppins;
    color: #bdbdbd !important;
    font-weight: 500;
  }

  .reverse {
    flex-wrap: wrap-reverse;
  }

  .space-button {
    margin-top: 150px;
    margin-bottom: 48px;
    margin-left: 74px;
    margin-right: 74px;
  }
  .space-btn {
    margin-bottom: 250px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .btn-exclusive {
    padding: 20px !important;
    border-radius: 25px !important;
    gap: 10px !important;
  }

  .text-btn-exclusive {
    font-size: 20px !important;
  }

  .text-hudel-ing {
    font-size: 32px;
    font-weight: 700;
    line-height: 60px;
  }

  .text-hudel-ing-rally {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 53px;
    letter-spacing: -1.0443679094314575px;
    text-align: center;
    color: #bdbdbd;
  }

  .image-bottom {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 50% 150px;
  }

  .space-bottom {
    margin-top: 150px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 850px) {
  .responsive-text-startup2-animation {
    display: block;
  }
  .desc-univ2 {
    display: block;
  }
  .find-responsive2 {
    display: block;
  }
  .text-form-label {
    font-size: 24px;
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
    width: 500px;
  }
  .image-content {
    height: 1000px;
    object-position: -5px 200px;
  }
  .text-tittle-find {
    font-size: 42px;
    font-weight: 700;
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
    width: 80% !important;
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
    margin-top: 150px;
    margin-bottom: 150px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .text-tittle {
    font-size: 42px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -1.6164875030517578px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .desc-content {
    font-size: 24px;
    font-family: Poppins;
    color: #bdbdbd !important;
    font-weight: 500;
  }

  .reverse {
    flex-wrap: wrap-reverse;
  }

  .space-button {
    margin-top: 500px;
    margin-bottom: 48px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .space-btn {
    margin-bottom: 500px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .btn-exclusive {
    padding: 20px !important;
    border-radius: 25px !important;
    gap: 10px !important;
  }

  .text-btn-exclusive {
    font-size: 24px !important;
  }

  .text-hudel-ing {
    font-size: 42px;
    line-height: 54px;
  }

  .text-hudel-ing-rally {
    font-size: 24px;
    line-height: 32px;
  }

  .image-bottom {
    display: block;
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 50% 120px;
  }
  .image-bottom-mobile {
    display: none;
  }

  .space-bottom {
    margin-top: 300px;
  }
}
</style>
