import EmptyState from "../components/EmptyState";
import { ClientOnly } from "../components/ClientOnly";

import { getCurrentUser } from "../actions/getCurrentUser";
import getFavoriteListing from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser()
  const favorites = await getFavoriteListing()

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

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
          title="No favorites found"
          subtitle="Looks like you have no favorites listing"
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoritesClient
        favorites={favorites}
        currentUser={currentUser}    
      />
    </ClientOnly>
  )

}

export default FavoritesPage