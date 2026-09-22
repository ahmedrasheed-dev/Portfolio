import WindowControls from "#components/WindowControls";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="safari" />
                <PanelLeft className="ml-10 icon" />
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />

                    <div className="search">
                        <Search className="icon" />
                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="flex-1" />
                    </div>
                    <div className="flex items-center gap-5">
                        <Share className="icon" />
                        <Plus className="icon" />
                        <Copy className="icon" />
                    </div>
                </div>
            </div>


            <div className="blog">
                <h2>Coding Profiles & DSA Highlights</h2>

                <div className="space-y-8">
                    {blogPosts.map(({ id, image, title, subtitle, date, link, buttonText }) => (
                        <div key={id} className="blog-post">
                            <div className="col-span-2">
                                <img src={image} alt={title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="content">
                                <p>{date}</p>
                                <h3>{title}</h3>
                                {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-2">{subtitle}</p>}
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {buttonText || "Check out profile"} <MoveRight className="icon-hover inline ml-1" size={16} />
                                </a>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;