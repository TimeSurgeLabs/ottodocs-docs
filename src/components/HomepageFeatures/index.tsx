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
    title: "Singular Files or Repositories",
    Svg: require("@site/static/img/undraw_folder_files_re_2cbm.svg").default,
    description: (
      <>
        OttoDocs works seamlessly with individual files or entire repositories,
        making it easy to generate documentation for any project.
      </>
    ),
  },
  {
    title: "Major Programming Languages",
    Svg: require("@site/static/img/undraw_code_typing_re_p8b9.svg").default,
    description: (
      <>
        Supports most major programming languages, ensuring your project is
        covered, no matter the language.
      </>
    ),
  },
  {
    title: "Written in Go",
    Svg: require("@site/static/img/go.svg").default,
    description: (
      <>
        OttoDocs is written in Go, a modern programming language that offers
        performance and reliability.
      </>
    ),
  },
  {
    title: "Powered by OpenAI",
    Svg: require("@site/static/img/undraw_chat_bot_re_e2gj.svg").default,
    description: (
      <>
        Utilizes ChatGPT-3.5 (and ChatGPT-4 when available) to generate accurate
        and useful documentation for your code.
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
