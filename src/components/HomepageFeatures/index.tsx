import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Generate Code",
    Svg: require("@site/static/img/undraw_code_typing_re_p8b9.svg").default,
    description: (
      <>
        Ottodocs can generate code directly to your file system, meaning less
        time copying and pasting, and more time coding.
      </>
    ),
  },
  {
    title: "ChatGPT CLI",
    Svg: require("@site/static/img/undraw_analysis_dq08.svg").default,
    description: <>Ask otto questions directly from your command line.</>,
  },
  {
    title: "Docs, of course!",
    Svg: require("@site/static/img/undraw_folder_files_re_2cbm.svg").default,
    description: <>Generate inline or markdown documentation.</>,
  },
  {
    title: "Written in Go",
    Svg: require("@site/static/img/go.svg").default,
    description: (
      <>
        Fast, efficient, with zero dependencies. Available for Windows, macOS
        (M1+Intel), and Linux.
      </>
    ),
  },
  {
    title: "Powered by OpenAI",
    Svg: require("@site/static/img/undraw_chat_bot_re_e2gj.svg").default,
    description: (
      <>
        Utilizes OpenAI's ChatGPT API to generate accurate and useful
        documentation for your code.
      </>
    ),
  },
  {
    title: "Free and Open Source",
    Svg: require("@site/static/img/undraw_open_source_-1-qxw.svg").default,
    description: (
      <>
        OttoDocs is a free and open-source project, ensuring transparency and
        fostering community contributions.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
