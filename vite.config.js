// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from "@tailwindcss/vite"
// import { resolve } from 'path';
// import { fileURLToPath } from 'url';


// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//     resolve: {
//         alias :{
//           '#components': resolve
//           (dirname(fileURLToPath(import.meta.url)),
//           "src/components",
//         ),
//           '#constants': resolve
//           (dirname(fileURLToPath(import.meta.url)),
//           "src/constants",
//         ),
//           '#store': resolve
//           (dirname(fileURLToPath(import.meta.url)),
//           "src/store",
//         ),
//           '#hoc': resolve
//           (dirname(fileURLToPath(import.meta.url)),
//           "src/hoc",
//         ),
//           '#windows': resolve
//           (dirname(fileURLToPath(import.meta.url)),
//           "src/windows",
//         ),
//         },
//     },
// });





import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// Create __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#components": path.resolve(__dirname, "src/components"),
      "#constants": path.resolve(__dirname, "src/constants"),
      "#store": path.resolve(__dirname, "src/store"),
      "#hoc": path.resolve(__dirname, "src/hoc"),
      "#windows": path.resolve(__dirname, "src/windows"),
    },
  },
});
