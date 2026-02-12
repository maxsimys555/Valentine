export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-145 h-170 rounded-4xl bg-rose-50 animate-pulse">
        <div className="h-32" />
        <div className="px-8">
          <div className="h-10 bg-rose-100 rounded-lg mx-auto w-64" />
          <div className="mt-10 flex justify-center gap-6">
            <div className="h-14 w-30 rounded-2xl bg-rose-100" />
            <div className="h-14 w-30 rounded-2xl bg-rose-100" />
            <div className="h-14 w-30 rounded-2xl bg-rose-100" />
          </div>
          <div className="h-12 bg-rose-100 rounded-lg mx-auto mt-24 w-80" />
          <div className="mt-10 flex justify-center gap-5">
            <div className="h-15 w-50 rounded-2xl bg-rose-100" />
            <div className="h-15 w-50 rounded-2xl bg-rose-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
