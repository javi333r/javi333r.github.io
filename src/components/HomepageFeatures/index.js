import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kubernetes Mastery',
    icon: '⚙️',
    description: (
      <>
        Comprehensive guides for container orchestration, from basic deployments
        to advanced cluster management, service mesh, and monitoring strategies.
      </>
    ),
    color: '#00ff41',
    technologies: ['K8s', 'Docker', 'Helm', 'Istio']
  },
  {
    title: 'GitHub Actions CI/CD',
    icon: '🚀',
    description: (
      <>
        Automated workflows, deployment pipelines, and best practices for
        continuous integration and delivery using GitHub Actions.
      </>
    ),
    color: '#4ecdc4',
    technologies: ['Actions', 'Workflows', 'Secrets', 'Runners']
  },
  {
    title: 'Infrastructure as Code',
    icon: '🏗️',
    description: (
      <>
        Terraform, Ansible, and cloud-native infrastructure management.
        Scalable, version-controlled infrastructure deployments.
      </>
    ),
    color: '#ff6b35',
    technologies: ['Terraform', 'Ansible', 'AWS', 'Azure']
  },
];

function Feature({icon, title, description, color, technologies}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureHeader}>
          <div className={styles.featureIcon} style={{borderColor: color}}>
            <span style={{color: color}}>{icon}</span>
          </div>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        </div>
        <div className={styles.featureDescription}>
          <p>{description}</p>
        </div>
        <div className={styles.featureTechnologies}>
          {technologies.map((tech, idx) => (
            <span key={idx} className={styles.techBadge} style={{borderColor: color, color: color}}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.featureFooter}>
          <div className={styles.terminalPrompt}>
            <span className={styles.promptSymbol}>$</span>
            <span className={styles.promptCommand}>explore {title.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>
        </div>
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
