FROM microsoft/aspnetcore-build:2.0 AS build-env

WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/aspnetcore:2.0
WORKDIR /app
COPY --from=build-env /app/out .

ENV ASPNETCORE_URLS="http://*:80"

EXPOSE 80

HEALTHCHECK CMD curl --fail http://localhost/api/me || exit 1

ENTRYPOINT ["dotnet", "aspnetapp.dll"]
