import { Calendar, Clock, Users, Bell, CheckCircle, Menu, X, ArrowRight, Smartphone, UserCheck, CalendarCheck } from 'lucide-react';

const MediBookLanding = () => {
    const features = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Easy Scheduling",
            description: "Book appointments in seconds with our intuitive calendar interface. Choose your preferred date and time effortlessly."
        },
        {
            icon: <Bell className="w-8 h-8" />,
            title: "Smart Reminders",
            description: "Never miss an appointment with automated email and SMS reminders sent before your scheduled visit."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Multi-Provider Support",
            description: "Connect with multiple healthcare providers and manage all your appointments in one centralized platform."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Real-Time Availability",
            description: "See up-to-date provider availability and book appointments that fit your schedule instantly."
        }
    ];

    const steps = [
        {
            icon: <UserCheck className="w-12 h-12" />,
            title: "Create Your Account",
            description: "Sign up for free in under a minute. No credit card required."
        },
        {
            icon: <Calendar className="w-12 h-12" />,
            title: "Find Your Provider",
            description: "Search for healthcare providers by specialty, location, or availability."
        },
        {
            icon: <CalendarCheck className="w-12 h-12" />,
            title: "Book & Confirm",
            description: "Select your preferred time slot and receive instant confirmation."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Healthcare Appointments Made <span className="text-blue-600">Simple</span>
                            </h1>
                            <p className="text-xl text-gray-600">
                                Book, manage, and track your medical appointments effortlessly. MediBook connects you with healthcare providers in seconds.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#cta" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-center font-semibold flex items-center justify-center space-x-2">
                                    <span>Start Booking Free</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a href="#how-it-works" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-center font-semibold">
                                    Learn More
                                </a>
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>100% Free</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>No Credit Card</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Instant Access</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-4">
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
                                    <Calendar className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Calendar className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-900">Dr. Smith</p>
                                                <p className="text-sm text-gray-600">General Checkup</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-gray-900">Dec {i + 5}</p>
                                                <p className="text-xs text-gray-600">{10 + i}:00 AM</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MediBook?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the future of healthcare appointment management with features designed for convenience and efficiency.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get started with MediBook in three simple steps and take control of your healthcare schedule.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-blue-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-indigo-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Simplify Your Healthcare?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of users who trust MediBook for their appointment management. Start booking today, completely free.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold flex items-center justify-center space-x-2">
                            <span>Get Started Now</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition text-lg font-semibold flex items-center justify-center space-x-2">
                            <Smartphone className="w-5 h-5" />
                            <span>Download App</span>
                        </button>
                    </div>
                    <p className="text-blue-100 mt-6">No credit card required • Free forever • Cancel anytime</p>
                </div>
            </section>
        </div>
    );
};

export default MediBookLanding;