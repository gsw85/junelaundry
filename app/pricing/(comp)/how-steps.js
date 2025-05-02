import { ShowContent } from "@/components/common";

export default function HowSteps({
  serviceSteps,
  gridCols = "lg:grid-cols-5",
  title = "How it works",
}) {
  return (
    <div className={`max-w-7xl w-full mx-auto mb-32 bg-white px-4`}>
      <h2 className="text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight my-10 lg:text-left text-center">
        {title}
      </h2>
      <nav
        aria-label="Progress"
        className={`lg:px-0 px-4 flex items-center justify-center mt-5`}
      >
        <ol className={`grid ${gridCols} grid-cols-1 gap-2`}>
          {serviceSteps.map((step, index) => (
            <li
              key={step.name}
              className={`flex lg:flex-col flex-row min-h-32 lg:min-h-0`}
            >
              <div
                className={`shrink-0 flex items-center lg:flex-row flex-col h-full lg:h-auto`}
              >
                <div className={`rounded-full p-4 bg-gray-100`}>
                  <step.icon className={`size-5 text-gray-700 `} />
                </div>
                <ShowContent showContent={index < serviceSteps.length - 1}>
                  <div
                    className={`flex-grow border border-transparent border-r-gray-200 lg:border-t-gray-200  `}
                  />
                </ShowContent>
              </div>
              <div className={`lg:px-2 lg:py-4 py-1 px-4`}>
                <h3 className={`text-xl font-bold text-black`}>{step.name}</h3>
                <div className={`mt-2 text-gray-500 max-w-md`}>
                  {step.detail}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
