import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { env } from "process";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": env,
  },
  resolve: {
    alias: {
			"@assets": `${path.resolve(__dirname, "./src/assets/")}`,
			"@styles": `${path.resolve(__dirname, "./src/styles/")}`,
      "@hooks": `${path.resolve(__dirname, "./src/hooks/")}`,
			"@services": `${path.resolve(__dirname, "./src/services/")}`,
			"@contexts": `${path.resolve(__dirname, "./src/contexts/")}`,
      "@src/types": `${path.resolve(__dirname, "./src/types/")}`,
			"@layouts": `${path.resolve(__dirname, "./src/layouts/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
    },
  },
})
