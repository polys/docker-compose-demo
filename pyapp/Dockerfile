FROM python:3.6.2-slim

ENV PYTHONUNBUFFERED 1

EXPOSE 80

RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code/
RUN pip install -r requirements.txt

ADD . /code/

HEALTHCHECK CMD curl --fail http://localhost/me || exit 1

ENTRYPOINT ["python3", "hello.py"]