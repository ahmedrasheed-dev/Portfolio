import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants";
import useWindowStore from "#store/window";
import { Trash2 } from "lucide-react";

const Trash = () => {
    const { openWindow } = useWindowStore();
    const trashItems = locations.trash?.children ?? [];

    const openItem = (e, item) => {
        e.stopPropagation();
        const type = item.fileType || item.filetype;
        if (type === 'pdf') return openWindow("resume", item);
        if (type === 'txt') return openWindow("txtfile", item);
        if (type === 'img') return openWindow("imgfile", item);
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="trash" />
                <h2 className="font-semibold text-sm text-center flex-1">Trash / Archive</h2>
                <Trash2 className="icon text-gray-400" size={18} />
            </div>

            <div className="w-full flex-1 p-6 bg-white dark:bg-neutral-900 relative flex flex-col overflow-y-auto">
                {trashItems.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                        <Trash2 size={48} className="mb-2 opacity-40" />
                        <p className="text-sm font-medium">Trash is empty</p>
                    </div>
                ) : (
                    <ul className="relative h-full">
                        {trashItems.map((item) => (
                            <li
                                key={item.id}
                                className={`absolute flex flex-col items-center gap-2 cursor-pointer group ${item.position || "top-10 left-10"}`}
                                onClick={(e) => openItem(e, item)}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="size-14 object-contain group-hover:scale-105 transition-transform"
                                />
                                <p className="text-xs text-center font-medium max-w-[100px] truncate text-gray-700 dark:text-gray-300">
                                    {item.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

const TrashWindow = WindowWrapper(Trash, "trash");
export default TrashWindow;
