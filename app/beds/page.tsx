import { getUser } from "@/lib/actions/patient.actions";
import React from "react";

const Beds = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return <div>Beds</div>;
};

export default Beds;
