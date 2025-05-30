export function PageLoading({ bgColor = "bg-transparent", selection = 1 }) {
  function loadLoader(selection = 1) {
    switch (selection) {
      case 1:
        return <div className="progress_loader" />;
      case 2:
        return (
          <>
            <div className="preloading_ring absolute" />
            <span className="preloading_span">loading...</span>
          </>
        );
      default:
        return <div className="css_loaders_loader" />;
    }
  }

  return (
    <div
      className={`-mt-32 flex h-screen w-full items-center justify-center ${bgColor}`}
    >
      {loadLoader(selection)}
    </div>
  );
}

export function LoadingSmall({
  color = "text-black",
  margin = "mr-3",
  size = 5,
}) {
  return (
    <div>
      <svg
        className={`${margin} size-${size} animate-spin ${color}`}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="stroke-1 opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function FullPageLoading({ bgColor, selection = 1 }) {
  return (
    <div className="relative w-full flex justify-center items-center section-below-navbar-account-fix">
      <div className="mb-[calc(100vh/3)]">
        <PageLoading bgColor={bgColor} selection={selection} />
      </div>
    </div>
  );
}
