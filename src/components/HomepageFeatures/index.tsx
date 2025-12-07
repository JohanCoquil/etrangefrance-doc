import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pour les Joueurs',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Créez vos personnages, rejoignez des parties et participez à des sessions
        de jeu en ligne ou en présentiel avec tous les outils nécessaires.
      </>
    ),
    link: '/docs/joueur',
  },
  {
    title: 'Pour les Maîtres de Jeu',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Générez des parties, animez vos sessions, partagez des images et utilisez
        tous les outils dédiés pour une expérience de jeu optimale.
      </>
    ),
    link: '/docs/mj',
  },
  {
    title: 'Temps Réel',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Chat texte et vocal, synchronisation instantanée, tirages partagés et
        présence en temps réel pour une immersion totale.
      </>
    ),
    link: '/docs/intro',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  const content = (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <div className={clsx('col col--4')}>
      {link ? (
        <Link to={link} className={styles.featureLink}>
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
