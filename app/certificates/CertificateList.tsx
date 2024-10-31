import React from "react";
import { ShieldCheck } from "lucide-react";

interface CertificateListProps {
  certificates: string[];
}

const CertificateList: React.FC<CertificateListProps> = ({ certificates }) => {
  return (
    <ul className="text-lg mt-3 space-y-3">
      {certificates.map((certificate, index) => (
        <li key={index} className="flex items-center space-x-2">
          <div>
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span>{certificate}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CertificateList;
