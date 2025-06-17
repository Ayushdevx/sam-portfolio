import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex items-center justify-center bg-primary">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl text-white mb-4">Something went wrong</h2>
            <p className="text-white-100 mb-6">
              There was an error loading this section. Please refresh the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-electric-purple text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
