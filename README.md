

## React Ghibli Explorer

React-redux application based on the Ghibli studio films.
Retrieve Films, Locations, People, Vehicles and Species.

It uses saga to handle every request on [janaipakos' ghibliapi](https://ghibliapi.herokuapp.com). [[Contribute]](https://github.com/janaipakos/ghibliapi)

Every entity is stored in the state to prevent redudant requests on the API, but there is no cache system.

### Installation

```
npm i
```

```
npm start
```

The app will open the browser automatically. If it doesn't, you can access it on http://localhost:8080. 

### Contribute

If you want to contribute, here is a list of features that could benefit this project :
- Design, I'm unfortunately not the best of designers
- Further update of the Directors/Producers part
- Buid Production process
- Cache system
- Research tool to help find entities
- ...

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
