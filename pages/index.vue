<template>
  <div :color="settings.attr[2]">
    <section> 
      <cluster-l class="main-content">
        <section class="sidebar">
          <base-section class="logo-section" :color="settings.attr[2]" :style="`background-image:url(/images/${settings.attr[1]}.png); background-color: ${settings.attr[1]}; background-size: ${settings.attr[3]}% auto;`">
            <logo-horizontal :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr" type="mask"/>
          </base-section>
          <base-button visual="secondary" @click="generateRandomList">Generate Logo</base-button>
          <base-button visual="unstyled" icon-after="expand_more" class="accordion-trigger" @click.prevent="status.accordion = !status.accordion">Customize Logo</base-button>
          <p class="sidebar__title">Choose color pattern</p>
          <base-button visual="secondary" @click="generateRandomList">Generate Icon</base-button>
          <cluster-l class="controls">
            <div class="color-group" color="1" @click="setColors('bg', 'bg-1', '#FFF')">
            </div>
            <div class="color-group" color="2" @click="setColors('bg', 'bg-2', '#FFF' )">
            </div>
            <div class="color-group" color="3" @click="setColors('color', 'var(--base-color)', '#FFF')">
              <span></span>
            </div>
          </cluster-l>
          <p class="sidebar__title">Pattern size</p>
          <input type="range" id="size" name="size" v-model="settings.attr[3]" min="100" max="200" :disabled="settings.attr[0] == 'color'">
          <p class="sidebar__title">Pattern position</p>
          <div class="position-buttons">
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'top left'" :class="{'active': settings.attr[4] == 'top left'}">1</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'center top'" :class="{'active': settings.attr[4] == 'center top'}">2</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'top right'" :class="{'active': settings.attr[4] == 'top right'}">3</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'center left'" :class="{'active': settings.attr[4] == 'center left'}">4</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'center'" :class="{'active': settings.attr[4] == 'center'}">5</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'center right'" :class="{'active': settings.attr[4] == 'center right'}">6</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'bottom left'" :class="{'active': settings.attr[4] == 'bottom left'}">7</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'center bottom'" :class="{'active': settings.attr[4] == 'center bottom'}">8</base-button>
            <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[4] = 'bottom right'" :class="{'active': settings.attr[4] == 'bottom right'}">9</base-button>
          </div>
          <base-button visual="secondary" href="#" target="_blank" class="button">Download icons</base-button>
          <base-button visual="secondary" href="#" target="_blank" class="button">Branding Guidelines</base-button>
      </section>
      <section class="content">
        <base-section class="logo-section" data-name="logo-bg-horizontal" :style="`background-image:url(/images/${settings.attr[1]}.png); background-color: ${settings.attr[1]}; background-size: ${settings.attr[3]}% auto; background-position: ${settings.attr[4]};`">
          <logo-horizontal :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr" type="bg"/>
        </base-section>
        <base-section class="logo-section" data-name="logo-mask-horizontal" :style="`background-image:url(/images/${settings.attr[1]}.png); background-color: ${settings.attr[1]}; background-size: ${settings.attr[3]}% auto; background-position: ${settings.attr[4]};`">
          <logo-horizontal :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr" type="mask"/>
        </base-section>  
        <base-section class="logo-section" data-name="logo-bg-vertical" :style="`background-image:url(/images/${settings.attr[1]}.png); background-color: ${settings.attr[1]}; background-size: ${settings.attr[3]}% auto; background-position: ${settings.attr[4]};`">
          <logo-vertical :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr" type="bg"/>
        </base-section>
        <base-section class="logo-section" data-name="logo-mask-vertical" :style="`background-image:url(/images/${settings.attr[1]}.png); background-color: ${settings.attr[1]}; background-size: ${settings.attr[3]}% auto; background-position: ${settings.attr[4]};`">
          <logo-vertical :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr" type="mask"/>
        </base-section> 
      </section>
    </cluster-l>

    </section>
  </div>

  
</template>

<script setup>
import { ref } from 'vue'

const list1 = ['left-1', 'left-2', 'left-3', 'left-4', 'left-5'];
const list2 = ['right-1', 'right-2', 'right-3', 'right-4', 'right-5'];
const list3 = ['center-1', 'center-2', 'center-3', 'center-4', 'center-5', 'center-6', 'center-7', 'center-8', 'center-9'];
const randomList = ref([])

const settings = reactive({
	attr: ['bg', 'bg-1', '#FFF', '150', 'center'],
});

const downloadSVG = (x) => {
  const svg = document.querySelector(x);
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svg);
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'glam-e-logo.svg';
  link.click();
}

const generateRandomList = () => {
  const newItem1 = list1[Math.floor(Math.random() * list1.length)]
  const newItem2 = list2[Math.floor(Math.random() * list2.length)]
  const newItem3 = list3[Math.floor(Math.random() * list3.length)]
  randomList.value = [newItem1, newItem2, newItem3]
}

const setColors = (type, bg, color) => {
  settings.attr[0] = type
  settings.attr[1] = bg
  settings.attr[2] = color
}

const status = reactive({
	accordion: false,
});


</script>


<style lang="scss">
  :root {
    --accent-hsl: 150, 100%, 48%;
    --base-hsl: 202, 100%, 10%;

    --dark-color: #002235;
    --light-color: #ffffff;
    --accent-color: #00f47b;
    --black-color: #000000;
    --bg: var(--dark-color);
    --icon: var(--accent-color);
    --text: var(--light-color);
  }

  .button {
    width: 100%;
    text-align: center;
    font-size: 0.75em;
  }

  .button[visual="secondary"] { 
    --button-border-radius: 3px;
    --button-hsl: var(--base-hsl);
    --button-text-color: hsla(var(--button-hsl), 0.6);
    --button-font-weight: 700;
    border-color: hsla(var(--button-hsl), 0.2);
    text-transform: uppercase;
  }

  .button[visual="unstyled"] { 
    --button-font-weight: 300;
  }

  .logo-section { 
    transition: all .2s ease-out; 
    width: 100%;
    padding: 0;
  }

  .justify-content\:center { justify-content: center; }

  .color-group {
    width: 54px;
    height: 54px;
    position: relative;
    border-radius: 50%;
    background: var(--bg);
    background-size: 100% auto;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  .color-group:hover {
    box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
    transform: scale(1.1);
    transition: all .2s ease;
  }

  .color-group > span {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }

  .color-group > span:nth-child(1) { background-color: var(--icon); }
  
  /* .color-group:hover > span:nth-child(2) { transform: translateX(10px); } */
  /* .color-group > span:nth-child(2) { transition: all .2s ease-in-out; } */

  .main-content {
    width: 100%;
    height: 100vh;
  }

  .sidebar {
    width: 300px;
    padding: var(--s1) var(--s2);
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: var(--s1);
  }

    .sidebar__title {
      font-size: 0.75em;
      line-height: 1.33em;
      text-transform: uppercase;
      font-weight: 700;
      color: hsla(var(--base-hsl), 0.6);
    }

  .content {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;
  }

  [color="1"] {
    --bg: url('/images/bg-1.png');
  }
  
  [color="2"] {
    --bg: url('/images/bg-2.png');
  }
  
  [color="3"] {
    --bg: var(--base-color);
    --icon: var(--white-color);
  }

  .controls { 
    justify-content: center; 
    margin-bottom: var(--s1);
  }

  .logo-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-builder {
    width: min(50%, 350px);
    position: relative;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    &::-webkit-slider-runnable-track,
    &::-moz-range-track {
      background: hsla(0, 0%, 85%, 1);
      height: 1px;
    }
  }

  input[type="range"]::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      appearance: none;
      background: hsla(0, 0%, 85%, 1);
      height: 1px;
      
  }

  input[type="range"]::-moz-range-track {
      -webkit-appearance: none;
      appearance: none;
      background: hsla(0, 0%, 85%, 1);
      height: 1px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid hsla(0, 0%, 85%, 1);
    border-radius: 50%;
    height: 14px;
    width: 14px;
    background-color: #FFF;
    margin-top: -7px;
    color: #FFF;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid hsla(0, 0%, 85%, 1);
    border-radius: 50%;
    height: 14px;
    width: 14px;
    background-color: #FFF;
    margin-top: -7px;
    color: #FFF;
  }

  .position-buttons {
    display: grid;
    grid-template-columns: 40px 40px 40px;
    grid-template-rows: 40px 40px 40px;
    gap: var(--s-1);
  }

    .position-button {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-out;
      &.active,
      &:hover {
        color: hsla(var(--button-hsl), 0.8);
        border-color: hsla(var(--button-hsl), 0.5);
      }
    }
</style>
