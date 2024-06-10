"use client";

import React, { PropsWithChildren, useEffect } from "react";

const ServiceWorkerProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  }, []);
  return <>{children}</>;
};

export default ServiceWorkerProvider;
