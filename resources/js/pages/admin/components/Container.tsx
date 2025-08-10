export default function Container({ children, y }: { children: React.ReactNode; y?: string }) {
    return (
        <div className={"container" + (y ? " py-" + y : "")}>
            {children}
        </div>
    );
}