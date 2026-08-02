const ChannelFlow = () => (
  <section id="channels" className="section overflow-hidden bg-white">
    <div className="container-tight">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <span className="eyebrow">Channel aktif Otika</span>
        <h2 className="mt-4">WhatsApp & Instagram masuk ke satu alur layanan</h2>
        <p className="mt-5 text-lg text-slate-600">Dua channel utama, satu inbox yang lebih rapi, dan AI Agent yang siap membantu saat pelanggan datang.</p>
      </div>

      <div className="channel-stage" role="img" aria-label="Animasi pesan WhatsApp dan Instagram mengalir ke inbox OTIKA">
        <svg className="channel-visual-svg" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="channel-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#0f172a" floodOpacity=".1" /></filter>
            <linearGradient id="stage-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f8fafc" /><stop offset="1" stopColor="#f1f5f9" /></linearGradient>
            <linearGradient id="metric-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fef08a" /><stop offset="1" stopColor="#fde047" /></linearGradient>
            <path id="wa-flow-path" d="M260 238 C345 238 365 275 455 275" /><path id="ig-flow-path" d="M260 440 C345 440 365 394 455 394" />
          </defs>
          <rect x="8" y="8" width="984" height="604" rx="44" fill="url(#stage-bg)" stroke="#e2e8f0" />

          <g className="channel-node channel-node-wa" filter="url(#channel-shadow)">
            <rect x="105" y="155" width="142" height="142" rx="34" fill="white" stroke="#dcfce7" strokeWidth="3" />
            <image href="/assets/whatsapp-glyph-green.svg" x="130" y="180" width="92" height="92" />
            <text x="176" y="334" textAnchor="middle" className="channel-label">WHATSAPP</text>
          </g>
          <g className="channel-node channel-node-ig" filter="url(#channel-shadow)">
            <rect x="105" y="357" width="142" height="142" rx="34" fill="#e62c6b" /><rect x="139" y="391" width="74" height="74" rx="20" fill="none" stroke="white" strokeWidth="8" /><circle cx="176" cy="428" r="18" fill="none" stroke="white" strokeWidth="8" /><circle cx="199" cy="404" r="5" fill="white" />
            <text x="176" y="536" textAnchor="middle" className="channel-label">INSTAGRAM</text>
          </g>

          <use href="#wa-flow-path" className="channel-connector connector-wa" /><use href="#ig-flow-path" className="channel-connector connector-ig" />
          <circle r="8" fill="#22c55e" className="motion-dot"><animateMotion dur="2.8s" repeatCount="indefinite"><mpath href="#wa-flow-path" /></animateMotion></circle>
          <circle r="8" fill="#e62c6b" className="motion-dot"><animateMotion dur="3.1s" begin=".5s" repeatCount="indefinite"><mpath href="#ig-flow-path" /></animateMotion></circle>

          <g className="inbox-window" filter="url(#channel-shadow)">
            <rect x="450" y="126" width="430" height="388" rx="28" fill="white" stroke="#e2e8f0" strokeWidth="2" /><path d="M450 154a28 28 0 0 1 28-28h374a28 28 0 0 1 28 28v34H450v-34Z" fill="#f8fafc" />
            <circle cx="480" cy="158" r="6" fill="#fdba74" /><circle cx="500" cy="158" r="6" fill="#fde68a" /><circle cx="520" cy="158" r="6" fill="#bbf7d0" /><circle cx="562" cy="158" r="6" fill="#86efac" /><text x="582" y="164" className="browser-title">app.otika.biz.id</text><path d="M450 188h430" stroke="#e2e8f0" strokeWidth="2" />
            <g className="inbox-row inbox-row-one"><rect x="472" y="212" width="386" height="82" rx="18" fill="#f0fdf4" /><circle cx="514" cy="253" r="24" fill="#d9f99d" /><text x="514" y="261" textAnchor="middle" className="avatar-letter">M</text><text x="552" y="246" className="person-name">Marshell</text><text x="552" y="272" className="message-preview">Halo kak, bisa booking service motor?</text><circle cx="824" cy="238" r="5" fill="#22c55e" /><circle cx="824" cy="270" r="15" fill="#4ade80" /><text x="824" y="276" textAnchor="middle" className="unread-count">3</text></g>
            <g className="inbox-row inbox-row-two"><circle cx="514" cy="342" r="24" fill="#ddd6fe" /><text x="514" y="350" textAnchor="middle" className="avatar-letter">M</text><text x="552" y="335" className="person-name">Mega</text><text x="552" y="361" className="message-preview">U Ditch ukuran 50x50 ready?</text><circle cx="824" cy="318" r="5" fill="#e62c6b" /><circle cx="824" cy="350" r="15" fill="#ec4899" /><text x="824" y="356" textAnchor="middle" className="unread-count">1</text><path d="M472 303h386" stroke="#e2e8f0" /></g>
            <g className="inbox-row inbox-row-three"><circle cx="514" cy="430" r="24" fill="#fef3c7" /><text x="514" y="438" textAnchor="middle" className="avatar-letter">N</text><text x="552" y="423" className="person-name">Nura</text><text x="552" y="449" className="message-preview">jadi deal paket Mumtazz.</text><circle cx="824" cy="406" r="5" fill="#22c55e" /><path d="M472 391h386" stroke="#e2e8f0" /></g>
          </g>
          <g className="metric-badge" filter="url(#channel-shadow)"><rect x="744" y="75" width="206" height="96" rx="24" fill="url(#metric-bg)" stroke="#0f172a" strokeWidth="3" /><text x="847" y="126" textAnchor="middle" className="metric-number">24/7</text><text x="847" y="151" textAnchor="middle" className="metric-caption">AI AGENT AKTIF</text></g>
        </svg>
      </div>
      <div className="mt-8 grid gap-4 text-center sm:grid-cols-3"><div><strong className="text-slate-900">Satu inbox</strong><p className="mt-1 text-sm text-slate-500">Chat lebih mudah dipantau</p></div><div><strong className="text-slate-900">Dua channel aktif</strong><p className="mt-1 text-sm text-slate-500">WhatsApp dan Instagram</p></div><div><strong className="text-slate-900">AI + manusia</strong><p className="mt-1 text-sm text-slate-500">Handover saat dibutuhkan</p></div></div>
      <p className="mt-7 text-center text-sm text-slate-500">Integrasi Messenger dan channel lainnya sedang dalam pengembangan.</p>
    </div>
  </section>
);

export default ChannelFlow;
