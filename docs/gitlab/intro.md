# GitLab CI/CD Documentation

Welcome to the GitLab CI/CD section! 🦊⚙️

## What is GitLab CI/CD?

GitLab CI/CD is a built-in continuous integration and delivery system that automates building, testing, and deploying your code using `.gitlab-ci.yml` pipelines.

## Quick Start

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

## Core Concepts

- Pipelines, Stages, Jobs
- Runners (shared and specific)
- Artifacts and Caching
- Environments and Protected branches
- Variables and Secrets (masked/protected)

## Best Practices

1. Use specific image tags (avoid `latest`).
2. Cache dependencies to speed up pipelines.
3. Protect deploy jobs with environments and approvals.
4. Use masked/protected variables for secrets.
5. Split pipelines by stages and use needs/when to optimize.

---

> 🔒 Security tip: Use protected variables and limit runner access to trusted repositories only.
