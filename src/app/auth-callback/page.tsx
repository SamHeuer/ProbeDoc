import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

export default async function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        //  User is synced to DB
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
  });
}
