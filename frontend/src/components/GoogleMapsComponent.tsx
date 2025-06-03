import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 38.34223267926995,
  lng: -0.4919288239979653,
};

const GoogleMapsComponent: React.FC = () => {
  return (
    <section id="location">
      <div className="text-center my-8">
        <LoadScript googleMapsApiKey="AIzaSyDETZ4fHx1_LT_66NBrWisvNtopQE-wSDw">
          <div className="relative rounded-3xl overflow-hidden">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >
              <Marker position={center} />
            </GoogleMap>
            <div
              className="absolute inset-0 bg-[#3CBCE5] opacity-10 pointer-events-none"
              style={{ zIndex: 10 }}
            ></div>
          </div>
        </LoadScript>
      </div>
    </section>
  );
};

export default GoogleMapsComponent;
