/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1 className='text-white'>Something went wrong :(</h1>;
      }
  
      return this.props.children; 
    }
  }
