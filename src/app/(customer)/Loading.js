import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-gray-700" />
        <p className="text-gray-600 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
