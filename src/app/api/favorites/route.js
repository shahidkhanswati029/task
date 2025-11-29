let favoriteList = [];

export async function POST(req) {
  const { productId } = await req.json();
  if (!favoriteList.includes(productId)) {
    favoriteList.push(productId);
  }

  return Response.json({ message: "Added to favorites", favorites: favoriteList });
}

export async function DELETE(req) {
  const { productId } = await req.json();
  favoriteList = favoriteList.filter((id) => id !== productId);

  return Response.json({ message: "Removed from favorites", favorites: favoriteList });
}
