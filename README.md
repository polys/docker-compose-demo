## Docker Compose Demo

To run:
* `docker-compose up --scale nodejsapp=2 --scale pyapp=2 --scale aspnetapp=2 --scale web=2 -d --build` 
* visit http://localhost:8080

To stop:
* `docker-compose down`
