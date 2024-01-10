const LayoutBase = ({ children }) => {
    return (
        <main className="flex flex-col items-center justify-center mb-6 min-h-full">
            {children}
        </main>
    );
};

export default LayoutBase;
