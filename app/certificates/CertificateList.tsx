import React from "react";
import { ShieldCheck } from "lucide-react";

interface CertificateListProps {
  certificates: string[];
}

const CertificateList: React.FC<CertificateListProps> = ({ certificates }) => {
  return (
    <ul className="text-lg space-y-3">
      {certificates.map((certificate, index) => (
        <li key={index} className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" /> {certificate}
        </li>
      ))}
    </ul>
  );
};

export default CertificateList;
