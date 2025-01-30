import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docusaurus',
    Svg: require('@site/static/img/docusaurus-my.svg').default,
    description: (
      <>
Docusaurus fue diseñado desde cero; se instala facilmente y es utilizado para generar sitios estáticos funcionales. Para mantener documentación (sea interna o externamente publicada en Web) es una solución ideal y rápida de implementar.
      </>
    ),
  },
  {
    title: 'Enfocarse en crear y escribir documentación',
    Svg: require('@site/static/img/personal-in-laptop.svg').default,
    description: (
      <>
 El resto, que son tareas más técnicas y repetitivas (como la organización y el formato de los archivos), lo maneja Docusaurus por usted.
       </>
    ),
  },
  {
    title: 'Impulsado por React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extiende o personaliza el diseño del sitio web reutilizando React. Docusaurus puede ser extendido mientras se reutiliza el mismo encabezado y pie de página.  Soporta tanto ficheros Markdown, como basados en React (Javascript/Typescript).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
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
