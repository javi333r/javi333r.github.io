# Documentación de GitLab CI/CD

¡Bienvenido a la sección de GitLab CI/CD! 🦊⚙️

## ¿Qué es GitLab CI/CD?

GitLab CI/CD es un sistema integrado de integración y entrega continua que automatiza el build, los tests y el despliegue de tu código usando pipelines definidos en `.gitlab-ci.yml`.

## Inicio rápido

```yaml
stages:
  - build
  - test
  - deploy

variables:
  NODE_ENV: production

cache:
  paths:
    - node_modules/

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - build/

unit_tests:
  stage: test
  image: node:18
  script:
    - npm ci
    - npm test

deploy_prod:
  stage: deploy
  image: alpine:3.19
  only:
    - main
  script:
    - echo "Deploying..."
```

## Conceptos clave

- Pipelines, Stages, Jobs
- Runners (shared y specific)
- Artifacts y Caching
- Environments y Protected branches
- Variables y Secrets (masked/protected)

## Buenas prácticas

1. Usa tags de imagen específicos (evita `latest`).
2. Cachea dependencias para acelerar los pipelines.
3. Protege los jobs de deploy con environments y aprobaciones.
4. Usa variables protegidas (masked/protected) para secrets.
5. Divide los pipelines por stages y usa `needs`/`when` para optimizar.

---

> 🔒 Consejo de seguridad: Usa variables protegidas y limita el acceso de runners a repos de confianza.
