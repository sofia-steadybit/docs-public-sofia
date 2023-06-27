# Configuration Options

| Environment Variable                                  | Description                                                                                                                                                |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `STEADYBIT_AGENT_KEY`                                 | <p>The API key the agent uses<br><strong>Example:</strong> <code>foobar</code></p>                                                                         |
| `STEADYBIT_AGENT_REGISTER_URL`                        | <p>The baseUrl where the agent registers.<br><strong>Default:</strong> <code>https://platform.steadybit.com</code></p>                                     |
| `STEADYBIT_LOG_LEVEL`                                 | <p>Sets the loglevel for the com.steadybit logger<br><strong>Default:</strong> <code>INFO</code></p>                                                       |
| `LOG_LEVEL`                                           | <p>Sets the loglevel for the root logger<br><strong>Default:</strong> <code>INFO</code></p>                                                                |
| `STEADYBIT_LOG_FORMAT`                                | <p>Sets the log format for the console logger (<code>json</code> or <code>text</code>)<br><strong>Default:</strong> <code>text</code></p>                  |
| `STEADYBIT_AGENT_REGISTER_TIMEOUT`                    | <p>Timeout for the registration request.<br><strong>Default:</strong> <code>5s</code></p>                                                                  |
| `STEADYBIT_AGENT_REGISTER_INTERVAL`                   | <p>The interval how often the agent registers at the platform.<br><strong>Default:</strong> <code>5s</code></p>                                            |
| `STEADYBIT_AGENT_EXPERIMENT_TIMEOUT`                  | <p>Timeout for the request to connect to an experiment.<br><strong>Default:</strong> <code>5s</code></p>                                                   |
| `STEADYBIT_AGENT_EXPERIMENT_KEEP_ALIVE_INTERVAL`      | <p>Interval how often a keep alive is sent during an experiment.<br><strong>Default:</strong> <code>2s</code></p>                                          |
| `STEADYBIT_AGENT_EXPERIMENT_KEEP_ALIVE_TIMEOUT`       | <p>Timeout for a keep alive during an experiment<br><strong>Default:</strong> <code>10s</code></p>                                                         |
| `STEADYBIT_AGENT_ATTRIBUTE_FILTER_EXCLUDES`           | Attribute-Keys which should not be sent to the platform.                                                                                                   |
| `STEADYBIT_AGENT_ATTRIBUTE_FILTER_INCLUDES`           | Attribute-Keys which should be sent to the platform, even if they are excluded by STEADYBIT\_AGENT\_ATTRIBUTE\_FILTER\_EXCLUDES or the default excludes.   |
| `STEADYBIT_DOCKER_SOCKET`                             | <p>Docker Socket to connect to.<br><strong>Default:</strong> <code>/var/run/docker.sock</code></p>                                                         |
| `STEADYBIT_HTTP_ENDPOINT_PORT`                        | <p>HTTP endpoint port for the health check url<br><strong>Default:</strong> <code>42999</code></p>                                                         |
| `STEADYBIT_AGENT_ACTIONS_ENABLED`                     | <p>Should this agent be eligible for executing actions?<br><strong>Default:</strong> <code>true</code></p>                                                 |
| `STEADYBIT_AGENT_PROXY_HOST`                          | <p>Hostname of a proxy to access steadybit platform<br></p>                                                                                                |
| `STEADYBIT_AGENT_PROXY_PORT`                          | <p>Port of a proxy to access steadybit platform<br></p>                                                                                                    |
| `STEADYBIT_AGENT_PROXY_PROTOCOL`                      | <p>Protocol of a proxy to access steadybit platform<br><strong>Default:</strong> <code>http</code></p>                                                     |
| `STEADYBIT_AGENT_PROXY_USER`                          | <p>Username of a proxy to access steadybit platform<br></p>                                                                                                |
| `STEADYBIT_AGENT_PROXY_PASSWORD`                      | <p>Password of a proxy to access steadybit platform<br></p>                                                                                                |
| `STEADYBIT_AGENT_IDENTIFIER`                          | <p>The identifier which will be used to register the agent at the platform<br><strong>Default:</strong> The agent will use the hostname as identifier</p>  |
| `STEADYBIT_AGENT_AUTH_PROVIDER`                       | <p>The auth mechanism to use - <code>OAUTH2</code> or <code>AGENT-KEY</code></p><p><strong>Default:</strong> <code>AGENT-KEY</code></p>                    |
| `STEADYBIT_AGENT_AUTH_OAUTH2_CLIENT_ID`               | The public identifier of your OAuth 2.0 Client                                                                                                             |
| `STEADYBIT_AGENT_AUTH_OAUTH2_CLIENT_SECRET`           | The client secret                                                                                                                                          |
| `STEADYBIT_AGENT_AUTH_OAUTH2_ISSUER_URI`              | The issuer uri of the identity provider                                                                                                                    |
| `STEADYBIT_AGENT_AUTH_OAUTH2_TOKEN_URI`               | The token uri of the identity provider to directly specify the URL to retrieve the access tokens from                                                      |
| `STEADYBIT_AGENT_AUTH_OAUTH2_AUDIENCE`                | Optional - Some provider needs the audience parameter to authenticate the client.                                                                          |
| `STEADYBIT_AGENT_AUTH_OAUTH2_AUTHORIZATION_GRAN_TYPE` | <p>The grant type to use either <code>client_credentials</code> or <code>password</code>.<br><strong>Default:</strong> <code>client_credentials</code></p> |
| `STEADYBIT_AGENT_AUTH_OAUTH_USERNAME`                 | The username to use for the username flow                                                                                                                  |
| `STEADYBIT_AGENT_AUTH_OAUTH_PASSWORD`                 | The username to use when using the password flow                                                                                                           |
| `STEADYBIT_AGENT_AUTH_OAUTH_CLIENT_CERT_CHAIN_FILE`   | Optional - the x.509 client certificate to use for mutual TLS with the identity provider.                                                                  |
| `STEADYBIT_AGENT_AUTH_OAUTH_CLIENT_CERT_KEY_FILE`     | Optional - the PKCS#8 encoded private key to use for mutual TLS with the identity provider                                                                 |
| `STEADYBIT_AGENT_AUTH_OAUTH_CLIENT_CERT_PASSWORD`     | Optional - Password for the the PKCS#8 encoded private key to use for mutual TLS with the identity provider                                                |