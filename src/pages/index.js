import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function TerminalPrompt() {
  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={styles.terminalButton}></span>
          <span className={styles.terminalButton}></span>
          <span className={styles.terminalButton}></span>
        </div>
        <div className={styles.terminalTitle}>terminal</div>
      </div>
      <div className={styles.terminalBody}>
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>┌──(user㉿devops)-[~]</span>
        </div>
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>└─$ </span>
          <span className={styles.command}>kubectl get pods --all-namespaces</span>
        </div>
        <div className={styles.terminalLine}>
          <span className={styles.output}>NAMESPACE     NAME                    READY   STATUS    RESTARTS</span>
        </div>
        <div className={styles.terminalLine}>
          <span className={styles.output}>kube-system   coredns-558bd4d5db-x7gvn   1/1     Running   0</span>
        </div>
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>└─$ </span>
          <span className={styles.cursor}>█</span>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <Heading as="h1" className={styles.heroTitle}>
              <span className={styles.gradientTitle}>{siteConfig.title}</span>
            </Heading>
            <p className={styles.heroSubtitle}>
              <span className={styles.typewriter}>
                Kubernetes • GitHub Actions • GitLab • Infra como Código
              </span>
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Configs de K8s</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Workflows de GitHub</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Monitoreo</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx('button', styles.buttonPrimary)}
                to="/docs/kubernetes/intro">
                <span>🚀 Documentación de Kubernetes</span>
              </Link>
              <Link
                className={clsx('button', styles.buttonSecondary)}
                to="/docs/github/intro">
                <span>⚡ Acciones de GitHub</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <TerminalPrompt />
          </div>
        </div>
      </div>
      <div className={styles.matrixRain}>
        <canvas id="matrix-canvas" className={styles.matrixCanvas}></canvas>
      </div>
    </header>
  );
}

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className="container">
        <div className={styles.statusItems}>
          <div className={styles.statusItem}>
            <span className={styles.statusDot + ' ' + styles.statusOnline}></span>
            <span>Estado del clúster: En línea</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusDot + ' ' + styles.statusOnline}></span>
            <span>Pipeline CI/CD: Activo</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusDot + ' ' + styles.statusWarning}></span>
            <span>Monitoreo: 2 alertas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Matrix rain effect
  React.useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 35);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Layout
      title={`${siteConfig.title} - DevOps Documentation`}
      description="Personal documentation hub for Kubernetes, GitHub Actions, and DevOps practices">
      <HomepageHeader />
      <StatusBar />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
