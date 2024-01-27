"use client";

import { Loader2 } from "lucide-react";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useToast } from "./ui/use-toast";
import { useResizeDetector } from "react-resize-detector";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface pdfRendererProps {
  url: string;
}

function PdfRenderer({ url }: pdfRendererProps) {
  const { toast } = useToast();
  const { width, ref } = useResizeDetector();
  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center ">
      <div className="h-4 w-4 border-b border-zinc-200 flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          {/* TODO : Add top bar */}
        </div>
      </div>
      <div className="flex-1 w-full max-h-screen">
        <div ref={ref}>
          <Document
            loading={
              <div className="flex justify-center">
                <Loader2 className="my-24 h-4 w-4 animate-spin" />
              </div>
            }
            file={url}
            onLoadError={() => {
              toast({
                title: "Error loading PDF",
                description: "Please try again later",
                variant: "destructive",
              });
            }}
            className="max-h-full"
          >
            <Page width={width ? width : 1} pageNumber={1} className="" />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default PdfRenderer;
