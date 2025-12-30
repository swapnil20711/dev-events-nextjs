'use client';

import React from 'react';
import Image from 'next/image';
import posthog from 'posthog-js';

const ExploreBtn = () => {
    const handleClick = () => {
        console.log("clicked");
        posthog.capture('explore_events_clicked', {
            button_location: 'hero_section',
        });
    };

    return (
        <button
            type={"button"}
            id={"explore-btn"}
            className={'mt-7 mx-auto'}
            onClick={handleClick}>
            <a href={"#events"}>
                Explore Events
                <Image alt={"arrow-down"} width={24} height={24} src={"/icons/arrow-down.svg"}></Image>
            </a>

        </button>
    )
}
export default ExploreBtn
