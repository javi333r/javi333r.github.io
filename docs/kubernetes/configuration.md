# Kubernetes: Configuration Management

Manage configuration with ConfigMaps, Secrets, and environment variables.

## ConfigMap Example
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_MODE: production
```

## Secret Example
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
stringData:
  API_KEY: your-api-key
```

Mount as env vars or volumes in Deployments.
