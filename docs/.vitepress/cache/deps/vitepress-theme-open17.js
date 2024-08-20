// node_modules/.pnpm/vitepress-theme-open17@1.1.3_vitepress@1.3.3/node_modules/vitepress-theme-open17/libs/index.ts
import DefaultTheme from "vitepress/theme";
import MyLayout from "E:/test/vitePress/node_modules/.pnpm/vitepress-theme-open17@1.1.3_vitepress@1.3.3/node_modules/vitepress-theme-open17/libs/components/MyLayout.vue";
import Blog from "E:/test/vitePress/node_modules/.pnpm/vitepress-theme-open17@1.1.3_vitepress@1.3.3/node_modules/vitepress-theme-open17/libs/components/Blog.vue";
import Archive from "E:/test/vitePress/node_modules/.pnpm/vitepress-theme-open17@1.1.3_vitepress@1.3.3/node_modules/vitepress-theme-open17/libs/components/Archive.vue";
import Tags from "E:/test/vitePress/node_modules/.pnpm/vitepress-theme-open17@1.1.3_vitepress@1.3.3/node_modules/vitepress-theme-open17/libs/components/Tags.vue";
import "E:/test/vitePress/node_modules/.pnpm/vitepress-theme-open17@1.1.3_vitepress@1.3.3/node_modules/vitepress-theme-open17/libs/style.css";
var libs_default = {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component("blog", Blog);
    app.component("archive", Archive);
    app.component("tags", Tags);
  }
};
export {
  libs_default as default
};
//# sourceMappingURL=vitepress-theme-open17.js.map
