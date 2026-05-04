import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({href,children}) => {
    const pathName = usePathname();
    return (
        <Link href={href}
        className={`pb-b font-semibold ${pathName === href ? "border-b-2 border-purple-600 " : ""}`}
        >{children}</Link>
    );
};

export default MyLink;