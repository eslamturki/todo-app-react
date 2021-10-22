import React, { useEffect, useState } from "react";

function useRandomQuote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const fetchQuote = async () =>
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          console.log(data[Math.floor(Math.random() * data.length)]);
          setQuote(data[Math.floor(Math.random() * data.length)]);
        });
    fetchQuote();
  }, []);

  return quote;
}

export default useRandomQuote;
