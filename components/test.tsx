"use client";
import { DesignTheme } from "@/themes/types";
import React from "react";
export type TestCompProps = {
  themes: DesignTheme[];
};
export default function TestComp({ themes }: TestCompProps) {
  console.log(themes);
  return (
    <div>
      {themes.length > 0 &&
        themes.map((dt) => (
          <p key={dt.name}>
            {dt.name}
            {dt.slug}
          </p>
        ))}
    </div>
  );
}
