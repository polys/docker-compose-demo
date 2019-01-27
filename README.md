## Docker Compose Demo

To run:

* `docker-compose up --build`

  or

  `docker-compose up --scale auth=1 --scale nodejsapp=3 --scale pythonapp=3 --scale aspnetapp=3 --build --remove-orphans -d`

* visit http://localhost:8080

To stop and cleanup:
* `docker-compose down --remove-orphans --rmi all`
