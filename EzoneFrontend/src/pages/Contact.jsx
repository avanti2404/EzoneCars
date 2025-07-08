import { Mail, Phone, MapPin } from 'lucide-react';
import { backendUrl } from "../App";
import { useState } from 'react';
import axios from 'axios'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${backendUrl}/client/contact`, {
                name, email, subject, message
            });
            console.log(response.data); // Or show a success message
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Something went wrong. Please try again later.');
        }
    };


    return (
        <div className="">
            {/* Contact Form Section */}
            <div className="containerr py-10 md:py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className='flex flex-col justify-center'>
                        <h1 className="text-2xl md:text-4xl font-bold font-heading text-primary-blue mb-4">GET IN TOUCH</h1>
                        <p className="text-gray-600 mb-8">
                            Have questions about our services? We'd love to hear from you. Send us a message
                            and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <Mail className="h-6 w-6 text-primary-blue mr-3" />
                                <div>
                                    <h3 className="md:text-lg font-semibold">Email</h3>
                                    <span><a href="mailto:mail@ezonecars.com" className='text-gray-600'>mail@ezonecars.in</a></span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Phone className="h-6 w-6 text-primary-blue mr-3" />
                                <div>
                                    <h3 className="md:text-lg font-semibold">Phone</h3>
                                    <p className="text-gray-600">9930066266, 9930066466, 9930066866</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <MapPin className="h-6 w-6 text-primary-blue mr-3" />
                                <div>
                                    <h3 className="md:text-lg font-semibold">Office</h3>
                                    <p className="text-gray-600">22 Vande Mataram CHS Mhada Colony,
                                        Chandivali, Andheri (E), Mumbai 400072</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 md:p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    placeholder="Your name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    placeholder="your@email.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    placeholder="How can we help?"
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    placeholder="Your message..."
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-blue text-white px-6 py-3 rounded-md transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className=" w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.9593297262445!2d72.8946746317458!3d19.111223999343952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80ac2fa5e93%3A0xb47a418e65c2c43!2sChandivali%20Mhada%20Colony!5e0!3m2!1sen!2sin!4v1741267797434!5m2!1sen!2sin"
                    width="100%"
                    height='600px'
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;