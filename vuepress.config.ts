import { defineUserConfig, } from "vuepress";
import { defaultTheme } from '@vuepress/theme-default'

import { VssuePlugin } from "@laoergege/vuepress-plugin-vssue-next-compat";

export default defineUserConfig({
  port: 80,
  theme: defaultTheme({
    navbar: [{ text: 'test', link: '/test' },]
  }),
  plugins: [
    VssuePlugin({
      platform: "gitee",
      owner: "tomiaa",
      repo: "kuangyx.cn",
      clientId: "f4aa41f44d9bced2e46eb42ef45e3f6abdba0f012f3ffc25588f0c352571b9ac",
      clientSecret: "1575e653b753d7706b2d1ed3dc2a96e04050a85ec199a77598bc5e8f2175b266",
      autoCreateIssue: true, // 自动创建评论
      labels: ['Vssue'],
      prefix: ['Vssue'],
      state: 'Vssue',
    })
  ],
});
