"use client";

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type ParagraphProps = {
  paragraph: string;
  upperProgressThreshold: number;
  lowerProgressThreshold: number;
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const [state, setState] = useState<{
    paragraph: string;
    wordProgressDivision: Array<{
      lower: number;
      upper: number;
    }>;
  }>({
    paragraph: "",
    wordProgressDivision: [],
  });

  const heroCardScrollProgress = useSelector(
    (state: RootState) => state.common_slice.heroCardScrollProgress
  );

  const getWordProgressDivision = (
    paragraph: string,
    upperProgressThreshold: number,
    lowerProgressThreshold: number
  ) => {
    const wordLength = paragraph.split(" ").length;
    const incFactor =
      (upperProgressThreshold - lowerProgressThreshold) / wordLength;
    console.log("incFactor", incFactor);
    const progressDivision: Array<{
      lower: number;
      upper: number;
    }> = [];
    for (let i = 0; i < wordLength; i++) {
      const lower = lowerProgressThreshold + incFactor * i;
      const upper = lowerProgressThreshold + incFactor * (i + 1);
      progressDivision.push({
        lower: lower,
        upper: upper,
      });
    }
    return progressDivision;
  };

  useEffect(() => {
    const wordProgressDivision = getWordProgressDivision(
      props.paragraph,
      props.upperProgressThreshold,
      props.lowerProgressThreshold
    );
    setState({
      paragraph: props.paragraph,
      wordProgressDivision: wordProgressDivision,
    });
  }, [
    props.paragraph,
    props.lowerProgressThreshold,
    props.upperProgressThreshold,
  ]);

  useEffect(() => {
    console.log("props", props);
  }, [props]);

  return (
    <p className="flex gap-x-3 flex-wrap gap-y-3">
      {state.paragraph.length
        ? state.paragraph.split(" ").map((word, index) => {
            const progress = state.wordProgressDivision[index];
            return (
              <span
                key={index + word + progress}
                style={{
                  opacity: heroCardScrollProgress > progress.lower ? 1 : 0.3,
                }}
                className="transition-all duration-200 ease-in-out opacity-30"
              >
                {word}
              </span>
            );
          })
        : null}
    </p>
  );
};
export default Paragraph;
