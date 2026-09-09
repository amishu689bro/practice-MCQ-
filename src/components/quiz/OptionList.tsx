import type { OptionKey, QuizQuestion } from "@/data/types";

interface OptionListProps {
  question: QuizQuestion;
  selected?: OptionKey;
  submitted: boolean;
  onSelect: (key: OptionKey) => void;
}

/**
 * Renders A–D answer options as selectable buttons.
 *
 * Before submission the currently selected option is highlighted.
 * After submission options are locked and color-coded:
 * green for the correct option and red for a wrong selection.
 */
export default function OptionList({
  question,
  selected,
  submitted,
  onSelect,
}: OptionListProps) {
  return (
    <ul className="space-y-3" aria-label="Answer options">
      {question.options.map((option) => {
        const isSelected = selected === option.key;
        const isCorrect = option.key === question.correct;

        let classes =
          "border-zinc-300 bg-white hover:border-indigo-400 hover:bg-indigo-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-indigo-400 dark:hover:bg-indigo-950";
        let badge = "text-zinc-500 dark:text-zinc-400";
        let trailing = null;

        if (submitted) {
          if (isCorrect) {
            classes =
              "border-emerald-500 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-900";
            badge = "text-emerald-700 dark:text-emerald-300";
            trailing = "✓";
          } else if (isSelected) {
            classes =
              "border-rose-500 bg-rose-50 dark:border-rose-500 dark:bg-rose-900";
            badge = "text-rose-600 dark:text-rose-300";
            trailing = "✗";
          } else {
            classes =
              "border-zinc-200 bg-zinc-50 opacity-60 dark:border-zinc-800 dark:bg-zinc-800";
            badge = "text-zinc-400 dark:text-zinc-500";
          }
        } else if (isSelected) {
          classes =
            "border-indigo-500 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950";
          badge = "text-indigo-700 dark:text-indigo-300";
        }

        return (
          <li key={option.key} className="w-full">
            <button
              type="button"
              disabled={submitted}
              onClick={() => onSelect(option.key)}
              aria-pressed={isSelected}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-base font-medium transition ${classes}`}
            >
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current text-sm font-bold ${badge}`}
              >
                {option.key}
              </span>
              <span className="flex-1 text-zinc-800 dark:text-zinc-100">
                {option.text}
              </span>
              <span
                aria-hidden="true"
                className={`text-lg font-bold ${isCorrect && submitted ? "text-emerald-600 dark:text-emerald-400" : isSelected && submitted ? "text-rose-500 dark:text-rose-400" : "text-transparent"}`}
              >
                {trailing ?? "⋅"}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}