import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage =async () => {
    const profile = await initialProfile();

    const Server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id,
                },
            },
        }
    });

    if (Server){
     return redirect('/servers/${server.id}');
    
}

return <InitialModal/>;


}

export default SetupPage;