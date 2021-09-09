# microservices_01
In this repo, I'll be learning, trying and documention things related to microservices implementation with Node, React, Docker and Kubernetes.

This prject should not be used as a template, becouse it will have some not ideal implementations just for a didactic propouse.

## Application 
### Summary
We will be creating a simple posts application, with the following entities:
- Posts
- Comments
We will create two different services, one for each entity in our project.
### Functional requirements
#### 1. Posts
- Create a post
- List posts
#### 2. Comments
- Create a comment
- List all comments
### Technical definition
#### Client
- React App
#### Server
##### Services
- Posts Service
  - Router
  - Posts feature
- Comments Service
  - Router
  - Comments feature

## Infrastructure
### Commands
#### Docker useful commands
- `docker build -t peretch/posts .` - Build a tagged image based on `Dockerfile` in current directory.
- `docker run <image id or image tag>` - Create and start a container based on the provided iage id or tag.
- `docker run -it <image id or imagen tag> <cmd>` - Create and start container, but also override the default command
- `docker ps` - Print out informaiton about all of the running containers
- `docker exec -it <containerId> <cmd>` - Execute the given command in a running container.
- `docker logs <containerId>` - Print out logs from given container

#### K8s useful commands
- `kubectl kubectl get pods` - Print info about running pods
- `kubectl exec -it <podName> <cmd>` - Execute a given command in running pod
- `kubectl logs <podName>` - Print out logs from the given pod
- `kubectl delete pod <podName>` - Deletes a pod
- `kubectl apply -f <configFileName>` - Tells kubernetes to process the config
- `kubectl describe pod <podName>` - Print out some information about the running pod

#### Deployment commands 
- `kubectl get deployments` - List all running deployments
- `kubectl describe deployment <deplName>` - Print out details of a specific deployment
- `kubectl get services` - List all running services (usable for visualize **Node Ports**)
- `kubectl describe service <servName>` - Print out details of a specific service
- `kubectl apply -f <configFileName>` - Create a deployent o service or whatever out of a config file
- `kubectl delete deployment <deplName>` - Delete a deployent
- `kubectl rollout restart deployment <deplName>` - Restart a deployment

### Deployments
- An example of deployment configuration file can be found in `infra/k8s/posts-depl.yaml`
- If we **delete** a **pod related to** a **running deployment**, it **will create a new one**`.

### Services
- **Cluster IP** - Sets up an easy-to-remember URL to access a pod (only exposes pods in the cluster)
- **Node Port** - Makes a pod accesible from outside the cluster (usually used only for dev purposes)
- **Load balancer** - Makes a pod accessible from outside the cluster (this is the right way to expose a pod to te outside world)
- **External Name** = Redirects an in-cluster request to a CNAME url


## Tehory
### What is a microservice?

Microservice is an architectural style that structures an application as a collection of services that are. Highly maintainable and testable. Loosely coupled. Independently deployable. Organized around business capabilities.

### Architectures comparison
#### Monolithic architecture
<img width="600" alt="Screen Shot 2021-06-14 at 16 03 04" src="https://user-images.githubusercontent.com/44510623/121945305-028c4600-cd2a-11eb-8444-e5fa48ce8b55.png">

#### Microservice architecture
<img width="600" alt="Screen Shot 2021-06-14 at 16 08 27" src="https://user-images.githubusercontent.com/44510623/121945964-c5748380-cd2a-11eb-8a44-48601775058b.png">

### Microservices data-sincronization
One of the biggest challenges when working with a microservice architecture is the data management: What happend when I need one service to use N data registers of other services?

There are two different types of data-sincronizathions, **synchronous** and **asynchronous**.

#### Synchronous
Microservices communicates through requests.
#### Asynchronous
Microservices communicates through events.

### Load Balancer & Ingress Controller
<img width="600" alt="Screen Shot 2021-09-09 at 09 45 42" src="https://user-images.githubusercontent.com/44510623/132688176-9dc649b1-cb88-42e8-b1a6-c991e79eb465.png">

