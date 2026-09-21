import WindowWrapper from "#hoc/WindowWrapper";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <p>Window Controls</p>
                <p>Tech Stack</p>
            </div>

            <div className="tech-stack-container">
                <p>
                    <span className="font-bold">@ahmedrasheed</span>
                    Show tech stack
                </p>
            </div>
        </>
    );
}
const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;