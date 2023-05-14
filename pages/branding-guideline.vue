<template>
    <main>
      <base-section>
        <center-l>
          <prose-section>
            <stack-l space="var(--s2)">
              <a href="/" class="logo-section">
                <logo-horizontal-mask :dl="false" left="left-1" right="right-1" center="center-1" color="#FFF" bg="bg-1" size="150" position="center"/>
              </a> 
              <h1>Glam-e Logo Guide</h1>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Logo system</h2>
                  <p>The Glam-e logo system is composed of an icon and a typographic element, with multiple variations of the icon. Due to the large number of variations, it would be impractical to generate all of them as static files. Instead, the Logo Generator platform was developed to dynamically generate the logo with a randomized icon and background image. </p>
                </stack-l>
              </section>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Logo sizing, proportions and clearspace</h2>
                  <p>The Glam-e logo is designed within a grid of 99 x 99 units and follows specific proportions. Any application of the logo should follow the clear space as indicated in the brand guideline document. This is to ensure that the logo maintains its visual integrity and is clearly visible in all contexts. Proper usage of the logo is crucial in maintaining brand identity and recognition.</p>
                  <img class="logo-grid logo-horizontal" src="/images/grid-1.png" alt="Logo sizing, proportions and clearspace" />
                  <img class="logo-grid logo-vertical" src="/images/grid-2.png" alt="Logo sizing, proportions and clearspace" />
                </stack-l>
              </section>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Logo Usage</h2> 
                  <p>Consistent and appropriate usage of the Glam-e logo is essential in maintaining brand identity. The logo should always be used in accordance with the guidelines outlined in this document. Any variation or misuse of the logo is strictly prohibited. The following guidelines provide direction on the proper usage of the Glam-e logo in various contexts, including print materials, digital materials, signage, and more.</p>
                </stack-l>
              </section>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Logo Generation</h2>
                  <p>The Glam-e logo system consists of an icon and a typographic element, with multiple variations of the icon. Due to the large number of variations, it would be impractical to generate all of them as static files. Instead, the Logo Generator platform was developed to dynamically generate the logo with a randomized icon and background image.</p>                
                  <p>To generate a new logo, simply click the “Generate Icon” button as many times as needed until a desired icon is displayed. Then, select one of the available color options and click the “Download the Logo” button to generate the final logo.</p>
                  <p>The Logo Generator platform also provides access to the entire brand guideline, including information on typography and color palette. Proper usage of the logo is crucial in maintaining brand identity and recognition, so be sure to follow the guidelines outlined in the brand guideline document.</p>
                </stack-l>
              </section>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Logo misuse examples</h2>
                  <p>The following examples illustrate improper usage of the Glam-e logo. Adhering to the guidelines outlined in this document is crucial in maintaining brand consistency and identity. Any variation or misuse of the logo is strictly prohibited.</p>
                  <img src="/images/usage-1.png" alt="Logo misuse examples">
                </stack-l>
              </section>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Color palette</h2>
                  <p>The color palette is a key component of the Glam-e brand identity. It is essential that the colors are used consistently across all materials to maintain brand recognition and consistency. In this section, we will outline the primary and secondary colors for the brand, as well as color usage guidelines.</p>
                  <h3>Primary colors</h3>
                  <img src="/images/usage-2.png" alt="Primary colors">
                  <p>Primary colors are mainly pulled from the RTI scan results.</p>
                  <p>The most common colors present in the RTI scans are: </p>
                  <ul>
                    <li>Blue</li>
                    <li>Pink</li>
                    <li>Green</li>
                  </ul>
                  <!--<div class="color-list-container">
                    <stack-l class="color-list | margin-bottom:s1" space="var(--s0)">
                      <div class="color-list__item color-list__item--color1">#E341D7</div>
                      <div class="color-list__item color-list__item--color2">#264BEF</div>
                      <div class="color-list__item color-list__item--color3">#2ACEDB</div>
                      <div class="color-list__item color-list__item--color4">#2D94F1</div>
                    </stack-l>
                  </div>-->
                  <h3>Secondary colors</h3>
                  <p>Secondary colors are meant to be used as support colors. </p>
                  <p>Support colors are:</p>
                  <ul>
                    <li>Black</li>
                    <li>White</li>
                    <li>Green</li>
                    <li>Red</li>
                    <li>Yellow</li>
                  </ul>
                </stack-l>
              </section>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Typography</h2>
                  <h3>Primary typeface</h3>
                  <p>Typography is a crucial element of the Glam-e brand identity. The typeface chosen for the brand should be used consistently across all materials to maintain brand consistency and recognition. In this section, we will outline the primary and secondary typefaces for the brand, as well as guidelines for usage, hierarchy, and style.</p>
                  <p>The typography chose for the branding is the Open Source Typeface <a class="colored" href="https://www.cooperhewitt.org/open-source-at-cooper-hewitt/cooper-hewitt-the-typeface-by-chester-jenkins/" target="_blank">Cooper Hewitt by Chester Jenkins.</a></p>
                  <img src="/images/typography.png" alt="Primary typeface">
                  <h3>Secondary typeface</h3>
                  <p>Whenever the primary typography is not possible to use, a suitable fallback typography would be Helvetica or Arial. </p>
                </stack-l>
              </section>
              <section>
                <stack-l space="var(--s0)">
                  <h2>Iconography</h2>
                  <p>The iconography is <a class="colored" href="https://fonts.google.com/icons?icon.style=Sharp" target="_blank">Google Symbols</a> with the sharp style and at 200 width. From the link in this section you have access to an extensive library of icons.  </p>
                </stack-l>
              </section>
            </stack-l>
          </prose-section>
        </center-l>
      </base-section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import domtoimage from 'dom-to-image';
import JSZip from 'jszip';

const list1 = ['left-1', 'left-2', 'left-3', 'left-4', 'left-5'];
const list2 = ['right-1', 'right-2', 'right-3', 'right-4', 'right-5'];
const list3 = ['center-1', 'center-2', 'center-3', 'center-4', 'center-5', 'center-6', 'center-7', 'center-8', 'center-9'];

const settings = reactive({
	attr: ['bg', 'bg-1', '#FFF', ['png'], '150', 'center'],
});

</script>


<style lang="scss" scoped>
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

  p,
  li {
    font-weight: 400;
  }

  .logo-section {
    width: 350px;
    margin: 0 auto;
  }

  .logo-vertical {
    max-width: 74%;
  }

  section + section {
    border-top: 1px solid hsla(var(--base-hsl), .1);
    padding-top: var(--s1);
  }

  h1 { font-weight: normal;}
  h2 { font-size: 180%; }
  h3 { 
    font-size: 140%; 
    margin-top: var(--s2);
  }

  img { margin-block: var(--s3); }


  .color-list__item {
    display: flex;
    flex-flow: row nowrap;
    gap: var(--s1);
    font-size: 0.75em;
    font-weight: 400;
    &::before {
      content: '';
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }
  }

  .color-list__item--color1 {
    &::before {
      background-color: #E341D7;
    }
  }

  .color-list__item--color2 {
    &::before {
      background-color: #264BEF;
    }
  }

  .color-list__item--color3 {
    &::before {
      background-color: #2ACEDB;
    }
  }

  .color-list__item--color4 {
    &::before {
      background-color: #2D94F1;
    }
  }
</style>
