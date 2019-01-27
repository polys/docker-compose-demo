FROM python:3.7-alpine

ENV PYTHONUNBUFFERED 1

EXPOSE 80

RUN mkdir /code
WORKDIR /code

ADD requirements.txt .
RUN pip install -r requirements.txt

ADD . .

CMD [ "gunicorn", "hello:app", "-b=0.0.0.0:80" ]
