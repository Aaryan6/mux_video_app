import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gray-700 p-4 grid">
        MUX
        <MuxPlayer
          playbackId="gT400QaLbyGkoUTmkxV5zWO5eKokbehry3jDDdgkumeM"
          className="w-[40rem] h-[20rem]"
        />
      </div>
      <div className="bg-gray-700 p-4 mt-3">
        Video Tag
        <video
          src="https://oukdqujzonxvqhiefdsv.supabase.co/storage/v1/object/public/course-videos/Generative AI Crash Course - Cohort IV (Week 1)/intro-1716734810389"
          controls
          width={500}
          height={500}
          className="w-[40rem] h-[20rem]"
        />
      </div>
    </main>
  );
}
