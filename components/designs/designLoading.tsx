export default function DesignLoading() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[radial-gradient(circle_at_20%_10%,#2563eb_0%,#1e3a8a_38%,#0f172a_100%)]
        px-5 py-10
        text-white
        md:px-10
      "
    >
      <div className="mx-auto max-w-[1500px] animate-pulse space-y-7">
        <section
          className="
            rounded-[4rem]
            border border-white/15
            bg-white/10
            p-8
            shadow-2xl
            backdrop-blur-2xl
            md:p-12
          "
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_350px] lg:items-center">
            {/* Left hero content */}
            <div>
              {/* Badge */}
              <Skeleton className="h-8 w-36 rounded-full" />

              {/* Heading */}
              <Skeleton className="mt-8 h-16 w-[70%] max-w-[520px] rounded-2xl" />

              {/* Description */}
              <div className="mt-8 max-w-3xl space-y-3">
                <Skeleton className="h-5 w-full rounded-lg" />
                <Skeleton className="h-5 w-[75%] rounded-lg" />
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Skeleton className="h-14 w-40 rounded-full" />

                <Skeleton className="h-14 w-44 rounded-full" />
              </div>
            </div>

            {/* Right form preview */}
            <div
              className="
                rounded-[2.5rem]
                border border-white/10
                bg-white/10
                p-6
                backdrop-blur-xl
              "
            >
              <Skeleton className="h-4 w-32 rounded-md" />

              <Skeleton className="mt-8 h-4 w-28 rounded-md" />

              {/* Input */}
              <Skeleton className="mt-4 h-14 w-full rounded-full" />

              {/* Button */}
              <Skeleton className="mt-5 h-14 w-full rounded-full" />
            </div>
          </div>
        </section>

        {/* ================= DESIGN GUIDANCE ================= */}

        <section
          className="
            rounded-[4rem]
            border border-white/15
            bg-white/10
            p-7
            shadow-2xl
            backdrop-blur-2xl
            md:p-10
          "
        >
          {/* Top row */}
          <div className="grid gap-10 lg:grid-cols-[1fr_370px]">
            {/* Main heading */}
            <div>
              <Skeleton className="h-8 w-40 rounded-full" />

              <Skeleton className="mt-7 h-10 w-[55%] max-w-[500px] rounded-xl" />

              <div className="mt-6 max-w-4xl space-y-3">
                <Skeleton className="h-5 w-full rounded-lg" />
                <Skeleton className="h-5 w-[90%] rounded-lg" />
              </div>
            </div>

            {/* Implementation effort */}
            <div
              className="
                rounded-[2.5rem]
                border border-white/10
                bg-white/10
                p-7
                backdrop-blur-xl
              "
            >
              <Skeleton className="h-4 w-48 rounded-md" />

              <Skeleton className="mt-5 h-8 w-24 rounded-lg" />

              <div className="mt-6 space-y-3">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-[80%] rounded" />
              </div>
            </div>
          </div>

          {/* Content cards */}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <InfoCardSkeleton />

            <InfoCardSkeleton />

            <InfoCardSkeleton />

            <InfoCardSkeleton />
          </div>
        </section>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Reusable Pieces                               */
/* -------------------------------------------------------------------------- */

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`
        bg-white/15
        ${className}
      `}
    />
  );
}

function InfoCardSkeleton() {
  return (
    <div
      className="
        min-h-[180px]
        rounded-[2.5rem]
        border border-white/10
        bg-white/10
        p-7
        backdrop-blur-xl
      "
    >
      {/* Card heading */}
      <Skeleton className="h-6 w-40 rounded-lg" />

      {/* Text */}
      <div className="mt-7 space-y-4">
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-[95%] rounded" />
        <Skeleton className="h-4 w-[85%] rounded" />
      </div>
    </div>
  );
}
