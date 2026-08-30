const weeklyGatherings = [
  { day: '周六', time: '7:30 PM — 9:00 PM', title: '周六晚堂', english: 'Saturday Evening Service', note: '华语・英语' },
  { day: '周日', time: '10:00 AM — 11:00 AM', title: '周日早堂', english: 'Sunday Morning Service', note: '华语' },
];

const worshipOrder = [
  ['预备心敬拜', 'Preparation for Worship'],
  ['公祷', 'Prayers'],
  ['敬拜赞美', 'Worship and Praise'],
  ['使徒信经', 'The Apostles’ Creed'],
  ['儿童祝福', 'Blessing of Children'],
  ['证道', 'Sermon'],
  ['奉献诗', 'Songs for Offerings'],
  ['奉献祷告', 'Prayers for Offerings'],
  ['家事报告', 'Announcements'],
  ['三一颂', 'Doxology'],
  ['祝福', 'Benediction'],
  ['阿们颂', 'Amen Praise'],
];

const ministries = [
  { icon: '☀', title: '儿童主日学', english: 'Children’s Sunday School', day: '周六', time: '7:30 PM — 9:00 PM', photo: '/fellowships/children-watercolor-v2.png', alt: '儿童主日学水彩插画' },
  { icon: '✦', title: '青年团契', english: 'Youth Fellowship', day: '周六', time: '12:00 PM — 1:30 PM', photo: '/fellowships/young-adults-watercolor-v2.png', alt: '青年团契水彩插画' },
  { icon: '◎', title: '少年团契', english: 'Teens Fellowship', day: '周六', time: '3:00 PM — 4:30 PM', photo: '/fellowships/teens-watercolor-v2.png', alt: '少年团契水彩插画' },
  { icon: '♫', title: '诗班', english: 'Choir', day: '周六', time: '4:45 PM — 6:00 PM', photo: '/fellowships/choir-watercolor-v2.png', alt: '教会诗班水彩插画' },
  { icon: '❋', title: '常青团契', english: 'Evergreen Fellowship', day: '每月两次・周四或周五', time: '9:30 AM — 11:30 AM', photo: '/fellowships/seniors-watercolor-v2.png', alt: '常青团契水彩插画' },
  { icon: '◇', title: '赛特小组', english: 'Seth Group', day: '周日', time: '12:00 PM — 1:30 PM', photo: '/fellowships/seth-study-prayer-meal-joy-v3.png', alt: '赛特小组一起查经、祷告、用餐和欢笑的水彩插画' },
  { icon: '✧', title: '亚伯拉罕组', english: 'Abraham Group', note: '英文查经・English Bible Study', day: '星期三・晚上', time: '8:00 PM — 10:00 PM', photo: '/fellowships/abraham-english-bible-study-v1.png', alt: '亚伯拉罕组晚间英文查经水彩插画' },
  { icon: '⌁', title: '加百列组', english: 'Gabriel Group', note: '线上查经・Online Bible Study', day: '星期四・晚上', time: '8:00 PM — 9:00 PM', photo: '/fellowships/gabriel-bible-study-v1.png', alt: '加百列组线上查经水彩插画' },
  { icon: '✣', title: '约书亚组', english: 'Joshua Group', note: '小组聚会・Small Group Gathering', day: '星期一・早上', time: '10:00 AM — 11:00 AM', photo: '/fellowships/joshua-morning-group-v1.png', alt: '约书亚组早晨查经与祷告水彩插画' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="长老会新山宣道教会首页">
          <img className="brand-logo" src="/logo-church-v1.png" alt="长老会新山宣道教会 Gereja Presbyterian Clarion" />
        </a>
        <nav aria-label="主要导航">
          <a href="#worship">聚会时间</a>
          <a href="#announcements">近期消息</a>
          <a href="#about">关于我们</a>
          <a href="#visit">联系我们</a>
        </nav>
        <a className="header-cta" href="#visit">欢迎来访 <span>→</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> ISKANDAR PUTERI・JOHOR</p>
          <h1>在爱与真理中，<br /><em>一同成长。</em></h1>
          <p className="hero-intro">一个敬拜上帝、彼此相爱、扎根真道的属灵家园。无论您在人生的哪个阶段，我们都诚挚欢迎您。<span className="english-inline" lang="en">A spiritual home where we worship God, love one another, and grow deep roots in His Word. Wherever you are in life, you are warmly welcome here.</span></p>
          <div className="hero-actions">
            <a className="button button-primary" href="#worship">查看聚会时间 <span>→</span></a>
            <a className="text-link" href="#about">认识我们 <span>↘</span></a>
          </div>
          <div className="next-services" aria-label="每周崇拜聚会时间">
            <p className="next-services-label">每周崇拜聚会 <span lang="en">WEEKLY WORSHIP SERVICES</span></p>
            <div className="next-service"><span className="calendar-icon" aria-hidden="true">六</span><span className="service-summary"><small>周六晚堂・SATURDAY EVENING SERVICE</small><strong>7:30 PM — 9:00 PM</strong><em>华语・英语 / MANDARIN &amp; ENGLISH</em></span></div>
            <div className="next-service"><span className="calendar-icon" aria-hidden="true">日</span><span className="service-summary"><small>周日早堂・SUNDAY MORNING SERVICE</small><strong>10:00 AM — 11:00 AM</strong><em>华语 / MANDARIN</em></span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <img src="/church-building.png" alt="长老会新山宣道教会建筑外观" />
            <span className="photo-label">OUR CHURCH・我们的教会</span>
          </div>
          <blockquote>
            <span className="quote-mark">“</span>
            <p>我们爱，因为神先爱我们。</p>
            <cite>约翰一书 4:19</cite>
          </blockquote>
        </div>
      </section>

      <section className="section worship" id="worship">
        <div className="section-heading">
          <p className="eyebrow"><span /> WORSHIP・敬拜</p>
          <h2>主日崇拜</h2>
          <p>每周相聚，同心敬拜，聆听真道。期待与你和家人见面。<span className="english-inline" lang="en">We gather each week to worship with one heart and listen to God’s Word. We look forward to welcoming you and your family.</span></p>
        </div>
        <div className="service-grid">
          {weeklyGatherings.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="day-badge">{service.day}</div>
              <div>
                <p className="service-time">{service.time}</p>
                <h3>{service.title}</h3>
                <small className="service-en">{service.english}</small>
                <span>{service.note}</span>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <div className="worship-order" aria-labelledby="worship-order-title">
          <div className="worship-order-heading">
            <p className="eyebrow"><span /> ORDER OF WORSHIP・崇拜程序</p>
            <h3 id="worship-order-title">主日崇拜程序</h3>
            <p>我们以敬拜、祷告和真道，一同来到神面前。<span className="english-inline" lang="en">Through worship, prayer and the Word, we come together before God.</span></p>
          </div>
          <figure className="worship-order-art"><img src="/worship-order-watercolor-v1.png" alt="十字架、圣经与橄榄枝的水彩插画" /></figure>
          <ol className="worship-order-list">
            {worshipOrder.map(([name, english]) => (
              <li key={name}><span className="order-name">{name}</span><span className="order-en">{english}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section announcements" id="announcements">
        <div className="section-heading announcement-heading">
          <div><p className="eyebrow"><span /> WHAT&apos;S ON・近期消息</p><h2>一起参与，一起经历恩典</h2></div>
          <p>教会生活不只在礼拜堂里。这里有装备、节庆、关怀与音乐，欢迎你预留时间参与。<span className="english-inline" lang="en">Church life reaches beyond the sanctuary. Join us for faith formation, celebrations, community care and music.</span></p>
        </div>
        <div className="announcement-grid">
          <article className="announcement-card announcement-wide">
            <a className="announcement-image zoomable" href="/announcements/baptism-course.jpeg" target="_blank" aria-label="放大查看洗礼课程通知"><img src="/announcements/baptism-course.jpeg" alt="2026年9月中旬洗礼课程通知" /><span className="zoom-hint">放大查看 ＋</span></a>
            <div className="announcement-copy"><span className="event-tag">信仰装备</span><p className="event-date">2026・九月中旬</p><h3>洗礼课程</h3><p>愿意更深入认识基督信仰、预备接受洗礼的弟兄姐妹，欢迎向谢雅美传道报名。<span className="english-inline" lang="en">For those who wish to know the Christian faith more deeply and prepare for baptism. Please contact Preacher Xie Yamei to register.</span></p></div>
          </article>
          <article className="announcement-card">
            <a className="announcement-image zoomable" href="/announcements/mid-autumn-invitation.jpeg" target="_blank" aria-label="放大查看中秋团圆聚会邀请"><img src="/announcements/mid-autumn-invitation.jpeg" alt="9月19日中秋团圆聚会邀请" /><span className="zoom-hint">放大查看 ＋</span></a>
            <div className="announcement-copy"><span className="event-tag">节庆团契</span><p className="event-date">9月19日・星期六・6:00 PM</p><h3>中秋团圆佳节</h3><p>爱宴、分享、猜灯谜与送礼，一家大小同享温暖团圆夜。<span className="english-inline" lang="en">A warm evening of dinner, sharing, lantern riddles and gifts for the whole family.</span></p></div>
          </article>
          <article className="announcement-card">
            <a className="announcement-image zoomable" href="/announcements/mid-autumn-service-notice.jpeg" target="_blank" aria-label="放大查看中秋联合主日崇拜安排"><img src="/announcements/mid-autumn-service-notice.jpeg" alt="中秋联合主日崇拜安排通知" /><span className="zoom-hint">放大查看 ＋</span></a>
            <div className="announcement-copy"><span className="event-tag">联合崇拜</span><p className="event-date">9月19日・星期六</p><h3>中秋节联合崇拜</h3><p>中秋布道会同时也是联合主日崇拜；9月20日早堂暂停一周。<span className="english-inline" lang="en">The Mid-Autumn evangelistic gathering will also serve as our combined worship service. Sunday morning worship on 20 September will be paused.</span></p></div>
          </article>
          <article className="announcement-card poster-card">
            <a className="announcement-image portrait zoomable" href="/announcements/charity-luncheon-poster.jpeg" target="_blank" aria-label="放大查看慈善午宴海报"><img src="/announcements/charity-luncheon-poster.jpeg" alt="10月10日以爱十周年慈善午宴海报" /><span className="zoom-hint">放大查看 ＋</span></a>
            <div className="announcement-copy"><span className="event-tag">社区关怀</span><p className="event-date">10月10日・星期六・12:00 PM</p><h3>“以爱”十周年慈善午宴</h3><p>支持为末期癌症患者提供免费照护的以爱社区及临终关怀中心。<span className="english-inline" lang="en">Supporting Yi Ai Community Hospice Care Centre, which provides free care for terminal cancer patients.</span></p></div>
          </article>
          <article className="announcement-card poster-card">
            <a className="announcement-image zoomable" href="/announcements/charity-luncheon-form.jpeg" target="_blank" aria-label="放大查看筹款详情"><img src="/announcements/charity-luncheon-form.jpeg" alt="以爱筹款午宴支持与捐款详情" /><span className="zoom-hint">放大查看 ＋</span></a>
            <div className="announcement-copy"><span className="event-tag">筹款详情</span><p className="event-date">CHAO SHAN 1975 SEAFOOD・KEMPAS</p><h3>用行动把爱传出去</h3><p>可认购席位、餐桌或参与捐款；完整支持方式请参阅活动资料。<span className="english-inline" lang="en">Reserve seats or tables, or make a donation. Please refer to the event information for full details.</span></p></div>
          </article>
          <article className="announcement-card">
            <a className="announcement-image zoomable" href="/announcements/student-ministry-break.jpeg" target="_blank" aria-label="放大查看学生事工通知"><img src="/announcements/student-ministry-break.jpeg" alt="9月2日爱加倍学生事工休息通知" /><span className="zoom-hint">放大查看 ＋</span></a>
            <div className="announcement-copy"><span className="event-tag">事工通知</span><p className="event-date">9月2日・星期三</p><h3>爱加倍学生事工休息</h3><p>适逢学校假期，学生事工将在当天休息一周。<span className="english-inline" lang="en">The student ministry will take a one-week break during the school holidays.</span></p></div>
          </article>
          <article className="announcement-card announcement-wide concert-card">
            <a className="announcement-image zoomable" href="/announcements/revelation-concert.jpeg" target="_blank" aria-label="放大查看启示录音乐会海报"><img src="/announcements/revelation-concert.jpeg" alt="10月25日启示录中文清唱剧音乐会" /><span className="zoom-hint">放大查看 ＋</span></a>
            <div className="announcement-copy"><span className="event-tag">圣乐分享</span><p className="event-date">10月25日・星期日・7:30 PM</p><h3>《启示录》中文清唱剧</h3><p>管弦乐团与诗班联合呈献。地点：Dewan Serbaguna Johor Jaya。<span className="english-inline" lang="en">Presented jointly by orchestra and choir. Venue: Dewan Serbaguna Johor Jaya.</span></p></div>
          </article>
        </div>
      </section>

      <section className="section ministries">
        <div className="section-heading inline-heading">
          <div>
            <p className="eyebrow light"><span /> COMMUNITY・团契生活</p>
            <h2>在团契中彼此连结</h2>
          </div>
          <p>从孩童到长者，每个生命阶段都有同行的群体。<span className="english-inline" lang="en">From children to seniors, every stage of life has a community in which to belong and grow.</span></p>
        </div>
        <div className="ministry-grid">
          {ministries.map((item) => (
            <article className="ministry-card" key={item.title}>
              <div className="ministry-photo"><img src={item.photo} alt={item.alt} /></div>
              <span className="ministry-icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <small className="ministry-en">{item.english}</small>
              {'note' in item && item.note ? <small className="ministry-note">{item.note}</small> : null}
              <p>{item.day}</p>
              <strong>{item.time}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-copy">
          <p className="eyebrow"><span /> OUR CALLING・我们的呼召</p>
          <h2>爱真理，也爱这座城市。</h2>
          <p>我们盼望建立一个以基督为中心、充满爱与真理的教会，在社区中见证福音。<span className="english-inline" lang="en">We seek to build a Christ-centred church filled with love and truth, bearing witness to the gospel in our community.</span></p>
        </div>
        <div className="values">
          <article>
            <span>01</span>
            <div><small>宗旨・PURPOSE</small><h3>以正意宣讲真道，<br />以宣教为大使命。</h3><p>To proclaim the true teachings with sincerity and to prioritize evangelism as our great mission.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><small>异象・VISION</small><h3>建立一个<br />爱与真理的教会。</h3><p>To establish a church of love and truth.</p></div>
          </article>
        </div>
      </section>

      <section className="scripture-section" aria-labelledby="scripture-title">
        <div className="scripture-intro">
          <p className="eyebrow"><span /> WORDS OF LIFE・生命之言</p>
          <h2 id="scripture-title">让神的话，<br />安静我们的心。</h2><p className="english-inline scripture-intro-en" lang="en">Let God’s Word quiet our hearts.</p>
          <div className="olive-branch" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="scripture-list">
          <blockquote className="scripture-card"><span>01</span><p>“你们所有劳苦担重担的人哪，到我这里来吧！我必使你们得安息。”</p><cite>马太福音第11章第28节・Matthew 11:28・新译本 CNV</cite></blockquote>
          <blockquote className="scripture-card"><span>02</span><p>“看哪！弟兄和睦共处，是多么的善，多么的美。”</p><cite>诗篇第133篇第1节・Psalm 133:1・新译本 CNV</cite></blockquote>
          <blockquote className="scripture-card"><span>03</span><p>“你要一心仰赖耶和华，不可倚靠自己的聪明；”</p><cite>箴言第3章第5节・Proverbs 3:5・新译本 CNV</cite></blockquote>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-copy">
          <p className="eyebrow light"><span /> COME VISIT・欢迎来访</p>
          <h2>这个周末，<br />我们在这里等你。</h2><p className="visit-intro">欢迎你与家人前来敬拜。<span className="english-inline" lang="en">Come worship with us this weekend. You and your family are always welcome.</span></p>
          <div className="contact-list">
            <div><span aria-hidden="true">⌖</span><p><small>地址 ADDRESS</small><strong>6, Jalan Hijauan 4, Horizon Hills,<br />79100 Iskandar Puteri, Johor Darul Ta&apos;zim</strong></p></div>
            <div><span aria-hidden="true">✉</span><p><small>电邮 EMAIL</small><a href="mailto:cmc.horizon@gmail.com">cmc.horizon@gmail.com</a></p></div>
          </div>
          <div className="map-actions">
            <a className="button button-light" href="https://www.google.com/maps/dir/?api=1&destination=6%2C%20Jalan%20Hijauan%204%2C%20Horizon%20Hills%2C%2079100%20Iskandar%20Puteri%2C%20Johor%20Darul%20Ta%27zim&travelmode=driving" target="_blank" rel="noreferrer">Google 路线 <span>↗</span></a>
            <a className="button button-outline" href="https://www.waze.com/live-map/directions?to=ll.1.4583922%2C103.6440088" target="_blank" rel="noreferrer">Waze 网页路线 <span>↗</span></a>
            <a className="button button-outline" href="https://www.facebook.com/profile.php?id=100069955313427" target="_blank" rel="noreferrer">Facebook <span>↗</span></a>
          </div>
        </div>
        <div className="map-card">
          <iframe title="长老会新山宣道教会位置地图" src="https://www.google.com/maps?q=6%2C%20Jalan%20Hijauan%204%2C%20Horizon%20Hills%2C%2079100%20Iskandar%20Puteri%2C%20Johor%20Darul%20Ta%27zim&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-address"><strong>长老会新山宣道教会</strong><small>6, Jalan Hijauan 4・Horizon Hills</small></div>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <img className="brand-logo footer-logo" src="/logo-church-v1.png" alt="长老会新山宣道教会 Gereja Presbyterian Clarion" />
        </div>
        <p><span>在爱中连结・在真理中成长・在使命中前行</span><small className="footer-motto-en">Connected in Love・Growing in Truth・Living the Mission</small></p>
        <small>© 2026 Gereja Presbyterian Clarion</small>
      </footer>
    </main>
  );
}
