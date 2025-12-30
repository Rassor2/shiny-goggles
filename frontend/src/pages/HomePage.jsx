import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { siteConfig, categories, featuredArticles, articles } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Flame, Wallet, Home, Zap, Sun, FileText, Clock, ChevronRight, Leaf, TrendingDown, Shield, Loader2, CheckCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const iconMap = {
  Flame: Flame,
  Wallet: Wallet,
  Home: Home,
  Zap: Zap,
  Sun: Sun,
  FileText: FileText
};

const HomePage = () => {
  const recentArticles = articles.slice(0, 6);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // idle, loading, success, error
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    setSubscribeMessage('');
    
    try {
      await axios.post(`${API}/newsletter/subscribe`, { email });
      setSubscribeStatus('success');
      setSubscribeMessage('Successfully subscribed!');
      setEmail('');
    } catch (err) {
      setSubscribeStatus('error');
      if (err.response?.data?.detail === 'Email already subscribed') {
        setSubscribeMessage('This email is already subscribed.');
      } else {
        setSubscribeMessage('Failed to subscribe. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f8f9f5] via-[#f0f4ed] to-[#e8efe3] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
              <Leaf className="w-3 h-3 mr-1" />
              Your Energy Guide
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Save Energy,{' '}
              <span className="text-green-700">Save Money,</span>{' '}
              <span className="text-amber-600">Save the Planet</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Expert advice on home heating, insulation, and energy efficiency. 
              Make informed decisions to reduce your bills and environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/category/energy-savings">
                <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 h-auto">
                  Start Saving Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/articles">
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-white px-6 py-3 h-auto">
                  Browse All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-700">12+</div>
              <div className="text-sm text-gray-500">Expert Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">6</div>
              <div className="text-sm text-gray-500">Topic Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700">30%</div>
              <div className="text-sm text-gray-500">Avg. Energy Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">2025</div>
              <div className="text-sm text-gray-500">Updated Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Featured Articles</h2>
              <p className="text-gray-500 mt-2">Our most popular and helpful guides</p>
            </div>
            <Link to="/articles" className="hidden md:flex items-center text-green-700 hover:text-green-800 font-medium">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`}>
                <Card className="group h-full overflow-hidden border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-3 bg-green-50 text-green-700 hover:bg-green-50">
                      {article.categoryName}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="ad-placeholder h-24 lg:h-28">
            Advertisement Space
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-20 bg-[#fafaf8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Explore Topics</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Find expert guides organized by topic to help you make informed decisions about your home's energy efficiency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon];
              return (
                <Link key={category.id} to={`/category/${category.slug}`}>
                  <Card className="group h-full p-6 border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-green-50 text-green-700 group-hover:bg-green-100 transition-colors">
                        {IconComponent && <IconComponent className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                          {category.description}
                        </p>
                        <span className="text-xs text-green-600 font-medium">
                          {category.articleCount} articles
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}          </div>
        </div>
      </section>

      {/* Why Energy Efficiency */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-50 text-amber-700 hover:bg-amber-50 border-amber-200">
                Why It Matters
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Why Home Energy Efficiency Is More Important Than Ever
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With rising energy costs and growing environmental concerns, making your home more efficient isn't just good for your wallet—it's essential for a sustainable future.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-50">
                    <TrendingDown className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lower Energy Bills</h4>
                    <p className="text-sm text-gray-500">Save 20-40% on heating and cooling costs with proper efficiency measures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-50">
                    <Shield className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Increased Home Value</h4>
                    <p className="text-sm text-gray-500">Energy-efficient homes sell faster and at higher prices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-50">
                    <Leaf className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Impact</h4>
                    <p className="text-sm text-gray-500">Reduce your carbon footprint and contribute to a cleaner planet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80" 
                alt="Solar panels on a home"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="text-2xl font-bold text-green-700">$2,500+</div>
                <div className="text-sm text-gray-500">Average Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 lg:py-20 bg-[#fafaf8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-gray-500 mt-2">Stay up to date with our newest guides</p>
            </div>
            <Link to="/articles" className="hidden md:flex items-center text-green-700 hover:text-green-800 font-medium">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`}>
                <Card className="group h-full border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {article.categoryName}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{article.author}</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 md:hidden">
            <Link to="/articles">
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-20 bg-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Get Energy Saving Tips Delivered
            </h2>
            <p className="text-green-100 mb-8">
              Join our newsletter for the latest advice on reducing your energy bills and making your home more efficient.
            </p>
            {subscribeStatus === 'success' ? (
              <div className="flex items-center justify-center gap-2 text-white">
                <CheckCircle className="w-5 h-5" />
                <span>{subscribeMessage}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={subscribeStatus === 'loading'}
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-400 text-gray-900"
                />
                <Button 
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 h-auto"
                  disabled={subscribeStatus === 'loading'}
                >
                  {subscribeStatus === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-red-200 text-sm mt-3">{subscribeMessage}</p>
            )}
            <p className="text-green-200 text-xs mt-4">
              No spam, unsubscribe anytime. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
