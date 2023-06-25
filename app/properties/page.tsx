import EmptyState from "../components/EmptyState";
import { ClientOnly } from "../components/ClientOnly";

import { getCurrentUser } from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser()
  const listing = await getListings({
    userId: currentUser?.id,
  })

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState 
          title="Unauthorized"
          subtitle="Please login"
        />
      </ClientOnly>
    )
  }

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
          title="No properties found"
          subtitle="Looks like you have no properties registered"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <PropertiesClient
        listing={listing}
        currentUser={currentUser}    
      />
    </ClientOnly>
  )

}

export default PropertiesPage