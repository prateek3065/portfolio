"use client";

import Paragraph from "@/app/[locale]/home/(page)/hero-section/about-me-card/card-body/client/about-me-headline/paragraph/paragraph";
import { RootState } from "@/redux/store";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const getTotalWords = (text: string) => {
  const words = text.split(" ");
  return words.length;
};

const PARAGRAPH_COUNT = 5;

const AboutMeHeadlines: React.FC = () => {
  const t = useTranslations();
  const heroCardScrollProgress = useSelector(
    (state: RootState) => state.common_slice.heroCardScrollProgress
  );

  const combinedWordDetails: {
    totalWords: number;
    breaks: Array<number>;
  } = useMemo(() => {
    const breaks: Array<number> = [];
    const combinedWords = Array.from(
      { length: PARAGRAPH_COUNT },
      (_, index) => index
    )
      .map((index) => {
        return `HOME.ABOUT_ME_CARD.INTRO.LINE${index}`;
      })
      .reduce((acc, curr) => {
        const totalWords = getTotalWords(t(curr));
        breaks.push(totalWords + acc);
        return acc + totalWords;
      }, 0);
    return {
      totalWords: combinedWords,
      breaks: breaks,
    };
  }, [t]);

  const currentParagraph: {
    paragraph: string;
    lowerProgressThreshold: number;
    upperProgressThreshold: number;
  } = useMemo(() => {
    let paragraphDetails: {
      paragraph: string;
      lowerProgressThreshold: number;
      upperProgressThreshold: number;
    } = {
      paragraph: "",
      lowerProgressThreshold: 0,
      upperProgressThreshold: 0,
    };
    const totalWords = combinedWordDetails.totalWords;
    combinedWordDetails.breaks.forEach((breakPoint, index) => {
      if (index == 0 && heroCardScrollProgress < breakPoint / totalWords) {
        paragraphDetails = {
          paragraph: t(`HOME.ABOUT_ME_CARD.INTRO.LINE${index}`),
          lowerProgressThreshold: 0,
          upperProgressThreshold: breakPoint / totalWords,
        };
      } else if (
        index == combinedWordDetails.breaks.length - 1 &&
        heroCardScrollProgress >
          combinedWordDetails.breaks[index - 1] / totalWords
      ) {
        paragraphDetails = {
          paragraph: t(`HOME.ABOUT_ME_CARD.INTRO.LINE${index}`),
          lowerProgressThreshold:
            combinedWordDetails.breaks[index - 1] / totalWords,
          upperProgressThreshold: 1,
        };
      } else if (
        heroCardScrollProgress >=
          combinedWordDetails.breaks[index - 1] / totalWords &&
        heroCardScrollProgress < breakPoint / totalWords
      ) {
        paragraphDetails = {
          paragraph: t(`HOME.ABOUT_ME_CARD.INTRO.LINE${index}`),
          lowerProgressThreshold:
            combinedWordDetails.breaks[index - 1] / totalWords,
          upperProgressThreshold: breakPoint / totalWords,
        };
      }
    });
    return paragraphDetails;
  }, [heroCardScrollProgress, combinedWordDetails, t]);

  // line1 0<=progress<13/84
  // line2 13/84<=progress<23/84
  // line3 23/84<=progress<43/84
  // line4 43/84<=progress<63/84
  // line5 63/84<=progress<84/84

  return (
    <div className="flex flex-col pt-3 gap-y-4">
      <div
        className="text-lg px-4 p-1 rounded-2xl max-w-[310px]"
        style={{ backgroundColor: "rgb(112 83 255)" }}
      >
        {t("HOME.ABOUT_ME_CARD.WELCOME_TEXT")}
      </div>
      <div className="text-3xl sm:text-5xl md:text-6xl max-w-[40rem] h-full overflow-hidden ">
        <Paragraph {...currentParagraph} />
      </div>
    </div>
  );
};

export default AboutMeHeadlines;
