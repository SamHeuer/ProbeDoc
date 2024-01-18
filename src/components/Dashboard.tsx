import React from "react";
import UploadButton from "./UploadButton";

function Dashboard() {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-b border-gray-200 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-500">My files</h1>
        <UploadButton />
        {/* TODO : Display user files */}
      </div>
    </main>
  );
}

export default Dashboard;
