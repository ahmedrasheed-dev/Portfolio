
import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window";

const DYNAMIC_DOCK_APPS = {
  txtfile: {
    id: "txtfile",
    name: "Text Document",
    icon: "txt.png",
    canOpen: true,
  },
  imgfile: {
    id: "imgfile",
    name: "Image Preview",
    icon: "image.png",
    canOpen: true,
  },
  resume: {
    id: "resume",
    name: "Resume.pdf",
    icon: "pdf.png",
    canOpen: true,
  },
};

export const Dock = () => {
  const { openWindow, windows, minimizeWindow } = useWindowStore();
  const dockRef = useRef(null);

  const dynamicApps = Object.keys(DYNAMIC_DOCK_APPS)
    .filter((key) => windows[key]?.isOpen)
    .map((key) => ({
      ...DYNAMIC_DOCK_APPS[key],
      name: windows[key]?.data?.name || DYNAMIC_DOCK_APPS[key].name,
    }));

  const allDockApps = [...dockApps, ...dynamicApps];

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      let closestIcon = null;
      let minDistance = Infinity;

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        if (distance < minDistance) {
          minDistance = distance;
          closestIcon = icon;
        }
      });

      icons.forEach((icon) => {
        if (icon === closestIcon) {
          gsap.to(icon, {
            scale: 1.4,
            y: -14,
            duration: 0.08,
            ease: "back.out(2.2)",
          });
        } else {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.08,
            ease: "power2.out",
          });
        }
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.12,
          ease: "power2.out",
        })
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, [dynamicApps.length]);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const win = windows[app.id];
    if (win?.isOpen && !win?.isMinimized) {
      minimizeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container flex gap-1.5 justify-center">
        {allDockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center items-center">
            <button
              type="button"
              className="dock-icon transition-all relative flex flex-col items-center justify-center"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={`w-[50px] h-[50px] object-contain ${
                  canOpen ? "" : "opacity-60"
                }`}
              />
              {windows[id]?.isOpen && (
                <span className="absolute -bottom-1 size-1 rounded-full bg-white shadow dark:bg-white" />
              )}
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
