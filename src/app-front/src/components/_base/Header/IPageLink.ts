import React from "react";

export interface IPageLink {
    path: string;
    title: string;
    element: React.FunctionComponent | null;
}