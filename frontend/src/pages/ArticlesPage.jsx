import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles, categories } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, Search, Filter } from 'lucide-react';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            All Articles
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Browse our complete collection of expert guides on home energy efficiency, heating, and savings.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-16 z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-green-700 hover:bg-green-800' : ''}
              >
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.slug ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`whitespace-nowrap ${selectedCategory === cat.slug ? 'bg-green-700 hover:bg-green-800' : ''}`}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-gray-500 mb-6">
            Showing {filteredArticles.length} of {articles.length} articles
          </p>
          
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No articles found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Ad Placeholder */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="ad-placeholder h-24">
            Advertisement
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
