// vite.config.js
import fs from "fs";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      server: {
        host: true,
        port: 8000,
        open: true,
        origin: "https://127.0.0.1:8000",
      },
    };
  } else {
     command === 'build'
    return {
      base: "/car-game/",
    };
  }
});
