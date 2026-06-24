import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { blogPosts, getBlogPost } from '@/lib/blog-data'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export const generateStaticParams = () => {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | TechRhym Blog`,
    description: post.description,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const allOtherPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3 - relatedPosts.length)

  const recommended = [...relatedPosts, ...allOtherPosts].slice(0, 3)

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mb-6"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            
            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-4">
              <p className="text-xs font-semibold text-primary">{post.category}</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} minute read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-foreground mt-8 mb-4"
                    >
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('**') || paragraph.includes('**')) {
                  return (
                    <p
                      key={i}
                      className="text-muted-foreground mb-4 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                          .replace(/- /g, '• '),
                      }}
                    />
                  )
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={i} className="list-disc list-inside mb-4 text-muted-foreground space-y-2">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j} className="ml-4">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 rounded-lg bg-muted/30 border border-border">
              <h3 className="font-bold text-foreground mb-2">About the Author</h3>
              <p className="text-muted-foreground">
                {post.author} is an expert in digital transformation, CRM implementation, and business automation. With years of experience helping businesses succeed, they share practical insights and best practices.
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {recommended.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-12">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {recommended.map((relPost) => (
                  <Link
                    key={relPost.id}
                    href={`/blog/${relPost.slug}`}
                    className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors group"
                  >
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <p className="text-xs font-semibold text-primary">{relPost.category}</p>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relPost.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {relPost.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{relPost.readTime} min read</span>
                        <span>
                          {new Date(relPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center border border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you implement these strategies and achieve remarkable results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
