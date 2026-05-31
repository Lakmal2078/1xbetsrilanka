import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // 1. මූලික පිටුවේ තොරතුරු (Title & Description)
      { title: "1xbetsrilanka" },
      { name: 'description', content: 'ශ්‍රී ලාංකික ක්‍රීඩා ඔට්ටු ක්‍රීඩා කරන්නන් සඳහා ක්ෂණික තැන්පතු, ආපසු ගැනීම් සහ 24/7 සහාය. ශ්‍රී ලාංකික ක්‍රීඩා ඔට්ටු අල්ලන්නන් සඳහා ක්ෂණික තැන්පතු, මුදල් ආපසු ගැනීම් සහ AI බලයෙන් ක්‍රියාත්මක වන සහාය.' },

      // 2. Open Graph / Facebook Meta Tags
      { property: 'og:site_name', content: '1xbetsrilanka' },
      { property: 'og:title', content: '1xbetsrilanka' },
      { property: 'og:description', content: 'ශ්‍රී ලාංකික ක්‍රීඩා ඔට්ටු ක්‍රීඩා කරන්නන් සඳහා ක්ෂණික තැන්පතු, ආපසු ගැනීම් සහ 24/7 සහාය. ශ්‍රී ලාංකික ක්‍රීඩා ඔට්ටු අල්ලන්නන් සඳහා ක්ෂණික තැන්පතු, මුදල් ආපසු ගැනීම් සහ AI බලයෙන් ක්‍රියාත්මක වන සහාය.' },
      { property: 'og:url', content: 'https://1xbetsrilanka.com/' },
      { property: 'og:type', content: 'website' }, // Blog posts තියෙන පිටුවල (routes) මෙය 'article' ලෙස override කරන්න.

      // 3. Twitter Card Meta Tags
      { name: 'twitter:card', content: 'summary' }, // පින්තූරයක් නැති නිසා දැනට 'summary' ලෙස යොදා ඇත.
      { name: 'twitter:title', content: '1xbetsrilanka' },
      { name: 'twitter:description', content: 'ශ්‍රී ලාංකික ක්‍රීඩා ඔට්ටු ක්‍රීඩා කරන්නන් සඳහා ක්ෂණික තැන්පතු, ආපසු ගැනීම් සහ 24/7 සහාය. ශ්‍රී ලාංකික ක්‍රීඩා ඔට්ටු අල්ලන්නන් සඳහා ක්ෂණික තැන්පතු, මුදල් ආපසු ගැනීම් සහ AI බලයෙන් ක්‍රියාත්මක වන සහාය.' },

      /* TODO: SHARE IMAGE IMPLEMENTATION NOTE (When image is ready)
        පසුව පින්තූරයක් එකතු කල පසු ඉහත twitter:card එක 'summary_large_image' කර පහත tags දෙක meta array එකට එකතු කරන්න:
        { property: 'og:image', content: 'https://1xbetsrilanka.com/.netlify/images?url=/og-image.png&w=1200&h=630&fit=cover&fm=png' },
        { name: 'twitter:image', content: 'https://1xbetsrilanka.com/.netlify/images?url=/og-image.png&w=1200&h=630&fit=cover&fm=png' }
      */
    ],
    links: [
      // 4. Canonical URL (Duplicate content මඟහැරීමට)
      {
        rel: 'canonical',
        href: 'https://1xbetsrilanka.com/',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght=300;400;500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="si"> {/* භාෂාව සිංහල නිසා lang="en" වෙනුවට lang="si" ලෙස වෙනස් කර ඇත */}
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
  }

