export interface Event {
    title: string
    image: string
    slug: string
    location: string
    date: string
    time: string
}

export const events: Event[] = [
    {
        title: "Tech Innovation Summit 2024",
        image: "/images/event1.png",
        slug: "tech-innovation-summit-2024",
        location: "San Francisco Convention Center",
        date: "March 15, 2024",
        time: "9:00 AM - 5:00 PM"
    },
    {
        title: "React & Next.js Conference",
        image: "/images/event2.png",
        slug: "react-nextjs-conference",
        location: "Seattle Tech Center",
        date: "June 20, 2024",
        time: "9:00 AM - 6:00 PM"
    },
    {
        title: "AI & Machine Learning Workshop",
        image: "/images/event3.png",
        slug: "ai-machine-learning-workshop",
        location: "MIT Campus, Boston",
        date: "April 10, 2024",
        time: "10:00 AM - 4:00 PM"
    },
    {
        title: "Full Stack Development Bootcamp",
        image: "/images/event4.png",
        slug: "full-stack-development-bootcamp",
        location: "Austin Tech Hub",
        date: "May 5, 2024",
        time: "9:00 AM - 5:00 PM"
    },
    {
        title: "DevOps & Cloud Infrastructure Summit",
        image: "/images/event5.png",
        slug: "devops-cloud-infrastructure-summit",
        location: "Las Vegas Convention Center",
        date: "July 12, 2024",
        time: "8:00 AM - 6:00 PM"
    },
    {
        title: "Startup Pitch Competition",
        image: "/images/event6.png",
        slug: "startup-pitch-competition",
        location: "Silicon Valley Tech Hub",
        date: "August 25, 2024",
        time: "1:00 PM - 5:00 PM"
    }
]

