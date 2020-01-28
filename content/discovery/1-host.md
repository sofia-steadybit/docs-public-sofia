---
title: "Host Discovery"
navTitle: "Host"
---

## Host Targets

Each host on which an agent is running is reported as target.
Following attributes are provided for host targets:
 * Hostname
 * Domainname
 * OS Family
 * OS Version
 * Ipv4 Addresses

## Process Targets

The agent discovers all running processes by reading `/proc` and will report them to the platform.
For each process the following attributes are provided:
 * PID (only for process 1)
 * Command
 * User
 * Group
 * Hostname
