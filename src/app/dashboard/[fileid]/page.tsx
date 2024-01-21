import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { redirect } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    fileid: string;
  };
}

async function page({ params }: PageProps) {
  const { fileid } = params;

  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect(`auth-callback?origin=dashboard/${fileid}`);
  }

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });

  return <div></div>;
}

export default page;
