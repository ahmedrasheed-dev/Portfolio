import gsap from "gsap";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { windows, focusWindow } = useWindowStore();
        const { isOpen, isMaximized, isMinimized, zIndex } = windows[windowKey] || {};
        const ref = useRef(null);
        const draggableRef = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            gsap.fromTo(
                el,
                { scale: 0.85, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power3.out" }
            );

            const [instance] = Draggable.create(el, {
                bounds: "#desktop-bounds",
                onPress: () => focusWindow(windowKey),
            });
            draggableRef.current = instance;

            return () => {
                if (instance) instance.kill();
            };
        }, [isOpen]);

        useEffect(() => {
            const el = ref.current;
            if (!el) return;

            if (isMinimized) {
                gsap.to(el, {
                    scale: 0.6,
                    opacity: 0,
                    y: 120,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => {
                        if (el) el.style.display = "none";
                    },
                });
            } else if (isOpen) {
                el.style.display = "flex";
                gsap.to(el, {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    ease: "power2.out",
                });
            }
        }, [isMinimized, isOpen]);

        useEffect(() => {
            const instance = draggableRef.current;
            if (!instance) return;
            if (isMaximized) {
                instance.disable();
            } else {
                instance.enable();
                instance.update(true);
            }
        }, [isMaximized]);

        if (!isOpen) return null;

        let stateClasses = "flex flex-col ";
        if (isMaximized) {
            stateClasses += "!fixed !top-[40px] !left-0 !w-full !h-[calc(100vh-120px)] !max-w-none !max-h-none !rounded-none !transform-none z-[998]";
        } else {
            stateClasses += "transition-all duration-100 ease-out";
        }

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className={`absolute ${stateClasses}`}
                onClick={() => focusWindow(windowKey)}
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};
export default WindowWrapper;