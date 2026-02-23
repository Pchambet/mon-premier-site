import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offre site vitrine | Studio web freelance",
  description:
    "Offre de création de site vitrine clé en main pour indépendants et petites entreprises.",
};

export default function OffrePage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex max-w-4xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Offre
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Site vitrine clé en main pour petites entreprises
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            Idéal pour artisans, freelances, thérapeutes, commerces locaux ou
            toute activité qui veut être trouvée facilement en ligne avec une
            image professionnelle.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-base font-semibold">
              Ce qui est inclus dans le site
            </h2>
            <ul className="mt-2 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>• Page d’accueil claire avec votre proposition de valeur.</li>
              <li>• Page “Services” ou “Offre” détaillant vos prestations.</li>
              <li>• Page “À propos” pour vous présenter et créer la confiance.</li>
              <li>• Page “Contact” avec formulaire + lien Google Maps si besoin.</li>
              <li>• Design moderne, adapté mobile et rapide à charger.</li>
              <li>• Mise en place des bases pour le référencement (SEO simple).</li>
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 text-sm shadow-sm dark:border-emerald-900/60 dark:bg-emerald-900/20">
              <h2 className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                Investissement
              </h2>
              <p className="mt-2 text-3xl font-semibold text-emerald-900 dark:text-emerald-100">
                À partir de 800&nbsp;€
                <span className="block text-xs font-normal text-emerald-900/70 dark:text-emerald-100/80">
                  (forfait indicatif, ajusté selon votre projet)
                </span>
              </p>
              <p className="mt-2 text-xs text-emerald-900/80 dark:text-emerald-100/80">
                Possibilité de paiement en plusieurs fois et option de
                maintenance mensuelle.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-sm font-semibold">Par où commencer ?</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Expliquez en quelques lignes votre activité, vos objectifs et
                envoyez 2–3 exemples de sites que vous aimez. Nous revenons vers
                vous sous 24h avec une proposition.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@example.com?subject=Projet%20de%20site%20vitrine"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Écrire un email
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  Retour au tableau de bord
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-base font-semibold">
            Comment se déroule la collaboration&nbsp;?
          </h2>
          <ol className="mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>
              <span className="font-medium">1. Appel de découverte (30 min)</span>{" "}
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
              <span className="font-medium">5. Mise en ligne accompagnée</span>{" "}
              + explications pour que vous restiez autonome sur les petites
              modifications.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}

