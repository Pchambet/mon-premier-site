"use client";

import { useMemo, useState } from "react";

type TaskStatus = "à faire" | "en cours" | "terminé";

type Task = {
  id: number;
  title: string;
  client: string;
  dueDate: string;
  status: TaskStatus;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Page d’accueil pour consultant",
    client: "Client démo",
    dueDate: "2026-03-01",
    status: "en cours",
  },
  {
    id: 2,
    title: "Landing page offre SEO",
    client: "Client démo",
    dueDate: "2026-03-10",
    status: "à faire",
  },
  {
    id: 3,
    title: "Refonte formulaire de contact",
    client: "Client démo",
    dueDate: "2026-02-28",
    status: "terminé",
  },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [title, setTitle] = useState<string>("");
  const [client, setClient] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const stats = useMemo(
    () => ({
      total: tasks.length,
      todo: tasks.filter((t) => t.status === "à faire").length,
      inProgress: tasks.filter((t) => t.status === "en cours").length,
      done: tasks.filter((t) => t.status === "terminé").length,
    }),
    [tasks],
  );

  const handleAddTask = () => {
    if (!title.trim()) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      client: client.trim() || "Client interne",
      dueDate: dueDate || new Date().toISOString().slice(0, 10),
      status: "à faire",
    };

    setTasks((current) => [newTask, ...current]);
    setTitle("");
    setClient("");
    setDueDate("");
  };

  const updateStatus = (id: number, status: TaskStatus) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status,
            }
          : task,
      ),
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(244,244,245,0.08),_transparent_55%)]" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-200 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Studio web freelance
            </div>
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Un suivi clair pour chaque site que vous créez.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Centralisez l’avancement de vos projets clients&nbsp;: sections à
              rédiger, pages en design, éléments prêts à mettre en ligne. Un
              tableau pensé pour les freelances et petites agences web.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm shadow-sm backdrop-blur">
              <p className="font-medium text-emerald-200">
                Prochaine étape pour vous
              </p>
              <p className="text-xs text-emerald-50/80">
                Nous listons ensemble les pages clés de votre futur site (accueil,
                services, à propos, contact) puis nous suivons ici chaque étape
                jusqu’à la mise en ligne.
              </p>
            </div>
            <a
              href="/offre"
              className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-200"
            >
              Découvrir l’offre site vitrine
            </a>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              Projets
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {stats.total}
            </p>
            <p className="text-xs text-zinc-300">
              Sites accompagnés en parallèle
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              À faire
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {stats.todo}
            </p>
            <p className="text-xs text-zinc-300">
              Éléments à lancer (textes, visuels…)
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              En cours
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {stats.inProgress}
            </p>
            <p className="text-xs text-zinc-300">
              Sections actuellement en design/intégration
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              Livré
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {stats.done}
            </p>
            <p className="text-xs text-zinc-300">
              Pages prêtes à être publiées
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[2fr,1.3fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold">
                  Détails du projet de votre site
                </h2>
                <p className="text-sm text-zinc-200">
                  Chaque ligne correspond à une section ou une tâche importante
                  pour votre présence en ligne (page d’accueil, page services,
                  formulaire de contact, optimisation SEO de base…).
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">
                  Tâche
                </label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Ex: Rédiger la page d’accueil"
                  className="h-9 w-full rounded-xl border border-white/15 bg-zinc-900/60 px-3 text-sm text-zinc-50 outline-none ring-0 transition focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">Client</label>
                <input
                  value={client}
                  onChange={(event) => setClient(event.target.value)}
                  placeholder="Nom de l’entreprise ou du client"
                  className="h-9 w-full rounded-xl border border-white/15 bg-zinc-900/60 px-3 text-sm text-zinc-50 outline-none ring-0 transition focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300">
                  Date de mise en ligne visée
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(event) => setDueDate(event.target.value)}
                  className="h-9 w-full rounded-xl border border-white/15 bg-zinc-900/60 px-3 text-sm text-zinc-50 outline-none ring-0 transition focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/40"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleAddTask}
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-medium text-emerald-950 shadow-sm transition hover:bg-emerald-300"
              >
                Ajouter la tâche
              </button>
            </div>

            <div className="mt-6 divide-y divide-white/5 border-t border-white/5">
              {tasks.map((task) => (
                <article
                  key={task.id}
                  className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-50">{task.title}</p>
                    <p className="text-xs text-zinc-400">
                      {task.client} • À livrer pour{" "}
                      {new Date(task.dueDate).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden text-xs text-zinc-400 sm:inline">
                      Statut:
                    </span>
                    <div className="inline-flex rounded-full bg-zinc-800 p-1 text-xs">
                      {(["à faire", "en cours", "terminé"] as TaskStatus[]).map(
                        (status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => updateStatus(task.id, status)}
                            className={`rounded-full px-3 py-1 transition ${
                              task.status === status
                                ? "bg-emerald-400 text-emerald-950"
                                : "text-zinc-300 hover:text-zinc-50"
                            }`}
                          >
                            {status}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                </article>
              ))}

              {tasks.length === 0 && (
                <p className="py-6 text-sm text-zinc-300">
                  Aucune section définie pour l’instant. Commence par ajouter la
                  page d’accueil, puis les pages services et contact.
                </p>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
              <h2 className="text-sm font-semibold">Résumé de notre façon de travailler</h2>
              <p className="mt-2 text-sm text-zinc-200">
                Voici comment nous gérons typiquement un projet de site vitrine ou
                de refonte pour une petite entreprise :
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-zinc-300">
                <li>Analyse de votre activité, de vos offres et de vos objectifs.</li>
                <li>Proposition de structure de site (navigation, sections, appels à l’action).</li>
                <li>Maquettes et intégration responsive avec un design moderne.</li>
                <li>Optimisation technique de base (performances, SEO, formulaires…).</li>
                <li>Allers-retours jusqu’à validation puis mise en ligne accompagnée.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm shadow-sm backdrop-blur">
              <h2 className="text-sm font-semibold">Prochaine action concrète pour vous</h2>
              <p className="mt-2 text-sm text-zinc-200">
                Si vous le souhaitez, nous pouvons utiliser ce tableau dès
                maintenant pour cadrer votre projet&nbsp;: nous listons les pages,
                les contenus attendus et une date cible réaliste pour la mise en
                ligne.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
