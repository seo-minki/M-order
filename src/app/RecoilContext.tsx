"use client";
import { RecoilRoot } from "recoil";
import { ReactNode } from "react";

interface RecoilRootWrapperProps {
  children: ReactNode;
}

export default function RecoilContext({ children }: RecoilRootWrapperProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
