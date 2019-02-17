## Docker Compose Demo

To run:

* `docker-compose up --build`

  or

  `docker-compose up --scale auth=1 --scale nodejsapp=2 --scale pythonapp=2 --scale aspnetapp=2 --build -d`

* visit http://localhost:8080

To stop and cleanup:
* `docker-compose down`
