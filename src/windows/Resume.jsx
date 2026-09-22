import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Suspense } from "react";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const ResumeSkeleton = () => (
    <div className="w-full h-[800px] bg-white dark:bg-neutral-900 p-10 space-y-6 animate-pulse select-none overflow-hidden">
        {/* Header section skeleton */}
        <div className="flex items-center space-x-4 border-b border-gray-100 dark:border-neutral-800 pb-6">
            <div className="size-16 bg-gray-200 dark:bg-neutral-800 rounded-full shrink-0"></div>
            <div className="flex-1 space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-1/2"></div>
            </div>
        </div>

        {/* Section 1 skeleton */}
        <div className="space-y-3 pt-2">
            <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-1/4 mb-4"></div>
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-full"></div>
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-5/6"></div>
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-4/6"></div>
        </div>

        {/* Section 2 skeleton */}
        <div className="space-y-3 pt-4">
            <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-1/3 mb-4"></div>
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-11/12"></div>
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-3/4"></div>
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-4/5"></div>
        </div>

        {/* Section 3 skeleton */}
        <div className="space-y-3 pt-4">
            <div className="h-5 bg-gray-200 dark:bg-neutral-800 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-2 gap-4">
                <div className="h-16 bg-gray-100 dark:bg-neutral-800 rounded-lg p-3 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-3/4"></div>
                </div>
                <div className="h-16 bg-gray-100 dark:bg-neutral-800 rounded-lg p-3 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-3/4"></div>
                </div>
            </div>
        </div>

        {/* Footer skeleton */}
        <div className="space-y-3 pt-6">
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-2/3"></div>
            <div className="h-3.5 bg-gray-200 dark:bg-neutral-800 rounded w-1/2"></div>
        </div>
    </div>
);

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a
                    href="files/resume.pdf"
                    download
                    className="cursor-pointer"
                    title="Download resume"
                >
                    <Download className="icon" />
                </a>
            </div>

            <div className="w-[600px] h-[800px] max-h-[80vh] overflow-y-auto overflow-x-hidden bg-gray-100 dark:bg-neutral-950 flex justify-center">
                <Document file="files/resume.pdf" loading={<ResumeSkeleton />}>
                    <Suspense fallback={<ResumeSkeleton />}>
                        <Page pageNumber={1} renderTextLayer renderAnnotationLayer width={580} />
                    </Suspense>
                </Document>
            </div>
        </>
    );
};

const resumeWindow = WindowWrapper(Resume, "resume");
export default resumeWindow;