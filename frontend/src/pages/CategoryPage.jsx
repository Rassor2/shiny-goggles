import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategoryBySlug, getArticlesByCategory, categories } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, ChevronRight, ArrowLeft, Flame, Wallet, Home, Zap, Sun, FileText } from 'lucide-react';

const iconMap = {
  Flame: Flame,
  Wallet: Wallet,
  Home: Home,
  Zap: Zap,
  Sun: Sun,
  FileText: FileText
};

const CategoryPage = () => {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const categoryArticles = getArticlesByCategory(slug);
  const IconComponent = category ? iconMap[category.icon] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-[#fafaf8] py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-500 mb-8">The category you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Category Header */}
      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <div className="flex items-start gap-4">
            {IconComponent && (
              <div className="p-4 rounded-xl bg-green-50 text-green-700">
                <IconComponent className="w-8 h-8" />
              </div>
            )}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {category.name}
              </h1>
              <p className="text-gray-500 text-lg max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {categoryArticles.length} Articles in {category.name}
              </h2>
              <div className="space-y-6">
                {categoryArticles.map((article) => (
                  <Link key={article.id} to={`/article/${article.slug}`}>
                    <Card className="group overflow-hidden border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 mb-6">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="md:w-2/3 p-5 flex flex-col justify-center">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-500 mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>{article.author}</span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
              {categoryArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles in this category yet.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Ad Placeholder */}
              <div className="ad-placeholder h-64 mb-8">
                Advertisement
              </div>

              {/* Other Categories */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Other Categories</h3>
                <div className="space-y-3">
                  {categories
                    .filter(cat => cat.slug !== slug)
                    .map((cat) => {
                      const CatIcon = iconMap[cat.icon];
                      return (
                        <Link 
                          key={cat.id} 
                          to={`/category/${cat.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                        >
                          {CatIcon && (
                            <CatIcon className="w-5 h-5 text-gray-400 group-hover:text-green-700" />
                          )}
                          <span className="text-gray-700 group-hover:text-green-700 font-medium">
                            {cat.name}
                          </span>
                          <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-green-700" />
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
