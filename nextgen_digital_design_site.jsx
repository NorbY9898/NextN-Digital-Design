export default function NextgenDigitalDesignSite() {
  const sections = [
    {
      title: "3D póló megtekintés",
      text: "Mutasd be a pólókat modern, forgatható 3D nézetben, hogy a látogatók azonnal prémium élményt kapjanak.",
    },
    {
      title: "Egyedi rendelés",
      text: "Kérjenek saját mintát, logót vagy feliratot egyszerű ajánlatkérő űrlapon keresztül.",
    },
    {
      title: "Prémium megjelenés",
      text: "A fekete-arany arculat bizalmat, eleganciát és exkluzív márkaérzetet ad az oldalnak.",
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "Kezdő csomag",
      features: ["1 pólómodell", "3D megtekintés", "Kapcsolati űrlap"],
    },
    {
      name: "Premium",
      price: "Ajánlott",
      features: ["Több színopció", "Márkázott dizájn", "Kiemelt bemutatás"],
    },
    {
      name: "Custom",
      price: "Egyedi ajánlat",
      features: ["Saját igények", "Bővített funkciók", "További termékek"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-yellow-700/30 bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-bold tracking-[0.2em] text-yellow-400">NEXTGEN</div>
            <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">Digital Design</div>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-yellow-400">Rólunk</a>
            <a href="#services" className="transition hover:text-yellow-400">Szolgáltatások</a>
            <a href="#showcase" className="transition hover:text-yellow-400">Bemutató</a>
            <a href="#contact" className="transition hover:text-yellow-400">Kapcsolat</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.16),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-yellow-300">
                Next-N stílus • fekete & arany
              </div>
              <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
                Egyedi pólók, <span className="text-yellow-400">modern 3D</span> bemutatással.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
                A Nextgen Digital Design egy prémium mini weboldal koncepció egyedi pólókhoz, látványos fekete-arany arculattal és később bővíthető 3D termékbemutatással.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#showcase"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5"
                >
                  Bemutató megtekintése
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-yellow-500 hover:text-yellow-400"
                >
                  Ajánlatot kérek
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-yellow-400/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-6 shadow-2xl shadow-black/50">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Preview</p>
                    <h2 className="text-xl font-bold text-yellow-400">3D póló nézet helye</h2>
                  </div>
                  <div className="rounded-full border border-yellow-500/30 px-3 py-1 text-xs text-yellow-300">
                    Coming soon
                  </div>
                </div>
                <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] border border-dashed border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-black">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-4xl">
                      👕
                    </div>
                    <p className="text-lg font-semibold text-white">Ide kerül a 3D pólómodell</p>
                    <p className="mt-2 text-sm text-zinc-400">Forgatható, nagyítható, prémium termékbemutató</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200">Fekete</button>
                  <button className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 px-3 py-2 text-sm text-yellow-300">Arany</button>
                  <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200">Fehér</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Márkaalap</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A saját Next-N világodra építve</h2>
            <p className="mt-4 text-zinc-400">
              Ez az oldal ugyanazt a prémium, elegáns és modern irányt viszi tovább, mint a saját branded: sötét háttér, arany kiemelések, letisztult szerkezet és erős vizuális jelenlét.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-zinc-800 bg-zinc-950 p-6 shadow-xl shadow-black/20">
                <div className="mb-4 h-1 w-16 rounded-full bg-yellow-400" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="border-y border-zinc-900 bg-zinc-950/50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Szolgáltatások</p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Mit tudjon az induló verzió</h2>
              </div>
              <p className="max-w-2xl text-zinc-400">
                Induláskor a cél egy erős vizuális bemutatóoldal, amit később tovább lehet fejleszteni rendelési rendszerrel, pólótervezővel és webshop funkciókkal.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((pkg) => (
                <div key={pkg.name} className="rounded-[1.75rem] border border-yellow-500/15 bg-black p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                    <span className="rounded-full border border-yellow-500/25 px-3 py-1 text-xs text-yellow-300">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-zinc-300">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-400">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Bemutató</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Látványos, prémium első benyomás</h2>
            <p className="mt-4 text-zinc-400">
              Ide jönnek majd a kiemelt pólómodellek, mockupok, referenciák és később a forgatható 3D modellek is.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950">
                <div className="flex h-72 items-center justify-center bg-gradient-to-b from-zinc-900 to-black text-6xl transition duration-300 group-hover:scale-[1.02]">
                  👕
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Prémium pólómodell {item}</h3>
                  <p className="mt-2 text-zinc-400">Mockup / 3D preview hely fenntartva a későbbi bővítéshez.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-6 pb-20">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-yellow-500/20 bg-gradient-to-br from-zinc-950 to-black p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Kapcsolat</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Kérj ajánlatot a saját pólódhoz</h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                Egyszerű induló kapcsolatfelvételi blokk, amit később rendelési űrlappá, majd teljes webshop folyamattá alakíthatunk.
              </p>
            </div>

            <form className="grid gap-4 rounded-[1.5rem] border border-zinc-800 bg-zinc-950/80 p-6">
              <input className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-500" placeholder="Név" />
              <input className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-500" placeholder="E-mail" />
              <textarea className="min-h-32 rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-500" placeholder="Milyen pólót szeretnél?" />
              <button className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5">
                Ajánlatkérés elküldése
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Nextgen Digital Design. Minden jog fenntartva.</p>
          <p>Készítve a Next-N vizuális irányára építve.</p>
        </div>
      </footer>
    </div>
  );
}
