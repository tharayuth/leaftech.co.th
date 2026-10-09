import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Last-resort fallback: keep the contact details reachable even if the page crashes. */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Leaftech page crashed", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="flex min-h-screen items-center justify-center p-8 text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold">Something went wrong.</h1>
          <p className="mt-3 text-slate-400">
            Please reload the page, or reach us at{" "}
            <a
              className="text-leaf-400 underline"
              href="mailto:tharayuth@leaftech.co.th"
            >
              tharayuth@leaftech.co.th
            </a>{" "}
            · 099-051-5359
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-leaf-500 px-5 py-2.5 font-semibold text-ink-950"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
