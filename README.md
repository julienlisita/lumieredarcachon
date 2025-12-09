# 🌅 Lumière d’Arcachon  
Site personnel dédié au Bassin d’Arcachon.  
Développé avec **Next.js**, **TypeScript**, **TailwindCSS** et **Prisma**.

---

## 📸 Présentation du projet

**Lumière d’Arcachon** est un projet personnel mêlant **photographie**, **design** et **développement web moderne**.  
L’objectif est de proposer un espace élégant, minimaliste et immersif autour des paysages du Bassin d’Arcachon :  
reflets, lumières, couleurs, atmosphères, instants capturés.

Le site évoluera progressivement vers :
- une **galerie photo** organisée par lieux et ambiances,
- un **blog** autour du Bassin,
- puis, potentiellement, une **plateforme communautaire** (forum, partage de spots, récits, etc.).

Ce repo contient le code complet du site, construit sur un stack moderne et évolutive.

---

# ⚙️ Stack technique

- **Next.js 15** — App Router, SSR/SSG/ISR  
- **TypeScript** — typage strict et robuste  
- **TailwindCSS** — design system utility-first  
- **Prisma** — ORM moderne connecté à PostgreSQL  
- **ESLint + Prettier** — qualité et cohérence du code  
- **Zod** — validation des schémas côté serveur et client  

---

# 🚀 Démarrage du projet

Clonez le repo et installez les dépendances :

```bash
pnpm install
pnpm dev
```

Ou avec npm :

```bash
npm install
npm run dev
```

Accédez à l’application :  
👉 http://localhost:3000

---

# 📂 Structure du projet

```
app/               # Pages, layouts et routes (App Router)
src/
  components/      # Composants UI réutilisables
  lib/             # Fonctions utilitaires (auth, db, helpers)
  styles/          # Styles globaux (Tailwind + CSS custom)
  prisma/          # Schéma Prisma, migrations, seed
public/            # Images statiques, icônes, assets
```

---

# 🗄️ Base de données

Le projet utilise **PostgreSQL** via Prisma.

Configurez la connexion dans `.env` :

```
DATABASE_URL="postgresql://user:password@localhost:5432/lumiere_d_arcachon"
```

Initialisez les migrations :

```bash
pnpm prisma migrate dev --name init
```

Pour explorer la base :

```bash
pnpm prisma studio
```

---

# 🛠️ Scripts disponibles

- `dev` — lance le serveur Next.js  
- `build` — build pour la production  
- `start` — démarre l’app buildée  
- `lint` — exécute ESLint  
- `typecheck` — vérifie le typage TypeScript  
- `prisma migrate dev` — applique les migrations  
- `prisma studio` — interface graphique Prisma  

---

# ⚠️ À propos des warnings d’hydratation

Next.js peut afficher :

```
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties...
```

Ce message provient souvent :
- d’extensions navigateur (Grammarly, CZ shortcut, etc.),
- ou d’injections client automatiques.

➡️ Testez en navigation privée : si le warning disparaît, ce n’est pas un problème dans votre code.

---

# ☁️ Déploiement

Le déploiement recommandé se fait sur **Vercel**, plateforme officielle de Next.js :  
https://vercel.com

Déploiement simple :
- Push sur GitHub → Build automatique sur Vercel  
- Connexion du domaine `lumieredarcachon.fr` via tableau de bord Vercel  
- SSL automatique  

---

# 📜 Licence

MIT — libre d’utilisation et de modification.
