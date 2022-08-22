---
title: Pod Count
---

# Pod Count

The pod count check can be used within a **Kubernetes** cluster to check the status of pods. It counts the number of all pods in the ready-state and compares it with the desired replica count. It, therefore, assumes that the specified mode (see below) becomes true within the specified timeout.

You can limit the pod count to a specific cluster, namespace or deployment if you like.

### Mode

You can use the pod count check in one of the following modes:

* **ready count = desired count**: Can be used to assure that the amount of desired ready pods is equal to the actual amount in the cluster. Helpful to check e.g. after an attack whether every pod is recovering.
* **ready count > 0**: To assure that for each pod in the cluster at least one pod is available to serve the traffic.
* **ready count < desired count**: To make sure that all pods matching the check's query are below the specified ready count. This can be helpful in case you want to verify that e.g. exhausting memory leads to restarting the pods.

### Example

![Example POD count configuration](../actions/pod-count.png)

This pod count check verifies whether all pods of the `gateway` deployment in the ~~steadybit-demo~~ namespace are ready within ten seconds. The condition is evaluated every second.
