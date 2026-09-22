import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-gray-800 text-sm">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-auto rounded object-contain object-fit mb-4"
                    />
                )}
                {subtitle && (
                    <h3 className="text-base font-semibold text-gray-900 border-b pb-2">
                        {subtitle}
                    </h3>
                )}
                {Array.isArray(description) && (
                    <div className="space-y-3 leading-relaxed text-gray-600">
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
