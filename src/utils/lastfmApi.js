export const fetchAlbumData = async (albumsWithArtists) => {
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY; // Your Last.fm API key
    const baseUrl = 'https://ws.audioscrobbler.com/2.0/';
  
    const albumPromises = albumsWithArtists.map(({ albumName, artistName }) => {
      const url = `${baseUrl}?method=album.search&album=${albumName}&artist=${artistName}&api_key=${apiKey}&format=json`;
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Get the album results
          const albums = data.results.albummatches.album;
          
          // Try to find an exact match first
          const exactMatch = albums.find(album => album.name.toLowerCase() === albumName.toLowerCase() && album.artist.toLowerCase() === artistName.toLowerCase());
          
          // If no exact match, fallback to the first result (or you can refine this logic further)
          const selectedAlbum = exactMatch || albums[0];
  
          return {
            name: selectedAlbum.name,
            artist: selectedAlbum.artist,
            imageUrl: selectedAlbum.image[2]['#text'], // Get large image size
          };
        })
        .catch((err) => console.error('Error fetching album data:', err));
    });
  
    return Promise.all(albumPromises);
};