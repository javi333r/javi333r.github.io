# Documentación de Kubernetes

¡Bienvenido a la sección de Kubernetes de este hub de documentación DevOps! 🚀

## ¿Qué es Kubernetes?

Kubernetes (K8s) es una plataforma open‑source de orquestación de contenedores que automatiza el despliegue, el escalado y la gestión de aplicaciones containerizadas.

## Inicio rápido

```bash
# Ver información del clúster
kubectl cluster-info

# Listar todos los pods (en todos los namespaces)
kubectl get pods --all-namespaces

# Crear un Deployment
kubectl create deployment nginx --image=nginx

# Exponer el Deployment
kubectl expose deployment nginx --port=80 --type=LoadBalancer
```

## Temas cubiertos

- **Conceptos básicos**: Pods, Services, Deployments
- **Configuración**: ConfigMaps, Secrets, Variables de entorno
- **Almacenamiento**: Persistent Volumes, Storage Classes
- **Networking**: Ingress, Network Policies, Service Mesh
- **Seguridad**: RBAC, Pod Security Standards, Network Security
- **Monitoreo**: Prometheus, Grafana, Logging
- **Avanzado**: Operators, Custom Resources, Helm Charts

## Visión general de arquitectura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Control Plane  │    │   Worker Node   │    │   Worker Node   │
│                 │    │                 │    │                 │
│  ┌───────────┐  │    │  ┌───────────┐  │    │  ┌───────────┐  │
│  │ API Server│  │    │  │  kubelet  │  │    │  │  kubelet  │  │
│  └───────────┘  │    │  └───────────┘  │    │  └───────────┘  │
│  ┌───────────┐  │    │  ┌───────────┐  │    │  ┌───────────┐  │
│  │   etcd    │  │    │  │kube-proxy │  │    │  │kube-proxy │  │
│  └───────────┘  │    │  └───────────┘  │    │  └───────────┘  │
│  ┌───────────┐  │    │  ┌───────────┐  │    │  ┌───────────┐  │
│  │Controller │  │    │  │Container  │  │    │  │Container  │  │
│  │ Manager   │  │    │  │Runtime    │  │    │  │Runtime    │  │
│  └───────────┘  │    │  └───────────┘  │    │  └───────────┘  │
│  ┌───────────┐  │    └─────────────────┘    └─────────────────┘
│  │Scheduler  │  │
│  └───────────┘  │
└─────────────────┘
```

## Índice sugerido

1. [Conceptos básicos](./basic-concepts.md)
2. [Instalación y configuración](./installation.md)
3. [Tu primer Pod](./first-pod.md)
4. [Servicios y Networking](./services.md)
5. [Gestión de configuración](./configuration.md)

---

> 💡 **Consejo**: Si empiezas desde cero, lee primero los conceptos básicos. Si ya tienes experiencia, ve directo al tema que necesites.
