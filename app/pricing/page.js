import Main from "@/app/pricing/(comp)/z-index";
import { Suspense } from "react";
import { FullPageLoading } from "@/components/page-loading";

export default function Page() {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Main />
    </Suspense>
  );
}
