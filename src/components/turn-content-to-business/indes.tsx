import { getVimeoLongFormatVideo, VimeoResponse } from "@/lib/vimeo";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Fancybox from "../global/fancybox";

export default async function TurnContentToBusiness() {
  const longFormatVideoresponse = (await getVimeoLongFormatVideo({
    per_page: 8,
  })) as VimeoResponse;

  const filterLongVideoData = longFormatVideoresponse.data?.map((long) => {
    return {
      id: long?.video?.pictures?.base_link,
      name: long?.video?.name,
      thumbnail: long?.video?.pictures?.base_link,
      video: long?.video?.link,
    };
  });

  return (
    <section className="section_wrapper bg-gradient-to-t from-black via-[#011f1f] to-[#001a1a] text-white">
      <div className="">
        <h2 className="heading_1">Turn your content into a business</h2>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="mb-4">
          We help businesses to build a platform to showcase their work. We
          create your videos tailored to your content and audience. With crisp,
          engaging and addictive visuals our team knows how to create a
          compelling narrative of your content videos.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Our Portfolio
        </h3>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
              Thumbs: false,
            },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {filterLongVideoData?.map((long) => (
              <div key={long?.id} className="w-full h-full">
                <a
                  href={long?.video}
                  data-fancybox="longformat"
                  className="w-full h-full"
                >
                  <button
                    className={`w-full h-full relative overflow-hidden rounded-2xl  border-0`}
                  >
                    <Image
                      src={long?.thumbnail}
                      alt={long?.name}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                      <div
                        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform hover:scale-110"
                        aria-hidden="true"
                      >
                        <Play className="h-6 w-6" />
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </Fancybox>
        <br />
        <div className="flex justify-center mt-8">
          <Link href={"/portfolio"}>
            <Button className="btn_primary">View Our Work</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
