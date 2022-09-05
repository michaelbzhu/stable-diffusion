FROM python:3.9
COPY . /app
WORKDIR /app
ENV REPLICATE_API_TOKEN=78378c9172cf7014c07e3c6acc6e007dfaca8062
RUN pip install -r requirements.txt
EXPOSE 5000
ENTRYPOINT ["python", "app.py"]
