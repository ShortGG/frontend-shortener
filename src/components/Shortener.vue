<template>
  <div class="hello">
    <h1>Shorten your url</h1>
    <div class="input-button-container">
      <div
        class="button-clipboard"
        data-clipboard-target="#mainInput"
        @click="displayHint"
      >
        <img alt="clipboard" src="../assets/clipboard.svg" />
        <div v-if="hint" class="hint">
          {{hint}}
        </div>
      </div>
      <div class="input-container">
        <input id="mainInput" v-on:keyup.enter="shorten" v-model="inputValue" type="text" />
      </div>
    </div>
    <div v-if="longUrl">
      {{longUrl}}
    </div>
    <div class="button" v-bind:class="{ spin: rotate }" @click="shorten">
      <img alt="cleaver" src="../assets/cleaver-blank.svg" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Clipboard from 'clipboard';

import b64Encode from '@/helpers/b64';

new Clipboard('.button-clipboard'); // eslint-disable-line no-new

export default {
  name: 'Shortener',
  methods: {
    displayHint() {
      this.hint = 'Copied !';

      setTimeout(() => {
        this.hint = false;
      }, 1000);
    },
    async shorten() {
      this.rotate = true;
      setTimeout(() => { this.rotate = false; }, 218);

      const response = await axios.post(`${process.env.API_URL}/shorten`, {
        url: b64Encode(this.inputValue),
      });

      const shortenedUrl = `${process.env.BASE_URL}/${response.data}`;

      this.longUrl = this.inputValue;
      this.inputValue = shortenedUrl;

      // automatically select the shortened link
      setTimeout(() => {
        const d = document.querySelector('#mainInput');
        d.select();
      }, 50);
    },
  },
  data() {
    return {
      inputValue: '',
      longUrl: null,
      shortenedUrl: null,
      rotate: false,
      hint: false,
    };
  },
};
</script>

<style scoped>

  input, .input-container, .button, .spin, .button-clipboard {
    transition: all 0.218s;
  }

  input {
    height: 44px;

    font-size: 2rem;

    border: none;
    margin: 0px;
    padding: 0px;
    width: calc(100% - 1rem - 2rem - 44px);
    position: absolute;
    z-index: 1;
    outline: none;

    background-color: transparent;
    color: #616161;
    text-align: left;
    padding-left: 1rem;
    left: 0;

    padding-right: calc(44px + 2rem);
  }

  .input-container {
    padding: 1rem;
    padding-right: calc(44px + 2rem);
  }

  .input-button-container {
    position: relative;
    max-width: 584px;
    margin: 0 auto;
  }

  .input-container {
    position: relative;

    max-width: 584px;
    height: 44px;

    border: 1px solid #616161;
    margin: 0 auto;
  }

  .input-container:hover {
    border: 1px solid #212121;
  }

  .button-clipboard {
    position: relative;
    float: right;

    display: inline-block;
    border: 1px solid #616161;

    height: 44px;
    width: 44px;
    padding: 1rem;

    z-index: 3;
  }


  .button-clipboard:hover {
    cursor: pointer;
    background-color: #F1F4BB;
  }

  .hint {
    border: 1px solid #031D44;
    width: 84px;
    z-index: 40;
    background-color: #FFF;
    padding: 1rem;

    position: absolute;
    bottom: -42px;
    left: -84px;
  }

  .button {
    position: relative;
    margin: 0 auto;
    border-radius: 90px;

    background-color: #F44336;

    box-shadow: 2px 1px 5px #888888;

    height: 9rem;
    width: 9rem;

    margin-top: 3rem;
  }

  .button:hover {
    background-color: #e53935;
    cursor: pointer;

    box-shadow: none;
  }

  img {
    position: relative;

    width: 50%;
    height: 50%;

    margin: 0 auto;
    margin-top: 23%;
  }

  .spin {
    box-shadow: inset 0 0 10px #000000 !important;
    -webkit-animation:spin 0.218s linear infinite;
    -moz-animation:spin 0.218s linear infinite;
    animation:spin 0.218s linear infinite;
  }

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

</style>
