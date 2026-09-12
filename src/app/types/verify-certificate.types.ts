import type { Timestamp } from "firebase/firestore";

export interface Certificate {
  attendance: string;
  college: string;
  date: string;
  field: string;
  generatedAt: Timestamp;
  generatedBy: string;
  lastUpdated: Timestamp;
  name: string;
  orgRefId: string;
  pdfFileName: string;
  pdfSize: number;
  pdfUploadedAt: Timestamp;
  pdfUrl: string;
  performance: string;
  periodFrom: string;
  periodTo: string;
  slNo: string;
  status: string;
  studyingIn: string;
  trainingMode: string;
  userId: string;
  verificationUrl: string;
}

export interface CertificateWithId extends Certificate {
  id: string;
}

export type CertificateStatus = "generated" | "pending" | "revoked";

export interface VerifyCertificateState {
  certificate: CertificateWithId | null;
  loading: boolean;
  error: string | null;
}
