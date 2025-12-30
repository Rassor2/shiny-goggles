import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles, articles } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, Calendar, ArrowLeft, ChevronRight, Share2, Bookmark, User } from 'lucide-react';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#fafaf8] py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="bg-[#fafaf8] border-b border-gray-100 py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to={`/category/${article.category}`} className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to {article.categoryName}
            </Link>
            <Badge className="mb-4 bg-green-50 text-green-700 hover:bg-green-50">
              {article.categoryName}
            </Badge>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-4 lg:px-8 -mt-0">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg mt-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Share Sidebar (Desktop) */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-3">
                <button className="p-3 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-700 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-7">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share Mobile */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100 lg:hidden">
                <span className="text-sm text-gray-500">Share this article:</span>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-700 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              {/* Author Box */}
              <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold text-lg">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{article.author}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Energy efficiency expert and contributor to EnergyWise Home. Passionate about helping homeowners reduce their energy costs and environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Ad Placeholder */}
                <div className="ad-placeholder h-64">
                  Advertisement
                </div>

                {/* Table of Contents */}
                <div className="bg-[#fafaf8] rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">In This Article</h3>
                  <p className="text-sm text-gray-500">
                    Scroll through to explore all sections of this comprehensive guide.
                  </p>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link 
                          key={related.id} 
                          to={`/article/${related.slug}`}
                          className="block group"
                        >
                          <h4 className="font-medium text-gray-700 group-hover:text-green-700 transition-colors line-clamp-2 mb-1">
                            {related.title}
                          </h4>
                          <span className="text-xs text-gray-400">{related.readTime}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* More Articles */}
      <section className="py-12 lg:py-16 bg-[#fafaf8] border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">More Articles</h2>
            <Link to="/articles" className="text-green-700 hover:text-green-800 font-medium flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter(a => a.slug !== slug)
              .slice(0, 3)
              .map((a) => (
                <Link key={a.id} to={`/article/${a.slug}`}>
                  <Card className="group h-full border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={a.image} 
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {a.categoryName}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                        {a.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
