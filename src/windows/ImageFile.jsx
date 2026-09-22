import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageFile = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl, image, img } = data;
    const imgSrc = imageUrl || image || img;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p>{name}</p>
            </div>

            <div className="preview bg-gray-100 dark:bg-neutral-950 p-5 flex items-center justify-center">
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={name || "Image Preview"}
                        className="w-full h-auto max-h-[70vh] object-contain rounded"
                    />
                )}
            </div>
        </>
    );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");
export default ImageFileWindow;
