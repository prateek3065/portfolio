"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { PDFcv } from "../myCv/pdf/pdf";

const Page: React.FC = () => {
  return (
    <PDFViewer width="100%" height="100%">
      <PDFcv />
    </PDFViewer>
  );
};

export default Page;
