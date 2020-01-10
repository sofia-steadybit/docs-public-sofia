---
title: "Container Discovery"
navTitle: "Container"
---

## Docker

The agent discovers any running container communication with the docker daemon using `/var/run/docker.sock`.
You can configure a different docker socket by setting the environment variable `CHAOSMESH_DOCKER_SOCKET` for the agent.

For each container the following attributes are provided:
 * Container Name
 * Container Image
 * Container Host
 * Container Ports
 * Container Labels

## Kubernetes

In case the containers are running inside Kubernetes the following additional information is provided:
 * Pod Name
 * Pod Namespace
 * Kubernetes Container Name
 * `app.kubernetes.io/` labels
