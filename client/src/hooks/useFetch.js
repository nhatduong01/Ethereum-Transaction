import { useEffect, useState } from "react";

const API_KEY = "p3BtSYHcLue7IAVYzc9ILxzlz53fP4cP";

const useFetch = ({ keyword }) => {
  const [gifUrl, setgifUrl] = useState("");
  const fetchGif = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();
      setgifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setgifUrl(
        "https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif"
      );
    }
  };
  useEffect(() => {
    if (keyword) fetchGif();
  }, [keyword]);
  return gifUrl;
};
export default useFetch;
