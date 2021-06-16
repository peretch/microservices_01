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
