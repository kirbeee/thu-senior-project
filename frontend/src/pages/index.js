import React from "react";
import Link from 'next/link'; // For navigation

function Index() {
    // In a real application, you would fetch featured courses, announcements, etc.
    // and manage loading and error states using Redux or other state management.
    // For now, we'll create static content.

    return (
        <div className="container mx-auto px-4 py-8"> {/* Container for centering and padding */}

            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Course Catalog Highlights / Featured Courses */}
            <CourseHighlights />

            {/* 3. Key Features / Benefits */}
            <FeatureList />

            {/* 4. Announcements Section */}
            <AnnouncementSection />

            {/* 5. Call to Action / Get Started Section */}
            <CallToActionSection />

        </div>
    );
}

// -------------------- Homepage Components --------------------

// 1. Hero Section
const HeroSection = () => (
    <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to THU Course Selection System</h1>
        <p className="text-lg mb-8">
            Your one-stop platform to explore and enroll in courses at THU.
            Plan your academic journey with ease.
        </p>
        <div className="space-x-4">
            <Link href="/CoursePage" className="btn btn-primary">
                Explore Courses
            </Link>
            <Link href="/auth/RegistrationSelector" className="btn btn-secondary">
                Sign Up Now
            </Link>
        </div>
    </section>
);

// 2. Course Highlights / Featured Courses
const CourseHighlights = () => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace with actual course data, maybe from an API or static data */}
            <CourseCard title="Introduction to Computer Science" description="Learn the fundamentals of computer science and programming." />
            <CourseCard title="Calculus I" description="A comprehensive introduction to differential and integral calculus." />
            <CourseCard title="Linear Algebra" description="Study vectors, matrices, linear transformations, and systems of linear equations." />
        </div>
    </section>
);

const CourseCard = ({ title, description }) => (
    <div className="card bg-base-100 shadow-md">
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <Link href="/CoursePage" className="btn btn-sm btn-primary">View Details</Link>
            </div>
        </div>
    </div>
);


// 3. Key Features / Benefits
const FeatureList = () => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem
                title="Easy Course Search"
                description="Find courses quickly using filters, keywords, and categories."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>}
            />
            <FeatureItem
                title="Personalized Schedule"
                description="Create and manage your weekly schedule based on course availability."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-2.25M21 18.75v-2.25M6.75 21v-2.25M10.5 3v2.25m8.25 0v2.25M3 10.5H21M3 15.75H21M6.75 7.5H6.825m-3 0h.075" /></svg>}
            />
            <FeatureItem
                title="Enrollment Management"
                description="Easily enroll in courses and track your enrollment status."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}
            />
        </div>
    </section>
);

const FeatureItem = ({ title, description, icon }) => (
    <div className="flex flex-col items-center text-center p-6 bg-base-100 shadow-md rounded-lg">
        <div className="mb-4">{icon}</div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);


// 4. Announcements Section
const AnnouncementSection = () => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Announcements</h2>
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
                <ul className="list-disc list-inside">
                    <li>Course selection for the Fall semester begins on August 15th.</li>
                    <li>New courses added to the catalog for the upcoming semester.</li>
                    <li>Important dates and deadlines for enrollment - check the calendar.</li>
                </ul>
            </div>
        </div>
    </section>
);

// 5. Call to Action Section
const CallToActionSection = () => (
    <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-8">
            Browse our extensive course catalog and begin planning your academic future today.
        </p>
        <Link href="/CoursePage" className="btn btn-lg btn-primary">
            Browse Courses Now
        </Link>
    </section>
);

export default Index;