import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MainAi`.
 */
export type MainAiProps = SliceComponentProps<Content.MainAiSlice>;

/**
 * Component for "MainAi" Slices.
 */
const MainAi = ({ slice }: MainAiProps): JSX.Element => {
  return (
    <Bounded className="text-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
         <h1 className="text-balance text-center text-5xl font-medium">
           <PrismicText field={slice.primary.heading} />
         </h1>
        )}
        <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <ButtonLink className="mt-8" field={slice.primary.button_link} >
            {slice.primary.button_label}
        </ButtonLink>
        <div className="flex justify-center">
          <div className="glass-container mt-8 w-fit flex justify-center"> 
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
                <PrismicNextImage className="rounded-lg " field={slice.primary.image} />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default MainAi;
