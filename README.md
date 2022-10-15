# Employee Tracker

A React App that uses a fake REST API from json-server to display employees details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Runs the json-server\
Open [http://localhost:5000/employees](http://localhost:5000/employees) to view json data in your browser.

### Fetching all employees

Use:

```
fetch(`http://localhost:5000/employees`)
```

### For single Employee

Use:

```
fetch(`http://localhost:5000/employees/${id}`)
```
