# Kubernetes: Services & Networking

Expose applications via ClusterIP, NodePort, LoadBalancer, and Ingress.

## Common Types
- ClusterIP (default): internal-only
- NodePort: exposes on each node IP:port
- LoadBalancer: uses external LB (cloud)
- Ingress: L7 routing with controllers

Example Service:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-svc
spec:
  selector:
    app: web
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP
```

---
Next: [Configuration](./configuration.md)
