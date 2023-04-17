import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import pdfUrl from './../assets/pdf/inicio-escolar-2023.pdf'

const PdfViewer = ({ pdfUrl2 }) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages)
  };

  const actualizaPagina = ( Pages ) => {
    console.log("numPages:" + Pages, " numPages:", numPages)
    if( Pages > 0 && Pages <= numPages){
      setPageNumber(Pages)
    }
};

console.log("pdfUrl del disco :", pdfUrl)
console.log("pdfUrl parametro :", pdfUrl2)

  return (
    <div id="VisorPdf" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '80px'}}>

      
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={() => actualizaPagina(pageNumber - 1)}>Previous</button>
      <button onClick={() => actualizaPagina(pageNumber + 1)}>Next</button>
    </div>
  );
};

export default PdfViewer;