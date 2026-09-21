
import useWindowStore from "#store/window";
import { useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { windows, focusWindow, closeWindow } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        if (!isOpen) return null;


        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute"
            >
                <Component  {...props} />
            </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`
    return Wrapped;
}
export default WindowWrapper;