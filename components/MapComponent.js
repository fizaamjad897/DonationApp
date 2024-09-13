// components/MapComponent.js
import { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Box, Typography, TextField } from '@mui/material';

const libraries = ["places"];

export default function MapComponent({ onLocationSelect }) {
  const [location, setLocation] = useState(null);
  const [locationString, setLocationString] = useState('');
  const [error, setError] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAMphQyW-KxvajY9i4MMooBPBnLZemcj98', // Replace with your API key
    libraries,
  });

  const handleMapClick = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setLocation({ lat, lng });
    setLocationString(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
    onLocationSelect({ lat, lng });
  };

  if (loadError) {
    setError("Failed to load Google Maps");
  }

  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          center={{ lat: 0, lng: 0 }}
          zoom={2}
          onClick={handleMapClick}
        >
          {location && <Marker position={location} />}
        </GoogleMap>
      ) : (
        <Typography>Loading Map...</Typography>
      )}
      <Box sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: 'white', padding: 2, borderRadius: 1 }}>
        <Typography variant="h6">Selected Location:</Typography>
        <TextField
          value={locationString}
          variant="outlined"
          fullWidth
          InputProps={{ readOnly: true }}
        />
      </Box>
    </Box>
  );
}
