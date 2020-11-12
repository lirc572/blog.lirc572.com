---
title: Reverse SSH Tunnel
date: 2020-11-12
---
The following command starts a reverse SSH tunnel to the remote server at 12.34.56.78. When the connection is established, the local port 22 is forwarded to port 88888 on the remote computer (so that you can ssh to the local machine's port 22 by ssh'ing to port 88888 of 12.34.56.78).



\`\``bash

ssh -N -T -R *:88888:localhost:22 user@12.34.56.78

\`\``



One thing to take note of is that by default, such a tunnel will listen to 127.0.0.1 on the remote machine. Hence it is not possible to connect to this port from other machines. This problem can be resolved by enabling \`GatewayPorts\` option for sshd on the remote machine (modify your \`/etc/ssh/sshd_config\`).



Now, you can ssh to the machine that you opened the reverse tunnel from with:



\`\``bash

ssh user@12.34.56.78 -p 88888

\`\``