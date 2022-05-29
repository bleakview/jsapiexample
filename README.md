[![publish to docker registry](https://github.com/bleakview/jsapiexample/actions/workflows/push_to_docker_hub.yml/badge.svg)](https://github.com/bleakview/jsapiexample/actions/workflows/push_to_docker_hub.yml)

# JSApiExample

Hi ! This is an example written in Node js for a start point on how to write a KOA with Sequilize.
It supports testing with jest and you can test api with swagger via http://localhost:\<port>/docs.
If you invoke docker with docker run --name jsapiexample -d -p 3000:3000 bleakview/jsapiexample:1.0.0 you can reach swagger with http://localhost:3000/docs
If you directly run docker container it will use sqlite.
You can use docker compose it will start app with mysql.
You can change default port with PORT environment variable.
You can change default database with mysql with the following syntax.
mysql+aiomysql://\<username>:\<password>@\<mysql host>:\<mysql port>/\<mysql database>
the environment variable is DB_CONNECTION_URL.

On very change code test will be run and a new docker image will bu pushed to
[https://hub.docker.com/repository/docker/bleakview/jsapiexample](https://hub.docker.com/repository/docker/bleakview/jsapiexample).
