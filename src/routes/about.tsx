export function About() {
  return (
    <div className="dark:bg-gray-800min-h-screen mb-4 bg-white p-4 text-gray-900 shadow-md duration-200 hover:shadow-lg sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-xl flex-col sm:min-h-[calc(100vh-3rem)]">
        <section className="mb-4 flex items-center justify-between">
          <div className="flex items-end space-x-2">
            <h1 className="font-['Inter'] text-2xl font-bold sm:text-3xl">
              Cartify
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              About section
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
