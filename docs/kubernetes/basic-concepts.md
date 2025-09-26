# Kubernetes: Conceptos básicos

Esta sección introduce los objetos y abstracciones esenciales de Kubernetes: Pods, Deployments, Services y Namespaces.

## Pods
La unidad desplegable más pequeña en Kubernetes. Contiene uno o varios containers.

## Deployments
Actualizaciones declarativas de Pods y ReplicaSets. Permiten escalar y hacer rollouts/rollbacks.

## Services
Endpoints de red estables para exponer Pods. Tipos comunes: ClusterIP, NodePort, LoadBalancer.

## Namespaces
Separación lógica dentro del clúster para recursos y control de acceso.

---

Sigue explorando:
- [Instalación](./installation.md)
- [Tu primer Pod](./first-pod.md)
- [Servicios y Networking](./services.md)
- [Gestión de configuración](./configuration.md)
