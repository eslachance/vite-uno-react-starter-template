import { defineConfig, presetUno, presetWebFonts, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetIcons({
      // Add global icon styles here
      // https://unocss.dev/presets/icons
    }),
    presetUno(),
    presetWebFonts({
      // Add your fonts here
      // Docs: https://unocss.dev/presets/web-fonts
    })
  ],
  theme: {
    // Themeing goes here!
    // https://unocss.dev/config/theme
    colors: {
      back: {
        grey: "#E0E0E0"
      }
    }
  }
});
