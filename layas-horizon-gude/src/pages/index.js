import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Tutorial - 1h ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Getting Laya's Horizon on MacOS - A Guide`}
      description="A Step-By-Step guide to getting the Laya's Horizon on your Mac.">
      <HomepageHeader />
      <main>

          


        {/* <HomepageFeatures /> */}
        <div className="container text--center">
        <br></br>
        <h1 className="hero__title">Ever wanted to run Laya's Horizon on your Mac?</h1>
        <p>Follow this guide to get Laya's Horizon running on your Mac.</p>
        <br></br>
        </div>


        <h2 className="text--center">Screenshots</h2>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc1.png" className={styles.featureSvg} role="img" />
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc2.png" className={styles.featureSvg} role="img" />
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc3.png" className={styles.featureSvg} role="img" />
                  </div>
                  </div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc4.png" className={styles.featureSvg} role="img" />
                  </div>
                  </div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc5.png" className={styles.featureSvg} role="img" />
                  </div>
                  </div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc6.png" className={styles.featureSvg} role="img" />
                  </div></div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc7.png" className={styles.featureSvg} role="img" />
                  </div></div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc8.png" className={styles.featureSvg} role="img" />
                  </div></div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc9.png" className={styles.featureSvg} role="img" />
                  </div></div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc10.png" className={styles.featureSvg} role="img" />
                  </div></div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc11.png" className={styles.featureSvg} role="img" />
                  </div></div>
                  <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src="img/sc12.png" className={styles.featureSvg} role="img" />
                  </div></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
