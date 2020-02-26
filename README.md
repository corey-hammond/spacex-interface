# SpaceX API Interface

Web app to interface with the SpaceX api, allowing access to data on launches, rockets, and more, in an easy to use GUI.

## Notes on building the app

- Using the Apollo Client to use GraphQL with React:

```
npm install apollo-boos @apollo/react-hooks graphql
```

- Used the classnames package:

```
className={classNames({
  'text-success': launch_success,
  'text-danger': !launch_success
})}
```

- Used the Moment package to format dates:

```
<p>Date: <Moment format="YYYY-MM-DD">{launch_date_local}</Moment></p>
```
