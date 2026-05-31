import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function HomePage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card-animate')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <i className="fas fa-diamond text-yellow-400 text-xl" />
          <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            1xBet Fast Cash
          </h1>
        </div>
        <div className="hidden md:flex space-x-8">
          {['home', 'features', 'steps', 'contact'].map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              className="capitalize hover:text-yellow-400 transition duration-300"
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={() => window.open('https://wa.link/jdtimv', '_blank')}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300"
        >
          <i className="fab fa-whatsapp mr-2" />
          <span>Quick Chat</span>
        </button>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center py-16">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ශ්‍රී ලංකාවේ <span className="text-yellow-400">විශ්වාසවන්තම</span>
              <br />
              <span className="text-red-500">වේගවත්ම VIP Cash Agent</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              මුදල් ඩිපොසිට් වෙන්න පරක්කු වෙන, විත්ඩ්‍රෝ එකක් ගන්න දවස් ගණන් රස්තියාදු වෙන
              තැන්වල රැවටෙනවාද? 🧐
            </p>
            <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-[2px] rounded-full inline-block mb-8">
              <div className="bg-gray-900 rounded-full px-6 py-3">
                <span className="font-bold">දැන්ම ලංකාවේ අංක 1️⃣ ක්ෂණික සේවාව</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('steps')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 transition duration-300"
              >
                <i className="fas fa-user-plus mr-2" />
                <span>Register Now</span>
              </button>
              <button
                onClick={() => window.open('https://wa.link/jdtimv', '_blank')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 transition duration-300"
              >
                <i className="fab fa-whatsapp mr-2" />
                <span>WhatsApp Support</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: 'fas fa-users', color: 'text-blue-400', value: '5,420+', label: 'Active Members' },
            { icon: 'fas fa-dollar-sign', color: 'text-green-400', value: '14,200+', label: 'Successful Transactions' },
            { icon: 'fas fa-star', color: 'text-yellow-400', value: '95%', label: 'Satisfied Customers' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <i className={`${stat.icon} text-4xl ${stat.color} mb-4 block`} />
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              👑 අපෙන් ඔබට පමණක් ලැබෙන සුවිශේෂී වාසි:
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              අපි ඔබට ඔබගේ මනාපයට පරිදි සුවිශේෂී සේවාවක් ලබා දෙන්නෙමු.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-bolt',
                iconColor: 'text-yellow-400',
                border: 'hover:border-blue-400',
                title: '⚡ 5-Minute Service',
                desc: 'ඩිපොසිට් සහ විත්ඩ්‍රෝ ඕනෑම එකක් විනාඩි 5ක් ඇතුළත ගිණුමට!',
              },
              {
                icon: 'fas fa-coins',
                iconColor: 'text-green-400',
                border: 'hover:border-red-400',
                title: '💰 Low Limits',
                desc: 'රු. 100/- සිට Deposit | රු. 250/- සිට Withdrawal',
              },
              {
                icon: 'fas fa-times-circle',
                iconColor: 'text-red-400',
                border: 'hover:border-green-400',
                title: '❌ Zero Fees',
                desc: 'කිසිදු අමතර සේවා ගාස්තුවක් හෝ සැඟවුණු ගාස්තු අය නොකෙරේ (100% Free)',
              },
              {
                icon: 'fas fa-clock',
                iconColor: 'text-blue-400',
                border: 'hover:border-blue-400',
                title: '⏰ 24/7 Live Support',
                desc: 'දිවා/රාත්‍රී, නිවාඩු දින ඇතුළු වසරේ දින 365 පුරාම සජීවී සේවාව',
              },
              {
                icon: 'fas fa-handshake',
                iconColor: 'text-purple-400',
                border: 'hover:border-purple-400',
                title: '🤝 Friendly Staff',
                desc: 'ඔබගේ ගැටලුවක් සුහදශීලීව විසඳා දීමට කැපවූ කාර්ය මණ්ඩලයක්',
              },
              {
                icon: 'fas fa-credit-card',
                iconColor: 'text-orange-400',
                border: 'hover:border-yellow-400',
                title: '💳 All Banks & iPay',
                desc: "iPay, LOLC, Sampath, BOC, Commercial, DFCC, People's Bank ඇතුළු",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`card-animate feature-card bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 ${f.border} transition-all duration-300`}
              >
                <div className={`text-5xl ${f.iconColor} mb-4`}>
                  <i className={f.icon} />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🎁 100% First Deposit Bonus</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ලියාපදිංචි වීමට පළමු තැන්පතුව සඳහා 100% ක අමතර බෝනස් මුදලක් ක්ෂණිකව ලබාගන්න!
          </p>
          <button
            onClick={() =>
              window.open(
                'https://refpa7921972.top/L?tag=d_2481353m_1622c_&site=2481353&ad=1622',
                '_blank'
              )
            }
            className="pulse bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 transition duration-300"
          >
            <i className="fas fa-link" />
            <span>Register Now</span>
          </button>
          <div className="mt-8 bg-black/30 p-4 rounded-lg inline-block">
            <p className="font-bold">
              Official Promo Code: <span className="text-yellow-400">VGSL</span>
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ⚙️ ගනුදෙනු කරන සරල පියවර:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card-animate step-card bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                📥 මුදල් තැන්පත් කිරීමට (Deposit)
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-left">
                <li>
                  අපගේ බැංකු/iPay ගිණුමකට මුදල් දමා, Remark එකට ඔබේ 1xBet ID එක දමන්න.
                </li>
                <li>රිසිට්පතේ Screenshot එකක් ගන්න.</li>
                <li>පහත WhatsApp ලින්ක් එකට ID එක සහ Screenshot එක එවන්න.</li>
              </ol>
            </div>
            <div className="card-animate step-card bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                📤 මුදල් ලබාගැනීමට (Withdraw)
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-left">
                <li>
                  App එකෙන් 1xBet Cash තෝරා City: Walasmulla | Street: Beliatta Road 24/7 ලබා
                  දෙන්න.
                </li>
                <li>Request එක Approve වූ පසු ලැබෙන Security Code එක ලබාගන්න.</li>
                <li>
                  ඔබේ ID එක, මුදල සහ Security Code එක සමඟ මුදල් ලැබිය යුතු ඔබේ බැංකු විස්තර
                  පහත WhatsApp එකට එවන්න.
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">
              📞 ප්‍රමාද නොවී දැන්ම ලංකාවේ වේගවත්ම VIP සේවාව අත්විඳින්න:
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button
                onClick={() => window.open('https://wa.link/jdtimv', '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition duration-300"
              >
                <i className="fab fa-whatsapp" />
                <span>Quick WhatsApp Link</span>
              </button>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-green-400" />
                <span className="text-xl">076 586 5387</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/70 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-diamond text-yellow-400" />
                1xBet Fast Cash
              </h3>
              <p className="text-gray-400">
                ශ්‍රී ලංකාවේ විශ්වාසවන්තම සහ වේගවත්ම VIP Cash Agent
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Important Notice</h3>
              <p className="text-gray-400">
                1xBet ශ්‍රී ලංකාවේ නීතිමය රාමුවට අනුකූල නොවිය හැකි බැවින්, මෙහි සියලුම ගනුදෙනු
                ඔබගේ පුද්ගලික අවදානම සහ වගකීම මත සිදු කරන්න. ඔබගේ සියලුම දත්ත 100% ක් රහස්‍යව
                සුරැකෙන බව අපි සහතික කරමු! 🔒
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['home', 'features', 'steps'].map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollToSection(s)}
                      className="capitalize text-gray-400 hover:text-yellow-400 transition duration-300"
                    >
                      {s}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() =>
                      window.open(
                        'https://refpa7921972.top/L?tag=d_2481353m_1622c_&site=2481353&ad=1622',
                        '_blank'
                      )
                    }
                    className="text-gray-400 hover:text-yellow-400 transition duration-300"
                  >
                    Register Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 1xBet Fast Cash. All rights reserved. Official Promo Code: VGS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
