export default function BlogListSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Derniers articles</h2>

        {/* Placeholder : cards d’articles */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Titre de l’article</h3>
            <p className="text-gray-600 mb-4">Petite introduction à l’article présenté ici...</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Lire l’article →
            </a>
          </div>

          {/* Duplique ou remplace par une liste dynamique plus tard */}
        </div>
      </div>
    </section>
  );
}
