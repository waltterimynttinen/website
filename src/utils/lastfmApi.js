const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

const fetchAlbum = async ({ albumName, artistName }) => {
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
  const params = new URLSearchParams({
    method: 'album.search',
    album: albumName,
    artist: artistName,
    api_key: apiKey,
    format: 'json',
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const albums = data?.results?.albummatches?.album;

    // Last.fm returns an empty array when nothing matches.
    if (!Array.isArray(albums) || albums.length === 0) {
      console.warn(`No album match: ${albumName} — ${artistName}`);
      return null;
    }

    const exactMatch = albums.find(
      (album) =>
        album.name.toLowerCase() === albumName.toLowerCase() &&
        album.artist.toLowerCase() === artistName.toLowerCase()
    );
    const selectedAlbum = exactMatch || albums[0];

    // image[2] is the "large" size; it can be an empty string.
    const imageUrl = selectedAlbum.image?.[2]?.['#text'];
    if (!imageUrl) {
      console.warn(`No cover art: ${selectedAlbum.name} — ${selectedAlbum.artist}`);
      return null;
    }

    return {
      name: selectedAlbum.name,
      artist: selectedAlbum.artist,
      imageUrl,
    };
  } catch (err) {
    console.error(`Error fetching album: ${albumName} — ${artistName}`, err);
    return null;
  }
};

export const fetchAlbumData = async (albumsWithArtists) => {
  const results = await Promise.all(albumsWithArtists.map(fetchAlbum));
  return results.filter(Boolean);
};
