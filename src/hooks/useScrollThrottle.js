import React, { useEffect, useState, useRef } from "react";

function pp() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const lastCall = useRef(0);

  // Fake API call
  const fetchData = async (pageNum) => {
    setLoading(true);
    // simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1 + (pageNum - 1) * 10}`);
    setItems((prev) => [...prev, ...newItems]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Throttled scroll handler
  const handleScroll = () => {
    const now = Date.now();
    if (now - lastCall.current < 300) return; // throttle: 300ms
    lastCall.current = now;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      // near bottom
      if (!loading) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Infinite Scroll with Throttle</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {loading && <div style={{ textAlign: "center" }}>🔄 Loading more...</div>}
    </div>
  );
}

export default pp;