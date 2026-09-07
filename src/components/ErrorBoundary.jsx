import { Component } from "react";

// Keeps a failure inside one section from unmounting the whole page.
export class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Section failed to render:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-400">
                    {this.props.fallback ?? "This section could not be loaded."}
                </div>
            );
        }
        return this.props.children;
    }
}
