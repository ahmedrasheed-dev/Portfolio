import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { Search } from "lucide-react";
import useLocationStore from "#store/location";
import { locations } from "#constants";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore()
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(
                        item.id == activeLocation.id ? "active " : "not-active"
                    )}>
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>


        </div>
    )
    const openItem = (e, item) => {
        e.stopPropagation();
        const type = item.fileType || item.filetype;
        if (type === 'pdf') return openWindow("resume", item);
        if (type === 'txt') return openWindow("txtfile", item);
        if (type === 'img') return openWindow("imgfile", item);
        if ((type === 'url' || type === 'fig') && item.href) return window.open(item.href, "_blank");
        if (item.kind === 'folder') return setActiveLocation(item);
    };
return (
    <>
        <div id="window-header">
            <WindowControls target="finder" />
            <Search className="icon" />
        </div>

        <div className="bg-white dark:bg-neutral-900 flex flex-1 h-full overflow-hidden">
            <div className="sidebar">
                {renderList("Favorites", Object.values(locations))}
                {renderList("Work", locations.work.children)}
            </div>
            <ul className="content">
                {activeLocation?.children.map((item) => (
                    <li
                        key={item.id}
                        className={item.position}
                        onClick={(e) => openItem(e, item)}
                    >

                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </li>
                ))}

            </ul >
        </div>





    </>
)
}
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
