import { useState, useEffect, useCallback } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../lib/firebase"; // adjust this import to your firebase config path
import {
  Certificate,
  CertificateWithId,
  VerifyCertificateState,
} from "../types/verify-certificate.types";

const COLLECTION_NAME = "certificates";

/**
 * Fetch a single certificate by its Firestore document ID.
 */
export function useVerifyCertificateById(certificateId: string | null): VerifyCertificateState {
  const [state, setState] = useState<VerifyCertificateState>({
    certificate: null,
    loading: false,
    error: null,
  });

  const fetchCertificate = useCallback(async (id: string) => {
    setState({ certificate: null, loading: true, error: null });

    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        setState({
          certificate: null,
          loading: false,
          error: "Certificate not found.",
        });
        return;
      }

      const data = docSnap.data() as Certificate;
      setState({
        certificate: { id: docSnap.id, ...data },
        loading: false,
        error: null,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch certificate.";
      setState({ certificate: null, loading: false, error: message });
    }
  }, []);

  useEffect(() => {
    if (!certificateId) return;
    fetchCertificate(certificateId);
  }, [certificateId, fetchCertificate]);

  return state;
}

/**
 * Fetch a certificate by its serial number (slNo field).
 */
export function useVerifyCertificateBySlNo(slNo: string | null): VerifyCertificateState {
  const [state, setState] = useState<VerifyCertificateState>({
    certificate: null,
    loading: false,
    error: null,
  });

  const fetchBySlNo = useCallback(async (serialNo: string) => {
    setState({ certificate: null, loading: true, error: null });

    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where("slNo", "==", serialNo)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setState({
          certificate: null,
          loading: false,
          error: "Certificate not found for the given serial number.",
        });
        return;
      }

      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data() as Certificate;
      setState({
        certificate: { id: docSnap.id, ...data },
        loading: false,
        error: null,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch certificate.";
      setState({ certificate: null, loading: false, error: message });
    }
  }, []);

  useEffect(() => {
    if (!slNo) return;
    fetchBySlNo(slNo);
  }, [slNo, fetchBySlNo]);

  return state;
}

/**
 * Fetch all certificates for a specific userId.
 */
export function useVerifyCertificatesByUser(userId: string | null) {
  const [certificates, setCertificates] = useState<CertificateWithId[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchByUser = useCallback(async (uid: string) => {
    setLoading(true);
    setError(null);
    setCertificates([]);

    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where("userId", "==", uid)
      );
      const querySnapshot = await getDocs(q);

      const results: CertificateWithId[] = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...(docSnap.data() as Certificate),
      }));

      setCertificates(results);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch certificates.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;
    fetchByUser(userId);
  }, [userId, fetchByUser]);

  return { certificates, loading, error };
}