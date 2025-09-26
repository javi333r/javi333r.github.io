# Documentación de Acciones de GitHub

¡Bienvenido a la sección de Acciones de GitHub! ⚡

## ¿Qué son las Acciones de GitHub?

GitHub Actions es una plataforma de CI/CD que te permite automatizar el build, los tests y los despliegues directamente dentro de tu repositorio de GitHub.

## Inicio rápido

```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Build application
      run: npm run build
```

## Conceptos clave

### Workflows
Procesos automatizados que se ejecutan en tu repo cuando se disparan por eventos.

### Jobs
Conjunto de pasos que corren en el mismo runner.

### Steps
Tareas individuales que ejecutan comandos o actions.

### Actions
Unidades reutilizables de código que pueden compartirse entre workflows.

## Casos de uso comunes

- **Continuous Integration**: tests automatizados en cada push
- **Continuous Deployment**: despliegue automático a producción
- **Calidad de código**: linting, análisis de seguridad, cobertura
- **Gestión de paquetes**: publicación en npm, Docker Hub, etc.
- **Infraestructura**: despliegues con Terraform, aprovisionamiento cloud

## Ejemplos de workflows

### Docker Build & Push
```yaml
name: Docker Build and Push

on:
  push:
    branches: [ main ]

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
      
    - name: Login to DockerHub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKERHUB_USERNAME }}
        password: ${{ secrets.DOCKERHUB_TOKEN }}
        
    - name: Build and push
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: user/app:latest
```

### Despliegue a Kubernetes
```yaml
name: Deploy to Kubernetes

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure kubectl
      uses: azure/k8s-set-context@v1
      with:
        method: kubeconfig
        kubeconfig: ${{ secrets.KUBE_CONFIG }}
        
    - name: Deploy to cluster
      run: |
        kubectl apply -f k8s/
        kubectl rollout status deployment/my-app
```

## Temas cubiertos

- **Sintaxis de Workflows**: configuración YAML, triggers, jobs
- **Actions Marketplace**: uso y creación de custom actions
- **Gestión de Secrets**: manejo seguro de datos sensibles
- **Matrix Builds**: pruebas en múltiples entornos
- **Caching**: acelerar workflows con caché de dependencias
- **Environments**: entornos de despliegue y reglas de protección
- **Seguridad**: OIDC, permisos, buenas prácticas de seguridad

## Buenas prácticas

1. **Usa versiones específicas de actions** (por ej., `@v3` en lugar de `@main`)
2. **Minimiza el tiempo de ejecución** con caché y jobs en paralelo
3. **Protege tus secrets** y usa reglas de protección en environments
4. **Usa estrategias de matrix** para probar múltiples versiones
5. **Mantén los workflows DRY** con reusable workflows y composite actions

---

> 🔒 **Nota de seguridad**: Usa siempre secrets para datos sensibles y sigue el principio de mínimo privilegio en permisos de workflows.
