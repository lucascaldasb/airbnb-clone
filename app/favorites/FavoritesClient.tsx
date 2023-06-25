'use client'

import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { SafeListing, SafeUser } from "../types"
import { ListingCard } from "../components/listings/ListingCard";

interface FavoritesClientProps {
  favorites: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  favorites,
  currentUser
}) => {

  return (
    <Container>
      <Heading 
        title="Favorites"
        subtitle="List of places you have favorited"
      />
      <div className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-col-6
        gap-8
      ">
        {favorites.map((favorites) => (
          <ListingCard 
            key={favorites.id}
            data={favorites}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}

export default FavoritesClient