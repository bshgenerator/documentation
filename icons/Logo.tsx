import React from "react";
import Image from "next/image";

export const Logo = () => (
    <>
        <Image fetchPriority="high" src="/logo/logo.png" alt="@logo" width={32} height={24.49}/>
        <span style={{marginLeft: '.4em', fontWeight: 600}}>
            BSH.G Docs
        </span>
    </>
);
