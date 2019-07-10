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
			  id
			  duration
			  title
			  watched
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
					return <div className="App App-header">Error!</div>;
				}
				if (!props) {
					return <div className="App App-header">Loading...</div>;
				}
				let titles = '';
				props.videos.edges.map(edge => {
					titles+=`| ${edge.node.title} |`;
				});
				return <div className="App App-header">{`Video Titles: ${titles}`}</div>;
				
			}}
		/>
	);
}

export default App;
