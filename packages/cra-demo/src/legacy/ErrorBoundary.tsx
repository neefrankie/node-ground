import React from 'react';

type ErrState = {
  hasError: boolean,
}

type BoundaryProps = {
  children: JSX.Element | JSX.Element[];
}

/**
 * A class component becomes an error boundary if it defines
 * either or both the lifecycle methods
 * static getDerivedStateFromError() or
 * componentDidCatch().
 * Use `static getDerivedStateFromError()` to render
 * a fallback UI after an error has been thrown.
 * Use `componentDidCatch()` to log error information.
 * Error boundaries work like a JS catch{} block,
 * but for components
 * Only class components can be error boundaries.
 * Error boundaries only catch errors in the components
 * below them in the tree.
 * An error boundary can't catch error within itself.
 */
class ErrorBoundary extends React.Component<BoundaryProps, ErrState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children;
  }
}

function logErrorToMyService(error: Error, errorInfo: React.ErrorInfo) {
  console.log(`Error: ${error}, ${errorInfo}`);
}
