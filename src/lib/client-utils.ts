"use client";

export const getLocalAdminPassword = () => {
  return localStorage.getItem("credentials_hash") || "";
};
