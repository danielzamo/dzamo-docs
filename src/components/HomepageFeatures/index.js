import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docusaurus',
    Svg: require('@site/static/img/docusaurus-my.svg').default,
    description: (
      <>
        Docusaurus fue diseñado desde cero; se instala fácilmente y es utilizado
        para generar sitios estáticos funcionales.
      </>
    ),
  },
  {
    title: 'Enfocarse en escribir documentación',
    Svg: require('@site/static/img/personal-in-laptop.svg').default,
    description: (
      <>
        El resto, como la organización y el formato de los archivos, lo maneja
        Docusaurus por usted.
      </>
    ),
  },
  {
    title: 'Shell Scripting',
    Svg: require('@site/static/img/undraw_dev-productivity.svg').default,
    description: (
      <>
        Aprende sobre scripting en Shell. Explora desde los conceptos básicos hasta
        funciones avanzadas.
      </>
    ),
    link: '/docs/shell-scripting/',
  },
];

function FeatureOld({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && (
          <Link className="button button--primary" to={link}>
            Explorar
          </Link>
        )}
      </div>
    </div>
  );
}

function Feature({Svg, title, description, link}) {
    const Wrapper = link ? Link : 'div'; // Si hay link, usa <Link>, sino un <div>
  
    return (
      <Wrapper className={clsx('col col--4', styles.cardLink)} to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Wrapper>
    );
  }

export default function HomepageFeatures() {
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