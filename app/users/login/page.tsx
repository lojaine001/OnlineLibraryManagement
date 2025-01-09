export default function LoginPage() {
    return (
      <section className="container mx-auto p-8 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Login</button>
        </form>
      </section>
    );
  }
  