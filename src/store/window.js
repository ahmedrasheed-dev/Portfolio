import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isOpen = true;
                win.isMinimized = false;
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                state.nextZIndex++;
            });
        },
        closeWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isOpen = false;
                win.isMaximized = false;
                win.isMinimized = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            });
        },
        focusWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                if (win.isMinimized) {
                    win.isMinimized = false;
                }
                win.zIndex = state.nextZIndex;
                state.nextZIndex++;
            });
        },
        minimizeWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isMinimized = true;
            });
        },
        toggleMinimizeWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isMinimized = !win.isMinimized;
            });
        },
        maximizeWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isMaximized = !win.isMaximized;
            });
        },
        toggleMaximizeWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isMaximized = !win.isMaximized;
            });
        },

        addWindow: (window) => set((state) => {
            state.windows.push(window);
        }),
        removeWindow: (window) => set((state) => {
            state.windows = state.windows.filter((win) => win.id !== window.id);
        }),
    }))
);

export default useWindowStore;