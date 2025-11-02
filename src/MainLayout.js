export function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
