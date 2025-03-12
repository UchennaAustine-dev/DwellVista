"use client";

import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";

interface PrintButtonProps {
  className?: string;
}

export default function PrintButton({ className }: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`rounded-full ${className}`}
      onClick={handlePrint}
      aria-label="Print article"
    >
      <PrinterIcon className="h-4 w-4" />
      <span className="sr-only">Print</span>
    </Button>
  );
}
