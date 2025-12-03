import { Calendar } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8" >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Calendar className="w-8 h-8 text-blue-500" />
                            <span className="text-2xl font-bold text-white">MediBook</span>
                        </div>
                        <p className="text-gray-400">Making healthcare appointments simple and accessible for everyone.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
                            <li><a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">For Providers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">HIPAA Compliance</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 MediBook. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer