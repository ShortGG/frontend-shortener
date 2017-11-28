<template>
  <div class="hello">
    <h1>Shorten your url</h1>
    <div class="input-container">
      <input v-model="inputValue" type="text" />
    </div>
    <div class="button" v-bind:class="{ spin: rotate }" @click="shorten">
      <img alt="cleaver" src="../assets/cleaver-blank.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shortener',
  methods: {
    async shorten() {
      this.rotate = true;
      setTimeout(() => { this.rotate = false }, 1000);
      console.log('input', this.inputValue);
    },
  },
  data() {
    return {
      inputValue: '',
      rotate: false,
    };
  },
};
</script>

<style scoped>

  input, .input-container, .button, .spin {
    transition: all 0.218s;
  }

  input {
    height: 44px;

    font-size: 2rem;

    border: none;
    margin: 0px;
    padding: 0px;
    width: calc(100% - 1rem);
    position: absolute;
    z-index: 1;
    outline: none;

    background-color: transparent;
    color: #616161;
    text-align: left;
    padding-left: 1rem;
    left: 0;
  }

  .input-container {
    padding: 1rem;
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
    -webkit-animation:spin 1s linear infinite;
    -moz-animation:spin 1s linear infinite;
    animation:spin 1s linear infinite;
  }

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

</style>
