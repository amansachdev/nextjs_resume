"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
// import '@react-pdf-viewer/core/lib/styles/index.css';
// Import styles
import { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
// import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Resume: React.FC = () => {
  return (
    <div className="container">
      <h1>Aman&apos;s Resume</h1>
        {/* <div className="pdf-container">
            <Document file="resume1.pdf">
            <Page pageNumber={1} />
            </Document>
        </div> */}

      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
      >
         <div className="pdf-container">
        <Viewer fileUrl="resume1.pdf" />
        </div>
      </Worker>
      <div className="footer">
        <p>© 2024 Aman. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Resume;
