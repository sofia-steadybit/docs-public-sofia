---
title: Instana
---

# Instana

Instana is a fully automated Application Performance Management (APM) solution designed specifically for the challenges of managing microservice and cloud-native applications.

Instana detects three major types of events to help you manage the Quality of Service of your applications:

* Issues
* Incidents
* Changes

With our integration, we track changes in the system via the API provided by Instana and react to them within the execution of an experiment. If Instana reports an `issue` or `incident` during execution, the experiment is automatically aborted and marked as failed. Our report contains a short summary and a link to the corresponding time window in Instana. `Changes` noticed by Instana do not lead to an abort, since it may be intentional to start or shut down instances. Also check the Instana docs [Instana Events & Incidents](https://docs.instana.io/core\_concepts/events\_and\_incidents/)

#### Configuration

Under `Settings/Monitoring Integrations` you have to enter the `Instana base URL` and the `API token` that was previously created in Instana. That's all we need to react to the events and incidents in Instana.

#### Usage

Once Instana has been configured in the platform's settings, you can use the `Instana State Check` in an experiment. Detailed explanation can be found in [Integrate / Monitoring / Instana](../../content/integrate/30-monitoring/30-instana/).