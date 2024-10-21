// app/not-found.tsx
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        <Link href="/" className="text-blue-500 ">Go back home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
