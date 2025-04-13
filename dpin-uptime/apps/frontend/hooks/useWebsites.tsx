"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BACKEND_URI } from "../config";

interface Website {
  id: string;
  url: string;
  ticks: {
    id: string;
    status: string;
    createdAt: string;
    latency: number;
  };
}

export function useWebsites() {
  const { getToken } = useAuth();
  const [websites, setWebsites] = useState<Website[]>([]);

  async function refreshWebsite() {
    try {
      const auth = await getToken();
      const response = await axios.get(`${API_BACKEND_URI}/api/v1/websites`, {
        headers: {
          Authorization: auth,
        },
      });

      console.log("Websites refreshed:", response.data);
      setWebsites(response.data.websites);

      return response.data;
    } catch (error) {
      console.error("Error refreshing websites:", error);
    }
  }

  useEffect(() => {
    refreshWebsite();
    const interval = setInterval(() => {
      refreshWebsite();
    }, 1000 * 60 * 1);

    return () => clearInterval(interval);
  }, []);

  return  {websites, refreshWebsite};
}  