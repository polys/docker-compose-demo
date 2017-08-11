import socket
from flask import Flask, Response

app = Flask(__name__)


@app.route('/')
def index():
    return Response('Hello from Python {}'.format(socket.gethostname()), mimetype='text/plain')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
