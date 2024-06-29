import { useState } from "react";

export default function useHomePageService() {
  const [first, setfirst] = useState(1);

  return { first, setfirst };
}
