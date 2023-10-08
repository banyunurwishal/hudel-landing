<template>
  <div class="legal-wrapper">
    <b-row class="space-legal-top">
      <b-col class="text-center">
        <div class="text-white space-legal-mid">
          <span class="text-legal">Legal</span><br />
          <span class="desc-legal"
            >Find clarity on our policies and terms by navigating through our
            legal section.</span
          >
        </div>
        <b-row class="my-2">
          <b-col class="my-2">
            <button class="btn btn-block text-button">
              Terms and Conditions
            </button>
          </b-col>
          <b-col class="my-2">
            <button class="btn btn-block text-button">Privacy Policy</button>
          </b-col>
        </b-row>
        <b-row class="my-2">
          <b-col class="my-2">
            <button class="btn btn-block text-button">Disclaimer</button>
          </b-col>
          <b-col class="my-2">
            <button class="btn btn-block text-button">
              Community Guidelines
            </button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.legal-wrapper {
  margin-left: 535px;
  margin-right: 535px;
}

.space-legal-top {
  margin-top: 200px;
  margin-bottom: 200px;
}

.space-legal-mid {
  margin-bottom: 62px;
}

.text-legal {
  font-size: 83px;
  font-weight: 700;
}
.desc-legal {
  font-size: 25px;
}

.text-button {
  font-size: 25px;
  font-weight: 500;
  color: #170d41;
  background: #eaeaea;
  padding: 20px;
  border-radius: 23.6px;
  gap: 7.87px;
}

@media only screen and (max-width: 430px) {
  .legal-wrapper {
    margin-left: 100px;
    margin-right: 100px;
  }

  .space-legal-top {
    margin-top: 200px;
    margin-bottom: 200px;
  }

  .text-button {
    font-size: 16px;
    font-weight: 500;
    color: #170d41;
    background: #eaeaea;
    padding: 15px;
    border-radius: 23.6px;
    gap: 7.87px;
  }

  .space-legal-mid {
    margin-bottom: 32px;
  }

  .text-legal {
    font-size: 32px;
  }
  .desc-legal {
    font-size: 16px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 820px) {
  .legal-wrapper {
    margin-left: 100px;
    margin-right: 100px;
  }

  .space-legal-top {
    margin-top: 240px;
    margin-bottom: 240px;
  }

  .text-button {
    font-size: 14px;
    font-weight: 500;
    color: #170d41;
    background: #eaeaea;
    padding: 15px;
    border-radius: 23.6px;
    gap: 7.87px;
  }

  .space-legal-mid {
    margin-bottom: 32px;
  }

  .text-legal {
    font-size: 24px;
  }
  .desc-legal {
    font-size: 14px;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1440px) {
  .legal-wrapper {
    margin-left: 300px;
    margin-right: 300px;
  }

  .space-legal-top {
    margin-top: 250px;
    margin-bottom: 250px;
  }

  .text-button {
    font-size: 24px;
    font-weight: 500;
    color: #170d41;
    background: #eaeaea;
    padding: 15px;
    border-radius: 23.6px;
    gap: 7.87px;
  }

  .space-legal-mid {
    margin-bottom: 32px;
  }

  .text-legal {
    font-size: 48px;
  }
  .desc-legal {
    font-size: 24px;
  }
}
</style>
