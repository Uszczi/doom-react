"use client";

import { useState, useEffect } from "react";
import { Configuration, DefaultApi } from "../../../DoomTSEngine/api-client";

export default function ListMaps() {
  const [maps, setMaps] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const api = new DefaultApi(new Configuration({ basePath: "" }));

    api
      .getApiMaps()
      .then((maps) => {
        setMaps(maps);
        setLoading(false);
        console.log(maps);
      })
      .catch((e) => setError(e));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>List of Maps</h1>
      <ul>
        {maps.map((map) => (
          <li key={map}>
            <p>{map}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
