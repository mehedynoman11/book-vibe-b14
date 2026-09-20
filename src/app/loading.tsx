
const LoadingPage = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-base-100/80 backdrop-blur-sm">
            <div className="relative flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-accent"></span>
                <span className="absolute loading loading-ring loading-lg text-primary opacity-60"></span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-base font-medium text-base-content/80">
                    Loading your books
                </p>
                <p className="text-sm text-base-content/50">
                    Just a moment, please...
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;