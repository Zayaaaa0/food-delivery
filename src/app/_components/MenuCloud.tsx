"use client";
import { useState, useEffect } from "react";

export default function MenuCloud() {
  const defaultImageUrl =
    "https://res.cloudinary.com/dakwzoavm/image/upload/v1740019489/hq0tqad7uc1s1obngx7q.png";
  const PRESET_NAME = "food-app";
  const CLOUDINARY_NAME = "dakwzoavm";

  const [imageUrl, setImageUrl] = useState<string | null>(defaultImageUrl);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please enter a photo");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploud_freset", PRESET_NAME);
    formData.append("api_key", CLOUDINARY_NAME);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setLoading(false);

    if (data.secure_url) {
      setImageUrl(data.secure_url);
    }
  };

  return (
    <div>
      <div>
        <img
          src={imageUrl || defaultImageUrl}
          alt=""
          className="w-screen h-[570px]  "
        />
      </div>
      <button onClick={handleUpload} disabled={loading}></button>
    </div>
  );
}
