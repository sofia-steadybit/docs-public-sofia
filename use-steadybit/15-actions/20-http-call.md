---
title: HTTP Call
---

# HTTP Call

The check issues an HTTP request on the specified URL and verifies whether the returned status is successful (HTTP status 2xx).

> The HTTP call is performed by the agent and thus the endpoint needs to be reachable by the agent. This way it supports also internal endpoints e.g. within a kubernetes cluster.

You can use the additional settings to

* configure whether redirects should be followed
* define custom connection and read timeouts
* check whether the response body contains a certain string.

### Repetition Control

The `HTTP call`-action supports two different repetition modes which define the nature of the HTTP call:

* **Requests per Second**: Specifies the amount of requests per second as well as the total duration (e.g. 5 requests per second, 10 seconds = 50 requests). In the additional settings you can control the maximum of concurrent requests (virtual users).
* **Total Number of Requests**: In case you want to trigger an HTTP-endpoint only once or any different fixed amount.

### Result Verification

You can use the resulting HTTP response status to determine the result of the experiment. By default, the HTTP call assumes that all issued requests should lead to a successful response (HTTP status 2xx). You can choose a lower percentage if you accepted erroneous calls during the experiment.

As soon as you have a single or multiple HTTP checks in your experiment you get a widget in the Attack Monitor when running an experiment.

![Attack Monitor Widget for HTTP calls](../../use/15-actions/20-http-call.png)
