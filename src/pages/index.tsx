import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">

        {/* ASCII Art ÉTRANGE FRANCE (version premium) */}
        <pre className={clsx(styles.asciiTitle, styles.desktop)}>
{`▓█████ ▄▄▄█████▓ ██▀███   ▄▄▄       ███▄    █   ▄████ ▓█████      █████▒ ██▀███   ▄▄▄       ███▄    █  ▄████▄  ▓█████ 
▓█   ▀ ▓  ██▒ ▓▒▓██ ▒ ██▒▒████▄     ██ ▀█   █  ██▒ ▀█▒▓█   ▀    ▓██   ▒ ▓██ ▒ ██▒▒████▄     ██ ▀█   █ ▒██▀ ▀█  ▓█   ▀ 
▒███   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▒███      ▒████ ░ ▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▀█ ██▒▒▓█    ▄ ▒███   
▒▓█  ▄ ░ ▓██▓ ░ ▒██▀▀█▄  ░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▒▓█  ▄    ░▓█▒  ░ ▒██▀▀█▄  ░██▄▄▄▄██ ▓██▒  ▐▌██▒▒▓▓▄ ▄██▒▒▓█  ▄ 
░▒████▒  ▒██▒ ░ ░██▓ ▒██▒ ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒░▒████▒   ░▒█░    ░██▓ ▒██▒ ▓█   ▓██▒▒██░   ▓██░▒ ▓███▀ ░░▒████▒`}
</pre>

<pre className={clsx(styles.asciiTitle, styles.mobile)}>
{`▓█████ ▄▄▄█████▓ ██▀███   ▄▄▄       ███▄    █   ▄████ ▓█████ 
▓█   ▀ ▓  ██▒ ▓▒▓██ ▒ ██▒▒████▄     ██ ▀█   █  ██▒ ▀█▒▓█   ▀ 
▒███   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▒███   
▒▓█  ▄ ░ ▓██▓ ░ ▒██▀▀█▄  ░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▒▓█  ▄ 
░▒████▒  ▒██▒ ░ ░██▓ ▒██▒ ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒░▒████▒

 █████▒ ██▀███   ▄▄▄       ███▄    █  ▄████▄  ▓█████ 
▓██   ▒ ▓██ ▒ ██▒▒████▄     ██ ▀█   █ ▒██▀ ▀█  ▓█   ▀ 
▒████ ░ ▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▀█ ██▒▒▓█    ▄ ▒███   
░▓█▒  ░ ▒██▀▀█▄  ░██▄▄▄▄██ ▓██▒  ▐▌██▒▒▓▓▄ ▄██▒▒▓█  ▄ 
░▒█░    ░██▓ ▒██▒ ▓█   ▓██▒▒██░   ▓██░▒ ▓███▀ ░░▒████▒`}
</pre>

        <Heading as="h2" className={styles.subtitle}>
          {siteConfig.tagline}
        </Heading>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            📖 Commencer la découverte
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">

        <h2 className={styles.sectionTitle}>Accès rapide</h2>

        <div className={styles.cards}>

          <Link to="/docs/creer-personnage" className={styles.card}>
            <h3>🧬 Créer un personnage</h3>
            <p>Générez identité, capacités, voies, passions et traits occultes.</p>
          </Link>

          <Link to="/docs/rejoindre-partie" className={styles.card}>
            <h3>📟 Rejoindre une partie</h3>
            <p>Connexion, QR code, synchronisation et interface joueur.</p>
          </Link>

          <Link to="/docs/creer-partie" className={styles.card}>
            <h3>🧙‍♂️ Pour le MJ</h3>
            <p>Créer une session, gérer les participants et animer une aventure.</p>
          </Link>

          <Link to="/docs/cartes-et-tirages" className={styles.card}>
            <h3>🎴 Tirages de cartes</h3>
            <p>Comprendre la mécanique d’action centrale d’Étrange France.</p>
          </Link>

          <Link to="/docs/chat-vocal" className={styles.card}>
            <h3>🔊 Chat vocal Agora</h3>
            <p>Micro, haut-parleur et communication temps réel.</p>
          </Link>

          <Link to="/docs/synchronisation" className={styles.card}>
            <h3>🔗 Synchronisation & présence</h3>
            <p>Le fonctionnement du réseau entre MJ et joueurs.</p>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Documentation officielle de l'application de jeu de rôle Étrange France">

      <HomepageHeader />
      <main>
        <QuickLinks />
      </main>
    </Layout>
  );
}
