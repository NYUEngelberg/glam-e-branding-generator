<template>
  <div :color="settings.attr[2]">
    <section> 
      <cluster-l class="main-content">
        <section class="sidebar" :class="{'sidebar--expanded':status.accordion}">
          <div class="content__container">
            <base-section class="logo-section" data-name="logo-vertical" v-if="settings.attr[0] == 'bg'">
              <logo-horizontal-mask :dl="false" :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[2]" :bg="settings.attr[1]" :size="settings.attr[4]" :position="settings.attr[5]"/>
            </base-section> 
            <base-section v-else class="logo-section" data-name="logo-bg-vertical" :style="`background-color:${settings.attr[2]};`">
              <logo-horizontal :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[1]" />
            </base-section>
          </div>
          <base-button visual="secondary" @click="randomizeAll">Generate Logo</base-button>
          <base-button visual="unstyled" icon-after="expand_more" class="accordion-trigger" @click.prevent="status.accordion = !status.accordion">Customize Logo</base-button>
          <div class="sidebar__spacer">
            <div class="sidebar__accordion">
              <p class="sidebar__title">Choose color pattern</p>
              <base-button visual="secondary" @click="generateRandomLogo">Generate Icon</base-button>
              <cluster-l class="controls" space="var(--s1)" justify="space-around">
                <div class="color-group" color="1" @click="setColors('bg', 'bg-1', '#FFF', ['png'])">
                </div>
                <div class="color-group" color="2" @click="setColors('bg', 'bg-2', '#FFF', ['png'])">
                </div>
                <div class="color-group" color="4" @click="setColors('bg', 'bg-3', '#FFF', ['png'])">
                </div>
                <div class="color-group" color="5" @click="setColors('bg', 'bg-4', '#FFF', ['png'])">
                </div>
                <div class="color-group" color="3" @click="setColors('color', 'var(--base-color)', '#FFF', ['png', 'svg'])">
                  <span></span>
                </div>
              </cluster-l>
              <p class="sidebar__title">Pattern size</p>
              <input type="range" id="size" name="size" v-model="settings.attr[4]" min="100" max="200" :disabled="settings.attr[0] == 'color'">
              <p class="sidebar__title">Pattern position</p>
              <div class="position-buttons">
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'top left'" :class="{'active': settings.attr[5] == 'top left'}" icon-before="north_west"></base-button>
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'center top'" :class="{'active': settings.attr[5] == 'center top'}" icon-before="north"></base-button>
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'top right'" :class="{'active': settings.attr[5] == 'top right'}" icon-before="north_east"></base-button>
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'center left'" :class="{'active': settings.attr[5] == 'center left'}" icon-before="west"></base-button>
                <base-button visual="secondary" class="position-button position-button--center" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'center'" :class="{'active': settings.attr[5] == 'center'}"><span></span></base-button>
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'center right'" :class="{'active': settings.attr[5] == 'center right'}" icon-before="east"></base-button>
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'bottom left'" :class="{'active': settings.attr[5] == 'bottom left'}" icon-before="south_west"></base-button>
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'center bottom'" :class="{'active': settings.attr[5] == 'center bottom'}" icon-before="south"></base-button>
                <base-button visual="secondary" class="position-button" :disabled="settings.attr[0] == 'color'" @click="settings.attr[5] = 'bottom right'" :class="{'active': settings.attr[5] == 'bottom right'}" icon-before="south_east"></base-button> 
              </div>
            </div>
          </div>
          <base-button visual="secondary" @click="downloadLogosAsZip" target="_blank" class="button">Download Logo</base-button>
          <nuxt-link visual="secondary" to="/branding-guideline" target="_blank" class="button">Branding Guidelines</nuxt-link>
          <a visual="secondary" href="https://www.cooperhewitt.org/open-source-at-cooper-hewitt/cooper-hewitt-the-typeface-by-chester-jenkins/" target="_blank" class="button">Typography</a>
          <a visual="secondary" href="https://docs.google.com/document/d/1h9fc3t_rDIEc72UBjHuLaAUrOSyA41xr4L_ctW-aqG0/edit?usp=sharing" target="_blank" class="button">Template</a>
      </section>
      <section class="content" v-if="settings.attr[0] == 'bg'">
        <div class="content__container">
          <base-section class="logo-section | logo--png" data-name="logo-horizontal-bg" :style="`background-image:url(/images/${settings.attr[1]}.png); background-size: cover; background-position: center;`">
            <logo-horizontal :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[2]" :bg="settings.attr[1]"/>
          </base-section>
        </div>
        <div class="content__container">
          <base-section class="logo-section" data-name="logo-horizontal">
            <logo-horizontal-clip :format="settings.attr[3]" name="logo-horizontal" :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[2]" :bg="settings.attr[1]" :size="settings.attr[4]" :position="settings.attr[5]"/>
          </base-section>  
        </div>
        <div class="content__container">
          <base-section class="logo-section | logo--png" data-name="logo-vertical-bg" :style="`background-image:url(/images/${settings.attr[1]}.png); background-size: cover; background-position: center;`">
            <logo-vertical :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[2]" :bg="settings.attr[1]" />
          </base-section>
        </div>
        <div class="content__container">
          <base-section class="logo-section" data-name="logo-vertical">
            <logo-vertical-clip  :format="settings.attr[3]" name="logo-vertical" :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[2]" :bg="settings.attr[1]" :size="settings.attr[4]" :position="settings.attr[5]" />
          </base-section> 
        </div>
      </section>
      <section class="content" v-else>
        <div class="content__container">
          <base-section class="logo-section" data-name="logo-bg-horizontal" :style="`background-color:${settings.attr[1]};`">
            <logo-horizontal :format="settings.attr[3]" name="logo-horizontal-white" :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[2]" />
          </base-section>
        </div>
        <div class="content__container">
          <base-section class="logo-section" data-name="logo-horizontal" :style="`background-color:${settings.attr[2]};`">
            <logo-horizontal :format="settings.attr[3]" name="logo-horizontal-black" :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[1]" />
          </base-section>
        </div>
        <div class="content__container">
          <base-section class="logo-section" data-name="logo-bg-vertical" :style="`background-color:${settings.attr[1]};`">
            <logo-vertical :format="settings.attr[3]" name="logo-vertical-white" :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[2]" />
          </base-section>
        </div>
        <div class="content__container">
          <base-section class="logo-section" data-name="logo-vertical" :style="`background-color:${settings.attr[2]};`">
            <logo-vertical :format="settings.attr[3]" name="logo-vertical-black" :left="randomList[0]" :right="randomList[1]" :center="randomList[2]" :color="settings.attr[1]" />
          </base-section>
        </div>
      </section>
    </cluster-l>

    </section>
  </div>

  
</template>

<script setup>
import { ref } from 'vue'
import domtoimage from 'dom-to-image';
import JSZip from 'jszip';

const list1 = ['left-1', 'left-2', 'left-3', 'left-4', 'left-5'];
const list2 = ['right-1', 'right-2', 'right-3', 'right-4', 'right-5'];
const list3 = ['center-1', 'center-2', 'center-3', 'center-4', 'center-5', 'center-6', 'center-7', 'center-8', 'center-9'];
const patternList = [
  ['bg', 'bg-1', '#FFF', ['png']],
  ['bg', 'bg-2', '#FFF', ['png']],
  ['bg', 'bg-3', '#FFF', ['png']],
  ['bg', 'bg-4', '#FFF', ['png']]
]
const positionList = ['top left', 'center top', 'top right', 'center left', 'center', 'center right', 'bottom left', 'center bottom', 'bottom right']
const randomList = ref([])

const settings = reactive({
	attr: ['bg', 'bg-1', '#FFF', ['png'], '150', 'center'],
});

const downloadSVG = (x) => {
  //const svg = document.querySelector(x);
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(x);
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  return blob;
  /*const link = document.createElement('a');
  link.href = url;
  link.download = 'glam-e-logo.svg';
  link.click();*/
}

const generateRandomLogo = () => {
  const newItem1 = list1[Math.floor(Math.random() * list1.length)]
  const newItem2 = list2[Math.floor(Math.random() * list2.length)]
  const newItem3 = list3[Math.floor(Math.random() * list3.length)]
  randomList.value = [newItem1, newItem2, newItem3]
}

const setColors = (type, bg, color, formats) => {
  settings.attr[0] = type
  settings.attr[1] = bg
  settings.attr[2] = color
  settings.attr[4] = formats
}

const status = reactive({
	accordion: false,
});

const randomizeAll = () => {
  settings.attr = patternList[Math.floor(Math.random() * patternList.length)]
  settings.attr.push(Math.floor(Math.random() * 101) + 100)
  settings.attr.push(positionList[Math.floor(Math.random() * positionList.length)])
  generateRandomLogo()
}

const generatePNGs = async () => {
  const logoElements = document.querySelectorAll('.logo--png');
  const pngFiles = [];
  for (const logoElement of logoElements) {
    const fileName = logoElement.getAttribute('data-name') + '.png';
    console.log(fileName)
    let dataUrl = await domtoimage.toPng(logoElement);
    pngFiles.push({ fileName, dataUrl });
  }
  return pngFiles;
};

const generateSVGs = async () => {
  const logoElements = document.querySelectorAll('.logo--svg');
  const svgFiles = [];
  for (const logoElement of logoElements) {
    const fileName = logoElement.getAttribute('data-name') + '.svg';
    let dataUrl = await downloadSVG(logoElement);
    console.log(fileName, dataUrl)
    svgFiles.push({ fileName, dataUrl });
  }
  return svgFiles;
};

const downloadLogosAsZip = async () => {
  const pngFiles = await generatePNGs();
  const svgFiles = await generateSVGs();
  const zip = new JSZip();

  pngFiles.forEach(({ fileName, dataUrl }) => {
    zip.file(fileName, dataUrl.split('base64,')[1], { base64: true });
  });

  svgFiles.forEach(({ fileName, dataUrl }) => {
    //zip.file(fileName, dataUrl.split('charset=utf-8,')[1], { base64: false });
    zip.file(fileName, dataUrl, { base64: false });
  });

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(zipBlob);
  link.download = 'logos.zip';
  link.click();
};

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
    justify-content: center;
    &::after {
      font-weight: 400;
    }
  }

  .content__container { 
    width: 100%;
    padding: 0;
    &:first-child {
      border-bottom: 1px solid hsla(var(--white-hsl),0.2);
    }
    &:nth-child(2){
      border-bottom: 1px solid hsla(var(--base-hsl),0.2);
    }
  }

  .logo-section { 
    transition: all .2s ease-out; 
    width: 100%;
    padding: 0;
    height: 100%;
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
    flex-wrap: nowrap;
  }

  .sidebar {
    flex-shrink: 0;
    width: 360px;
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

    .accordion-trigger::after {
      transition: all 0.3s ease-out;
    }


    .sidebar__accordion {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: var(--s1);
      overflow: hidden;
      height: 0;
      transition: height 0.3s ease-out;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: none;
      }
      &::-webkit-scrollbar-thumb {
        background: hsla(var(--base-hsl), 0.0);
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: hsla(var(--base-hsl), 0.5);
      }
    }

    .sidebar__accordion:hover {
      &::-webkit-scrollbar-thumb {
        background: hsla(var(--base-hsl), 0.5);
      }
    }

    .sidebar--expanded {
      .sidebar__accordion {
        height: calc(100vh - 500px);
        overflow-y: visible;
        border-bottom: 1px solid hsla(0, 0%, 85%, 1);
        border-top: 1px solid hsla(0, 0%, 85%, 1);
        padding-block: var(--s0);
      }
      .accordion-trigger::after {
        transform: rotateX(180deg);
      }
    }

  .sidebar__spacer {
    flex-grow: 1;
    width: 100%;
  }
  
  .sidebar__divider {
    width: 100%;
    height: 0;
    display: block;
    border-top: 1px solid hsla(0, 0%, 85%, 1);
    margin-block: var(--s0);
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
  
  [color="4"] {
    --bg: url('/images/bg-3.png');
  }
  
  [color="5"] {
    --bg: url('/images/bg-4.png');
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
    display: flex;
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
      height: 40px;
      span {
        width: 14px;
        height: 14px;
        display: block;
        background-color:  hsla(var(--button-hsl), 0.6);
        border-radius: 50%;
      }
      &.active,
      &:hover {
        color: hsla(var(--button-hsl), 0.8);
        border-color: hsla(var(--button-hsl), 0.5);
        span {
          background-color:  hsla(var(--button-hsl), 0.8);
        }
      }
      &::before {
        font-weight: 700;
      }
    }

  .hidden {
    display: none;
  }
</style>
