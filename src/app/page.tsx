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
    <div className="min-h-screen bg-zinc-50 px-4 py-8 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-[0.18em]">
              Studio web freelance
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Suivi clair de vos projets de site
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              En un coup d’œil, voyez où en est la création de votre site&nbsp;:
              contenu à rédiger, pages en cours d’intégration, éléments prêts à
              être mis en ligne.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm shadow-sm dark:border-emerald-900/60 dark:bg-emerald-900/20">
              <p className="font-medium text-emerald-900 dark:text-emerald-100">
                Prochaine étape pour vous
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Nous listons ensemble les pages clés de votre futur site (accueil,
                services, à propos, contact) puis nous suivons ici chaque étape
                jusqu’à la mise en ligne.
              </p>
            </div>
            <a
              href="/offre"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Découvrir l’offre site vitrine
            </a>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Projets
            </p>
            <p className="mt-2 text-2xl font-semibold">{stats.total}</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Sites accompagnés en parallèle
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              À faire
            </p>
            <p className="mt-2 text-2xl font-semibold">{stats.todo}</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Éléments à lancer (textes, visuels…)
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              En cours
            </p>
            <p className="mt-2 text-2xl font-semibold">{stats.inProgress}</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Sections actuellement en design/intégration
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Livré
            </p>
            <p className="mt-2 text-2xl font-semibold">{stats.done}</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Pages prêtes à être publiées
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[2fr,1.3fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold">
                  Détails du projet de votre site
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Chaque ligne correspond à une section ou une tâche importante
                  pour votre présence en ligne (page d’accueil, page services,
                  formulaire de contact, optimisation SEO de base…).
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-500">
                  Tâche
                </label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Ex: Rédiger la page d’accueil"
                  className="h-9 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-500">Client</label>
                <input
                  value={client}
                  onChange={(event) => setClient(event.target.value)}
                  placeholder="Nom de l’entreprise ou du client"
                  className="h-9 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-500">
                  Date de mise en ligne visée
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(event) => setDueDate(event.target.value)}
                  className="h-9 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleAddTask}
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Ajouter la tâche
              </button>
            </div>

            <div className="mt-6 divide-y divide-zinc-100 border-t border-zinc-100 dark:divide-zinc-800 dark:border-zinc-800">
              {tasks.map((task) => (
                <article
                  key={task.id}
                  className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{task.title}</p>
                    <p className="text-xs text-zinc-500">
                      {task.client} • À livrer pour{" "}
                      {new Date(task.dueDate).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden text-xs text-zinc-500 sm:inline">
                      Statut:
                    </span>
                    <div className="inline-flex rounded-full bg-zinc-100 p-1 text-xs dark:bg-zinc-800">
                      {(["à faire", "en cours", "terminé"] as TaskStatus[]).map(
                        (status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => updateStatus(task.id, status)}
                            className={`rounded-full px-3 py-1 transition ${
                              task.status === status
                                ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
                                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
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
                <p className="py-6 text-sm text-zinc-500">
                  Aucune section définie pour l’instant. Commence par ajouter la
                  page d’accueil, puis les pages services et contact.
                </p>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-sm font-semibold">Résumé de notre façon de travailler</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Voici comment nous gérons typiquement un projet de site vitrine ou
                de refonte pour une petite entreprise :
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-zinc-600 dark:text-zinc-400">
                <li>Analyse de votre activité, de vos offres et de vos objectifs.</li>
                <li>Proposition de structure de site (navigation, sections, appels à l’action).</li>
                <li>Maquettes et intégration responsive avec un design moderne.</li>
                <li>Optimisation technique de base (performances, SEO, formulaires…).</li>
                <li>Allers-retours jusqu’à validation puis mise en ligne accompagnée.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-5 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-sm font-semibold">Prochaine action concrète pour vous</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
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
