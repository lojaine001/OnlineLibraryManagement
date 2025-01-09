export default function SignUpPage() {
    return (
      <section className="container mx-auto p-8 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Sign UP</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full p-2 bg-green-600 text-white rounded">Register</button>
        </form>
      </section>
    );
  }
  