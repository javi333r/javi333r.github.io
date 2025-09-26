# Kubernetes: Your First Pod

A minimal Pod manifest to deploy NGINX.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
    - name: nginx
      image: nginx:stable
      ports:
        - containerPort: 80
```

Apply and check status:
```bash
kubectl apply -f pod.yaml
kubectl get pods
kubectl logs -f nginx-pod
```

---
Next: [Services & Networking](./services.md)
