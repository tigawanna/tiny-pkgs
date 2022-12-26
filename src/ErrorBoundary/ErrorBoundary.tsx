// Generated with util/create-component.js
import React, { Component, ErrorInfo, ReactNode } from "react";

import { ErrorBoundaryProps } from "./ErrorBoundary.types";

import "./ErrorBoundary.css";

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({children }) =><ErrorBoundaryClass children={children}/>;

export default ErrorBoundary;



interface State {
    hasError: boolean;
    error: Error | null

}
class ErrorBoundaryClass extends Component<ErrorBoundaryProps, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(err: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error: err };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // console.log("Uncaught error:", error.message)
        // console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        console.log("error boundary =", this.state.error?.message)
        if (this.state.hasError) {
            return (
                <div className="w-full h-screen  flex-center ">
                    <div className="w-[50%] p-2 flex-center bg-red-100 text-red-600">
                        {this.state.error?.message}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
