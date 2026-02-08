import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfThumbnail = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-center bg-white relative">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="w-full h-full flex items-center justify-center"
        loading={<div className="animate-pulse bg-gray-200 w-full h-full"></div>}
      >
        <Page 
          pageNumber={1} 
          width={200} // Approximate width for thumbnail
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="shadow-sm"
        />
      </Document>
      {/* Overlay to prevent interaction and just show it as image */}
      <div className="absolute inset-0 z-10"></div>
    </div>
  );
};

export default PdfThumbnail;
