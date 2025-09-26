# Kubernetes Documentation

Welcome to the Kubernetes section of this DevOps documentation hub! 🚀

## What is Kubernetes?

Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

## Quick Start

```bash
# Check cluster status
kubectl cluster-info

# Get all pods
kubectl get pods --all-namespaces

# Create a deployment
kubectl create deployment nginx --image=nginx

# Expose the deployment
kubectl expose deployment nginx --port=80 --type=LoadBalancer
```

## Topics Covered

- **Basic Concepts**: Pods, Services, Deployments
- **Configuration**: ConfigMaps, Secrets, Environment Variables
- **Storage**: Persistent Volumes, Storage Classes
- **Networking**: Ingress, Network Policies, Service Mesh
- **Security**: RBAC, Pod Security Standards, Network Security
- **Monitoring**: Prometheus, Grafana, Logging
- **Advanced**: Operators, Custom Resources, Helm Charts

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Master Node   │    │   Worker Node   │    │   Worker Node   │
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

## Getting Started

1. [Basic Concepts](./basic-concepts.md)
2. [Installation & Setup](./installation.md)
3. [Your First Pod](./first-pod.md)
4. [Services & Networking](./services.md)
5. [Configuration Management](./configuration.md)

---

> 💡 **Tip**: Start with the basic concepts if you're new to Kubernetes, or jump directly to specific topics if you have experience.
