from socket import gethostname
from flask import Flask, Response, request

app = Flask(__name__)


@app.route("/")
def index():
    return Response(
        "py-" + gethostname(),
        mimetype="text/plain",
        headers={"X-Auth-User": request.headers.get("X-Auth-User")},
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
