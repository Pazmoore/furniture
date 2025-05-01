"use client";
import React, { useEffect } from "react";
import { authObservable, showAuth } from "./Auth";
import { usePathname, useRouter } from "next/navigation";

const RouteAuth = ({ children }: any) => {
  const navigate = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authSubscription = authObservable.subscribe((auth) => {
      if (pathname?.includes("/checkout") && !auth) {
        navigate.back();
        showAuth("login", `${pathname}`);
      }
    });
    return () => authSubscription.unsubscribe();
  }, [navigate, pathname]);

  return <>{children}</>;
};

export default RouteAuth;
