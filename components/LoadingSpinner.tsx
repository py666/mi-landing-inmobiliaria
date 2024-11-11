export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-primary-dark/80 backdrop-blur-sm">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-secondary-green"></div>
        </div>
    );
} 