"use client";

import dynamic from "next/dynamic";

const HennaCursor = dynamic(() => import("@/components/HennaCursor"), { ssr: false });

export default function ClientCursor() {
    return <HennaCursor />;
}
