import { useRouter } from "next/navigation";

export default function NavLeftSection({ close }) {
  const router = useRouter();

  return (
    <div className="shrink-0">
      <button
        onClick={async () => {
          await router.push("/");
          close?.(); // close the menu if available
        }}
      >
        <img
          alt="June Laundry"
          src="/logo-white.svg"
          className="h-7 w-auto cursor-pointer"
        />
      </button>
    </div>
  );
}
