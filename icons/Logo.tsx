import Image from "next/image";

export const LogoText = () => (
    <span style={{marginLeft: '.4em', fontWeight: 600}}>
        BSH Solutions
    </span>
);

export const LogoIcon = () => (
    <Image fetchPriority="high" src="/logo/logo.svg" alt="@logo" width={32} height={24.49}/>
);

export const Logo = () => (
    <>
        <LogoIcon />
        <LogoText />
    </>
);