// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ottodocs 🦦",
  tagline: "CLI tool for AI generated coding help.",
  favicon: "/favicon.ico",

  // Set the production url of your site here
  url: "https://ottodocs.timesurgelabs.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TimeSurgeLabs", // Usually your GitHub org/user name.
  projectName: "ottodocs-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  trailingSlash: true,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/TimeSurgeLabs/ottodocs/tree/docs/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "android-chrome-512x512.png",
      navbar: {
        title: "OttoDocs",
        logo: {
          alt: "My Site Logo",
          src: "otter.svg",
        },
        items: [
          {
            type: "doc",
            docId: "README",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/TimeSurgeLabs/ottodocs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://github.com/TimeSurgeLabs/ottodocs/issues",
            label: "Issues",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs",
              },
              {
                label: "Commands",
                to: "/docs/usage/otto",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussions",
                href: "https://github.com/TimeSurgeLabs/ottodocs/discussions",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/timesurgelabs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://dev.to/timesurgelabs",
              },
              {
                label: "GitHub",
                href: "https://github.com/TimeSurgeLabs/ottodocs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TimeSurge Labs. Built with Docusaurus. Logo Licensed from OpenMoji under CC BY 4.0.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
