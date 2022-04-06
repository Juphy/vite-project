import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import WindiCSS from 'vite-plugin-windicss'
import VueI18n from "@intlify/vite-plugin-vue-i18n"
import Components from 'unplugin-vue-components/vite'
import PurgeIcons from 'vite-plugin-purge-icons';
import ViteFonts from 'vite-plugin-fonts';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left'
    }),
    VueI18n({
      include: [resolve(__dirname, './locales/**')]
    }),
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts',
    }),
    ViteFonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),
    svgLoader(),
    PurgeIcons({
      
    }),            
  ],
  server: {
    port: 4000
  },
  resolve: {
    extensions: ['.vue', '.ts', '.json', '.js'],
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})
