import React from "react";

export default class ErrorBoundary extends React.Component { 
constructor(props) { 
	super(props); 
	this.state = { error: null, errorInfo: null }; 
} 

componentDidCatch(error, errorInfo) { 
	this.setState({ 
	    error: error, 
	    errorInfo: errorInfo 
	}) 
} 

// This will render this component wherever called 
render() { 
        if (this.state.errorInfo) { 
        // Error path 
        return ( 
            <div> 
                <h2>An Error Has Occurred</h2> 
                <details> 
                    {this.state.error && this.state.error.toString()} 
                    <br /> 
                    {this.state.errorInfo.componentStack} 
                </details> 
            </div> 
        ); 
        } 
        return this.props.children; 
    } 
} 

