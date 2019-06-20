### Intro

An endpoint that allows users to search a data set. Included in this repository is a set of Airport, Airline, and Route data. Models are created to represent, relate and ultimately expose the data to a GET endpoint. Users of the API can search for routes given an origin and destination.

### User Stories

- As a user I can make a GET request to an endpoint with an `origin` and `destination` query parameter, and receive back the shortest route between the two, as an array of connecting flights. A shortest route is defined as the route with the fewest connections. If there are mulitple routes with the same number of connections, you may choose any of them. 
- As a user I am provided meaningful feedback should no route exist between the airports.
- As a user I am provided meaningful feedback if an error occurred with my request.
