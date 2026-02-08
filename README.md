# Initial Folder Structure

```
cloud-docker-project/
├── node/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── python/
│   ├── Dockerfile
│   └── app.py
├── scripts/
│   └── run.sh
├── docs/
│   └── vision.md
├── docker-compose.yml
├── README.md
└── .gitignore
```

# Base Images

## Alpine Linux
* Serves as the foundational Linux distribution
* Fast startup time due to minimal size
* Ideal for cloud-native and containerized environments

## Node.js (Alpine-based)
* Application layer
* Supports lightweight servers or scripts running inside containers
* Alpine-based Node images minimize resource usage while maintaining functionality

## Python (Alpine-based)
* Used for scripting, automation, or processing tasks
* Provides a clean runtime environment without unnecessary system overhead
* Works well for demonstrating containerized workloads and inter-container communication

Using Alpine-based Node and Python images combines efficiency and portability, which are fundamentals of cloud computing.

# Goals

The goals I want to achieve are:
* Minimal container design
* Separation of concerns across services
* Best practices for building scalable and maintainable containerized systems
