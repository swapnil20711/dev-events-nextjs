'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import posthog from 'posthog-js';

const Navbar = () => {
    const handleLogoClick = () => {
        posthog.capture('logo_clicked', {
            nav_location: 'header',
        });
    };

    const handleNavClick = (linkName: string) => {
        posthog.capture(`nav_${linkName.toLowerCase().replace(' ', '_')}_clicked`, {
            nav_location: 'header',
            link_name: linkName,
        });
    };

    return (
        <header>
            <nav>
                <Link href="/" className={"logo"} onClick={handleLogoClick}>
                    <Image src={"/icons/logo.png"} alt={"logo"} width={24} height={24} />
                    <p>Dev Events</p>
                </Link>

                <ul>
                    <Link href="/" onClick={() => handleNavClick('home')}>Home</Link>
                    <Link href="/" onClick={() => handleNavClick('events')}>Events</Link>
                    <Link href="/" onClick={() => handleNavClick('create_event')}>Create Event</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
