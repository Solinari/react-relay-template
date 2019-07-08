import React from 'react';
import './App.css';
// import graphql from 'babel-plugin-relay/macro';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './environment/environment';

function App() {
	const query = graphql`
	query AllVideosQuery {
		videos {
		  edges {
			node {
			  title 
			}
		  }
		}
	  }`;
	  
	return (
		<QueryRenderer 
			environment={environment}
			query={query}
			variables={{}}
			render={({error, props}) => {
				if (error) {
					return <div>Error!</div>;
				}
				if (!props) {
					return <div>Loading...</div>;
				}
				return <div>User ID: {props.videos}</div>;
			}}
		/>
	);
}

export default App;
