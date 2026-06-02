// import type React from "react";

export interface TabViewModel {
    id: number;
    title: String,
    content: React.ReactNode,
    icon?: String,
}

export interface TabViewProps {
    contents: TabViewModel[]
}