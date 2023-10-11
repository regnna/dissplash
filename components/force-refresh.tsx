"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ForceRefresh() {
  const router = useRouter();
  // const router = useRouter();

  useEffect(() => {
    // router.reload();
    router.refresh();
  }, []);

  return <></>;
}
