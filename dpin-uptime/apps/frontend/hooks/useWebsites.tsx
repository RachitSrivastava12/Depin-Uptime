"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BACKEND_URI } from "../config";

// Define the Website interface here
interface Website {
  id: string;
  url: string;
  ticks: {
    id: string;
    status: string;
    createdAt: string;
    latency: number;
  }[];
}

export function useWebsites() {
  const { getToken } = useAuth();
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  async function refreshWebsite() {
    try {
      setLoading(true);
      const token = await getToken();
      
      const response = await axios.get(`${API_BACKEND_URI}/api/v1/websites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("API Response:", response.data);
  
      if (Array.isArray(response.data)) {
        console.log("Setting websites directly from array");
        setWebsites(response.data);
      } else if (response.data && Array.isArray(response.data.websites)) {
        console.log("Setting websites from response.data.websites");
        setWebsites(response.data.websites);
      } else {
        console.error("Unexpected API response structure:", response.data);
        setError("Unexpected data format from API");
      }
  
      setLoading(false);
      return response.data;
    } catch (error: any) {
      console.error("Error refreshing websites:", error);
  
      if (axios.isAxiosError(error)) {
        console.error("Axios Error Response:", error.response?.data);
        console.error("Axios Error Status:", error.response?.status);
        console.error("Axios Error Headers:", error.response?.headers);
      } else {
        console.error("General Error:", error);
      }
  
      setError("Failed to fetch websites");
      setLoading(false);
    }
  }
  

  useEffect(() => {
    refreshWebsite();
    const interval = setInterval(() => {
      refreshWebsite();
    }, 1000 * 60 * 1); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return { websites, refreshWebsite, loading, error };
}