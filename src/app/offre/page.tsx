import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offre site vitrine | Studio web freelance",
  description:
    "Offre de création de site vitrine clé en main pour indépendants et petites entreprises.",
};

export default function OffrePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(244,244,245,0.08),_transparent_55%)]" />
      <main className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-200 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Offre site vitrine
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Site vitrine clé en main pour petites entreprises.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
            Pensé pour artisans, freelances, thérapeutes, commerces locaux ou
            toute activité qui veut une présence en ligne claire, moderne et
            facile à mettre à jour.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm shadow-sm backdrop-blur">
            <h2 className="text-base font-semibold text-zinc-50">
              Ce qui est inclus dans le site
            </h2>
            <ul className="mt-2 space-y-2 text-zinc-300">
              <li>• Page d’accueil claire avec votre proposition de valeur.</li>
              <li>• Page “Services” ou “Offre” détaillant vos prestations.</li>
              <li>• Page “À propos” pour vous présenter et créer la confiance.</li>
              <li>• Page “Contact” avec formulaire + lien Google Maps si besoin.</li>
              <li>• Design moderne, responsive et rapide à charger.</li>
              <li>• Mise en place des bases pour le référencement (SEO simple).</li>
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm shadow-sm backdrop-blur">
              <h2 className="text-sm font-semibold text-emerald-100">
                Investissement
              </h2>
              <p className="mt-2 text-3xl font-semibold text-emerald-100">
                À partir de 800&nbsp;€
                <span className="block text-xs font-normal text-emerald-100/80">
                  (forfait indicatif, ajusté selon votre projet)
                </span>
              </p>
              <p className="mt-2 text-xs text-emerald-50/80">
                Possibilité de paiement en plusieurs fois et option de
                maintenance mensuelle.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm shadow-sm backdrop-blur">
              <h2 className="text-sm font-semibold text-zinc-50">
                Par où commencer ?
              </h2>
              <p className="mt-2 text-sm text-zinc-200">
                Expliquez en quelques lignes votre activité, vos objectifs et
                envoyez 2–3 exemples de sites que vous aimez. Nous revenons vers
                vous sous 24h avec une proposition.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@example.com?subject=Projet%20de%20site%20vitrine"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-medium text-emerald-950 shadow-sm transition hover:bg-emerald-300"
                >
                  Écrire un email
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-zinc-100 transition hover:bg-white/10"
                >
                  Retour au tableau de bord
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm shadow-sm backdrop-blur">
          <h2 className="text-base font-semibold text-zinc-50">
            Comment se déroule la collaboration&nbsp;?
          </h2>
          <ol className="mt-3 space-y-2 text-zinc-300">
            <li>
              <span className="font-medium">
                1. Appel de découverte (30 min)
              </span>{" "}
              pour comprendre votre activité, vos objectifs et votre budget.
            </li>
            <li>
              <span className="font-medium">2. Proposition de structure</span>{" "}
              (pages, sections, appels à l’action).
            </li>
            <li>
              <span className="font-medium">3. Maquettes & contenu</span>{" "}
              préparés sur base de vos textes ou en co‑rédaction.
            </li>
            <li>
              <span className="font-medium">4. Intégration et tests</span>{" "}
              sur mobile, tablette et ordinateur.
            </li>
            <li>
              <span className="font-medium">
                5. Mise en ligne accompagnée
              </span>{" "}
              + explications pour que vous restiez autonome sur les petites
              modifications.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}

