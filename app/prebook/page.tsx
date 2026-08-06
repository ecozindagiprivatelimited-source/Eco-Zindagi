import PreBookForm from "@/components/prebook-form";

export default function PreBookPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-green-800">
                        Pre-book EcoBuck
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Reserve your EcoBuck today and become one of the first households
                        and organizations to experience smarter organic waste management.
                    </p>
                </div>

                <PreBookForm />
            </div>
        </main>
    );
}