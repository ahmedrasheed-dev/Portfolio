import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
    const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();
    return (
        <div id="window-controls" className="flex gap-2 items-center">
            <div
                className="close size-3.5 rounded-full bg-[#ff6157] hover:opacity-80 cursor-pointer transition-opacity"
                title="Close"
                onClick={(e) => {
                    e.stopPropagation();
                    closeWindow(target);
                }}
            />
            <div
                className="minimize size-3.5 rounded-full bg-[#ffc030] hover:opacity-80 cursor-pointer transition-opacity"
                title="Minimize"
                onClick={(e) => {
                    e.stopPropagation();
                    minimizeWindow(target);
                }}
            />
            <div
                className="maximize size-3.5 rounded-full bg-[#2acb42] hover:opacity-80 cursor-pointer transition-opacity"
                title="Maximize"
                onClick={(e) => {
                    e.stopPropagation();
                    maximizeWindow(target);
                }}
            />
        </div>
    );
};
export default WindowControls;