[![Node.js CI](https://github.com/bleakview/jsapiexample/actions/workflows/node.js.yml/badge.svg)](https://github.com/bleakview/jsapiexample/actions/workflows/node.js.yml)  [![publish to docker registry](https://github.com/bleakview/jsapiexample/actions/workflows/push_to_docker_hub.yml/badge.svg)](https://github.com/bleakview/jsapiexample/actions/workflows/push_to_docker_hub.yml)

# NodeJs Api Example
  
<img src="https://bleakview.github.io/git/jsapiexample/images/jsapiexample.jpg" alt="swgger example image" width="800"/>

  
This is an example written in javascript served with NodeJs for a start point on how to write a Koa with Sequilize.  
It supports npm testing and you can test api with swagger via 
```
http://localhost:3000/docs/
```
If you would like to test with docker comment was given below.
```
docker run --name jsapiexample -d -p 3000:3000 bleakview/jsapiexample:1.0.0 
```
  
If you directly run docker container it will use sqlite. The docker compose file in this repository will invoke the image with mysql with the command given below.  
```
docker-compose up
```
There are two environment variables that you can use with this image.  
**DB_CONNECTION_URL** MySql DSN string for Sequilize  
**PORT** Port number  
    
On very change code test will be run and a new docker image will bu pushed to  
[https://hub.docker.com/r/bleakview/jsapiexample](https://hub.docker.com/r/bleakview/jsapiexample).



