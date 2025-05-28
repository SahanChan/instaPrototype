"use client";

import React, { use, useState } from "react";
import exifr from "exifr";
import * as piexif from "piexifjs";

export default function ExifRemover() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [strippedImage, setStrippedImage] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<Record<string, any> | null>(null);
  const Xdata = {
    AV1ConfigurationVersion: 1,
    ChromaFormat: "YUV 4:2:0",
    ChromaSamplePosition: "Unknown",
    ColorRepresentation: "nclx 1 13 6",
    CompatibleBrands: ["avif", "mif1", "miaf", "MA1B"],
    FileAccessDate: "2025-05-27T07:49:07+02:00",
    FileInodeChangeDate: "2025-05-27T07:49:07+02:00",
    FileModifyDate: "2025-05-27T07:49:07+02:00",
    FilePermissions: "prw-------",
    FileSize: "0 bytes",
    FileType: "AVIF",
    FileTypeExtension: "avif",
    HandlerDescription: "libavif",
    HandlerType: "Picture",
    ImageHeight: 363,
    ImagePixelDepth: "8 8 8",
    ImageSize: "640x363",
    ImageSpatialExtent: "640x363",
    ImageWidth: 640,
    MIMEType: "image/avif",
    MajorBrand: "AV1 Image File Format (.AVIF)",
    MediaDataOffset: 282,
    MediaDataSize: 10153,
    Megapixels: 0.232,
    MinorVersion: "0.0.0",
    PrimaryItemReference: 1,
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async () => {
      const base64 = reader.result as string;
      setOriginalImage(base64);

      const tags = await exifr.parse(file).catch(() => null);
      setMetadata(tags || {});

      // Remove EXIF metadata
      try {
        const stripped = piexif.remove(base64);
        setStrippedImage(stripped);
      } catch (error) {
        console.error("Error stripping EXIF:", error);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">
        EXIF Metadata Viewer & Stripper{" "}
        <span className="text-red-600">
          (Only happens in the backend, for demonstration purposes I've
          displayed it here)
        </span>
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {originalImage && (
        <div className="space-y-4">
          <div>
            <h3 className="text-md font-semibold">Original Image:</h3>
            <img
              src={originalImage}
              alt="Original"
              className="w-full rounded-lg"
            />
          </div>

          {metadata && (
            <div>
              <h3 className="text-md font-semibold">EXIF Metadata:</h3>
              <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm max-h-64">
                {JSON.stringify(Xdata, null, 2)}
              </pre>
            </div>
          )}

          {strippedImage && (
            <div>
              <h3 className="text-md font-semibold">Stripped Image:</h3>
              <img
                src={strippedImage}
                alt="Stripped"
                className="w-full rounded-lg"
              />
              <a
                href={strippedImage}
                download="stripped-image.jpg"
                className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Download Clean Image
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
