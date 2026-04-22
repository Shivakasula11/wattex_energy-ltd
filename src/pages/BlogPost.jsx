import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import BLOGS from '../data/blogs';

const CAT_STYLES = {
  Guide: 'bg-blue-100 text-blue-700',
  Finance: 'bg-emerald-100 text-emerald-700',
  Technology: 'bg-violet-100 text-violet-700',
  'Case Study': 'bg-pink-100 text-pink-700',
  Residential: 'bg-orange-100 text-orange-700',
  Commercial: 'bg-yellow-100 text-yellow-700',
  Local: 'bg-teal-100 text-teal-700',
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BLOGS.find((b) => b.id === id);
  const related = BLOGS.filter((b) => b.id !== id && b.category === blog?.category).slice(0, 2);

  // Social Share Function
  const shareToSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);
    const text = encodeURIComponent(`Check out this article: ${blog.title}`);

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      instagram: 'https://www.instagram.com/wattexenergy?igsh=MTZwZm9mbnBoemFvNg%3D%3D',
       whatsapp: `https://wa.me/919133066113?text=${text}%20${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform === 'instagram') {
      navigator.clipboard.writeText(window.location.href);
      // Show toast notification
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-solar-deep text-white px-6 py-3 rounded-2xl shadow-2xl z-50 font-semibold text-sm';
      toast.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Link copied! Paste in Instagram';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
      }, 2500);
      // Open Instagram after copying the link
      window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  };

  if (!blog) {
    return (
      <div className="pt-40 pb-40 bg-[#faf9f7] min-h-screen text-center">
        <i className="fas fa-solar-panel text-slate-200 text-6xl mb-6 block"></i>
        <h1 className="text-4xl font-extrabold font-heading text-solar-deep mb-4">Post Not Found</h1>
        <button onClick={() => navigate('/blogs')} className="text-solar-primary font-bold text-sm">
          <i className="fas fa-arrow-left mr-2"></i>Back to Journal
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <SEOHead
        title={blog.title}
        description={blog.excerpt}
        path={`/blog/${blog.id}`}
        image={blog.image}
        type="article"
        keywords={`${blog.category} solar, ${blog.title}, Wattex Energy blog, solar energy India`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: blog.title,
          description: blog.excerpt,
          image: blog.image,
          datePublished: blog.date,
          author: { '@type': 'Organization', name: 'Wattex Energy' },
          publisher: {
            '@type': 'Organization',
            name: 'Wattex Energy',
            url: 'https://wattexenergy.com',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://wattexenergy.com/blog/${blog.id}`,
          },
        }}
      />
      <div className="relative h-[90vh] md:h-[100vh] overflow-hidden bg-slate-900">
        <img loading="lazy" src={blog.image} className="w-full h-full object-contain" alt={blog.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-solar-deep/20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-3xl -mt-32 relative z-10">
        <button onClick={() => navigate('/blogs')} className="mb-8 flex items-center gap-2 group">
          <i className="fas fa-arrow-left text-solar-primary group-hover:-translate-x-1 transition-transform text-sm"></i>
          <span className="text-solar-primary font-bold text-sm">Back to Journal</span>
        </button>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`${CAT_STYLES[blog.category] || 'bg-slate-100 text-slate-600'} px-4 py-1.5 rounded-full text-xs font-bold`}>{blog.category}</span>
          <span className="text-slate-400 text-sm font-medium">{blog.date}</span>
          <span className="text-slate-300">&middot;</span>
          <span className="text-slate-400 text-sm font-medium">{blog.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-solar-deep leading-[1.1] tracking-tight mb-8">
          {blog.title}
        </h1>

        <p className="text-lg text-slate-500 leading-relaxed mb-12 border-l-4 border-solar-primary pl-6 font-medium">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-slate-200"></div>
          <div className="w-2 h-2 bg-solar-primary rounded-full"></div>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        <article className="prose prose-xl prose-slate max-w-none blog-content-styles mb-20" dangerouslySetInnerHTML={{ __html: blog.content }} />

        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-b border-slate-200 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-400">Share</span>
            {['facebook', 'instagram', 'whatsapp'].map((s) => (
              <button 
                key={s} 
                onClick={() => shareToSocial(s)}
                className="w-10 h-10 bg-slate-100 hover:bg-solar-primary hover:text-white rounded-xl flex items-center justify-center text-slate-500 transition-all hover:scale-110 active:scale-95"
                title={`Share on ${s.charAt(0).toUpperCase() + s.slice(1)}`}
              >
                <i className={`fab fa-${s} text-sm`}></i>
              </button>
            ))}
          </div>
          <span className={`${CAT_STYLES[blog.category] || 'bg-slate-100 text-slate-600'} px-4 py-1.5 rounded-full text-xs font-bold`}>{blog.category}</span>
        </div>

        {related.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] font-bold tracking-[0.25em] text-solar-primary uppercase">Related Stories</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <div key={r.id} onClick={() => { navigate(`/blog/${r.id}`); window.scrollTo(0, 0); }} className="bg-white rounded-2xl overflow-hidden cursor-pointer group border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="h-44 overflow-hidden">
                    <img loading="lazy" src={r.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={r.title} />
                  </div>
                  <div className="p-6">
                    <span className={`${CAT_STYLES[r.category]} px-3 py-1 rounded-full text-[10px] font-bold`}>{r.category}</span>
                    <h3 className="text-lg font-extrabold font-heading text-solar-deep group-hover:text-solar-primary leading-snug tracking-tight mt-3 transition-colors">{r.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-solar-deep rounded-3xl p-10 md:p-14 text-center mb-20 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-solar-primary/10 rounded-full blur-[60px]"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold font-heading text-white tracking-tight mb-4">Ready to Go Solar?</h3>
            <p className="text-white/50 text-base mb-8 max-w-md mx-auto font-medium">Get a free consultation and custom savings estimate for your home or business.</p>
            <button onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} className="bg-solar-primary hover:bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-rose-500/20 hover:-translate-y-1">
              <i className="fas fa-bolt mr-2"></i>Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;