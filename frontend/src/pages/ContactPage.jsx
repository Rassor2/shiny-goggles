import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { siteConfig } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, MapPin, ArrowLeft, Send, CheckCircle, Loader2 } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Have questions about home energy efficiency? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-100">
                <CardContent className="p-6 lg:p-8">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-500 mb-6">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is your question about?"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your question or feedback..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" className="bg-green-700 hover:bg-green-800 w-full md:w-auto">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-50">
                        <Mail className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="text-green-700 hover:underline">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-50">
                        <MapPin className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="text-gray-700">Online Publication</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-sm text-gray-600">
                    We typically respond to inquiries within 24-48 business hours. For urgent matters, please indicate so in your subject line.
                  </p>
                </CardContent>
              </Card>

              {/* Ad Placeholder */}
              <div className="ad-placeholder h-64">
                Advertisement
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
