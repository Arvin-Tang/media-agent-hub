interface Props {
  text: string;
}

export function NarrationCaption({ text }: Props) {
  if (!text.trim()) return null;
  return (
    <div className="narration-caption" aria-live="polite">
      {text}
    </div>
  );
}
