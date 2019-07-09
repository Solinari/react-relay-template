import React from 'react';
import './App.css';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './environment/environment';

function App() {
	const query = graphql`
	query AppQuery {
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
				let titles = '';
				props.videos.edges.map(edge => {
					titles+=`| ${edge.node.title} |`;
				});
				return <div>{`Video Titles: ${titles}`}</div>;
				
			}}
		/>
	);
}

export default App;
