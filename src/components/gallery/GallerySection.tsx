export default function GallerySection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Nos réalisations</h2>

        {/* Grille d’images */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          {/* Plus tard : map dynamique */}
        </div>
      </div>
    </section>
  );
}
