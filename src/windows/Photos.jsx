import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";
import { Search } from "lucide-react";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2 className="font-semibold text-sm text-center flex-1">Photos & Gallery</h2>
                <Search className="icon" />
            </div>

            <div className="flex flex-1 h-full overflow-hidden">
                <div className="sidebar w-[150px] shrink-0">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks?.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery flex-1 overflow-y-auto">
                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                className="cursor-pointer transition-transform hover:scale-[1.02]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openWindow("imgfile", { name: `Photo ${id}`, imageUrl: img });
                                }}
                            >
                                <img src={img} alt={`Gallery ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
