import { useEffect, useState } from "react";
import type { HeaderProps } from "./components/Header";

function extractTwelveHour(d: Date): string {
  let hours = d.getHours();
  const minutes = d.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

export default function useHeaderData(): HeaderProps {
  const [updatedDate, setUpdatedDate] = useState<string>("Loading...");
  const [updateLink, setUpdateLink] = useState<string>("#");

  useEffect(() => {
    fetch("https://api.github.com/repos/trentwiles/trentwiles.com/commits")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const dte = new Date(data[0].commit.author.date);
          setUpdatedDate(
            `${dte.getMonth() + 1}/${dte.getDate()}/${dte.getFullYear()} ${extractTwelveHour(dte)}`
          );
          setUpdateLink(data[0].html_url);
        } else {
          setUpdatedDate("Update Date Unknown");
        }
      })
      .catch(() => {
        setUpdatedDate("Update Date Unknown");
      });
  }, []);

  return {
    updated: updatedDate,
    updatedLink: updateLink,
    websiteTitle: "trentwiles.com",
    websiteUrl: "https://www.trentwiles.com",
    linkTitle: "Downloadable Resume",
    link: "https://github.com/trentwiles/resume/raw/refs/heads/main/trent_in_progress_resume.pdf",
  };
}
