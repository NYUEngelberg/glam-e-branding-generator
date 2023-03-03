<template>
  <div :color="color[2]">
    <base-section size="m">
      <center-l class="text-align:center">
        <h3 class="padding-bottom:s2">Choose a color scheme and generate a logo</h3>
        <cluster-l class="controls">
          <div class="color-group" color="1" @click="setColors('#00f47b', '#ffffff', 'base')">
            <span></span>
            <span></span>
          </div>
          <div class="color-group" color="2" @click="setColors('#00f47b', '#002235', 'white' )">
            <span></span>
            <span></span>
          </div>
          <div class="color-group" color="3" @click="setColors('#002235', '#ffffff', 'accent')">
            <span></span>
            <span></span>
          </div>
          <div class="color-group" color="4" @click="setColors('#ffffff', '#ffffff', 'base')">
            <span></span>
          </div>
          <div class="color-group" color="5" @click="setColors('#000000', '#000000', 'white')">
            <span></span>
          </div>
        </cluster-l>
        
        <base-button visual="primary" size="l"  @click="generateRandomList">Generate Logo</base-button>

      </center-l>
    </base-section>
    <base-section class="logo-section" :color="color[2]">
      <center-l class="text-align:center">
        <logo-vertical :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="color"/>
        <base-button :color="color[2] == '#000000' || color[2] == 'base' ? 'white' : 'base'" @click="downloadSVG('#logo-vertical')">Download Logo File (.svg)</base-button>
      </center-l>
    </base-section>
    <base-section size="l" class="logo-section" :color="color[2]">
      <center-l class="text-align:center">
        <logo-horizontal :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="color"/>
        <base-button :color="color[2] == '#000000' || color[2] == 'base' ? 'white' : 'base'" @click="downloadSVG('#logo-horizontal')">Download Logo File (.svg)</base-button>
      </center-l>
    </base-section>
    <base-section>
      <center-l>
        <cluster-l class="justify-content:center">
          <a href="https://www.cooperhewitt.org/open-source-at-cooper-hewitt/cooper-hewitt-the-typeface-by-chester-jenkins/" target="_blank" class="button">Download Font</a>
          <a href="#" target="_blank" class="button">Download Letterhead</a>
          <a href="#" target="_blank" class="button">Download Branding Guidelines</a>
        </cluster-l>
      </center-l>
    </base-section>

    <base-section color="base">
      <center-l>
        <logo-web :color="color" />
      </center-l>
    </base-section>
  </div>

  
</template>

<script setup>
import { ref } from 'vue'

const list1 = ['left-1', 'left-2', 'left-3', 'left-4', 'left-5'];
const list2 = ['right-1', 'right-2', 'right-3', 'right-4', 'right-5'];
const list3 = ['center-1', 'center-2', 'center-3', 'center-4', 'center-5', 'center-6', 'center-7', 'center-8', 'center-9'];
const randomList = ref([])

const color = ref(['#00f47b', '#ffffff', 'base']);

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

const setColors = (icon, text, bg) => {
  color.value[0] = icon
  color.value[1] = text
  color.value[2] = bg
}


</script>


<style>
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

  .button { --button-border-radius: 32px; }

  .logo-section { transition: background-color .4s ease; }

  .justify-content\:center { justify-content: center; }

  .color-group {
    padding: 12px;
    display: flex;
    border-radius: 40px;
    background-color: var(--bg);
    border: 1px solid #ddd;
    cursor: pointer;
  }

  .color-group:hover {
    box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
    transform: scale(1.1);
    transition: all .2s ease;
  }

  .color-group > span {
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .color-group > span:nth-child(1) { background-color: var(--icon); }
  .color-group > span:nth-child(2) { background-color: var(--text); }
  .color-group > span:nth-child(2) { margin-left: -8px; }
  
  /* .color-group:hover > span:nth-child(2) { transform: translateX(10px); } */
  /* .color-group > span:nth-child(2) { transition: all .2s ease-in-out; } */

  [color="1"] {
    --bg: var(--dark-color);
    --icon: var(--accent-color);
    --text: var(--light-color);
  }
  
  [color="2"] {
    --bg: var(--light-color);
    --icon: var(--accent-color);
    --text: var(--dark-color);
  }
  
  [color="3"] {
    --bg: var(--accent-color);
    --icon: var(--dark-color);
    --text: var(--light-color);
  }
  
  [color="4"] {
    --bg: var(--black-color);
    --icon: var(--light-color);
    --text: var(--light-color);
  }
  [color="5"] {
    --bg: var(--light-color);
    --icon: var(--black-color);
    --text: var(--black-color);
  }

  .controls { 
    justify-content: center; 
    margin-bottom: var(--s1);
  }
</style>
