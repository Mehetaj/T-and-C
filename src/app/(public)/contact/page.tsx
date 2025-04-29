import ContactSection from '@/components/home/get-in-touch';
import GoogleMap from '@/components/public/google-map';
import PageBanner from '@/components/public/page-banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageBanner
                title="CONTACT"
                subtitle="GET IN"
                backgroundImage="/rv.jpg?height=1000&width=2000"
                height="large"
            />
            <ContactSection />
            <GoogleMap />
        </div>
    );
};

export default page;