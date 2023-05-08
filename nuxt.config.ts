import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Glam-e Lab logo generator",
      meta: [
        { name: "descrtiption", content: "A tool to generate the logo files and branding information for Glam-e Lab" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [],
      link: [
        { rel: "stylesheet", href: "https://use.typekit.net/tsd2tcy.css" },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
      ],
    }
  },
  css: [
    '@ccmdesign/ccm-ds/assets/css/main.scss',
    'public/css/theme.css'
  ],
  components: {
    "dirs": [
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/03-objects'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/04-components'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/05-modules'),
        "global": true
      },
      {
        "path": resolve(__dirname, 'node_modules/@ccmdesign/ccm-ds/ccm-ds/06-sections'),
        "global": true
      },
      "~/components"
    ]
  },
});
