# Kubernetes: Installation & Setup

Quick references for getting a cluster up locally and in the cloud.

## Local (kind)
```bash
kind create cluster --name infra-synthesis
kubectl get nodes
```

## Local (minikube)
```bash
minikube start
kubectl get pods -A
```

## Cloud
- Managed services: GKE, EKS, AKS
- Use IaC (Terraform) to provision clusters consistently

---
Next: [Your First Pod](./first-pod.md)
