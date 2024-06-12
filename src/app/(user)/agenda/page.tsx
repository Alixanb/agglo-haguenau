"use client";

import { Spinner } from "@/components/core/Loader";
import { Main } from "@/components/layout";
import { H1 } from "@/components/typos";
import { EventsSchema, EventsType } from "@/lib/types";
import { useEffect, useState } from "react";
import { z } from "zod";
import CalendarSection from "./CalendarSection";

const RootPage = () => {
  const [eventsData, setEventsData] = useState<EventsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAPIEvents = async () => {
    let storageEvents = sessionStorage.getItem("events");

    if (storageEvents) {
      const parsedEvents = JSON.parse(storageEvents);
      try {
        EventsSchema.parse(parsedEvents);

        setEventsData(parsedEvents);
        setLoading(false);

        return parsedEvents;
      } catch (e) {
        if (e instanceof z.ZodError) {
          console.error("Invalid data in sessionStorage:", e.errors);
        } else {
          console.error("Unexpected error:", e);
        }
      }
    }

    try {
      // Alors storage "events" et null
      const fetchedEvents = await fetch("/api/lei")
        .then((res) => res.json())
        .then((data) => {
          EventsSchema.parse(data);
          sessionStorage.setItem("events", JSON.stringify(data));
          console.log(data);
          return data;
        });

      setEventsData(fetchedEvents);
      setLoading(false);

      return fetchedEvents;
    } catch (e) {
      if (e instanceof z.ZodError) {
        console.error("Invalid fetched data:", e.errors);
      } else {
        console.error("Failed to fetch or validate events data:", e);
      }
      throw new Error("Impossibe de récuperer des données sous forme valide: ");
    }
  };

  useEffect(() => {
    fetchAPIEvents();
  }, []);

  if (loading) {
    return (
      <Main active="agenda">
        <H1>Agenda des évènement</H1>
        <Spinner className="my-32" />
      </Main>
    );
  }

  if (!eventsData) {
    throw new Error(
      "Les données events ne sont pas définies après le pull de la db"
    );
  }

  return (
    <Main active="agenda">
      <H1>Agenda des évènement</H1>
      <CalendarSection event={eventsData} />
    </Main>
  );
};

export default RootPage;
